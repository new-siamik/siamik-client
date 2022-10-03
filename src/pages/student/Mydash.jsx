import React from "react";
/* import useSWR from 'swr'
import axios from "../../api/axios";
import { Dots } from 'loading-animations-react';
 */
import Dashboard from "./Dashboard";
import "../../styles/student/dashboard/_mydash.scss";
import CardCustom from "../../components/card/CardCustom";

export default function Mydash() {
    
/*     const { data: user } = useSWR( `http://localhost:8080/api/user/id?id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data.users))

    const { data: forumLength } = useSWR(`http://localhost:8080/api/forum/count/id?users_id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data))
 */
    return (
        <Dashboard
            title="Dashboard | SIAMIK UPN 'Veteran' Jatim"
            kw="dashboard siamik"
            desc="Dashboard siamik"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""  
            page="Beranda"              
        >
            <div className="mydash-component">
                <div id="container_mydash">
                    <article id="headline_msg" className="bg-cover bg-no-repeat bg-center h-[463px]" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
                        <div className="text-headline lato text-center flex justify-center items-center h-full">
                            <h1>SISTEM INFORMASI AKADEMIK <br />SIAMIK 2022</h1>
                        </div>
                    </article>
                    <article id="data_content" className="px-5 lato">
                        <section id="data_profile" className="py-5 space-y-6 box-data-content">
                            <h1>Data Diri</h1>
                            <CardCustom classname="p-7 flex justify-between">
                                <div id="profile_text" className="box-data-text flex flex-col flex-wrap gap-6">
                                    <div className="space-y-2">
                                        <h2>Nama</h2>
                                        <h3>Aditya Rizqi Ardhana</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <h2>NPM</h2>
                                        <h3>190810100000</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <h2>Alamat</h2>
                                        <h3>Lorem Ipsum</h3>
                                    </div>
                                </div>
                                <div id="profile_image" className="box-data-image">
                                    <div>
                                        <img src="/assets/image/aditya.jpg" width={217} alt="Foto User" className="aspect-square object-cover object-top rounded-[10px]" />
                                    </div>
                                </div>
                            </CardCustom>
                        </section>
                        <section id="data_akademik" className="py-5 space-y-6 box-data-content">
                            <h1>Data Akademik</h1>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                <CardCustom classname="p-7">
                                    <div id="left_text" className="box-data-text space-y-5">
                                        <div className="space-y-2">
                                            <h2>Dosen Wali</h2>
                                            <h3>Fetty Tri Anggraeny, S.Kom., M.Kom</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Status Registrasi</h2>
                                            <h3>A</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Tanggal Registrasi</h2>
                                            <h3>Kamis, 4 Agustus 2022</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Jenis kelamin</h2>
                                            <h3>Laki - Laki</h3>
                                        </div>
                                    </div>
                                </CardCustom>
                                <CardCustom classname="p-7">
                                    <div id="right_text" className="box-data-text space-y-5">
                                        <div className="space-y-2">
                                            <h2>Fakultas</h2>
                                            <h3>Ilmu Komputer</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Prodi</h2>
                                            <h3>Informatika</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Dekan Ilmu Komputer</h2>
                                            <h3>Dr. Ir. Ni Ketut Sari, MT</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>KoorProgdi Informatika</h2>
                                            <h3>Budi Nugroho, S.Kom., M.Kom.</h3>
                                        </div>
                                    </div>
                                </CardCustom>
                            </div>
                        </section>
                        <section id="data_kontak" className="py-5 space-y-6 box-data-content">
                            <h1>Data Kontak Mahasiswa</h1>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                                <CardCustom classname="p-7">
                                    <div id="left_text" className="box-data-text space-y-5">
                                        <div className="space-y-2">
                                            <h2>No. HP Mahasiswa</h2>
                                            <h3>081243762888</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>No. HP Orang Tua</h2>
                                            <h3>081228876653</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Daerah Asal</h2>
                                            <h3>Surabaya</h3>
                                        </div>
                                    </div>
                                </CardCustom>
                                <CardCustom classname="p-7">
                                    <div id="center_text" className="box-data-text gap-6">
                                        <div className="space-y-2">
                                            <h2>Jenis Mahasiswa</h2>
                                            <h3>SNMPTN</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Golongan UKT</h2>
                                            <h3>5</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Tahun Masuk</h2>
                                            <h3>2019</h3>
                                        </div>
                                    </div>
                                </CardCustom>
                                <CardCustom classname="p-7">
                                    <div id="center_text" className="box-data-text space-y-5">
                                        <div className="space-y-2">
                                            <h2>Nama Orang Tua</h2>
                                            <h3>Lorem Ipsum</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Alamat Orang Tua</h2>
                                            <h3>Lorem Ipsum Dimsum, Surabaya</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <h2>Pekerjaan</h2>
                                            <h3>Google Programmer</h3>
                                        </div>
                                    </div>
                                </CardCustom>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </Dashboard>
    )
}