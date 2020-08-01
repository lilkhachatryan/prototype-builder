import React from 'react';
import * as YUP from 'yup';
import {withFormik} from "formik";
import Field from "./Field";
import {connect} from "react-redux";
import {handleLoginUser} from "../../actions/UserActions";
import Account from "./Account";


const Login = ({values, handleChange, errors, touched, handleBlur, submitForm, isSubmitting}) => {
    function getTouchedAndError(fieldName) {
        return touched[fieldName] && errors[fieldName];
    }
    function handleSubmit() {
        submitForm();
    }

    return (
        <form>
            <Account
                linkText='do not have an account ? just register'
                pathToNavigate='/register'
            />
            <Field
                type='text'
                labelText='login'
                errorText={errors.email}
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                hasError={getTouchedAndError('email')}
            />
            <Field
                type='password'
                labelText='password'
                errorText={errors.password}
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                hasError={getTouchedAndError('password')}
            />
            <Field
                type='checkbox'
                labelText='remember me'
                errorText={errors.rememberMe}
                name='rememberMe'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rememberMe}
                hasError={getTouchedAndError('rememberMe')}
            />
            <button
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
        props.dispatch(handleLoginUser(user,
            () => {rest.resetForm(); rest.setSubmitting(false);},
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
