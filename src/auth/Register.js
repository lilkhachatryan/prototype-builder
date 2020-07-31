import React from 'react';
import {withFormik} from "formik";
import Field from "./Field";
import * as YUP from 'yup';
import {connect} from 'react-redux';

const Register = ({values, handleChange, handleBlur, errors, touched}) => {
    return (
        <div className='form__container'>
            <form>
                <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name='email'
                    labelText='please enter your e-mail'
                />
                <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    name='firstName'
                    labelText='please enter your firstName'
                />
                <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    name='lastName'
                    labelText='please enter your lastName'
                />
                <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name='password'
                    labelText='please create a password'
                />
                <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    name='password'
                    labelText='please confirm the created password'
                />
            </form>
        </div>
    );
};

const WithRegisterForm = withFormik({
    mapPropsToValues() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: ''
        };
    },
    validationSchema: YUP.object().shape({
        email: YUP.string().email().required(),
        firstName: YUP.string.required(),
        lastName: YUP.string().required(),
    })
})(Register);


const ConnectedRegister = connect()(WithRegisterForm);


