import React from "react";
/* import useSWR from 'swr'
import axios from "../../api/axios";
import { Dots } from 'loading-animations-react';
*/
import "../../styles/student/dashboard/_kkn.scss";

import Dashboard from "./Dashboard";
import CardCustom from "../../components/card/CardCustom"
import BtnCustom from "../../components/button/BtnCustom";

export default function Kkn() {

    /*     const { data: user } = useSWR( `http://localhost:8080/api/user/id?id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data.users))
    
        const { data: forumLength } = useSWR(`http://localhost:8080/api/forum/count/id?users_id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data))
     */
    return (
        <Dashboard
            title="KKN | SIAMIK UPN 'Veteran' Jatim"
            kw="kkn siamik"
            desc="Informasi KKN Siamik UPN 'Veteran' Jawa Timur"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""
            page="KKN"
        >
            <div className="kkn-component">
                <div id="container_kkn">
                    <article id="container_article_kkn" className="bg-gray-50/75 p-4 space-y-10">
                        <CardCustom classname="p-7">
                            <div id="content_identitas" className="space-y-4 lato leading-7">
                                <h2><strong>NIM</strong>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 19081010178</h2>
                                <h2><strong>Nama</strong>   &nbsp;&nbsp;&nbsp;: Aditya Rizqi Ardhana</h2>
                                <h2><strong>Alamat</strong> &nbsp;: Jln. Randu Barat 1-A / 10, Sidotopo Wetan, Kenjeran, Surabaya, Jawa Timur</h2>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7">
                            <div id="content_kkn_brantas" className="card-content-kkn space-y-4 lato">
                                <h1>1. &nbsp; &nbsp; &nbsp; KKN Brantas Tuntas ( 2017, 2016, 2015 )</h1>
                                <div className="indent-[3.2rem]">
                                    <BtnCustom classname="btn-kkn inter mt-3 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/kkn/umum/Perpanjangan%20Pengumuman%20KKN%20Kolaborasi%20Brantas%20Tuntas%202022.pdf" rel="noopener noreferrer">
                                            Lihat PDF
                                        </a>
                                    </BtnCustom>
                                </div>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7">
                            <div id="content_kkn_tematik_belneg" className="card-content-kkn space-y-4 lato">
                                <h1>2. &nbsp; &nbsp; &nbsp; KKN Tematik Bela Negara ( 2018 )</h1>
                                <div className="indent-[3.2rem]">
                                    <BtnCustom classname="btn-kkn inter mt-3 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/kkn/umum/Pengumuman%20KKN%20Tematik%20Bela%20Negara%202022.pdf" rel="noopener noreferrer">
                                            Lihat PDF
                                        </a>
                                    </BtnCustom>
                                </div>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7">
                            <div id="content_kkn_tematik_mbkm" className="card-content-kkn space-y-4 lato">
                                <h1>3. &nbsp; &nbsp; &nbsp; KKN Tematik MBKM</h1>
                                <div className="indent-[3.2rem]">
                                    <BtnCustom classname="btn-kkn inter mt-3 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/kkn/umum/Rev%202%20Perpanjangan%20Pengumuman%20KKN%20Tematik%20MBKM%20TA.%202022.pdf" rel="noopener noreferrer">
                                            Lihat PDF
                                        </a>
                                    </BtnCustom>
                                </div>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7">
                            <div id="content_daftar_kkn" className="card-content-kkn space-y-4 lato">
                                <h1>4. &nbsp; &nbsp; &nbsp; Daftar KKN ( Kuliah Kerja Nyata )</h1>
                                <div className="indent-[3.2rem]">
                                    <BtnCustom classname="btn-kkn inter mt-3 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/kkn/kkn.asp" rel="noopener noreferrer">
                                            Lihat PDF
                                        </a>
                                    </BtnCustom>
                                </div>
                            </div>
                        </CardCustom>
                    </article>
                </div>
            </div>
        </Dashboard>
    )
}