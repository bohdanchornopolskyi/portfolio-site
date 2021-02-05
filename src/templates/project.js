import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { Github } from "@icons-pack/react-simple-icons"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      longDescription
      url
      urlDeployed
      img {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

function ProjectTemplate({ data }) {
  const projects = data.projectsJson
  const title = projects.title
  const longDescription = projects.longDescription
  const imageData = projects.img.childImageSharp.fluid
  const url = projects.url
  const urlDeployed = projects.urlDeployed

  return (
    <Layout pageTitle={title}>
      <div className="flex flex-col font-sans font-mono text-white m-4 p-4">
        <Image
          className="object-contain h-80 w-80 self-center"
          fluid={imageData}
          alt={title}
        />
        <div className="flex flex-col">
          <h2 className="text-3xl sm:text-xl md:text-2xl p-1 font-semibold">
            {title}
          </h2>
          <p className="p-1 text-xl">{longDescription}</p>
          <Link
            className="flex flex-row hover:text-pink-500 text-xl p-1 pt-2"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <p className="pr-3">Go to GitHub</p> <Github />
          </Link>
          <Link
            className="flex flex-row hover:text-pink-500 text-xl p-1 pt-2"
            href={urlDeployed}
            target="_blank"
            rel="noreferrer"
          >
            <p className="pr-3">
              Check out the deployed version of a project &rarr;
            </p>{" "}
          </Link>
          <Link
            className="hover:text-pink-500 text-2xl p-1 pt-2"
            to={"/projects/"}
          >
            Go Back &rarr;
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectTemplate
