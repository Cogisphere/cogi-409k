import calculatePowerLevels from "../../src/Actions/calculatePowerLevels";
import Detachment from "../../src/Structures/Detachment";
import Keywords from "../../src/Structures/Keywords";
import List from "../../src/Structures/List";
import Unit from "../../src/Structures/Unit";
import UnitDataSlate from "../../src/Structures/UnitDataSlate";

describe('calculatePowerLevels', () => {

    const dataSlateA:UnitDataSlate = {
        id: "test-a",
        name: "test-a",
        source: "test-source",
        keywords: new Keywords(),
        factionKeywords: new Keywords()
    };
    
    test('it should calculate power levels of a single unit', () => {

        const unit:Unit = { name: 'test', powerLevels: 4, dataSlate: dataSlateA };

        const powerLevels = calculatePowerLevels([ unit ]);

        expect(powerLevels).toEqual(4);
    });

    test('it should calculate power levels of multiple units', () => {

        const unitOne:Unit = { name: 'test-1', powerLevels: 4, dataSlate: dataSlateA };
        const unitTwo:Unit = { name: 'test-2', powerLevels: 2, dataSlate: dataSlateA };
        const unitThree:Unit = { name: 'test-3', powerLevels: 6, dataSlate: dataSlateA };

        const powerLevels = calculatePowerLevels([ unitOne, unitTwo, unitThree ]);

        expect(powerLevels).toEqual(12);
    });

    test('it should calculate power levels of a detachment', () => {

        const unitOne:Unit = { name: 'test-1', powerLevels: 4, dataSlate: dataSlateA };
        const unitTwo:Unit = { name: 'test-2', powerLevels: 2, dataSlate: dataSlateA };
        const unitThree:Unit = { name: 'test-3', powerLevels: 6, dataSlate: dataSlateA };

        const detachment:Detachment = { units: [ unitOne, unitTwo, unitThree ] };

        const powerLevels = calculatePowerLevels(detachment);

        expect(powerLevels).toEqual(12);
    });

    test('it should calculate 0 power levels of empty', () => {

        const detachment:Detachment = { units: [ ] };

        const powerLevels = calculatePowerLevels(detachment);

        expect(powerLevels).toEqual(0);
    });

    test('it should calculate power levels of a list', () => {

        const unitAOne:Unit = { name: 'test-1', powerLevels: 4, dataSlate: dataSlateA };
        const unitATwo:Unit = { name: 'test-2', powerLevels: 2, dataSlate: dataSlateA };
        const unitAThree:Unit = { name: 'test-3', powerLevels: 6, dataSlate: dataSlateA };

        const detachmentA:Detachment = { units: [ unitAOne, unitATwo, unitAThree ] };

        const unitBOne:Unit = { name: 'test-1', powerLevels: 1, dataSlate: dataSlateA };
        const unitBTwo:Unit = { name: 'test-2', powerLevels: 1, dataSlate: dataSlateA };
        const unitBThree:Unit = { name: 'test-3', powerLevels: 1, dataSlate: dataSlateA };

        const detachmentB:Detachment = { units: [ unitBOne, unitBTwo, unitBThree ] };

        const list:List = { name: 'test-list', detachments: [ detachmentA, detachmentB ] };

        const powerLevels = calculatePowerLevels(list);

        expect(powerLevels).toEqual(15);
    });
});