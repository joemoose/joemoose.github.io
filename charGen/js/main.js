roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
const armor = generate_text("armor");
const helmet = generate_text("helmet");
const tool = generate_text("tool");
const gear1 = generate_text("gear1");
const weapons = generate_text("weapons");

let allItems = [];
allItems.push(armor, helmet, weapons, gear1, gear2);
let total = 2;
for (let i = 0; i < allItems.length; i++) {
  let item = allItems[i];
  if (item.includes("bulky")) {
    total += 2;
  } else if (total > 10){
    total = 10;
  } else if (!item.includes("protection") && (!item.includes("nor") && (!item.includes("stacks")))) {
    total++;
  }
}

let armorTotal = 0;
let armorValue = [];
armorValue.push(armor, helmet);
armorValue.forEach((item) => {
  if (item.includes("1")) {
    armorTotal++;
  } if (armorTotal > 3){
      armorTotal = 3;
  } else if (item.includes("2")) {
    armorTotal += 2;
  } else if (item.includes("3")) {
    armorTotal += 3;
  }
});

console.log(total);
$("#character").html(generate_text("character"));
$("#hp").html(roll(6));
["Brawn", "Finesse", "Intellect"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});
$("#armor").html(armor);
$("#helmet").html(helmet);
$("#weapons").html(weapons);
$("#tool").html(tool);
$("#gear").html(gear1);
$("#gear").html(gear2);
$("#armorTotal").html(armorTotal);
$("#total").html(total);
$("#gold").html(roll(20) + roll(20) + roll(d20));
