import styled from "styled-components"
import bg from "../../assets/image-3.jpg"

const Register = () => {
  return (
    <>
      <Container>
        <Left>
          <Cover></Cover>
        </Left>
        <Right></Right>
      </Container>
    </>
  )
}

export default Register

const Cover = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.4);
`

const Right = styled.div`
width: 50%;
height: 100vh;
background-color:red;
`

const Left = styled.div`
width: 50%;
height: 100vh;
background-image:url(${bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`