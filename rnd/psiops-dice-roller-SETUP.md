# PSIOPS Roller — setup

One HTML file, no build step, no server process to run. Shared state lives in a free
Supabase project; the page talks to it directly from the browser.

## Two versions

There are two interchangeable HTML files. They share the same Supabase backend, the
same room system, and the same log — a player on one can roll in the same room as a
player on the other, and everything syncs normally. Pick per-device, or just deploy
both and let people choose:

- **`psiops-dice-roller.html`** — the full version, with tumbling 3D physics dice on the
  roller's own screen.
- **`psiops-dice-roller-lite.html`** — no 3D dice at all. Rolls resolve instantly to a
  number. Lighter to load and run, so it's the one to reach for on older phones where
  the 3D version feels sluggish. Its browser-tab title says "PSIOPS Roller (lite)" so you
  can tell the two apart when both are deployed.

All the setup below applies to both files identically — same SQL, same credentials,
same deployment. Fill the credentials into whichever file(s) you deploy.

## 1. Create a Supabase project

Go to https://supabase.com, sign up free, create a new project. Free tier is more
than enough for a home game (500MB database, unlimited API requests on a fair-use basis).

## 2. Create the table

In the Supabase dashboard, open **SQL Editor** and run:

```sql
create table rolls (
  id bigint generated always as identity primary key,
  room text not null,
  player text not null,
  dice int[] not null,
  dropped int,
  modifier int not null default 0,
  total int not null,
  mode text not null,
  band text not null,
  created_at timestamptz not null default now()
);

alter table rolls enable row level security;

create policy "anyone can read rolls"
  on rolls for select
  to anon
  using (true);

create policy "anyone can insert rolls"
  on rolls for insert
  to anon
  with check (true);

create policy "anyone can delete rolls"
  on rolls for delete
  to anon
  using (true);
```

If you already set the table up before the "Clear log" button existed, just run the
new delete policy on its own — the `create table` and other two policies will error
as already existing if you re-run the whole block:

```sql
create policy "anyone can delete rolls"
  on rolls for delete
  to anon
  using (true);
```

**Note on the policies above:** this makes the `rolls` table world-readable,
world-writable, and world-deletable by anyone holding the anon/publishable key. That
key ships in the page's JavaScript source regardless of what you do, so this isn't a
special weakness you're introducing — it's just worth knowing there's no real access
control here. Anyone who guesses or is given a room name could read, post, or clear
rolls in it — including the "Clear log" button, which wipes the whole room for
everyone with no per-player restriction. Fine for a private home-game tool; not fine
if you ever want this to hold anything sensitive.

## 3. Turn on Realtime for the table

Dashboard → **Database** → **Replication** → find the `rolls` table → toggle it on
for the `supabase_realtime` publication.

(Equivalent SQL if you prefer: `alter publication supabase_realtime add table rolls;`)

## 4. Get your API credentials

Dashboard → **Settings** → **API**. Copy:
- **Project URL**
- **Publishable key** (Supabase's current name for the client-safe key — not the
  **Secret key**, which must never appear in client-side code)

Open the HTML file (both files, if deploying both), find these two lines near the top
of the `<script>` block, and paste your values in:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

## 5. Deploy the file

Any static host works. A couple of options that fit a repo-based workflow:

- **GitHub Pages** — put `psiops-dice-roller.html` in a repo, enable Pages in repo
  settings, done.
- **Netlify / Vercel** — drag-and-drop the file (or connect the repo) for a free
  deployment with instant updates on push.

## 6. Share a room

Whoever's rolling opens:

```
https://yourdomain.com/psiops-dice-roller.html?room=psiops
```

Everyone using the same `?room=` value sees the same live roll log. Different room
names are fully isolated from each other, so you can reuse the same deployment for
different games or sessions — just change the query string.

## 3D dice (full version only, local-only)

`psiops-dice-roller.html` tumbles 3D dice on your own screen when you roll, using
[`dice-box-threejs`](https://github.com/3d-dice/dice-box-threejs), loaded from a public
CDN. There's nothing to configure — no new Supabase setup, no new keys, no asset files.

How it works — and why the dice always match the log:

- **The numbers come first.** Each roll's values are generated in plain JavaScript
  before any animation, and those values are what gets written to the shared log. The
  3D dice are then animated with a *predetermined outcome* — the library tumbles them
  so they land on exactly the values already decided. The animation physically cannot
  disagree with the log. (An earlier build used a physics-first library whose rendered
  faces could drift from its reported values; this architecture replaces it.)
- **It's local-only, by design.** The animation only plays on the device that rolled.
  Everyone else just sees the number appear in the shared log.
- **Graceful fallback.** If the CDN is unreachable or the device can't run WebGL, rolls
  simply happen without animation. The roll itself never depends on the 3D layer.
- **Dice size** is the `baseScale` line in the DiceBox config block (default 100;
  the file ships at 90). Raise or lower to taste — size no longer has any bearing on
  roll correctness, so tune it freely.
- **Mobile weight.** Still meaningfully heavier than the rest of the page (WebGL +
  a physics engine). The lite version remains the right call for older phones.

## Notes on the mechanics

Four dice options, selectable above the roll type:

- **2d6** (default) — the PbtA move roll: 2d6 + modifier, with result bands
  (6 or under = Fail, 7–9 = Partial, 10+ = Success). Advantage/disadvantage
  rolls 3d6 and keeps the highest/lowest two.
- **d6** — a single d6 + modifier, no result bands. Advantage/disadvantage
  rolls two and keeps the highest/lowest one.
- **d3** — as d6, but 1–3. (In the full version, d3 rolls skip the 3D
  animation, since no physical d3 die model exists.)
- **d66** — a table lookup: two d6 read as tens and ones (11–66). Modifier and
  advantage/disadvantage don't apply and are grayed out while d66 is selected.

The **Reset** button next to Roll returns the modifier to 0, roll type to
Normal, and dice to 2d6. It doesn't touch the callsign or the log.

All of this lives in plain JavaScript in the file (the roll handler,
`resolveRoll`/`performRoll`, and `computeBand`), so it's easy to retune if your
house rules use different thresholds or a different modifier range.
