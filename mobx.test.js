import { ThingListFactory } from "./ThingList";

describe("MobX test", () => {
  it("runs", () => {
    const sf = ThingListFactory({});
    console.log(
      "***********************\n",
      sf.toJSON(),
      "\n********************"
    );
  });
});
