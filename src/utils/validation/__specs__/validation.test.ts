import * as validation from '../validation';

type TestDataSet = {name: string,data: any; expected: any}[];

const EMAIL_DATASET:TestDataSet = [
    {name:"valid email",data: "some@gmail.com", expected: true},
    {name: "a space", data: " ", expected: false},
    {name: "string without a @", data: "invalidMail.com", expected: false},
    {name: "undefined", data: undefined, expected: false},
]

const WITH_UPPERCASE_DATASET:TestDataSet = [
    {name: "string without uppercase",data: "abcdefgh", expected: false},
    {name: "string with uppercase", data: "this Is SomeString", expected: true},
    {name: "undefined", data: undefined, expected: false},
    {name: "string with all uppercase letter", data: "SOMETHING", expected: true},
]

const MINIMUM_LENGTH_DATASET:TestDataSet = [
    {name: "longer string",data: [2,"test string"], expected: true},
    {name: "shorter string",data: [22,"test string"], expected: false},
    {name: "undefined",data: [2,undefined], expected: false},
]

describe('Email validator', () => {
    EMAIL_DATASET.forEach(({ name, data, expected }) =>
        it(`returns ${expected} when given ${name}`, () => {
            expect(validation.validEmail(data)).toBe(expected);
        })
    )
});

describe('Uppercase letter validator', () => {
    WITH_UPPERCASE_DATASET.forEach(({ name, data, expected }) =>
        it(`returns ${expected} when given ${name}`, () => {
            expect(validation.withUppercase(data)).toBe(expected);
        })
    )
});

describe('Minimum length validator', () => {
    MINIMUM_LENGTH_DATASET.forEach(({ name, data, expected }) =>
        it(`returns ${expected} when given ${name}`, () => {
            expect(validation.minimumLength(data[0])(data[1])).toBe(expected);
        })
    )
});