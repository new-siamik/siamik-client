import React from "react"
// import { Navigate } from "react-router-dom"

import "../../styles/student/dashboard/_footerdash.scss"
import "../../styles/student/dashboard/_dashboard.scss";

import Siamik from "../../layouts/Siamik";
import NavDash from "../../pages/student/NavDash"


export default function Dashboard({title, kw, desc, ogUrl, ogType, ogTitle, ogDesc, twitTitle, children}) {

    /* if(!localStorage.id) {
        return <Navigate to="/signin" replace/>  
    } */

    function getDate() {
        let today = new Date()

        return today.toDateString()
    }

    return (
        <Siamik
            title={title}
            kw={kw}
            desc={desc}
            ogUrl={ogUrl}
            ogType={ogType}
            ogTitle={ogTitle}
            ogDesc={ogDesc}
            twitTitle={twitTitle}                
        >

            <article className="dashboard-component">
                <section id="container_dashboard">
                    <article className="content-wrapper md:flex-row flex-col">
                        <nav className="md:hidden bg-green-base text-neutral-100 flex flex-wrap navout-up-dash inter text-center font-semibold items-center justify-between px-4 py-5 w-full">
                            <img src="/assets/image/upn-logo.svg" width={48} height={46} alt="Group Logo" />
                            <h1>Aditya Rizqi Ardhana</h1>
                        </nav>
                        <NavDash />
                        <div className="right-content w-full">
                            <nav className="md:flex hidden nav-up-dash inter font-semibold items-center justify-between px-4 py-5 w-full">
                                <h1>{ getDate() }</h1>
                                <h1>Aditya Rizqi Ardhana</h1>
                            </nav>
                            {children}
                            <footer>
                                <section>
                                    <article id="info_siamik" className="grid w-full pb-10 sm:grid-cols-1 md:grid-cols-2 border-b border-gray-100 border-solid md:space-y-0 space-y-8">
                                        <div className="box-item-info lato space-y-2">
                                            <h1 className="title-info-footer">
                                                BAKPK UPN Veteran Jawa Timur
                                            </h1>
                                            <h2>Kontak Informasi</h2>
                                            <h3>Jalan Raya Rungkut Madya, Gunung Anyar, Surabaya 60294.</h3>
                                            <h3><pre>Telp   : 031-8706369</pre></h3>                           
                                            <h3><pre>Fax    : 031-8706369</pre></h3>
                                            <h3><pre>Email  : admin@upnjatim.ac.id</pre></h3>
                                        </div>
                                        <div className="box-copright-sosmed lato text-neutral-300 flex flex-col md:items-end items-start justify-end space-y-5">
                                            <div id="sosial_media" className="flex items-center space-x-4">
                                                <a href="https://www.instagram.com/upnveteranjawatimur/">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D4D4D4"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
                                                    </svg>
                                                </a>
                                                <a href="https://www.youtube.com/c/UPNVeteranJawaTimurOfficial">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D4D4D4"><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/></svg>
                                                </a>
                                            </div>
                                            <div id="text_copyright">
                                                <h1>Copyright @ 2022 Team BAKPK</h1>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </footer>
                        </div>
                    </article>
                </section>
            </article>

        </Siamik>
    )
}