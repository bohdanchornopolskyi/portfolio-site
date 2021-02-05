import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            img {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const project = data.allProjectsJson.edges

  return (
    <Layout pageTitle="Projects page">
      {project.map(({ node: project }) => {
        const title = project.title
        const description = project.description
        const slug = project.slug
        const imageData = project.img.childImageSharp.fluid
        const url = project.url
        return (
          <div className="p-8 sm:px-12 md:px-24 lg:px-36">
            <ProjectPreview
              title={title}
              description={description}
              imageData={imageData}
              slug={slug}
              url={url}
            />
          </div>
        )
      })}
    </Layout>
  )
}
