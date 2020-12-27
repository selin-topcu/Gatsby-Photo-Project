import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.css"
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div className="photo">
      {data.allFile.edges.map(({ node }) => {
        return <Img key={node.id} fluid={node.childImageSharp.fluid} />
      })}
    </div>
  )
}
export const pageQuery = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//photo//" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage
