import styled from "styled-components"

const Register = () => {
  return (
    <>
      <Container>
        <Left></Left>
        <Right></Right>
      </Container>
    </>
  )
}

export default Register

const Right = styled.div`
width: 50%;
height: 100vh;
background-color:red;
`

const Left = styled.div`
width: 50%;
height: 100vh;
background: #000;
`

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`