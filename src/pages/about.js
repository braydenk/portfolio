import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Text = styled.p`
  margin-top: 1rem;
  font-size: 14px;
`

const AboutPage = () => (
  <Layout>
    <h1>About Me.</h1>
    <Text>
      Hello! I'm Brayden, a graduate software engineer based in Melbourne,
      Australia.
    </Text>
  </Layout>
)

export default AboutPage
