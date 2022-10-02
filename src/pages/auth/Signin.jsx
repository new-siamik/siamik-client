import React from "react";

import "../../styles/auth/_signin.scss";
import { UserIcon } from "@heroicons/react/24/solid";
 
import Siamik from "../../layouts/Siamik";
import BtnCustom from "../../components/button/BtnCustom";
import CardPrimary from "../../components/card/CardPrimary";
import FormInput from "../../components/auth/form/input/FormInput";
import PasswordField from "../../components/auth/form/input/PasswordField";

export default function Signin() {

    const [values, setValues] = React.useState({
        npm: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            key: 1,
            type: "text",
            name: "npm",
            id: "npm",
            errorMessage: "Kolom NPM harus diisi, Batas 6 - 15 Angka !",
            required: true,
            pattern: "^[0-9]{6,15}$",
            placeholder: "NPM (Nomor Pokok Mahasiswa)"
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
        <Siamik
        title="Signin | Sistem Informasi Akademik UPN 'Veteran' Jawa Timur"
        kw="signin siamik, signin new siamik, signin siamik upn jatim, signin siamik upn veteran jatim, signin sistem informasi akademik upn 'veteran' jatim"
        desc="Fitur Signin untuk mahasiswa bisa masuk dan mengakses fitur-fitur dari Siamik"
        ogUrl={""}
        ogType={""}
        ogTitle={""}
        ogDesc={""}
        twitTitle={""}
    >
            <main className="signin-component">
                <div id="container_signin" className="bg-cover bg-no-repeat" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
                    <CardPrimary>
                        <form method="POST"
                            className="bg-white p-10 w-[552px] rounded-b-[8px] overflow-y-scroll"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div id="form-content">
                                <div className="flex flex-col items-center justify-center img-form  space-y-5 mb-6">
                                    <img src="/assets/image/login.svg" width={82} height={82} alt="Icon Login" />
                                    <h2 className="form-title inter text-center text-[20px] font-bold text-neutral-900 hover:text-neutral-900 ">
                                        Masuk Ke SIAMIK
                                    </h2>
                                </div>
                                <div className="flex flex-col items-center justify-center inter space-y-6">
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
                    </CardPrimary>

                </div>
            </main>
        </Siamik>

    )
}