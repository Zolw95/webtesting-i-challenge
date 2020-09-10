const enhancer = require("./enhancer.js");
// test away!

describe("repairs item", () => {
  it("should repair item and set item durability to 100,", () => {
    const item = { durability: 20, enhancement: 10 };
    const repairedItem = enhancer.repair(item);
    expect(repairedItem.durability).toBe(100);
  });
});

describe("enhances item", () => {
  // If enhancement succeeds:
  // The item's enhancement increases by 1.
  // If the item enhancement level is 20, the enhancement level is not changed.
  // The durability of the item is not changed.

  it("Should succeed in enhancement", () => {
    const item = { enhancement: 20, durability: 100 };
    const newItem = enhancer.success(item);
    expect(newItem.enhancement).toBe(20);
  });

  it("Should succeed in enhancement and increase it by 1 -> to 11", () => {
    const item = { enhancement: 10, durability: 100 };
    const newItem = enhancer.success(item);
    expect(newItem.enhancement).toBe(11);
  });

  // If enhancement fails:
  // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  // If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  it("Should fail during enhancement and change durability to 90", () => {
    const item = { enhancement: 10, durability: 100 };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(95);
  });

  it("Should fail during ehnacement and set durability to 99", () => {
    const item = { enhancement: 15, durability: 100 };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(90);
  });

  it("Should fail during ehnacement set durability to 99", () => {
    const item = { enhancement: 20, durability: 100 };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(99);
  });
});

describe("Gets item", () => {
    it("Should get an item with the name set to ")
})
