import styled from "styled-components"
import bg from "../../assets/about-img-3.jpg"
import { NavLink } from "react-router-dom"

const LogIn = () => {
  return (
    <>
      <Container>
          <Cover>
          <h1>Signin your child</h1>
          <Box>
            <p>Email:</p>
            <input type="text" placeholder="example@gmail.com" required/>
          </Box>
          <Box>
            <p>Password:</p>
            <input type="text" placeholder="password" required/>
          </Box>
          <Button>Signin</Button>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"800",marginTop:"15px"}}>
            <span>Don't have an account?</span>
            <NavLink to={"/register"} style={{textDecoration:"none",color:"white",marginLeft:"10px"}}>Register</NavLink>
          </div>
          </Cover>
      </Container>
    </>
  )
}

export default LogIn

const Button = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 5px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  margin-left: 250px;
  font-size: 20px;
  font-weight: 800;
  font-family: Comic Sans MS;

  &:hover{
    background-color: red;
    color: white;
  }
`

const Box = styled.div`
margin-left: 20px;

input{
  outline: none;
  width: 380px;
  height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  border: none;
}

p{
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  font-family: Comic Sans MS;
}
`

const Cover = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
`

const Container = styled.div`
width: 100%;
height: 100vh;
background-image:url(${bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`