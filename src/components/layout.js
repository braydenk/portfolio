import React from "react"
import Header from "./header"

const Layout = ({ children, background }) => {
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: background }}>
        <Header />
        <main
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            margin: "1rem 5rem",
          }}
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
