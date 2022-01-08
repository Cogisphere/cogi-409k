import Unit from "./Unit";

/**
 *  This is an interface describing a detachment.
 */
export default interface Detachment {

    /**
     *  The units inside the detachment.
     */
    units:Array<Unit>;
};