import { types as t } from "mobx-state-tree";
import ModelFactory from "./ModelFactory";

const CommonThing = t.model({
  id: t.identifier(),
  type: t.literal("SUBTHING")
});

const thing1 = t.compose(
  CommonThing,
  t.model("Thing1", {
    name: t.literal("thing1")
  })
);

const thing2 = t.compose(
  CommonThing,
  t.model("Thing1", {
    name: t.literal("thing2")
  })
);

export const SubThing = t.union(thing1, thing2);

export const SubThingFactory = ModelFactory(SubThing, {
  mandatoryProps: ["type", "name"],
  defaultProps: {
    type: "SUBTHING",
    name: "thing1"
  }
});
