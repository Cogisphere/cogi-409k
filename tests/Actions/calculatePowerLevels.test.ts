import calculatePowerLevels from "../../src/Actions/calculatePowerLevels";
import Keywords from "../../src/Structures/Keywords";
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
});