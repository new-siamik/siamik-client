import React from "react"

import "../styles/_home.scss";
// import { Link } from "react-router-dom"
import Siamik from "../layouts/Siamik";
import BtnCustom from "../components/button/BtnCustom";
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
                <div id="container_home" className="h-[555px]" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
                    <article id="welcome_msg" className="text-center p-12">
                        <section className="group-image mb-7">
                            <img src="/assets/image/group-image.svg" width={202} height={58} alt="Group Logo" />
                        </section>
                        <section className="text-msg lato space-y-2">
                            <h1>SELAMAT DATANG!</h1>
                            <h3>SIAMIK (Sistem Informasi Akademik) adalah suatu sistem <br /> informasi untuk mengelola KRS, MBKM, Presensi, KHS, Transkrip dalam <br /> penyelenggaraan pendidikan di lingkungan UPNV Jatim.</h3>
                        </section>
                        <section className="other-info mt-12">
                            <div className="box-other-info flex items-center space-x-7">
                                <BtnCustom classname="inter">
                                    PERTOR BIDANG 1 <br /> PERTOR NO.9 Tahun 2020
                                </BtnCustom>
                                <BtnCustom classname="inter">
                                    Mahasiswa Aktif <br /> <span className="text-green-base font-semibold">19,351</span>
                                </BtnCustom>
                                <BtnCustom classname="inter flex flex-col justify-center items-center">
                                    <p>AKREDITASI</p>
                                    <p>Institusi BANPT</p>
                                    <p>Program Studi BANPT & FIBAA</p>
                                </BtnCustom>
                            </div>
                        </section>
                    </article>
                    <article id="pengumuman">
                        <section className="title-article">
                            <h1>Pengumuman</h1>
                        </section>
                    </article>
                </div>
            </main>
        </Siamik>
    )
}