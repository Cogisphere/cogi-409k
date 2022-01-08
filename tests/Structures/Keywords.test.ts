import Keywords from "../../lib/Structures/Keywords";

describe('Keywords', () => {

    describe('.fromString()', () => {

        test('it should construct keywords from a string with uppercased tags', () => {

            const keywords = Keywords.fromString('TAG-A,TAG-B');

            expect(keywords.has('TAG-A')).toBeTruthy();
            expect(keywords.has('TAG-B')).toBeTruthy();
            expect(keywords.has('TAG-C')).toBeFalsy();
        });

        test('it should construct keywords from a string with lowercased tags', () => {

            const keywords = Keywords.fromString('tag-A,tag-B');

            expect(keywords.has('TAG-A')).toBeTruthy();
            expect(keywords.has('TAG-B')).toBeTruthy();
            expect(keywords.has('TAG-C')).toBeFalsy();
        });
    });
});