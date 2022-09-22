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
                    <article id="welcome_msg" className="text-center p-16 h-[555px]" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
                        <section className="group-image mb-7">
                            <img src="/assets/image/group-image.svg" width={202} height={58} alt="Group Logo" />
                        </section>
                        <section className="text-msg lato space-y-2">
                            <h1>SELAMAT DATANG!</h1>
                            <h3>SIAMIK (Sistem Informasi Akademik) adalah suatu sistem <br /> informasi untuk mengelola KRS, MBKM, Presensi, KHS, Transkrip dalam <br /> penyelenggaraan pendidikan di lingkungan UPNV Jatim.</h3>
                        </section>
                        <section className="other-info mt-12">
                            <div className="box-other-info flex items-center space-x-7">
                                <BtnCustom classname="inter shadow shadow-yellow-400 cursor-default">
                                    PERTOR BIDANG 1 <br /> PERTOR NO.9 Tahun 2020
                                </BtnCustom>
                                <BtnCustom classname="inter shadow shadow-yellow-400 cursor-default">
                                    Mahasiswa Aktif <br /> <span className="text-green-base font-semibold">19,351</span>
                                </BtnCustom>
                                <BtnCustom classname="inter shadow shadow-yellow-400 cursor-default flex flex-col justify-center items-center">
                                    <p>AKREDITASI</p>
                                    <p>Institusi BANPT</p>
                                    <p>Program Studi BANPT & FIBAA</p>
                                </BtnCustom>
                            </div>
                        </section>
                    </article>
                    <article id="pengumuman" className="box-content px-16 space-y-7 mt-24">
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
                    <article id="other_service" className="box-content px-16 space-y-7 mt-24">
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
                    <article id="manual_panduan" className="box-content px-16 space-y-7 mt-24">
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
                    <article id="alur" className="box-content px-16 space-y-7 mt-24">
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
                    <article id="versi_aplikasi" className="box-content px-16 space-y-7 my-24">
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
            <footer>
                <section>
                    <article id="info_siamik" className="grid w-full sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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
                        <div className="box-item-info lato space-y-2">
                            <h1 className="title-info-footer">
                                Website Fakultas
                            </h1>
                            <ul className="list-disc list-inside space-y-3">
                                <li>
                                    <a href="/">Fakultas Ekonomi dan Bisnis</a>
                                </li>
                                <li>
                                    <a href="/">Fakultas Pertanian</a>
                                </li>
                                <li>
                                    <a href="/">Fakultas Teknik</a>
                                </li>
                                <li>
                                    <a href="/">Fakultas Ilmu Sosial dan Politik</a>
                                </li>
                                <li>
                                    <a href="/">Fakultas Arsitektur dan Desain</a>
                                </li>
                                <li>
                                    <a href="/">Fakultas Hukum</a>
                                </li>
                                <li>
                                    <a href="/">Fakultas Ilmu Komputer</a>
                                </li>
                                <li>
                                    <a href="/">Pasca Sarjana</a>
                                </li>
                            </ul>
                        </div>
                        <div className="box-item-info lato space-y-2">
                            <h1 className="title-info-footer">
                                Link App UPN Veteran Jawa Timur
                            </h1>
                            <ul className="list-disc list-inside space-y-3">
                                <li>
                                    <a href="/">Web UPN Veteran Jawa Timur</a>
                                </li>
                                <li>
                                    <a href="/">Sistem Informasi Akademik Pasca Sarjana</a>
                                </li>
                                <li>
                                    <a href="/">Sistem Informasi Orang Tua</a>
                                </li>
                                <li>
                                    <a href="/">Sistem Informasi Mahasiswa </a>
                                </li>
                                <li>
                                    <a href="/">E-Learning</a>
                                </li>
                                <li>
                                    <a href="/">E-Print</a>
                                </li>
                                <li>
                                    <a href="/">E-Jurnal</a>
                                </li>
                                <li>
                                    <a href="/">Katalong Online</a>
                                </li>
                                <li>
                                    <a href="/">Dokumen</a>
                                </li>
                                <li>
                                    <a href="/">KIPRAH (Knouledgeble Innovative Productive Resilent Agile Honest)</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article id="copyright_sosmed">
                        <div className="box-copright-sosmed lato text-neutral-300 flex items-center justify-between mt-10 pt-12 border-t border-gray-100 border-solid">
                            <div id="text-copyright">
                                <h1>Copyright @ 2022 Team BAKPK</h1>
                            </div>
                            <div id="sosial-media" className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D4D4D4"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D4D4D4"><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/></svg>
                            </div>
                        </div>
                    </article>
                </section>
            </footer>
        </Siamik>
    )
}