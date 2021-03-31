import { encypher } from "./Helper";

describe("encypher pass phrase", ()=>{
    it("encypher the phrase", ()=>{
        expect(encypher("raindeer")).toBe("nainden");
        expect(encypher("snake")).toBe("anake");
        expect(encypher("better")).toBe("betmn");
        expect(encypher("kitty")).toBe("kitmy");
    })

})