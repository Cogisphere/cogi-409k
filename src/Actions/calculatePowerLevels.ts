import Detachment from "../Structures/Detachment";
import Unit from "../Structures/Unit";

function isIterable(input:any) { return typeof input[Symbol.iterator] === 'function'; }

function calculatePowerLevels(list: { detachments:Array<Detachment> }) : number;
function calculatePowerLevels(detachment: { units:Array<Unit> }) : number;
function calculatePowerLevels(units: Iterable<Unit>) : number;
function calculatePowerLevels(input: any) : number {

    if (input.detachments && isIterable(input.detachments)) return [...input.detachments].reduce((prev:number, current:Detachment) => prev + calculatePowerLevels(current), 0);

    if (input.units && isIterable(input.units)) return calculatePowerLevels(input.units);

    if (isIterable(input)) return [...input].reduce((prev:number, current:Unit) => prev + current.powerLevels, 0);

    return 0;
};

export default calculatePowerLevels;