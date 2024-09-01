import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './index.js';

test("capitalize the first letter", () => {
    expect(capitalize("dog")).toBe("Dog");
  })
  
  test("reverse the string", () => {
    expect(reverseString("go football")).toBe("llabtoof og");
  })
  
  test("calculator add", () => {
    expect(calculator.add(1,4)).toBe(5);
  })

  test("calculator subtract", () => {
    expect(calculator.sub(4,1)).toBe(3);
  })

  test("calculator multiply", () => {
    expect(calculator.mul(4,2)).toBe(8);
  })

  test("calculator divide", () => {
    expect(calculator.div(4,2)).toBe(2);
  })
  
  test("make a code using caesar's cipher", () => {
    expect(caesarCipher("Xyz! d", 3)).toBe("Abc! g");
  })
  
  test("give the avg, min, max, length of an array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
  })