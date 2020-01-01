import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WelcomeText = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #000;
`

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
`

const Links = styled.div`
  margin-top: 1em;
`
//rgb(34,43,133)
//fa615f
const PageLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  &:hover {
    border-bottom: 2px solid black;
  }
`

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.bg};
  border-radius: 50%;
`

const IndexPage = () => {
  return (
    <Layout background={"#fff"}>
      {/* <Container> */}
      <div style={{ textAlign: "center", width: "100%" }}>
        <WelcomeText>Good Afternoon!</WelcomeText>
        <SubText>My name is Brayden. I build software.</SubText>
      </div>

      {/* <SubText>
          I'm a Graduate Software Engineer with a passion for building digital
          products.
        </SubText> */}
      {/* <Links>
          <PageLink to="/">Projects</PageLink>
          <PageLink to="/">About</PageLink>
          <PageLink to="/">Contact</PageLink>
        </Links> */}
      {/* </Container>

      <Circle bg={"rgb(243, 174, 76)"}></Circle>
      <Circle bg={"rgb(254, 207, 206)"}></Circle>
      <Circle bg={"rgb(208, 204, 208)"}></Circle> */}
    </Layout>
  )
}
export default IndexPage
