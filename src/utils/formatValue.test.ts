import * as formatValue from "./formatValue"
// @ponicode
describe("formatValue.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            formatValue.default(32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            formatValue.default(16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            formatValue.default(256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            formatValue.default(64)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            formatValue.default(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            formatValue.default(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
