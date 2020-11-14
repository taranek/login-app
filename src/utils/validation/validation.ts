import * as EmailValidator from 'email-validator';



const REGEX_ONE_UPPERCASE = /(?=[A-Z])/;


export type ValidationPredicate = (...args: any[]) => boolean;
export type ValidationErrorMap<T> = Record<keyof T, string>;
export type Validator<T> = Record<keyof T, ValidationPredicate[]>;


export const notEmpty = (value: string | []): boolean => (!!value);
export const withUppercase = (value: string): boolean => (!!value && REGEX_ONE_UPPERCASE.test(value));
export const validEmail = (value: string): boolean => (EmailValidator.validate(value));
export const minimumLength = (minLength: number) => (value:string) => !!value && value?.length > minLength;
