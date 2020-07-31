import React from 'react';
import {withFormik} from "formik";
import Field from "./Field";
import * as YUP from 'yup';
import {connect} from 'react-redux';
import {passwordValidator} from "../../utils/validators";
import {registerUser} from "../../actions/UserActions";

const passwordValidationText = 'Password should contain at least one uppercase letter, should consist of 5 or more characters';
const confirmPasswordValidationMessage = 'field password and confirm password are not matching!';

const Register = ({values, handleChange, handleBlur, errors, touched, submitForm}) => {
    function getTouchedAndError(fieldName) {
        return touched[fieldName] && errors[fieldName];
    }
    function handleSubmit() {
        submitForm();
    }
    return (
        <div className='form__container'>
            <form>
                <Field
                    errorText={errors.email}
                    hasError={getTouchedAndError('email')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name='email'
                    labelText='please enter your e-mail'
                />
                <Field
                    errorText={errors.firstName}
                    hasError={getTouchedAndError('firstName')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    name='firstName'
                    labelText='please enter your first name'
                />
                <Field
                    errorText={errors.lastName}
                    hasError={getTouchedAndError('lastName')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    name='lastName'
                    labelText='please enter your last name'
                />
                <Field
                    errorText={errors.password}
                    hasError={getTouchedAndError('password')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name='password'
                    labelText='please create a password'
                />
                <Field
                    errorText={errors.confirmPassword}
                    hasError={getTouchedAndError('confirmPassword')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    name='confirmPassword'
                    labelText='please confirm the created password'
                />
                <button
                    onClick={handleSubmit}
                    type='button'>
                    Submit
                </button>
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
        firstName: YUP.string().required(),
        lastName: YUP.string().required(),
        password: YUP.string().test('password validator', passwordValidationText, passwordValidator).required(),
        confirmPassword: YUP.string().test( 'match', confirmPasswordValidationMessage, function (value) {
            return value && value === this.parent.password;
        } ).required()
    }),
    handleSubmit(values, {props, ...rest}){
        console.log(values);
        props.dispatch(registerUser(values));
    }
})(Register);


const ConnectedRegister = connect()(WithRegisterForm);

export default ConnectedRegister;


