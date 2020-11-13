import React from 'react';
import {Button} from '@material-ui/core';
import {Field, Form } from 'react-final-form';
import * as S from './LoginForm.styles'
import {FormFields} from "./LoginForm.types";

const LoginForm = () => {
    return (
        <form>
        <Form
            onSubmit={()=>{console.log("Submitted")}}
            render={({handleSubmit})=>(
                <>
                <Field
                    name={'name'}
                    render={({input, meta})=>(
                        <S.FormInput
                            required
                            autoComplete="off"
                            id={'name'}
                            value={input.value}
                            onChange={input.onChange}
                            label="Name"
                            error={meta.error}
                            fullWidth />
                    )}
                />
                    <Field
                        name={'password'}
                        render={({input, meta})=>(
                            <S.FormInput
                                required
                                autoComplete={"off"}
                                id="password"
                                type="password"
                                value={input.value}
                                onChange={input.onChange}
                                label="Password"
                                error={meta.error}
                                fullWidth />
                        )}
                    />
                    <Button variant="contained" size="large" color="primary" fullWidth onClick={handleSubmit} >Login</Button>
                </>

            )}
        />
    </form>

    );
};

export default LoginForm;