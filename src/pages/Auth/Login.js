import React from 'react';
import * as YUP from 'yup';
import {withFormik} from "formik";
import Field from "../../components/Field";
import {connect} from "react-redux";
import {handleLoginUser} from "../../actions/userActions";
import Account from "./Account";


const Login = ({values, handleChange, errors, touched, handleBlur, submitForm, isSubmitting}) => {
    function getTouchedAndError(fieldName) {
        return touched[fieldName] && errors[fieldName];
    }

    function handleSubmit() {
        submitForm();
    }

    return (
        <form className='login-form'>
            <div className='avatar-icon'>
                <img src="https://i.stack.imgur.com/l60Hf.png" alt=""/>
            </div>
            <Account
                linkText='Do not have an account? just register'
                pathToNavigate='/register'
            />
            <Field
                type='text'
                labelText='Login'
                errorText={errors.email}
                name='email'
                className='field-styling'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                hasError={getTouchedAndError('email')}
            />
            <Field
                type='password'
                labelText='Password'
                errorText={errors.password}
                name='password'
                className='field-styling'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                hasError={getTouchedAndError('password')}
            />
            <Field
                type='checkbox'
                labelText='Remember me'
                errorText={errors.rememberMe}
                name='rememberMe'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rememberMe}
                className='checkbox'
                hasError={getTouchedAndError('rememberMe')}
            />
            <button
                className='btn'
                disabled={isSubmitting}
                onClick={handleSubmit}
                type='button'>
                Log in
            </button>
        </form>
    );
};

const WithLoginForm = withFormik({
    mapPropsToValues() {
        return {
            email: '',
            password: '',
            rememberMe: false
        };
    },
    validationSchema: YUP.object().shape({
        email: YUP.string().email().required(),
        password: YUP.string().required(),
        rememberMe: YUP.boolean()
    }),
    handleSubmit(values, {props, ...rest}) {
        rest.setSubmitting(true);
        const {rememberMe, ...user} = values;
        props.dispatch(handleLoginUser(
            user,
            () => {
                rest.resetForm();
                rest.setSubmitting(false);
            },
            () => props.history.push('/workspace'),
            rememberMe));
    }
})(Login);


const ConnectedLogin = connect(state => ({
    loading: state.login.loading,
    loaded: state.login.loaded,
    error: state.login.error
}))(WithLoginForm);

export default ConnectedLogin;
