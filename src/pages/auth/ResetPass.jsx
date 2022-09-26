import React from "react";

import "../../styles/auth/_resetpass.scss";
import Siamik from "../../layouts/Siamik";
import BtnCustom from "../../components/button/BtnCustom";
import CardPrimary from "../../components/card/CardPrimary";
import PasswordField from "../../components/auth/form/input/PasswordField";

export default function ResetPass() {

    const [values, setValues] = React.useState({
        password: "",
        confirmPassword: "",
    });

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
        title="Reset password - Sistem Informasi Akademik UPN 'Veteran' Jawa Timur"
        kw="reset password siamik, reset password new siamik, reset password siamik upn jatim, reset password siamik upn veteran jatim, reset password sistem informasi akademik upn 'veteran' jatim"
        desc="Fitur Reset Password yang memudahkan mahasiswa untuk mengganti kata sandi yang lama dengan kata sandi yang baru"
        ogUrl={""}
        ogType={""}
        ogTitle={""}
        ogDesc={""}
        twitTitle={""}
    >
            <main className="resetpass-component">
                <div id="container_resetpass" className="bg-cover bg-no-repeat" style={{backgroundImage: `url(/assets/image/background-siamik.svg)`}}>
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
                                <div className="flex flex-col items-center justify-center inter space-y-6">
                                    <PasswordField
                                        id="password"
                                        name="password"
                                        required="required"
                                        onChange={onChange}
                                        placeholder="Kata Sandi"
                                        pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,25}$"
                                        errorMessage="Minimal 8-25 karakter, 1 huruf, 1 angka, dan 1 special character!"
                                    />
                                    <PasswordField
                                        required="required"
                                        onChange={onChange}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        pattern={values.password}
                                        placeholder="Konfirmasi Kata Sandi"
                                        errorMessage="Password harus sama dengan password di kolom atas!"
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