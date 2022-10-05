import React from "react";
import { NavLink } from "react-router-dom";
/* import useSWR from 'swr'
import axios from "../../api/axios";
import { Dots } from 'loading-animations-react';
*/
import "../../styles/student/dashboard/_mbkm.scss";

import Dashboard from "./Dashboard";
import CardCustom from "../../components/card/CardCustom"
export default function Mbkm() {
    
/*     const { data: user } = useSWR( `http://localhost:8080/api/user/id?id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data.users))

    const { data: forumLength } = useSWR(`http://localhost:8080/api/forum/count/id?users_id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data))
 */
    return (
        <Dashboard
            title="MBKM | SIAMIK UPN 'Veteran' Jatim"
            kw="mbkm siamik"
            desc="Informasi MBKM Siamik UPN 'Veteran' Jawa Timur"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""   
            page="MBKM"             
        >
            <div className="mbkm-component">
                <div id="container_mbkm">
                    <article id="container_mbkm" className="bg-gray-50/75 p-4 space-y-10">
                        <CardCustom classname="p-7">
                            <div id="content_identitas" className="space-y-4 lato leading-7">
                                <h2><strong>NIM</strong>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 19081010178</h2>
                                <h2><strong>Nama</strong>   &nbsp;&nbsp;&nbsp;: Aditya Rizqi Ardhana</h2>
                                <h2><strong>Alamat</strong> &nbsp;: Jln. Randu Barat 1-A / 10, Sidotopo Wetan, Kenjeran, Surabaya, Jawa Timur</h2>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7">
                            <div id="content_permadi" className="card-content-mbkm space-y-4 lato">
                                <h1>1. &nbsp; &nbsp; &nbsp; Permadi</h1>
                                <p>Keterangan : <span>Pertukaran Mahasiswa Antar Program Studi dilingkungkan UPN Veteran Jawa Timur</span></p>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7">
                            <div id="content_permata" className="card-content-mbkm space-y-4 lato">
                                <h1>2. &nbsp; &nbsp; &nbsp; Permata OUT</h1>
                                <p>Keterangan : <span>Pertukaran Mahasiswa Antar Perguruan Tinggi</span></p>
                                <ol className="space-y-4 list-decimal list-inside sm:indent-[3.2rem]">
                                    <li>
                                        <strong>Permata Merdeka 42 PTN</strong>
                                        <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                            <li>
                                                <NavLink className="link-mbkm" to="/dashboard/my">Daftar Permata Merdeka 42 PTN</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="link-mbkm" to="/dashboard/my">Lihat Akun Pendaftaran Permata Merdeka 42 PTN</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="link-mbkm" to="https://permatamerdeka.ulm.ac.id/">Isi KRS MBKM 42 PTN</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="link-mbkm" to="/dashboard/my">Harus Isi KRS di SIAMIK</NavLink>
                                            </li>
                                            <li>
                                                <a href="https://siamik.upnjatim.ac.id/html/siamik/mbkm/SURAT_PEMBERITAHUAN_MBKM_GENAP_2022_MHS.pdf" target="__blank" rel="nooopener noreferrer">Alur MBKM 42 PTN</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>
                                            <NavLink className="link-mbkm" to="/">Permata Kemendikbud (Alur)</NavLink>
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            <NavLink className="link-mbkm" to="/">Konsorsium (ALur)</NavLink>
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            <a className="link-mbkm" href="https://siamik.upnjatim.ac.id/html/siamik/mbkm/SURAT_PEMBERITAHUAN_MBKM_GENAP_2022_MHS.pdf">Alur Permata OUT</a>
                                        </strong>
                                    </li>
                                </ol>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7">
                            <div id="content_nonkuliah" className="card-content-mbkm space-y-4 lato">
                                <h1>3. &nbsp; &nbsp; &nbsp; MBKM Non Kuliah</h1>
                                <ul className="space-y-1 max-w-md list-disc list-inside sm:indent-[3.2rem]">
                                    <li>
                                        <NavLink className="link-mbkm" to="/dashboard/my">Magang</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="link-mbkm" to="/dashboard/my">Komcad (Komponen Cadangan)</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="link-mbkm" to="/dashboard/my">Indonesia Mengajar</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="link-mbkm" to="/dashboard/my">KKN MBKM</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7">
                            <div id="content_ict" className="card-content-mbkm space-y-4 lato">
                                <h1>4. &nbsp; &nbsp; &nbsp; ICT</h1>
                            </div>
                        </CardCustom>
                    </article>
                </div>
            </div>
        </Dashboard>
    )
}