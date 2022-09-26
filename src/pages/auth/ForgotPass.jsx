import React from "react";
import { UserIcon, DevicePhoneMobileIcon, CalendarIcon } from '@heroicons/react/24/solid'

import "../../styles/auth/_forgotpass.scss";
import Siamik from "../../layouts/Siamik";
import BtnCustom from "../../components/button/BtnCustom";
import CardPrimary from "../../components/card/CardPrimary";
import FormInput from "../../components/auth/form/input/FormInput";

export default function ForgotPass() {

    const [values, setValues] = React.useState({
        npm: "",
        birthday: "",
        telp: "",
    });

    const inputs = [
        {
            key: 1,
            type: "text",
            name: "npm",
            id: "npm",
            errorMessage: "Kolom NPM harus diisi, Batas 6 - 15 Angka !",
            required: true,
            placeholder: "NPM (Nomor Pokok Mahasiswa)",
            pattern: "(s*(S)s*){6,15}"
        },
        {
            key: 2,
            type: "date",
            name: "birthday",
            id: "birthday",
            errorMessage: "Kolom birthday harus diisi dan sesuai dengan KTP!",
            required: true,
            placeholder: "Nomor Whatsapp"
        },
        {
            key: 3,
            type: "telp",
            name: "telp",
            id: "telp",
            errorMessage: "Min 10 digit angka. Format: 0899-9564-873; 08999564873; +62899-9564-873; +62 899-9564-873; +62 8999564873; +62 899 9564873; +628999564873;",
            required: true,
            placeholder: "Nomor Whatsapp",
            pattern: `(08\\d{1,4}(\\s*[\\-]\\s*)\\d{0,4}(\\s*[\\-]\\s*)\\d{3,5}|08\\d{9,11}$)|(^\\+(?:[0-9] ?){6,13}[0-9]$)|(^(?:(?:\\+|0{0,2})62) ?\\d{0,3}(\\s*[\\-]\\s*)\\d{0,4}(\\s*[\\-]\\s*)\\d{0,5})`
        },
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
        <Siamik
        title="Lupa Password — Sistem Informasi Akademik UPN 'Veteran' Jawa Timur"
        kw="lupa password siamik, lupa password new siamik,lupa password  siamik upn jatim, lupa password siamik upn veteran jatim, lupa password sistem informasi akademik upn 'veteran' jatim"
        desc="Fitur Lupa Password yang memudahkan mahasiswa untuk mengganti kata sandi yang lama dengan kata sandi yang baru"
        ogUrl={""}
        ogType={""}
        ogTitle={""}
        ogDesc={""}
        twitTitle={""}
    >
            <main className="forgotpass-component">
                <div id="container_forgotpass" className="bg-cover bg-no-repeat" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
                    <CardPrimary>
                        <form method="POST"
                            className="bg-white p-10 w-[552px] rounded-b-[8px] overflow-y-scroll"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div id="form-content">
                                <div className="flex flex-col items-center justify-center img-form  space-y-5 mb-6">
                                    <img src="/assets/image/reset.svg" width={82} height={82} alt="Icon Login" />
                                    <h2 className="form-title inter text-center text-[20px] font-bold text-neutral-900 hover:text-neutral-900 ">
                                        Atur Ulang Akun SIAMIK
                                    </h2>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-6">
                                    {inputs.map((input) => (
                                        input.name === "npm" ?
                                            <FormInput
                                                key={input.key}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                            >
                                                <UserIcon className="w-5 h-5 text-green-base" aria-hidden="true" />
                                            </FormInput>
                                        : input.name === "birthday" ?
                                            <FormInput
                                                key={input.key}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                            >
                                                <CalendarIcon className="w-5 h-5 text-green-base" aria-hidden="true" />
                                            </FormInput>
                                        : input.name === "telp" ?
                                            <FormInput
                                                key={input.key}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                            >
                                                <DevicePhoneMobileIcon className="w-5 h-5 text-green-base" aria-hidden="true" />
                                            </FormInput>
                                        : false
                                    ))}
                                </div>
                                <BtnCustom type="submit" classname="btn-form-submit w-full btn-pengumuman inter mt-10 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                    Kirim
                                </BtnCustom>
                            </div> 
                        </form>
                    </CardPrimary>

                </div>
            </main>
        </Siamik>

    )
}