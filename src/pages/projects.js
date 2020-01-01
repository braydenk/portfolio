import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Card = styled.div`
  box-shadow: var(
    --p-card-shadow,
    0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15)
  );
  max-width: 300px;
  padding: 1rem;
`
const ProjectsPage = () => (
  <Layout>
    <h1>Projects.</h1>
    <div style={{ marginTop: "2rem" }}>
      <Card>
        <h2>Project Name</h2>
        <p>Technologies</p>
        <p>Project description</p>
        <a>View on GitHub</a>
      </Card>
    </div>
  </Layout>
)

export default ProjectsPage
