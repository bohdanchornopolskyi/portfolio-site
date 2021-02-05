import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <Layout pageTitle="About Page">
      <div className="flex-grow text-xl text-center font-mono text-white m-5 pt-10 lg:m-15 lg:pt-20 lg:px-10">
        <h1 className="flex flex-col font-sans font-mono text-3xl">About me</h1>
        <p className="font-sans font-mono text-xl font-medium pt-5">
          Hello. My name is Bohdan Chornopolskyi. I am a student at Taras
          Shevchenko National University of Kiyv. My specialty is Comouter
          engineering. I am also a front-end web developer(mostly self-taught).
          In my free time I'm lerning modern technologies to improve my skills
          and build more complex projects. Currently I am using such
          technologies as React & Redux, NodeJS, GraphQL, SASS and more. If you
          wand to know me better use the contact form to send me a message.
        </p>
        <div className="button text-center font-mono pt-10">
          <Link
            to="/projects/"
            className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl hover:from-pink-500 hover:to-yellow-500 p-2"
          >
            Check out my projects
          </Link>
        </div>
      </div>
    </Layout>
  )
}
