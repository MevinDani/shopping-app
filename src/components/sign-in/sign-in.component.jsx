import React from 'react';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.components';
import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
        SignInNavigate = () => {
        this.props.history.push("/");
        };

        handleSubmit = async event => {
            event.preventDefault();

            const{email,password} = this.state;

            try {
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({email:'',password:''});
                this.SignInNavigate();
            } catch (error) {
                console.log(error);
            }

        }

        handleChange = event => {
            const {value,name} = event.target;
            this.setState({ [name]:value});
        }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    label='email'
                    required />
                    <FormInput handleChange={this.handleChange} 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    label='password'
                    required />
                    <div className='buttons'>
                      <CustomButton type="submit">SIGN IN</CustomButton>
                      <CustomButton type='button'onClick={SignInWithGoogle} isGoogleSignin>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;