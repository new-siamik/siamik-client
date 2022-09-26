import React from "react"
import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import "../styles/_home.scss";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import Siamik from "../layouts/Siamik";
import BtnCustom from "../components/button/BtnCustom";
import CardPrimary from "../components/card/CardPrimary";


export default function Home() {
    
    return (

        <Siamik
            title="SIAMIK - Sistem Informasi Akademik UPN 'Veteran' Jawa Timur"
            kw="siamik, new siamik, siamik upn jatim, siamik upn veteran jatim, sistem informasi akademik upn 'veteran' jatim"
            desc="SIAMIK (Sistem Informasi Akademik) 2022 - Adalah suatu sistem informasi utk mengelola KRS, MBKM, Presensi, KHS, Transkrip dalam penyelengaraan pendidikan di lingkungan UPN 'Veteran' Jatim."
            ogUrl={""}
            ogType={""}
            ogTitle={""}
            ogDesc={""}
            twitTitle={""}
        >
            <main className="home-component">
                <div id="container_home">
                    <article id="welcome_msg" className="overflow-x-hidden text-center p-16 h-[555px]" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
                        <section className="group-image mb-7">
                            <img src="/assets/image/group-image.svg" width={202} height={58} alt="Group Logo" />
                        </section>
                        <section className="text-msg lato space-y-2">
                            <h1>SELAMAT DATANG!</h1>
                            <h3>SIAMIK (Sistem Informasi Akademik) adalah suatu sistem <br /> informasi untuk mengelola KRS, MBKM, Presensi, KHS, Transkrip dalam <br /> penyelenggaraan pendidikan di lingkungan UPNV Jatim.</h3>
                        </section>
                        <section className="other-info mt-12">
                            <div className="box-other-info flex items-center space-x-7">
                                <BtnCustom classname="siamik-highlight inter shadow shadow-yellow-400 cursor-default">
                                    PERTOR BIDANG 1 <br /> PERTOR NO.9 Tahun 2020
                                </BtnCustom>
                                <BtnCustom classname="siamik-highlight inter shadow shadow-yellow-400 cursor-default">
                                    Mahasiswa Aktif <br /> <span className="text-green-base font-semibold">19,351</span>
                                </BtnCustom>
                                <BtnCustom classname="siamik-highlight inter shadow shadow-yellow-400 cursor-default flex flex-col justify-center items-center">
                                    <p>AKREDITASI</p>
                                    <p>Institusi BANPT</p>
                                    <p>Program Studi BANPT & FIBAA</p>
                                </BtnCustom>
                            </div>
                            <Splide aria-label="siamik-highlight"
                                options={
                                    {
                                        width: 300,
                                        rewind: true,
                                        snap   : true,
                                        drag   : 'free',
                                        type   : 'loop',
                                        height: '7rem'
                                    }
                                }>
                                    <SplideSlide>
                                        <BtnCustom classname="siamik-highlight inter shadow shadow-yellow-400 cursor-default">
                                            PERTOR BIDANG 1 <br /> PERTOR NO.9 Tahun 2020
                                        </BtnCustom>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <BtnCustom classname="siamik-highlight inter shadow shadow-yellow-400 cursor-default">
                                            Mahasiswa Aktif <br /> <span className="text-green-base font-semibold">19,351</span>
                                        </BtnCustom>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <BtnCustom classname="siamik-highlight inter shadow shadow-yellow-400 cursor-default flex flex-col justify-center items-center">
                                            <p>AKREDITASI</p>
                                            <p>Institusi BANPT</p>
                                            <p>Program Studi BANPT & FIBAA</p>
                                        </BtnCustom>
                                    </SplideSlide>
                                <div className="splide__arrows hidden" />
                            </Splide>
                        </section>
                    </article>
                    <article id="pengumuman" className="box-content sm:px-16 px-[1.5rem] space-y-7 mt-24">
                        <section className="title-article inter text-[1.25rem]">
                            <h1>Pengumuman</h1>
                        </section>
                        <section className="content-article">
                            <CardPrimary classname="box-pengumuman p-7">
                                <div id="date_pengumuman" className="lato">
                                    <img src="/assets/image/calendar-academic.svg" alt="Icon Calendar Academic" width={20}/>
                                    <h3>31 Agustus 2022 | 16:26 WIB</h3>
                                </div>
                                <div id="content_pengumuman" className="lato">
                                    <h3>Rekruitmen Pendamping KKN Tematik MBKM Tahun 2022</h3>
                                    <p>
                                    Rekrutmen Pendamping KKN Tematik MBKM Tahun 2022. Keterangan lebih lanjut bisa lihat pdf dibawah ini.
                                    </p>
                                </div>
                                <BtnCustom classname="btn-pengumuman inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                    <a href="https://siamik.upnjatim.ac.id/html/siamik/umum/rekrutmenPendampingKKNTematikMBKM2022.pdf">
                                        Lihat PDF
                                    </a>
                                </BtnCustom>
                                <BtnCustom classname="btn-more-pengumuman block ml-auto inter mt-6 px-8 py-3 rounded-[5px] text-green-base sm:hover:text-neutral-100 bg-white sm:hover:bg-green-base focus:text-neutral-100 focus:bg-green-base transition-colors duration-200">
                                    <NavLink to="/pengumuman">
                                        Lihat Semua Pengumuman
                                    </NavLink>
                                </BtnCustom>
                            </CardPrimary> 
                        </section>
                    </article>
                    <article id="other_service" className="box-content sm:px-16 px-[1.5rem] space-y-7 mt-24">
                        <section className="title-article inter text-[1.25rem]">
                            <h1>Layanan Lainnya</h1>
                        </section>
                        <section className="content-article">
                            <div className="container lato grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/ukt-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div id="list-wisuda" className="flex flex-col gap-y-4 w-full">
                                        <BtnCustom classname="md:block hidden border-2 border-green-base rounded-[5px] text-left py-1 px-2 invisible">
                                            <NavLink to="/wisuda">Wisuda</NavLink>
                                        </BtnCustom>
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/ukt.asp" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 transition-colors duration-200 sm:hover:bg-green-base/80 sm:hover:text-neutral-100 sm:hover:shadow-md sm:hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 focus:border-green-base/80 focus:shadow-md border-green-base rounded-[5px] text-left py-1 px-2 w-full">
                                                UKT
                                            </BtnCustom>
                                        </a>
                                        <BtnCustom classname="md:block hidden border-2 border-green-base rounded-[5px] text-left py-1 px-2 invisible">
                                            <NavLink to="/tracking-ijazah">Tracking Ijazah</NavLink>
                                        </BtnCustom>
                                    </div>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/calendar-academic.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div className="w-full">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/umum/KALENDER_AKADEMIK-UPNVJT_2022_2023.pdf" download>
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] transition-colors duration-200 sm:hover:bg-green-base/80 sm:hover:text-neutral-100 sm:hover:shadow-md sm:hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 focus:border-green-base/80 focus:shadow-md w-full">
                                                TA. 2022/2023
                                            </BtnCustom>
                                        </a>
                                    </div>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/kampus-merdeka-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div className="w-full">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/mbkm.asp" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] transition-colors duration-200 sm:hover:bg-green-base/80 sm:hover:text-neutral-100 sm:hover:shadow-md sm:hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 focus:border-green-base/80 focus:shadow-md w-full">
                                                MBKM
                                            </BtnCustom>
                                        </a>
                                    </div>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/daftar-peserta-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div className="w-full">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/daftarPesertaKuliah.asp" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] transition-colors duration-200 sm:hover:bg-green-base/80 sm:hover:text-neutral-100 sm:hover:shadow-md sm:hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 focus:border-green-base/80 focus:shadow-md w-full">
                                                Daftar Peserta Kuliah
                                            </BtnCustom>
                                        </a>
                                    </div>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/top-score.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div className="w-full">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/topScoreIPS.asp" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] transition-colors duration-200 sm:hover:bg-green-base/80 sm:hover:text-neutral-100 sm:hover:shadow-md sm:hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 focus:border-green-base/80 focus:shadow-md w-full">
                                                Top Score
                                            </BtnCustom>
                                        </a>
                                    </div>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/info-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div id="list-info" className="flex flex-col gap-y-4 w-full">
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/infoPKL.asp" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2 transition-colors duration-200 sm:hover:bg-green-base/80 sm:hover:text-neutral-100 sm:hover:shadow-md sm:hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 focus:border-green-base/80 focus:shadow-md w-full">
                                                Info PKL
                                            </BtnCustom>
                                        </a>
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/infoSkripsi.asp" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2 transition-colors duration-200 hover:bg-green-base/80 hover:text-neutral-100 hover:shadow-md hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 w-full">
                                                Info Skripsi
                                            </BtnCustom>
                                        </a>
                                        <a href="https://kiprah.upnjatim.ac.id/beasiswa/" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2 transition-colors duration-200 hover:bg-green-base/80 hover:text-neutral-100 hover:shadow-md hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 w-full">
                                                Info Beasiswa
                                            </BtnCustom>
                                        </a>
                                    </div>
                                </CardPrimary> 
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/bimbingan-konseling-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div className="w-full">

                                        <a href="https://kiprah.upnjatim.ac.id/bk/" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] transition-colors duration-200 sm:hover:bg-green-base/80 sm:hover:text-neutral-100 sm:hover:shadow-md sm:hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 focus:border-green-base/80 focus:shadow-md w-full">
                                                Bimbingan dan Konseling
                                            </BtnCustom>
                                        </a>
                                    </div>
                                </CardPrimary>
                                <CardPrimary classname="box-other-service space-x-7">
                                    <div id="icon_service">
                                        <img src="/assets/image/wisuda-tracking-ijazah-icon.svg" alt="Icon UKT" width={80}/>    
                                    </div>
                                    <div id="list-wisuda" className="flex flex-col gap-y-4 w-full">
                                        <a href="https://siamik.upnjatim.ac.id/wisuda2017/index.asp" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2 transition-colors duration-200 sm:hover:bg-green-base/80 sm:hover:text-neutral-100 sm:hover:shadow-md sm:hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 focus:border-green-base/80 focus:shadow-md w-full">
                                                Wisuda
                                            </BtnCustom>
                                        </a>
                                        <a href="https://siamik.upnjatim.ac.id/html/siamik/trackingIjazah.asp" target="__blank" rel="noopener noreferrer">
                                            <BtnCustom classname="border-2 border-green-base rounded-[5px] text-left py-1 px-2 transition-colors duration-200 hover:bg-green-base/80 hover:text-neutral-100 hover:shadow-md hover:border-green-base/80 focus:text-neutral-100 focus:bg-green-base/80 w-full">
                                                Tracking Ijazah
                                            </BtnCustom>
                                        </a>
                                    </div>
                                </CardPrimary>  
                            </div>
                        </section>
                    </article>
                    <article id="manual_panduan" className="box-content sm:px-16 px-[1.5rem] space-y-7 mt-24">
                        <section className="title-article inter text-[1.25rem]">
                            <h1>Manual / Panduan</h1>
                        </section>
                        <section className="content-article">
                            <div className="container inter">
                                <CardPrimary classname="flex w-full gap-x-16">
                                    <div id="manual-image" className="lg:block hidden">
                                        <img src="/assets/image/manual-illus.svg" alt="Gambar Manual/Panduan"/>
                                    </div>
                                    <div id="manual-list" className="p-12 space-y-12">
                                        <div className="item-list item-1">
                                            <h3>Cara Isi KRS (Kartu Rencana Studi)</h3>
                                            <BtnCustom classname="btn-manual inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                                <a href="https://siamik.upnjatim.ac.id/html/siamik/umum/PANDUAN_KRS_UPNV_JATIM.pdf">Lihat PDF</a>
                                            </BtnCustom>
                                        </div>
                                        <div className="item-list item-2">
                                            <h3>Buku Pedoman Akademik</h3>
                                            <BtnCustom classname="btn-manual inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                                <a href="https://siamik.upnjatim.ac.id/html/siamik/bukupedomanakademik.asp">Lihat PDF</a>
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </CardPrimary>
                            </div>
                        </section>
                    </article>
                    <article id="alur" className="box-content sm:px-16 px-[1.5rem] space-y-7 mt-24">
                        <section className="title-article inter text-[1.25rem]">
                            <h1>Alur</h1>
                        </section>
                        <section className="content-article">
                            <div className="container inter">
                                <CardPrimary classname="flex w-full gap-x-16">
                                    <div id="alur-image" className="lg:block hidden">
                                        <img src="/assets/image/alur-illus.svg" alt="Gambar Alur"/>
                                    </div>
                                    <div id="alur-list" className="p-12 space-y-12">
                                        <div className="item-list item-1">
                                            <h3>Alur MBKM Outbond</h3>
                                            <BtnCustom classname="btn-alur inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                                <a href="https://siamik.upnjatim.ac.id/html/siamik/mbkm/SURAT_PEMBERITAHUAN_MBKM_GENAP_2022_MHS.pdf">Lihat PDF</a>
                                            </BtnCustom>
                                        </div>
                                        <div className="item-list item-2">
                                            <h3>Alur MBKM Permata Merdeka 42 PTN</h3>
                                            <BtnCustom classname="btn-alur inter mt-6 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                                <a href="https://siamik.upnjatim.ac.id/html/siamik/images/mbkmPermataMerdeka.jfif">Lihat PDF</a>
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </CardPrimary>
                            </div>
                        </section>
                    </article>
                    <article id="versi_aplikasi" className="box-content sm:px-16 px-[1.5rem] space-y-7 my-24">
                        <div className="container">
                            <CardPrimary classname="p-7">
                                <h3 className="inter font-medium text-[20px]">Versi Aplikasi</h3>
                                <div id="versi-list" className="pt-4 lato">
                                    <ul className="space-y-6">
                                        <li className="flex flex-col space-y-2">
                                            <span className="font-semibold">22 September 2022 </span>
                                            <span>Sistem Informasi Akademik (SIAMIK) 2022 Versi 0.0.2 - <span className="italic">Landing Page</span></span>
                                        </li>
                                    </ul>
                                </div>
                            </CardPrimary>
                        </div>
                    </article>
                </div>
            </main>
        </Siamik>
    )
    
}