import React from "react"
// import { NavLink } from 'react-router-dom';

import "../styles/_pengumuman.scss";
import Siamik from "../layouts/Siamik";
// import BtnCustom from "../components/button/BtnCustom";
// import CardPrimary from "../components/card/CardPrimary";


export default function Pengumuman() {
    
    return (

        <Siamik
            title="Pengumuman - Sistem Informasi Akademik UPN 'Veteran' Jawa Timur"
            kw="pengumuman siamik, pengumuman new siamik, pengumuman siamik upn jatim, pengumuman siamik upn veteran jatim, pengumuman sistem informasi akademik upn 'veteran' jatim"
            desc="Pengumuman SIAMIK (Sistem Informasi Akademik) 2022 - Adalah Halaman untuk menampilkan informasi-informasi yang himbaukan kepada semua warga universitas."
            ogUrl={""}
            ogType={""}
            ogTitle={""}
            ogDesc={""}
            twitTitle={""}
        >
            <main className="pengumuman-component">
                <div id="container_pengumuman">
                </div>
            </main>
        </Siamik>
    )
    
}