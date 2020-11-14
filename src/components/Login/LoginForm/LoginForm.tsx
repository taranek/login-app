import React from 'react';
import {Button} from '@material-ui/core';
import {Field, Form } from 'react-final-form';
import * as S from './LoginForm.styles'
import {LoginFormFields} from "./LoginForm.types";
import {validateLoginForm} from "./validation";


const INITIAL_VALUES:LoginFormFields = {
    email:'',
    password: '',
}

const LoginForm: React.FC = () => {
    return (
        <Form
            onSubmit={(values => {return validateLoginForm(values as LoginFormFields)})}
            initialValues={INITIAL_VALUES}
            render={({handleSubmit, submitErrors})=>(
                <form onSubmit={handleSubmit}>
                <Field
                    name={'email'}
                    render={({input, meta})=>(
                        <S.FormInput
                            required
                            autoComplete="off"
                            id={'email'}
                            value={input.value}
                            onChange={input.onChange}
                            label={"Email"}
                            error={Boolean(meta.submitError || meta.error)}
                            helperText={meta.submitError || meta.error}
                            fullWidth />
                    )}
                />
                    <Field
                        name={'password'}
                        render={({input, meta})=>{
                            return (
                                <S.FormInput
                                    required
                                    autoComplete={"off"}
                                    id="password"
                                    type="password"
                                    value={input.value}
                                    onChange={input.onChange}
                                    label="Password"
                                    error={Boolean(meta.submitError || meta.error)}
                                    helperText={meta.submitError || meta.error}
                                    fullWidth />
                            )
                        }}
                    />
                    <Button type="submit" variant="contained" size="large" color="primary" fullWidth >Login</Button>
                </form>

            )}
        />


    );
};

export default LoginForm;