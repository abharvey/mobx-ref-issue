import { types as t } from "mobx-state-tree";
import { ThingList } from "./ThingList";
import { SubThing, SubThingFactory } from "./SubThing";
import ModelFactory from "./ModelFactory";

export const Thing = t.model("Thing", {
  id: t.identifier(),
  type: t.literal("THING"),
  thing: t.late(() => t.reference(t.union(SubThing, ThingList)))
});

export const ThingFactory = ModelFactory(Thing, {
  mandatoryProps: ["thing", "type"],
  defaultProps: {
    type: "THING",
    thing: SubThingFactory({})
  }
});
