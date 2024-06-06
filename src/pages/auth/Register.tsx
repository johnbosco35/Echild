import styled from "styled-components"
import bg from "../../assets/about-img-4.jpg"
import logo from "../../assets/EChild.png" 
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <Container>
        <Left>
          <Img src={logo}/>
          <p>sign up for free!</p>
          <input type="text" placeholder="Email address"/>
          <input type="text" placeholder="Full name"/>
          <input type="text" placeholder="Password"/>
          <span>I agree to the privacy policy and terms of service.</span>
          <Button>Sign up with email</Button>
          <Link to={"/login"} style={{textDecoration:"none"}}>
          <h3>Already have an account?</h3>
          </Link>
        </Left>
        <Right>
          <Cover>
            <h1>Welcome to Echld Account</h1>
            <span>Lorem ipsum dolor sit amet,</span>
          </Cover>
        </Right>
      </Container>
    </>
  )
}

export default Register

const Button = styled.button`
width: 330px;
height: 45px;
background-color: #4972F2;
display: flex;
align-items: center;
justify-content: center;
border: none;
color: white;
font-size: 20px;
border-radius: 5px;
margin-top: 8px;
cursor: pointer;
`
const Img = styled.img`
height: 150px;
`
const Left = styled.div`
width: 35%;
height: 100%;
background-color: #fff;
display: flex;
align-items: center;
flex-direction: column;
cursor: pointer;

span{
  font-size: 13px;
  font-weight: 800;
  margin-top: 5px;
}

p{
  font-size: 30px;
  font-weight: 800;
}

input{
  width: 310px;
  height: 45px;
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 3px;
  border: 1px solid #DDDDDD;
  outline: none;
  cursor: pointer;

  &:hover{
    box-shadow: 1px 1px 1px 2px  #5572F3;
  }
}
`

const Cover = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;

h1{
  margin: 0;
}
span{
  margin-top: 10px;
}
`
const Right = styled.div`
width: 65%;
height: 100%;
background-image: url(${bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: space-between;
`