import React,{useState} from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.components';
import './sign-up.styles.scss';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.action'



const SignUp = ({signUpStart}) => {
    const[userCredentials,setCredentials] = useState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        });

    const{displayName,email,password,confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("passwords dont match");
            return;
        }   
        signUpStart({displayName,email,password});
    }

    const handleChange = event => {
        const{name,value} = event.target;
        setCredentials({ ...userCredentials,[name]:value});
    }
    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span className='title'>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
                />
                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
                /><FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
                /><FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm password'
                required
                />
                <div className='submit-button'>
                  <CustomButton type='submit'>SIGN UP</CustomButton>
                </div>
                
            </form>
        </div>
    )
}
    

const mapDispatchToProps = dispatch => ({
    signUpStart:userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);