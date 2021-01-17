import React from 'react'
import { Link } from "gatsby"

import { Instagram, Twitter, Github, Facebook } from "@icons-pack/react-simple-icons"

function navLinks() {
  return (
    <div className="pb-12">
      <div className="flex justify-center pt-4 py-4 px-12">
        <Link to="/" activeStyle={{ color: "rgba(236, 72, 153, var(--tw-text-opacity))" }} className=" lg:inline-block lg:mt-0 text-white  hover:text-pink-500 p-2 sm:p-3 md:p-4 font-sans font-mono text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium">
          Home
              </Link>
        <Link to="/about/" activeStyle={{ color: "rgba(236, 72, 153, var(--tw-text-opacity))" }} className=" lg:inline-block lg:mt-0 text-white  hover:text-pink-500 p-2 sm:p-3 md:p-4 font-sans font-mono text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium">
          About
              </Link>
        <Link to="/projects/" activeStyle={{ color: "rgba(236, 72, 153, var(--tw-text-opacity))" }} className=" lg:inline-block lg:mt-0 text-white  hover:text-pink-500 p-2 sm:p-3 md:p-4 font-sans font-mono text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium">
          Projects
              </Link>
        <Link to="/contact/" activeStyle={{ color: "rgba(236, 72, 153, var(--tw-text-opacity))" }} className=" lg:inline-block lg:mt-0 text-white  hover:text-pink-500 p-2 sm:p-3 md:p-4 font-sans font-mono text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium">
          Contact
              </Link>
      </div>
      <div className="flex items-center justify-center h-10 text-base md:text-xl">
        <a className="fill-current text-white hover:text-pink-500 mr-4" href="//www.instagram.com/shmodya/" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
        <a className="fill-current text-white hover:text-pink-500 mr-4" href="//twitter.com/chornopolskiy/" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        <a className="fill-current text-white hover:text-pink-500 mr-4" href="//github.com/bohdanchornopolskyi/" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a className="fill-current text-white hover:text-pink-500 mr-4" href="//www.facebook.com/bogdan.chornopolskiy/" target="_blank" rel="noreferrer">
          <Facebook />
        </a>
      </div>
    </div>
  )
}

export default navLinks
