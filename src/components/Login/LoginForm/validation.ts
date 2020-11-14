import * as validation from '../../../utils/validation/validation';
import {LoginFormFields} from "./LoginForm.types";
import * as R from 'ramda';
import {ValidationErrorMap, Validator} from "../../../utils/validation/validation";
import {ValidationErrors} from "final-form";

const fieldsValidators: Validator<LoginFormFields> = {
    email: [validation.validEmail, validation.notEmpty],
    password: [validation.notEmpty, validation.minimumLength(8), validation.withUppercase]
}
const fieldsErrors: ValidationErrorMap<LoginFormFields>= {
    email: "Please provide a valid email.",
    password: "A password should contain at least one uppercase letter and a number."
}

export async function validateLoginForm (values: LoginFormFields): Promise<ValidationErrors | undefined> {
    let errors = {};
    Object.keys(values).map(field=>{
        const validators = fieldsValidators[field as keyof LoginFormFields];
        const fieldValue = values[field as keyof LoginFormFields];
        errors = {...errors, [field]: !R.allPass(validators)(fieldValue) && fieldsErrors[field as keyof LoginFormFields]}
    })
    return Object.keys(errors).length >0 ? errors : undefined;
}

