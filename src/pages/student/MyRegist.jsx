import React from "react";
/* import useSWR from 'swr'
import axios from "../../api/axios";
import { Dots } from 'loading-animations-react';
 */
import Dashboard from "./Dashboard";
import "../../styles/student/dashboard/_myregist.scss";

export default function MyRegist() {
    
/*     const { data: user } = useSWR( `http://localhost:8080/api/user/id?id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data.users))

    const { data: forumLength } = useSWR(`http://localhost:8080/api/forum/count/id?users_id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data))
 */
    return (
        <Dashboard
            title="Bukti Registrasi | SIAMIK UPN 'Veteran' Jatim"
            kw="bukti registrasi siamik"
            desc="Bukti Registrasi Siamik UPN 'Veteran' Jawa Timur"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""   
            page="Bukti Registrasi"             
        >
            <div className="myregist-component">
                <div id="container_myregist">
                    <article id="card_regist" className="bg-gray-50/75 p-4">
                        <div className="card-content shadow-md bg-white p-5 space-y-9">
                            <div id="content_identitas" className="space-y-4">
                                <h2>NIM    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 19081010178</h2>
                                <h2>Nama   &nbsp;&nbsp;&nbsp;: Aditya Rizqi Ardhana</h2>
                                <h2>Alamat &nbsp;: Jln. Randu Barat 1-A / 10, Sidotopo Wetan, Kenjeran, Surabaya, Jawa Timur</h2>
                            </div>
                            <div id="regist_information" className="lato">
                                <h2>Kode Registrasi</h2>
                                <h1>GANJIL 22/223 87 21700 ~ 8/4/2022</h1>
                                <h2>SURABAYA, 9/2/2022 7:36:59 PM</h2>
                            </div>
                            <div id="regist_signature" className="flex flex-wrap gap-8 justify-between lato">
                                <div id="kepala_biro_signature" className="signature-content space-y-20">
                                    <h2>Kepala Biro Akademik</h2>
                                    <div className="space-y-6">
                                        <h2>Ttd</h2>
                                        <h2>Drs. Lorem Ipsum</h2>
                                    </div>
                                </div>
                                <div id="doswal_signature" className="signature-content space-y-20">
                                    <h2>Dosen Wali</h2>
                                    <div className="space-y-6">
                                        <h2>Ttd</h2>
                                        <h2>Drs. Lorem Ipsum</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </Dashboard>
    )
}