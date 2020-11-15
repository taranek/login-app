import * as R from 'ramda';
import {ValidationErrors} from "final-form";

import { Validator } from "../../../utils/validation/validation";
import * as validate from '../../../utils/validation/validation';
import {LoginFormFields} from "./LoginForm.types";


const fieldsValidators: Validator<LoginFormFields> = {
    email: [validate.validEmail, validate.notEmpty],
    password: [validate.noWhiteSpace, validate.withDigit, validate.notEmpty, validate.minimumLength(8), validate.withUppercase]
}

export function validateLoginForm (values: LoginFormFields): ValidationErrors | undefined {
    let errors = {};
    Object.keys(values).map(field=>{
        const validators = fieldsValidators[field as keyof LoginFormFields];
        const fieldValue = values[field as keyof LoginFormFields];
        const isFieldValid = R.allPass(validators)(fieldValue);

        if(!isFieldValid){
            errors = {...errors, [field]: true}
        }

    })
    return Object.keys(errors).length >0 ? errors : undefined;
}

