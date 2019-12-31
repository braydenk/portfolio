import React from "react"
import Img from "gatsby-image"

const Image = () => {
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
