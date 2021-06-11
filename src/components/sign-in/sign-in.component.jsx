import React, {useState} from 'react';
import {connect} from 'react-redux';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.components';
import './sign-in.styles.scss'


const SignIn = ({emailSignInStart,googleSignInStart}) =>  {
    const[userCredentials,setCredentials] = useState(
        {
            email:'',
            password:''
        }
    )
    const{email,password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email,password);
    }

    const handleChange = event => {
        const {value,name} = event.target;
        setCredentials({ ...userCredentials, [name]:value});
    }

return(
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput handleChange={handleChange} 
            type="email" 
            name="email" 
            value={email} 
            label='email'
            required />
            <FormInput handleChange={handleChange} 
            type="password" 
            name="password" 
            value={password} 
            label='password'
            required />
            <div className='buttons'>
                <CustomButton type="submit">SIGN IN</CustomButton>
                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignin>Sign in with google</CustomButton>
            </div>
        </form>
    </div>
)
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart:() => dispatch(googleSignInStart()),
    emailSignInStart:(email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);