import React from "react";
/* import useSWR from 'swr'
import axios from "../../api/axios";
import { Dots } from 'loading-animations-react';
 */
import "../../styles/student/dashboard/_myukt.scss";

import Dashboard from "./Dashboard";
import CardCustom from "../../components/card/CardCustom"

export default function MyUkt() {
    
/*     const { data: user } = useSWR( `http://localhost:8080/api/user/id?id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data.users))

    const { data: forumLength } = useSWR(`http://localhost:8080/api/forum/count/id?users_id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data))
 */
    return (
        <Dashboard
            title="Informasi Tagihan UKT | SIAMIK UPN 'Veteran' Jatim"
            kw="informasi tagihan ukt siamik"
            desc="Informasi Tagihan UKT Siamik UPN 'Veteran' Jawa Timur"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""   
            page="Informasi Tagihan UKT"             
        >
            <div className="myukt-component">
                <div id="container_myukt">
                    <article id="card_ukt" className="bg-gray-50/75 p-4">
                        <CardCustom classname="p-7 h-[70vh]">
                            <div id="title_card" className="lato space-y-5">
                                <h2>Informasi Tagihan Pembayaran UKT</h2>
                                <h2>Tanggal : Sabtu, September 3 2022</h2>
                                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-gray-900">
                                        <thead className="text-neutral-100 uppercase bg-green-base text-center">
                                            <tr>
                                                <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                    JP
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                    NA
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                    Jumlah
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                    Denda
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white hover:bg-gray-50 text-center">
                                                <td className="py-4 px-6 text-[1rem] lato">
                                                    06
                                                </td>
                                                <td className="py-4 px-6 text-[1rem] lato">
                                                    01
                                                </td>
                                                <td className="py-4 px-6 text-[1rem] lato">
                                                    15.000.000
                                                </td>
                                                <td className="py-4 px-6 text-[1rem] lato">
                                                    0
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CardCustom>
                    </article>
                </div>
            </div>
        </Dashboard>
    )
}