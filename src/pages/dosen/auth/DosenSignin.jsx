import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

import "../../../styles/dosen/auth/_dosensignin.scss";

import AdminDosen from "../../../layouts/AdminDosen";
import BtnCustom from "../../../components/button/BtnCustom";
import FormInput from "../../../components/auth/form/input/FormInput";
import PasswordField from "../../../components/auth/form/input/PasswordField";

export default function AdminSignin() {

    const [values, setValues] = React.useState({
        nip: "",
        password: "",
    });

    const inputs = [
        {
            key: 1,
            type: "text",
            name: "nip",
            id: "nip",
            errorMessage: "Kolom NIP/NPT harus diisi, Batas 6 - 15 Angka !",
            required: true,
            placeholder: "NIP/NPT",
            pattern: "(s*(S)s*){6,15}"
        }
    ]


    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = () => {
    
    }
    
    return (
        <AdminDosen
            title="Masuk - Dosen Sistem Informasi Akademik UPN 'Veteran' Jawa Timur"
            kw="dosen password siamik, dosen password new siamik, dosen password siamik upn jatim, dosen password siamik upn veteran jatim, dosen password sistem informasi akademik upn 'veteran' jatim"
            desc="Halaman Signin - Dosen UPN 'Veteran' Jawa Timur"
            ogUrl={""}
            ogType={""}
            ogTitle={""}
            ogDesc={""}
            twitTitle={""}
        >
            <main className="dosensignin-component">
                <div id="container_dosensignin" className="grid grid-cols-1 sm:grid-cols-2 h-screen">
                    <div id="image_dosen_signin" className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>       
                    </div>
                    <div className="flex flex-col items-center justify-center sm:px-8 md:px-12 lg:px-20">
                        <form method="POST"
                            className="bg-white"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div id="form-content">
                                <div className="img-form space-y-5 mb-6">
                                    <img src="/assets/image/upn-logo.svg" width={80} alt="logo UPN Veteran Jatim" />
                                    <h1 className="form-title lato text-[20px] font-semibold text-neutral-900 hover:text-neutral-900 ">
                                        Masuk Ke SIDOS 
                                    </h1>
                                    <p className="form-title inter font-normal hover:text-neutral-900 ">
                                        SIDOS adalah sistem informasi yang dipergunakan untuk Dosen dilingkungan UPN Veteran Jawa Timur, meliputi Perwalian Mahsiswa, Pengisian Beban Kerja Dosen, Lihat Presensi, Absensi Kuliah 
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center inter space-y-6">
                                    {
                                        inputs.map(input => (
                                        input.name === "nip" ?
                                            <FormInput
                                                key={input.key}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                            >
                                                <UserIcon className="w-5 h-5 text-green-base" aria-hidden="true" />
                                            </FormInput>
                                        : false
                                    ))}
                                    <PasswordField
                                        id="password"
                                        name="password"
                                        required="required"
                                        onChange={onChange}
                                        placeholder="Kata Sandi"
                                        pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,25}$"
                                        errorMessage="Minimal 8-25 karakter, 1 huruf, 1 angka, dan 1 special character!"
                                    />
                                </div>
                                <BtnCustom type="submit" classname="btn-form-submit w-full btn-pengumuman inter mt-10 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                    Masuk
                                </BtnCustom>
                            </div> 
                        </form>
                    </div>
                </div>
            </main>
        </AdminDosen>
    )
}