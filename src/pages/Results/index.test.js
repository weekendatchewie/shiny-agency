import { formatJobList } from "./";

describe("The function formatJobList", () => {
    it("should add a comma because there is another element after", () => {
        const expectableState = "item2,";
        expect(formatJobList("item2", 3, 1)).toEqual(expectableState);
    });
    it("should not add a comma because this is the last element", () => {
        const expectableState = "item3";
        expect(formatJobList("item3", 3, 2)).toEqual(expectableState);
    });
    
    it("should not add a comma because this is the only element", () => {
        const expectableState = "item1";
        expect(formatJobList("item1", 1, 0)).toEqual(expectableState);
    });
});
