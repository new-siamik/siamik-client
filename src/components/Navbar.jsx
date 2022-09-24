import React, { Fragment } from "react"
// import Swal from "sweetalert2"
// import axios from "../api/axios";
// import AuthBtn from "./auth/AuthBtn";
import { NavLink } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react'
// import { EnvelopeIcon } from '@heroicons/react/20/outline'

import "../styles/component/_navbar.scss";

// import Image from "./Image";
import { classes } from "../utils/Classes";
import BtnCustom from "./button/BtnCustom";
import FormInput from "./auth/form/input/FormInput";
import CardPrimary from "../components/card/CardPrimary";
import PasswordField from "../components/auth/form/input/PasswordField"

export default function Navbar() {

    const [values, setValues] = React.useState({
        npm: "",
        password: "",
    });

    const inputs = [
        {
            key: 1,
            type: "email",
            name: "email",
            id: "email",
            errorMessage: "Email harus berupa alamat email yang valid!",
            classname: "mt-7",
            required: true,
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

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

    }

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
                    <ul id="nav_links_item" className="inter">
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
                        <li>
                            <Popover as="div">
                                <Popover.Button className="button-login bg-white focus:outline-none hover:bg-yellow-base ui-open:bg-yellow-base ui-open:ring-2 ui-open:ring-neutral-200 text-gray-800 px-7 py-[0.65rem] shadow-md rounded-[5px]">
                                        Masuk
                                </Popover.Button>
                                <Popover.Overlay className="fixed inset-0 bg-neutral-900 opacity-40" />
                                <Transition
                                    as={Fragment}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Popover.Panel className="form-group fixed top-6 right-0 z-10 flex items-center justify-center overflow-y-auto overflow-x-hidden w-full h-full invisible">
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
                                                        <div className="flex flex-col items-center justify-center">
                                                            {inputs.map((input) => (
                                                                <FormInput
                                                                    key={input.key}
                                                                    {...input}
                                                                    value={values[input.name]}
                                                                    onChange={onChange}
                                                                />
                                                            ))}
                                                            <PasswordField 
                                                                required="required"
                                                                onChange={onChange}
                                                            />
                                                        </div>
                                                        <div className="w-full inter text-right mt-6 font-semibold cursor-pointer text-green-base sm:hover:underline sm:hover:underline-offset-4">
                                                            <h3>Lupa Kata Sandi ?</h3>
                                                        </div>
                                                        <BtnCustom type="submit" classname="btn-form-submit w-full btn-pengumuman inter mt-10 px-7 py-3 rounded-[5px] text-neutral-100 bg-green-base sm:hover:bg-green-base/80 focus:bg-green-base/80">
                                                            Masuk
                                                        </BtnCustom>
                                                    </div> 
                                                </form>
                                            </CardPrimary>
                                        </div>                                            
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </li>

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