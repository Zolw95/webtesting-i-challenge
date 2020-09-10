module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const updateEnhancement = item.enhancement < 20 ? item.enhancement + 1 : 20;

  return { ...item, enhancement: updateEnhancement };
}

function fail(item) {
  let newDurability = item.durability - 1;
  if (item.enhancement < 15) {
    newDurability = item.durability - 5;
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    newDurability = item.durability - 10;
  } else if (item.enhancement > 16) {
    newDurability = item.durability - 1;
  }
  return { ...item, durability: newDurability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
