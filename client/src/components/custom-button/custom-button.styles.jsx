import styled,{css} from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
    &:active{
    background-color: white;
    color: black;
  }
`

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
    background-color: #357ae8;
    border: none;
    }
`
const getButtonStyles = props => {
    if(props.isGoogleSignin){
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}


export const CustomButtonContainer = styled.button`
  min-width: min-content;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px 0 30px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Farro";
  font-weight: bolder;
  border:none;
  border-radius:10px;
  cursor: pointer;
  display: flex;
  justify-content: center;

   @media screen and (max-width: 390px) {
    width:auto;
    font-size:12px;
  }

  ${getButtonStyles}
`