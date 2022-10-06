import React, { Fragment } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { ChevronRightIcon } from "@heroicons/react/24/solid";
/* import useSWR from 'swr'
import axios from "../../api/axios";
import { Dots } from 'loading-animations-react';
*/

import "../../styles/student/dashboard/_khs.scss";

import Dashboard from "./Dashboard";
import CardCustom from "../../components/card/CardCustom"
import BtnCustom from "../../components/button/BtnCustom";

export default function Mbkm() {

    const periode = [
        { id: 1, year: '2019/2020', status: "Genap" },
        { id: 2, year: '2020/2021', status: "Ganjil" },
        { id: 3, year: '2021/2022', status: "Genap" },
    ]

    const [selected, setSelected] = React.useState(periode[periode.length-1])

    const print = () => { window.print()}

    /*     const { data: user } = useSWR( `http://localhost:8080/api/user/id?id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data.users))
    
        const { data: forumLength } = useSWR(`http://localhost:8080/api/forum/count/id?users_id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data))
     */
    return (
        <Dashboard
            title="Kartu Hasil Studi ( KHS ) | SIAMIK UPN 'Veteran' Jatim"
            kw="khs siamik"
            desc="Informasi Kartu Hasil Studi ( KHS ) Siamik UPN 'Veteran' Jawa Timur"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""
            page="Kartu Hasil Studi ( KHS )"
        >
            <div className="khs-component">
                <div id="container_khs">
                    <article id="container_article_khs" className="bg-gray-50/75 p-4 space-y-10">
                        <CardCustom classname="p-7">
                            <div id="content_identitas" className="space-y-4 lato leading-7">
                                <h2><strong>NIM</strong>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 19081010178</h2>
                                <h2><strong>Nama</strong>   &nbsp;&nbsp;&nbsp;: Aditya Rizqi Ardhana</h2>
                                <h2><strong>Alamat</strong> &nbsp;: Jln. Randu Barat 1-A / 10, Sidotopo Wetan, Kenjeran, Surabaya, Jawa Timur</h2>
                            </div>
                        </CardCustom>
                        <CardCustom classname="p-7 h-[70vh] space-y-6">
                            <div id="button_card" className="flex items-center justify-between lato">
                                <div id="btn_periode">
                                    <Listbox value={selected} onChange={setSelected}>
                                        <Listbox.Button className="btn-periode inter text-neutral-100 focus:outline-none w-[15.5rem] bg-green-base sm:hover:bg-green-base/80 px-6 py-3 rounded-[5px] ui-open:opacity-80">
                                            <div className="flex items-center justify-between space-x-8">
                                                <h1 className="truncate">{selected.status} | {selected.year}</h1>
                                                <ChevronRightIcon className="w-5 h-5 text-neutral-100 ui-open:rotate-90 transition-transform" aria-hidden="true" />
                                            </div>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Listbox.Options className="absolute w-[15.5rem] overflow-auto rounded-md bg-white py-3 px-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {periode.map( (item) => (
                                                    <Listbox.Option
                                                        value={item}
                                                        key={item.id}
                                                        className="cursor-pointer select-none py-2 px-4 ui-active:bg-amber-100 ui-active:text-amber-800 ui-checked:bg-amber-100 rounded-md"
                                                    >
                                                        <li>
                                                            <span className={`block truncate`}>
                                                            {item.year}
                                                            </span>
                                                        </li>
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </Listbox>
                                </div>
                                <div id="btn_cetak">
                                    <BtnCustom classname="inter bg-green-base sm:hover:bg-green-base/80 px-9 py-3 rounded-[5px] text-neutral-100" onClick={print}>
                                        <h2>Cetak</h2>
                                    </BtnCustom>
                                </div>
                            </div>
                            <div id="card_table" className="overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full border-collapse text-gray-900">
                                    <thead className="text-neutral-100 bg-green-base text-center">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                No
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                Kode
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                Mata Kuliah
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                SKS
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                Kelas 
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                UTS
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                UAS
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                Praktikum
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                Nilai
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                Kredit
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-[1rem] lato">
                                                N x K
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white hover:bg-gray-50 text-center">
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                1
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                DK413B
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                Web Design 30
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                3
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                G004
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                80
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                80
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                0
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                A
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                3.75
                                            </td>
                                            <td className="py-4 px-6 text-[1rem] lato">
                                                11.25
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="border-t border-solid border-neutral-300 inter text-center">
                                        <tr>
                                            <td colSpan="8" className="py-4 border-r border-solid border-neutral-300">Indeks Prestasi</td>
                                            <td colSpan="3" className="py-4">3.90</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </CardCustom>
                    </article>
                </div>
            </div>
        </Dashboard>
    )
}