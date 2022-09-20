import React from "react"
import { NavLink } from 'react-router-dom';

import "../styles/_home.scss";
import Siamik from "../layouts/Siamik";
import BtnCustom from "../components/button/BtnCustom";
import CardPrimary from "../components/card/CardPrimary";
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
            <main className="home-component">
                <div id="container_home">
                    <article id="welcome_msg" className="text-center p-12 h-[555px]" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
                        <section className="group-image mb-7">
                            <img src="/assets/image/group-image.svg" width={202} height={58} alt="Group Logo" />
                        </section>
                        <section className="text-msg lato space-y-2">
                            <h1>SELAMAT DATANG!</h1>
                            <h3>SIAMIK (Sistem Informasi Akademik) adalah suatu sistem <br /> informasi untuk mengelola KRS, MBKM, Presensi, KHS, Transkrip dalam <br /> penyelenggaraan pendidikan di lingkungan UPNV Jatim.</h3>
                        </section>
                        <section className="other-info mt-12">
                            <div className="box-other-info flex items-center space-x-7">
                                <BtnCustom classname="inter shadow shadow-yellow-400 cursor-default" ripple="hidden">
                                    PERTOR BIDANG 1 <br /> PERTOR NO.9 Tahun 2020
                                </BtnCustom>
                                <BtnCustom classname="inter shadow shadow-yellow-400 cursor-default" ripple="opacity-0">
                                    Mahasiswa Aktif <br /> <span className="text-green-base font-semibold">19,351</span>
                                </BtnCustom>
                                <BtnCustom classname="inter shadow shadow-yellow-400 cursor-default flex flex-col justify-center items-center" ripple="hidden">
                                    <p>AKREDITASI</p>
                                    <p>Institusi BANPT</p>
                                    <p>Program Studi BANPT & FIBAA</p>
                                </BtnCustom>
                            </div>
                        </section>
                    </article>
                    <article id="pengumuman" className="box-content px-28 space-y-7 mt-24">
                        <section className="title-article inter text-[1.25rem]">
                            <h1>Pengumuman</h1>
                        </section>
                        <section className="content-article">
                            <CardPrimary classname="box-pengumuman p-7">
                                <div id="date_pengumuman" className="lato">
                                    <img src="/assets/image/calendar-academic.svg" alt="Icon Calendar Academic" width={20}/>
                                    <h3>19 Agustus 2022 | 14:27 WIB</h3>
                                </div>
                                <div id="content_pengumuman" className="lato">
                                    <h3>Pembuatan KTM Bagi Mhs.2021 yang Bermasalah</h3>
                                    <p>
                                        Bagi mahasiswa TA. 2021, yang bermasalah dalam pembuatan KTM, mohon untuk segera ke Gedung BAKPK untuk meminta SURAT KETERANGAN PEMBUATAN KTM MANUAL dan selanjutnya dapat dipakai untukpembuatan KTM melalui BNI Cabang UPN di Jl. Raya Rungkut Madya Gunung Anyar Surabaya.
                                    </p>
                                </div>
                                <BtnCustom classname="btn-pengumuman inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base hover:bg-green-base/80">
                                    <NavLink to="/">
                                        Lihat PDF
                                    </NavLink>
                                </BtnCustom>
                                <BtnCustom classname="btn-more-pengumuman block ml-auto inter mt-6 px-8 py-3 rounded-[5px] text-green-base hover:text-neutral-100 bg-white hover:bg-green-base transition-colors duration-200">
                                    <NavLink to="#">
                                        Lihat Semua Pengumuman
                                    </NavLink>
                                </BtnCustom>
                            </CardPrimary> 
                        </section>
                    </article>
                    <article id="other_service" className="box-content px-28 space-y-7 mt-24">
                        <section className="title-article inter text-[1.25rem]">
                            <h1>Layanan Lainnya</h1>
                        </section>
                        <section className="content-article">
                            <div className="container lato grid grid-cols-4 gap-8">
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/ukt-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div id="list-wisuda" className="flex flex-col gap-y-4 w-full">
                                        <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2 invisible">
                                            <NavLink to="/wisuda">Wisuda</NavLink>
                                        </BtnCustom>
                                        <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2">
                                            <NavLink to="/layanan-ukt">UKT</NavLink>
                                        </BtnCustom>
                                        <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2 invisible">
                                            <NavLink to="/tracking-ijazah">Tracking Ijazah</NavLink>
                                        </BtnCustom>
                                    </div>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/calendar-academic.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <BtnCustom classname="border-2 border-green-base rounded-[5px]">
                                        <NavLink to="/kalendar-akademik">TA. 2022/2023</NavLink>
                                    </BtnCustom>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/kampus-merdeka-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <BtnCustom classname="border-2 border-green-base rounded-[5px]">
                                        <NavLink to="/mbkm">MBKM</NavLink>
                                    </BtnCustom>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/daftar-peserta-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <BtnCustom classname="border-2 border-green-base rounded-[5px]">
                                        <NavLink to="/daftar-peserta-kuliah">Daftar Peserta Kuliah</NavLink>
                                    </BtnCustom>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/top-score.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <BtnCustom classname="border-2 border-green-base rounded-[5px]">
                                        <NavLink to="/top-score">Top Score</NavLink>
                                    </BtnCustom>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/info-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div id="list-info" className="flex flex-col gap-y-4 w-full">
                                        <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2">
                                            <NavLink to="/info-pkl">Info PKL</NavLink>
                                        </BtnCustom>
                                        <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2">
                                            <NavLink to="/info-skripsi">Info Skripsi</NavLink>
                                        </BtnCustom>
                                        <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2">
                                            <NavLink to="/info-beasiswa">Info Beasiswa</NavLink>
                                        </BtnCustom>
                                    </div>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/bimbingan-konseling-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <BtnCustom classname="border-2 border-green-base rounded-[5px]">
                                        <NavLink to="/layanan-konseling">Bimbingan dan Konseling</NavLink>
                                    </BtnCustom>
                                </CardPrimary>
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/wisuda-tracking-ijazah-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div id="list-wisuda" className="flex flex-col gap-y-4 w-full">
                                        <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2">
                                            <NavLink to="/wisuda">Wisuda</NavLink>
                                        </BtnCustom>
                                        <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2">
                                            <NavLink to="/tracking-ijazah">Tracking Ijazah</NavLink>
                                        </BtnCustom>
                                    </div>
                                </CardPrimary>  
                            </div>
                        </section>
                    </article>
                    <article id="manual_panduan" className="box-content px-28 space-y-7 mt-24">
                        <section className="title-article inter text-[1.25rem]">
                            <h1>Manual / Panduan</h1>
                        </section>
                        <section className="content-article">
                            <div className="container inter">
                                <CardPrimary classname="flex w-full gap-x-16">
                                    <div id="manual-image">
                                        <img src="/assets/image/manual-illus.svg" alt="Gambar Manual/Panduan"/>
                                    </div>
                                    <div id="manual-list" className="pt-12 space-y-12">
                                        <div className="item-list item-1">
                                            <h3>Cara Isi KRS (Kartu Rencana Studi)</h3>
                                            <BtnCustom classname="btn-pengumuman inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base hover:bg-green-base/80">
                                                <NavLink to="/">
                                                    Lihat PDF
                                                </NavLink>
                                            </BtnCustom>
                                        </div>
                                        <div className="item-list item-2">
                                            <h3>Cara Isi KRS (Kartu Rencana Studi)</h3>
                                            <BtnCustom classname="btn-pengumuman inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base hover:bg-green-base/80">
                                                <NavLink to="/">
                                                    Lihat PDF
                                                </NavLink>
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </CardPrimary>
                            </div>
                        </section>
                    </article>
                    <article id="alur" className="box-content px-28 space-y-7 mt-24">
                        <section className="title-article inter text-[1.25rem]">
                            <h1>Alur</h1>
                        </section>
                        <section className="content-article">
                            <div className="container inter">
                                <CardPrimary classname="flex w-full gap-x-16">
                                    <div id="alur-image">
                                        <img src="/assets/image/alur-illus.svg" alt="Gambar Alur"/>
                                    </div>
                                    <div id="alur-list" className="pt-12 space-y-12">
                                        <div className="item-list item-1">
                                            <h3>Alur MBKM Outbond</h3>
                                            <BtnCustom classname="btn-pengumuman inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base hover:bg-green-base/80">
                                                <NavLink to="/">
                                                    Lihat PDF
                                                </NavLink>
                                            </BtnCustom>
                                        </div>
                                        <div className="item-list item-2">
                                            <h3>Alur MBKM Permata Merdeka 42 PTN</h3>
                                            <BtnCustom classname="btn-pengumuman inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base hover:bg-green-base/80">
                                                <NavLink to="/">
                                                    Lihat PDF
                                                </NavLink>
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </CardPrimary>
                            </div>
                        </section>
                    </article>
                    <article id="versi_aplikasi" className="box-content px-28 space-y-7 mt-24">
                        <div className="container">
                            <CardPrimary classname="p-7">
                                <h3 className="inter font-medium text-[20px]">Versi Aplikasi</h3>
                                <div id="versi-list" className="pt-4 lato">
                                    <ul className="space-y-6">
                                        <li>
                                            <span className="font-semibold">01 Juni 2022 </span><br />
                                            Sistem Informasi Akademik (SIAMIK) 2022 Versi 01.30 - <span className="italic">Pendaftaran UAS</span>
                                        </li>
                                        <li>
                                            <span className="font-semibold">26 April 2022 </span><br />
                                            Sistem Informasi Akademik (SIAMIK) 2022 Versi 01.30 - <span className="italic">Reset password SIAMIK Mahasiswa</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardPrimary>
                        </div>
                    </article>
                </div>
            </main>
            <footer className="inter mt-10">
                PROGRESS
            </footer>
        </Siamik>
    )
}