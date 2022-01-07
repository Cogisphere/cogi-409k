export interface KeywordsOptions {

    uppercased?:boolean;
};

/**
 *  This is a class representing a cell with keywords.
 */
export default class Keywords implements Iterable<string> {

    /**
     *  Parse a comma-separated string of keywords into an instance of Keywords.
     */
    static fromString(input:string) : Keywords {

        // return the keywords
        return new Keywords(input.split(','));
    }

    // the set holding keywords
    private readonly _keywords:Set<string> = new Set<string>();

    /**
     *  The constructor.
     */
    public constructor(input:Array<string> = [], options:KeywordsOptions = { uppercased: true }) {

        this._keywords = new Set<string>(input.map((keyword:string) => {

            keyword = keyword.trim();

            if (options.uppercased) keyword = keyword.toUpperCase();

            return keyword;
        }));
    }

    *[Symbol.iterator]() {
    
        yield* this._keywords;
    }

    /**
     *  Check if specific keyword is inside the set.
     */
    has(test:string) : boolean { return this._keywords.has(test); }
};
