import React from "react"
// import Swal from "sweetalert2"
// import axios from "../api/axios";
// import AuthBtn from "./auth/AuthBtn";
import { NavLink } from 'react-router-dom';
// import { Dots } from 'loading-animations-react';

// import Image from "./Image";
import "../styles/component/_navbar.scss";
import { classes } from "../utils/Classes";
import BtnCustom from "../components/button/BtnCustom"

export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const open = () => {
        setIsOpen(!isOpen);
    }
    
    // const [user, setUser] = React.useState([])
    // const [loading, setLoading] = React.useState(true)

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
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                } to="/pengumuman">
                                Pengumuman
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) =>
                                        isActive ? 'nav-active' : ''
                                } to="/layanan">
                                Layanan Lainnya
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/panduan"
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }>
                                Manual/Panduan
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/alur"
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }>
                                Alur
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signin"
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                            >
                                <BtnCustom classname="bg-white text-gray-800 px-7 py-[0.65rem] shadow-md rounded-[5px]">
                                    Login
                                </BtnCustom>
                            </NavLink>
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