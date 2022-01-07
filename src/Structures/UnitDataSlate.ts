import Keywords from "./Keywords";

/**
 *  This is an interface describing a data slate of a specific unit.
 */
export default interface UnitDataSlate {

    /**
     *  The unique ID of the data slate.
     */
    id:string;

    /**
     *  The name of the data slate.
     */
    name:string;

    /**
     *  The source of the data slate. This could be a name of a codex,
     *  White Dwarf issue, or custom source created by user (unofficial).
     */
    source:string;
    
    /**
     *  The keywords of the data slate.
     */
    keywords:Keywords;

    /**
     *  The faction keywords of the data slate.
     */
    factionKeywords:Keywords;
};