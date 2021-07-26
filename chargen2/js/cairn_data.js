﻿gen_data['character'] = [
  'You are <i> {name}</i>, formerly {background}.<br>You have {physique} physique, {skin} skin, {hair} hair, and {face} face.<br>You speak in a {speech} manner and wear {clothing} clothing.<br>You are {vice} yet {virtue}, and are generally regarded as {reputation}. <br>You have had the misfortune of being {misfortune}.'
]

gen_data['name'] = [
  'Aerg'
, 'Agn,'
, 'Arvant'
, 'Belsum'
, 'Belum'
, 'Brint'
, 'Börda'
, 'Daeru'
, 'Eldar'
, 'Felban'
, 'Gotven'
, 'Graft'
, 'Grin'
, 'Grittr'
, 'Haerü'
, 'Hargha'
, 'Harmug'
, 'Jotna'
, 'Karg'
, 'Karva'
, 'Katla'
, 'Keftar'
, 'Klort'
, 'Kratar'
, 'Kutz'
, 'Kvetin'
, 'Lygan'
, 'Margar'
, 'Merkari'
, 'Nagl'
, 'Niduk'
, 'Nifehl'
, 'Prügl'
, 'Qillnach'
, 'Risten'
, 'Svind'
, 'Theras'
, 'Therg'
, 'Torvul'
, 'Törn'
, 'Urm'
, 'Urvarg'
, 'Vagal'
, 'Vatan'
, 'Von'
, 'Vrakh'
, 'Vresi'
, 'Wemut'
]

gen_data['background'] = [
  'an alchemist'
, 'a a beggar-prince'
, 'a blackmailer'
, 'a bounty-hunter'
, 'a chimney sweep'
, 'a coin-clipper'
, 'a contortionist'
, 'a counterfeiter'
, 'a cultist'
, 'a cutpurse'
, 'a debt-collector'
, 'a deserter'
, 'a fence'
, 'a fortuneteller'
, 'a galley slave'
, 'a gambler'
, 'a gravedigger'
, 'a headsman'
, 'a hedge knight'
, 'a highwayman'
, 'a housebreaker'
, 'a kidnapper'
, 'a mad prophet'
, 'a mountebank'
, 'a peddler'
, 'a pit-fighter'
, 'a poisoner'
, 'a rat-catcher'
, 'a scrivener'
, 'a sellsword'
, 'a slave'
, 'a smuggler'
, 'a street performer'
, 'a tattooist'
, 'an urchin'
, 'an usurer'

]

gen_data['physique'] = [
   'an athletic'
,  'a brawny'
,  'a flabby'
,  'a lanky'
,  'a rugged'
,  'a scrawny'
,  'a short'
,  'a statuesque'
,  'a stout'
,  'a towering'
]

gen_data['skin'] = [
   'a birthmark on your'
,  'dark'
,  'oily'
,  'pale'
,  'pockmarked'
,  'rosy'
,  'soft'
,  'tanned'
,  'tattooed'
,  'weathered'
]

gen_data['hair'] = [
   'bald'
,  'braided'
,  'curly'
,  'filthy'
,  'frizzy'
,  'long'
,  'luxurious'
,  'oily'
,  'wavy'
,  'wispy'
]

gen_data['face'] = [
   'a bony'
,  'a broken'
,  'a chiseled'
,  'an elongated'
,  'a rat-like'
,  'a round'
,  'a sharp'
,  'a soft'
,  'a square'
,  'a sunken'
]

gen_data['speech'] = [
   'blunt'
,  'booming'
,  'cryptic'
,  'droning'
,  'formal'
,  'gravelly'
,  'precise'
,  'squeaky'
,  'stuttering'
,  'whispery'
]

gen_data['clothing'] = [
   'antique'
,  'bloody'
,  'elegant'
,  'filthy'
,  'foreign'
,  'frayed'
,  'frumpy'
,  'livery'
,  'rancid'
,  'soiled'
]

gen_data['virtue'] = [
   'ambitious'
,  'cautious'
,  'courageous'
,  'disciplined'
,  'gregarious'
,  'honorable'
,  'humble'
,  'merciful'
,  'serene'
,  'tolerant'
]

gen_data['vice'] = [
   'aggressive'
,  'bitter'
,  'craven'
,  'deceitful'
,  'greedy'
,  'lazy'
,  'nervous'
,  'rude'
,  'vain'
,  'vengeful'

]

gen_data['reputation'] = [
   'ambitious'
,  'a boor'
,  'dangerous'
,  'an entertainer'
,  'honest'
,  'a loafer'
,  'an oddball'
,  'repulsive'
,  'respected'
,  'wise'
]

gen_data['misfortune'] = [
  'abandoned'
,  'addicted'
,  'blackmailed'
,  'condemned'
,  'cursed'
,  'defrauded'
,  'demoted'
,  'discredited'
,  'disowned'
,  'exiled'
]

gen_data['equipment'] = [
  'armor: {armor}<br>Helmet/Shield: {helmet}<br>Weapons: {weapons}<br>Items: {tool,gear,trinket}<br>Bonus item: {bonus}'
]

gen_data['armor'] = {
  '1-3': 'No upper body protection',
  '4-14': 'Padded armour',
  '15-19': 'Leather armour',
  '20': 'Chainmail armour'
}

gen_data['helmet'] = {
  '1-13': '',
  '14-16': ', helmet',
  '17-19': ', shield',
  '20': ', helmet, and shield'
}

gen_data['weapons'] = {
'1-10':'{wgroup1}',
'11-14':'{wgroup2}',
'15-19':'{wgroup3}',
'20':'{wgroup4}'
}

gen_data['wgroup1'] = ['Dagger', 'Spear', 'Staff']
gen_data['wgroup2'] = ['Shortsword', 'Handaxe']
gen_data['wgroup3'] = ['Bow', 'Longsword']
gen_data['wgroup4'] = ['Greatsword', 'Crossbow']

gen_data['armor_weapons'] = {
  '1-10':'{armor}',
  '11-20':'{weapons}'
}

gen_data['tool_trinket'] = {
  '1-10':'{tool}',
  '11-20':'{trinket}'
}

gen_data['bonus'] = {
  '1-6': '{tool_trinket}',
  '7-13': '{gear}',
  '14-17': '{armor_weapons}',
  '18-20': 'Spellbook containing the spell \'{spellbook}\''

gen_data['tool'] = [
   'Bear trap'
,  'Black poison'
,  'Blanket'
,  'Chalk'
,  'Crowbar'
,  'Grimoire containing the spell \'{spellbook}\''
,  'Holy symbol, wood'
,  'Lantern with oil'
,  'Lockpicks'
,  'Manacle'
,  'Medicine chest'
,  'Oil, flask'
,  'Pipeleaf'
,  'Quill, Ink, and Parchment'
,  'Rope, 30 feet'
,  'Salt'
,  'Scroll containing the spell \'{spellbook}\''
,  'Sharp needle'
,  'Tinderbox'
,  'Torch'
]

gen_data['trinket'] = [
  'Bottle'
,  'Card Deck (stacks)'
,  'Dice Set (stacks)'
,  'Face Paint'
,  'Fake Jewels (stacks)'
,  'Horn'
,  'Incense (stacks)'
,  'Instrument'
,  'Lens'
,  'Marbles (stacks)'
,  'Mirror'
,  'Perfume'
,  'Quill &  Ink'
,  'Salt Pack (stacks)'
,  'Small Bell'
,  'Soap (stacks)'
,  'Sponge'
,  'Tar Pot'
,  'Twine (stacks)'
,  'Whistle'
]

gen_data['gear'] = [
   'Bandages'
,  'Caltrops'
,  'Candle'
,  'Chain, 10 feet'
,  'Chicken that obeys only you'
,  'Grimoire containing the spell \'{spellbook}\''
,  'Hammer'
,  'Healing elixir'
,  'Lantern and oil'
,  'Meat Cleaver'
,  'Mirror'
,  'Pole, 10-foot'
,  'Red poison'
,  'Scissors'
,  'Scroll containing the spell \’{spellbook}\''
,  'Small, vicious dog that obeys only you'
,  'Spike, iron'
,  'Stake, wood'
,  'Tame rat that obeys only you'
,  'Tent, 3-person'
]

gen_data['spellbook'] = [
   'Acid Stomach'
,  'Adhere'
,  'Anchor'
,  'Animate Object'
,  'Anthropomorphize'
,  'Arcane Eye'
,  'Astral Prison'
,  'Attract'
,  'Babble'
,  'Bait Flower'
,  'Beast Form'
,  'Befuddle'
,  'Bird Wings'
,  'Bless'
,  'Body Swap'
,  'Change Weather'
,  'Charm'
,  'Command'
,  'Comprehend'
,  'Cone of Foam'
,  'Control Plants'
,  'Cure Wounds'
,  'Deafen'
,  'Detect Magic'
,  'Disassemble'
,  'Disguise'
,  'Displace'
,  'Earthquake'
,  'Elasticity'
,  'Elemental Wall'
,  'Fear'
,  'Filch'
,  'Flare'
,  'Fog Cloud'
,  'Frenzy'
,  'Gate'
,  'Ghost Sound'
,  'Gravity Shift'
,  'Greed'
,  'Haste'
,  'Hatred'
,  'Hear Whispers'
,  'Hover'
,  'Hypnotize'
,  'Icy Touch'
,  'Illuminate'
,  'Invisibility'
,  'Invisible Tether'
,  'Knock'
,  'Leap'
,  'Liquid Air'
,  'Magic Dampener'
,  'Magic Missile'
,  'Manipulate Gravity'
,  'Manse'
,  'Marble Craze'
,  'Masquerade'
,  'Miniaturize'
,  'Mirror Image'
,  'Mirrorwalk'
,  'Missile Shield'
,  'Multiarm'
,  'Night Sphere'
,  'Null Magic'
,  'Objectify'
,  'Ooze Form'
,  'Pacify'
,  'Pit'
,  'Primal Surge'
,  'Push'
,  'Raise Dead'
,  'Ray of Frost'
,  'Read Mind'
,  'Repel'
,  'Scry'
,  'Sculpt Elements'
,  'Shroud'
,  'Shuffle'
,  'Sleep'
,  'Slick'
,  'Smoke Form'
,  'Snail Knight'
,  'Sniff'
,  'Sort'
,  'Spark'
,  'Speak with Dead'
,  'Spider Climb'
,  'Stoneskin'
,  'Summon Cube'
,  'Summon Idol'
,  'Swarm'
,  'Switcheroo'
,  'Telekinesis'
,  'Telepathy'
,  'Teleport'
,  'Thicket'
,  'Time Rush'
,  'Time Slow'
,  'Tristan'
,  'True Sight'
,  'Upwell'
,  'Vision'
,  'Visual Illusion'
,  'Ward'
,  'Web'
,  'Wizard Mark'
,  'X-Ray Vision'
,  'Zone of Truth'
]
