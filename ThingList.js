import { types as t } from "mobx-state-tree";
import { Thing, ThingFactory } from "./Thing";
import ModelFactory from "./ModelFactory";

export const ThingList = t.model("ThingList", {
  id: t.identifier(),
  type: t.literal("THINGLIST"),
  sets: t.array(t.late(() => t.reference(Thing)))
});

export const ThingListFactory = ModelFactory(ThingList, {
  mandatoryProps: ["sets", "type"],
  defaultProps: {
    type: "THINGLIST",
    sets: [ThingFactory({})]
  }
});
