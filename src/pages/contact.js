import React from 'react'

import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout pageTitle="Contact Page">
            <form class="flex flex-col self-center items-center flex-grow pt-8 w-3/4" action="https://getform.io/f/e7677694-03c2-44a4-82b6-270c0e3157e7" method="POST">
                <div class="flex -mx-3 mb-6 w-3/4 font-moto">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                            Full Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" name="name" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6 w-3/4 font-moto">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6 w-3/4 font-moto">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea class="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" type="text" name="message"></textarea>
                    </div>
                </div>
                <div class="md:flex md:items-center font-moto">
                    <div class="sm:w-2/4 md:w-1/3 ">
                        <button class="shadow bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-green-500 to-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Send
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </Layout>
    )
}

