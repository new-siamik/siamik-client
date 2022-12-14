import React from "react"
import { Link } from "react-router-dom"
import Siamik from "../layouts/Siamik";

export default function NotFound() {
    const status = null;

    return (
        <Siamik
            title="404 | Halaman tidak ditemukan"
            kw="siamik not found, siamik halaman tidak ditemukan, siamik id home, siamik halaman tidak ditemukan indonesia"
            desc="Halaman Tidak Ditemukan"
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}
        >
            <article className="notfound-component">
                <div id="container_notfound" className="flex flex-col justify-center items-center text-center space-y-16 py-10">
                    <img src="/asset/img/404.webp" alt="404" width={400}></img>
                    <h1 className="text-gray-800 font-medium poppins text-[1.15rem] leading-normal">Tetap tenang. Coba cek kembali alamat URL yang kamu masukkan atau kembali ke 
                        <Link to="/" className="text-blue-code font-semibold hover:text-orange-code"> Halaman utama</Link>
                    </h1>
                </div>

            </article>
        </Siamik>
    )
}