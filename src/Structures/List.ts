import Detachment from "./Detachment";

/**
 *  An interface describing a 40k list.
 */
export default interface List {

    /**
     *  The name of the list.
     */
    name:string;

    /**
     *  The detachments of the list.
     */
    detachments:Array<Detachment>;
};