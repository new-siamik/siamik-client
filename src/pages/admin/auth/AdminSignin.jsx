import React from "react";
import { NavLink } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";

import "../../../styles/admin/auth/_adminsignin.scss";

import Admin from "../../../layouts/Admin";
import BtnCustom from "../../../components/button/BtnCustom";
import CardPrimary from "../../../components/card/CardPrimary";
import FormInput from "../../../components/auth/form/input/FormInput";
import PasswordField from "../../../components/auth/form/input/PasswordField";

export default function ResetPass() {

    const [values, setValues] = React.useState({
        username: "",
        password: "",
    });

    const inputs = [
        {
            key: 1,
            type: "text",
            name: "username",
            id: "username",
            errorMessage: "Nama harus memiliki minimal 3-20 karakter tanpa special character!",
            required: true,
            pattern: "^[w a-zA-Z0-9]{3,50}$",
            placeholder: "Username",
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
        <Admin
        title="Signin — Admin Sistem Informasi Akademik UPN 'Veteran' Jawa Timur"
        kw="admin password siamik, admin password new siamik, admin password siamik upn jatim, admin password siamik upn veteran jatim, admin password sistem informasi akademik upn 'veteran' jatim"
        desc="Halaman Signin - Admin UPN 'Veteran' Jawa Timur"
        ogUrl={""}
        ogType={""}
        ogTitle={""}
        ogDesc={""}
        twitTitle={""}
    >
            <main className="adminsignin-component">
                <div id="container_adminsignin" className="bg-cover bg-no-repeat h-screen space-y-9 sm:space-y-14" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
                    <div id="brand">
                        <NavLink to="/">
                            <img src="/assets/image/upn-logo.svg" width={50} alt="logo" />
                            <h1 className="inter font-bold">
                                UPN "Veteran" Jawa Timur
                            </h1>
                        </NavLink>        
                    </div>
                    <CardPrimary>
                        <form method="POST"
                            className="bg-white p-10 w-[552px] rounded-b-[8px] overflow-y-scroll"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div id="form-content">
                                <div className="flex flex-col items-center justify-center img-form  space-y-5 mb-6">
                                    <img src="/assets/image/Login.svg" width={82} height={82} alt="Icon Login" />
                                    <h2 className="form-title inter text-center text-[20px] font-bold text-neutral-900 hover:text-neutral-900 ">
                                        Masuk Sebagai Admin 
                                    </h2>
                                </div>
                                <div className="flex flex-col items-center justify-center inter space-y-6">
                                    {
                                        inputs.map(input => (
                                        input.name === "username" ?
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
        </Admin>
    )
}