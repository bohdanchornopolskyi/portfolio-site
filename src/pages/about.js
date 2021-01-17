import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

export default function AboutPage() {
    return (
        <Layout pageTitle="About Page">
            <div className="flex-grow text-xl text-center font-mono text-white m-5 pt-10 lg:m-15 lg:pt-20 lg:px-10">
                <h1 className="flex flex-col font-sans font-mono text-3xl">About me</h1>
                <p className="font-sans font-mono text-xl font-medium pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quo amet distinctio
                minima natus molestiae ducimus, dolores labore, voluptas provident nam ipsa non culpa
                eum veniam consectetur, rem officiis exercitationem rerum nulla unde laboriosam nisi.
                   Labore quis mollitia molestiae earum pariatur praesentium, rerum optio voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod, corrupti impedit odio praesentium facilis rem, fugiat necessitatibus, modi porro inventore beatae quisquam sed blanditiis ipsam nobis tempora atque esse minus quas. Odio distinctio architecto laborum. Minus delectus atque labore quo veniam corporis voluptatum, quaerat excepturi ducimus nulla laboriosam ut.</p>
                <div className="button text-center font-mono pt-10">
                    <Link to="/projects/" className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl hover:from-pink-500 hover:to-yellow-500 p-2">Check out my projects</Link>
                </div>
            </div>
        </Layout>
    )
}
