import React from "react"

import Layout from "../components/layout"

import myPhoto from "../images/myPhoto.jpg"

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <div className="flex justify-center pt-10">
        <img className="w-3/5 sm:w-2/5 md:w-1/4 lg:w-1/6 rounded-full m-10" src={myPhoto} alt="Portrait" />
      </div>
      <div className="text-white text-xl md:text-2xl lg:text-2xl text-center font-mono pt-10">
        <h1 className="font-semibold">Bohdan Chornopolskyi</h1>
        <p>A self-taught front-end web developer.</p>
      </div>
    </Layout>
  )
}
