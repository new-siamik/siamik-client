import React from "react"
// import Swal from "sweetalert2"
// import axios from "../api/axios";
// import AuthBtn from "./auth/AuthBtn";
import { UserIcon } from '@heroicons/react/24/solid'
import { NavLink, useLocation } from 'react-router-dom';

import "../styles/component/_navbar.scss";

// import Image from "./Image";
import { classes } from "../utils/Classes";
import BtnCustom from "./button/BtnCustom";
import FormCard from "./auth/form/FormCard";
import FormInput from "./auth/form/input/FormInput";
import CardPrimary from "../components/card/CardPrimary";
import PasswordField from "../components/auth/form/input/PasswordField"

export default function Navbar() {

    const locPath = useLocation()

    const [values, setValues] = React.useState({
        npm: "",
        password: "",
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

    const [isOpen, setIsOpen] = React.useState(false);
    const open = () => {
        setIsOpen(!isOpen);
    }

    const scrollPeng = () => {
        const scrollTo = document.getElementById('pengumuman').offsetTop
        window.scrollTo({ top: scrollTo-120, behavior: 'smooth'});
    }
    const scrollLay = () => {
        const scrollTo = document.getElementById('other_service').offsetTop
        window.scrollTo({ top: scrollTo-120, behavior: 'smooth'});
    }
    const scrollMan = () => {
        const scrollTo = document.getElementById('manual_panduan').offsetTop
        window.scrollTo({ top: scrollTo-120, behavior: 'smooth'});
    }
    const scrollAlur = () => {
        const scrollTo = document.getElementById('alur').offsetTop
        window.scrollTo({ top: scrollTo-120, behavior: 'smooth'});
    }

    const validatePath = (path) => {
        return locPath.pathname === path
    }

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

    }

    React.useEffect( () => {
        function navActive() {
            window.addEventListener("scroll", () => {
                const div1 = document.getElementById('pengumuman')
                const div2 = document.getElementById('other_service')
                const div3 = document.getElementById('manual_panduan')
                const div4 = document.getElementById('alur')
                const div5 = document.getElementById('versi_aplikasi')
    
                const target1 = document.querySelector('#nav_links_item>li:first-child>span')
                const target2 = document.querySelector('#nav_links_item>li:nth-child(2)>span')
                const target3 = document.querySelector('#nav_links_item>li:nth-child(3)>span')
                const target4 = document.querySelector('#nav_links_item>li:nth-child(4)>span')
                
                let offset = window.pageYOffset+200
    
                if (div1.offsetTop <= offset && div2.offsetTop > offset) {
                    target1.classList.add("nav-active")
                    target2.classList.remove("nav-active")
                    target3.classList.remove("nav-active")
                    target4.classList.remove("nav-active")
                } else if (div2.offsetTop <= offset && div3.offsetTop > offset) {
                    target2.classList.add("nav-active")
                    target1.classList.remove("nav-active")
                    target3.classList.remove("nav-active")
                    target4.classList.remove("nav-active")
                } else if (div3.offsetTop <= offset && div4.offsetTop > offset) {
                    target3.classList.add("nav-active")
                    target1.classList.remove("nav-active")
                    target2.classList.remove("nav-active")
                    target4.classList.remove("nav-active")
                } else if (div4.offsetTop <= offset && div5.offsetTop > offset) {
                    target4.classList.add("nav-active")
                    target1.classList.remove("nav-active")
                    target2.classList.remove("nav-active")
                    target3.classList.remove("nav-active")
                } else {      
                    target1.classList.remove("nav-active")
                    target2.classList.remove("nav-active")
                    target3.classList.remove("nav-active")
                    target4.classList.remove("nav-active")
                }
            })            
        }

        if(locPath.pathname === "/forgot-password" || locPath.pathname === "/reset-password" || locPath.pathname === "/signin") return
        return navActive()

        // eslint-disable-next-line
    }, [])

    return (
        <header>
            <nav id="navbar_component">   
                <div id="nav_brand">
                    <NavLink to="/">
                        <img src="/assets/image/upn-logo.svg" width={50} alt="logo" />
                        <h1 className="inter font-bold">
                            UPN "Veteran" Jawa Timur
                        </h1>
                    </NavLink>        
                </div>

                <div id="nav_icon" onClick={open}  className={
                    classes(isOpen ? "open" : false, "space-y-2")
                }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="nav_links">
                    <ul id="nav_links_item" className="inter space-x-9">
                        {
                            validatePath("/forgot-password") ||  validatePath("/reset-password") || validatePath("/signin") ? 
                                <li>
                                    <BtnCustom classname="button-beranda bg-white focus:outline-none hover:bg-yellow-base text-gray-800 px-7 py-[0.65rem] shadow-md rounded-[5px]">
                                        <NavLink to="/">
                                            Beranda
                                        </NavLink>
                                    </BtnCustom>
                                </li>
                            :
                                <React.Fragment>
                                    <li>
                                        <span onClick={scrollPeng}>
                                            Pengumuman
                                        </span>
                                        {/* <NavLink
                                            className={({ isActive }) =>
                                                isActive ? 'nav-active' : ''
                                            } to="/">
                                            Pengumuman
                                        </NavLink> */}
                                    </li>
                                    <li>
                                        <span onClick={scrollLay}>
                                            Layanan Lainnya
                                        </span>
                                        {/* <NavLink 
                                            className={({ isActive }) =>
                                                    isActive ? 'nav-active' : ''
                                            } to="/layanan">
                                            Layanan Lainnya
                                        </NavLink> */}
                                    </li>
                                    <li>
                                        <span onClick={scrollMan}>
                                            Manual/Panduan
                                        </span>
                                        {/* <NavLink to="/panduan"
                                            className={({ isActive }) =>
                                                isActive ? 'nav-active' : ''
                                            }>
                                            Manual/Panduan
                                        </NavLink> */}
                                    </li>
                                    <li>
                                        <span onClick={scrollAlur}>
                                            Alur
                                        </span>
                                        {/* <NavLink to="/alur"
                                            className={({ isActive }) =>
                                                isActive ? 'nav-active' : ''
                                            }>
                                            Alur
                                        </NavLink> */}
                                    </li>                                    
                                </React.Fragment>
                        }
                        <li className="btn-signin-mobile">
                            <BtnCustom classname={`button-signin bg-white focus:outline-none hover:bg-yellow-base ui-open:bg-yellow-base  ui-open:ring-2 ui-open:ring-neutral-200 text-gray-800 px-7 py-[0.65rem] shadow-md rounded-[5px]`}>
                                <NavLink to="/signin">
                                    Masuk
                                </NavLink>
                            </BtnCustom>
                        </li>
                        {
                            validatePath("/signin") ?
                                false
                            :
                                <li>
                                    <FormCard 
                                        classParent = {`form-card`}
                                        classButton = {`button-login bg-white focus:outline-none hover:bg-yellow-base ui-open:bg-yellow-base  ui-open:ring-2 ui-open:ring-neutral-200 text-gray-800 px-7 py-[0.65rem] shadow-md rounded-[5px]`}
                                        classOverlay = {`fixed inset-0 bg-neutral-900 opacity-40`}
                                        classPanel = {`form-group fixed top-1 right-0 z-10 flex items-center justify-center overflow-y-auto overflow-x-hidden w-full h-full invisible`}
                                    >
                                        <div className="visible relative z-20">
                                            <CardPrimary>
                                                <form method="POST"
                                                    className="relative bg-white p-10 w-[620px] h-[500px] rounded-b-[8px] overflow-y-scroll"
                                                    onSubmit={handleSubmit}
                                                    encType="multipart/form-data"
                                                >
                                                    <div id="form-content">
                                                        <div className="flex justify-center img-form mb-5">
                                                            <img src="/assets/image/login.svg" width={82} height={82} alt="Icon Login" />
                                                        </div>
                                                        <h2 className="form-title inter text-[20px] font-bold text-neutral-900 hover:text-neutral-900 ">Masuk Ke SIAMIK</h2>
                                                        <div className="flex flex-col items-center justify-center mt-6 space-y-6">
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
                                                                errorMessage="Minimal 8-25 karakter. 1 huruf, 1 angka, dan 1 special character!"
                                                            />
                                                        </div>
                                                        <div className="w-full inter text-right mt-6 font-semibold cursor-pointer text-green-base sm:hover:underline sm:hover:underline-offset-4">
                                                            <h3>
                                                                <NavLink to="/forgot-password">
                                                                    Lupa Kata Sandi ?
                                                                </NavLink>
                                                            </h3>
                                                        </div>
                                                        <BtnCustom type="submit" classname="btn-form-submit w-full btn-pengumuman inter mt-10 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                                            Masuk
                                                        </BtnCustom>
                                                    </div> 
                                                </form>
                                            </CardPrimary>
                                        </div>                                            
                                    </FormCard>
                                </li>
                        }

                        {/* {
                            loading ?
                            <Dots className="max-w-[10rem]" text=" " dotColors={['#3A39B4', '#656EE3']}/>
                            :
                            localStorage.id ?
                                <AuthBtn classname={classes(isPopup ? "underline underline-offset-8" : "", "rounded-[5px] auth-links")} onClick={openPopup}>
                                    {
                                        user &&
                                        user.map((e, i) => {
                                            return (
                                                <h1 key={i} className="text-semibold text-[1rem] inline mr-2">{e.name}</h1>
                                            )
                                        })
                                    }
                                    <PopupAuthBtn classname={classes(isPopup ? "active-popup py-2" : "py-0", "right-[4.65rem] top-[13.5rem]" )} show={isPopup} onClickOutside={() => {setIsPopup(false)}}/>
                                </AuthBtn>
                                :
                        } */}
                    </ul>
                </div>

            </nav>
        </header>
    )
}