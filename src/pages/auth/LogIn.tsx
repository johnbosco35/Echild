import styled from "styled-components"
import logo from "../../assets/EChild.png" 
import { Link } from "react-router-dom"
import bg from "../../assets/image-3.jpg"
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"

const LogIn = () => {
  return (
    <>
       <Container>
        <Left>
          <Img src={logo}/>
          <p>Login to your account</p>
          <Sign>
          <h3>Don't have an account?</h3>
          <Link to={"/register"} style={{textDecoration:"none"}}>
          <h4>Sign Up Free!</h4>
          </Link>
          </Sign>
          <BoxHolder>
            <Facebook>
              <BsFacebook size={20} style={{color:"white"}}/>
            </Facebook>
            <Twitter>
              <BsTwitter size={20} style={{color:"white"}}/>
            </Twitter>
            <Google>
              <BsGoogle size={20} style={{color:"white"}}/>
            </Google>
          </BoxHolder>
          <LineHolder>
            <Line></Line>
            <h1>or</h1>
            <Line></Line>
          </LineHolder>
          <input type="text" placeholder="Email address"/>
          <input type="text" placeholder="Password"/>
          <Holder>
            <Remember>
              
              Remember me
            </Remember>
            <Forgot>Forgot password?</Forgot>
          </Holder>
          <Button>Login with email</Button>
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

export default LogIn


const Forgot = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Remember = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Holder = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

const Line = styled.div`
width: 150px;
height: 1px;
background-color: #DDDDDD;
border-radius: 2px;
`

const LineHolder = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-top: 20px;

h1{
  margin-bottom: 17px;
  font-size: 23px;
  font-weight: 800;
  font-family: cursive;
  color: #DDDDDD;
}
`

const Google = styled.div`
width: 95px;
height: 45px;
background-color: #C73B38;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`
const Twitter = styled.div`
width: 95px;
height: 45px;
background-color: #37B2ED;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`
const Facebook = styled.div`
width: 95px;
height: 45px;
background-color: #4F66A0;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`

const BoxHolder = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 70%;
`

const Sign = styled.div`
display: flex;
align-items: center;
justify-content: center;

h4{
  margin-left: 3px;
}

h3{
  margin: 0;
}
`

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
  margin: 0;
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
background-color: rgba(0,0,0,0.8);
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