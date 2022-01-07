import Detachment from "../Structures/Detachment";
import Unit from "../Structures/Unit";

function calculatePowerLevels(list: { detachments:Array<Detachment> }) : number;
function calculatePowerLevels(detachment: { units:Array<Unit> }) : number;
function calculatePowerLevels(units: Iterable<Unit>) : number;
function calculatePowerLevels(input: any) : number {

    if (typeof input[Symbol.iterator] === 'function') return [...input].reduce((prev:number, current:Unit) => prev += current.powerLevels, 0);
    
    return 0;
};

export default calculatePowerLevels;