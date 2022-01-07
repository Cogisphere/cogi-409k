import UnitDataSlate from "./UnitDataSlate";

/**
 *  This is an interface describing an actual unit with models.
 */
export default interface Unit {

    /**
     *  The unit data slate that the unit was based on.
     */
    dataSlate:UnitDataSlate;

    /**
     *  The name of the unit.
     */
    name:string;

    /**
     *  The power levels of the unit.
     */
    powerLevels:number;
};