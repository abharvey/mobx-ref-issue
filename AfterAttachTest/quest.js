import { types as t } from "mobx-state-tree";

import { Cutie, CutieFactory } from "./cutie";

import ModelFactory from "../ModelFactory";

export const Quest = t.model("Quest", {
    id: t.identifier(),
    type: t.literal("QUEST"),
    property: t.string,
    qt: t.late(() => t.reference(Cutie))
}).actions((self) => ({
    afterCreate() {
        console.info('****After Attach Fired****:', self.id);
        self.setProp(self.qt.property);
    },
    setProp(val) {
        self.property = val
    }
})).views((self) => ({
    getProp() {
        return self.property;
    }
}));

export const QuestFactory = (props) => ModelFactory(Quest, {
    mandatoryProps: ["thing", "type", "property"],
    defaultProps: {
        type: "QUEST",
        thing: CutieFactory({}),
        property: "Q"
    }
})(props);
