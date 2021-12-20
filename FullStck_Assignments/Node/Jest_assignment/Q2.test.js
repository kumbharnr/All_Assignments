var calc = require("./Q2")

describe('custom math operation suite',()=>{
    test('testing factorial',()=>{
        expect(calc.fact(4)).toEqual(16);
    })

    test("testing max2()",()=>{
        expect(calc.max2(2,1)).toEqual(2);
    })

    test("testing even and odd",()=>{
        expect(calc.isEven(5)).toBeTruthy();
        expect(calc.isEven(6)).toBeFalsy();
    })

    test("testing max",()=>{
        expect(calc.max(1,2,3,4,-1)).toEqual(4);

    })
    // test("testing search",()=>{
    //     expect(calc.search)
    // })
})