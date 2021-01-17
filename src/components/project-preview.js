import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { Github } from "@icons-pack/react-simple-icons"

function ProjectPreview({ title, slug, description, imageData, url }) {
    return (
        <div className="flex flex-col lg:flex-row text-white rounded-lg shadow-lg ">
            <Link className="self-center p-2 m-3" to={`/${slug}/`}>
                <Image className="object-contain h-60 sm:h-80 md:h-96 w-60 sm:w-80 md:w-96" fluid={imageData} alt={title} />
            </Link>
            <div className="self-center m-3">
                <h2 className="p-1 text-2xl font-semibold"><Link to={`/${slug}/`}>{title}</Link></h2>
                <p className="p-1 text-xl">{description}</p>
                <Link className="flex flex-row hover:text-pink-500 text-xl p-1 pt-2" href={url} target="_blank" rel="noreferrer">
                    <p className="pr-3">Go to GitHub</p> <Github />
                </Link>
                <p className="hover:text-pink-500 text-xl p-1 pt-2"><Link to={`/${slug}/`}>View this project &rarr;</Link></p>
            </div>
        </div>
    )
}

export default ProjectPreview
