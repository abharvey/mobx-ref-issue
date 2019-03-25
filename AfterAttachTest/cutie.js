import { types as t } from "mobx-state-tree";

import ModelFactory from "../ModelFactory";

export const Cutie = t.model("Cutie", {
    id: t.identifier(),
    type: t.literal("CUTIE"),
    property: t.string,
}).actions((self) => ({
    afterAttach() {
        console.log('After Attach Fired on Cutie:', self.id);
    }
}));

export const CutieFactory = ModelFactory(Cutie, {
    mandatoryProps: ["type", "property"],
    defaultProps: {
        type: "CUTIE",
        property: 'QT Test'
    }
});
