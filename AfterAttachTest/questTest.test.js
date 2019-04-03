import { types as t } from 'mobx-state-tree';
import { Quest, QuestFactory } from './quest';
import { Cutie, CutieFactory } from './cutie';

describe('quest test', () => {
    it('does an after create', () => {
        // const quest = QuestFactory({});
        const quest = Quest.create({
            id: '1',
            type: 'QUEST',
            property: 'Q',
            qt: Cutie.create({
                id: '2',
                type: 'CUTIE',
                property: 'QT Test'
            })
        })
        const store = t.model({
            quest: t.reference(Quest)
        });
        store.create({ quest })

        expect(quest.getProp()).toEqual("QT Test"); //fails
    });
});
