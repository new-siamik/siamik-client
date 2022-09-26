import "../styles/component/_footer.scss"

export default function Footer() {
    return (
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
                                <a href="http://febis.upnjatim.ac.id/">Fakultas Ekonomi dan Bisnis</a>
                            </li>
                            <li>
                                <a href="https://faperta.upnjatim.ac.id/">Fakultas Pertanian</a>
                            </li>
                            <li>
                                <a href="http://ft.upnjatim.ac.id/">Fakultas Teknik</a>
                            </li>
                            <li>
                                <a href="http://fisip.upnjatim.ac.id/">Fakultas Ilmu Sosial dan Politik</a>
                            </li>
                            <li>
                                <a href="http://fad.upnjatim.ac.id/">Fakultas Arsitektur dan Desain</a>
                            </li>
                            <li>
                                <a href="http://fhukum.upnjatim.ac.id/">Fakultas Hukum</a>
                            </li>
                            <li>
                                <a href="http://fasilkom.upnjatim.ac.id/">Fakultas Ilmu Komputer</a>
                            </li>
                            <li>
                                <a href="https://ppmb.upnjatim.ac.id/program-magister/">Pasca Sarjana</a>
                            </li>
                        </ul>
                    </div>
                    <div className="box-item-info lato space-y-2">
                        <h1 className="title-info-footer">
                            Link App UPN Veteran Jawa Timur
                        </h1>
                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <a href="http://www.upnjatim.ac.id/">Web UPN Veteran Jawa Timur</a>
                            </li>
                            <li>
                                <a href="https://siamik.upnjatim.ac.id/pasca/html/siamikpasca/index.asp">Sistem Informasi Akademik Pasca Sarjana</a>
                            </li>
                            <li>
                                <a href="https://siortu.upnjatim.ac.id/">Sistem Informasi Orang Tua</a>
                            </li>
                            <li>
                                <a href="https://simaba.upnjatim.ac.id/index.html">Sistem Informasi Mahasiswa Baru</a>
                            </li>
                            <li>
                                <a href="https://ilmu.upnjatim.ac.id/">E-Learning</a>
                            </li>
                            <li>
                                <a href="http://eprints.upnjatim.ac.id/">E-Print</a>
                            </li>
                            <li>
                                <a href="http://journals.upnjatim.ac.id/">E-Jurnal</a>
                            </li>
                            <li>
                                <a href="https://siamik.upnjatim.ac.id/siska/info.asp">Katalong Online</a>
                            </li>
                            <li>
                                <a href="https://www.upnjatim.ac.id/download-category/dokumen/">Dokumen</a>
                            </li>
                            <li>
                                <a href="http://kiprah.upnjatim.ac.id/">KIPRAH (Knouledgeble Innovative Productive Resilent Agile Honest)</a>
                            </li>
                            <li>
                                <a href="http://saestu.upnjatim.ac.id/">Sistem Informasi Akademik & Kemahasiswaan Satu Pintu</a>
                            </li>
                            <li>
                                <a href="http://siadu.upnjatim.ac.id/">Sistem Informasi Aduan</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article id="copyright_sosmed">
                    <div className="box-copright-sosmed lato text-neutral-300 flex items-center justify-between mt-10 pt-12 border-t border-gray-100 border-solid">
                        <div id="text_copyright">
                            <h1>Copyright @ 2022 Team BAKPK</h1>
                        </div>
                        <div id="sosial_media" className="flex items-center space-x-4">
                            <a href="https://www.instagram.com/upnveteranjawatimur/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D4D4D4"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/c/UPNVeteranJawaTimurOfficial">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D4D4D4"><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/></svg>
                            </a>
                        </div>
                    </div>
                </article>
            </section>
        </footer>
    )
}