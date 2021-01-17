import React from 'react'

import NavLinks from "../components/navLinks"

function Layout({ pageTitle, children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-400 via-pink-400 to-blue-500">
            <title>Bohdan Chornopolskyi: {pageTitle}</title>
            <main className="flex flex-col flex-grow">
                {children}
            </main>
            <NavLinks />
        </div>
    )
}

export default Layout
