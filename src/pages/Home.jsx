import React from "react"

import "../styles/_home.scss";
// import { Link } from "react-router-dom"
import Siamik from "../layouts/Siamik";
// import BtnCustom from "../components/BtnCustom";

export default function Home() {

    return (
        <Siamik
            title="SIAMIK - Sistem Informasi Akademik UPN 'Veteran' Jawa Timur"
            kw="siamik, new siamik, siamik upn jatim, siamik upn veteran jatim, sistem informasi akademik upn 'veteran' jatim"
            desc="'SIAMIK (Sistem Informasi Akademik) 2022 - Adalah suatu sistem informasi utk mengelola KRS, MBKM, Presensi, KHS, Transkrip dalam penyelengaraan pendidikan di lingkungan UPN 'Veteran' Jatim."
            ogUrl={""}
            ogType={""}
            ogTitle={""}
            ogDesc={""}
            twitTitle={""}
        >
            <article className="home-component">
                <section id="container_home">
                
                </section>
            </article>
        </Siamik>
    )
}