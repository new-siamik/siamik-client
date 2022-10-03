import React from "react"
import Collapse from "@kunukn/react-collapse";
/* import useSWR from 'swr'
import Swal from "sweetalert2"
import axios from "../../api/axios";
 */import { NavLink, useLocation } from "react-router-dom"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import { Dots } from 'loading-animations-react';

export default function NavDash() {

    const location = useLocation();
    
    const options = [
        {
            id: 1,
            name: "Beranda",
            link: "/dashboard/my",
        },
        {
            id: 2,
            name: "Status UKT",
            link: true,
            child: [
                {
                    id: 2.1,
                    name: "Bukti Registrasi",
                    link: "/dashboard/ukt/bukti-registrasi",
                },
                {
                    id: 2.2,
                    name: "Info Bayar UKT",
                    link: "/dashboard/ukt/pembayaran",
                }
            ]
        },
        {
            id: 3,
            name: "MBKM",
            link: "/dashboard/mbkm",
        },
        {
            id: 4,
            name: "KKN",
            link: "/dashboard/kkn",
        },
        {
            id: 5,
            name: "KHS",
            link: "/dashboard/khs",
        },
        {
            id: 6,
            name: "Transkrip",
            link: "/dashboard/transkrip",
        },
        {
            id: 7,
            name: "Presensi",
            link: "/dashboard/presensi",
        },
        {
            id: 8,
            name: "Daftar PKL",
            link: "/dashboard/pkl",
        },
        {
            id: 9,
            name: "Daftar Skripsi",
            link: "/dashboard/skripsi",
        },
    ]

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeText, setActiveText] = React.useState();

    const onInit = ({ state, style, node }) => {
        setIsOpen(true);
      };
    
    const getTargetNameWithCurrentUrl = () => {
        options.map(option => (
            location.pathname === option.link ?
                setActiveText(option.name)
            :
            option.child?.map(child => (
                location.pathname === child.link ?
                    setActiveText(child.name)
                :
                    false
            ))
        ))
    }

    React.useEffect(() => {
        getTargetNameWithCurrentUrl()
        // eslint-disable-next-line
    }, [])

/*     const { data: user } = useSWR( `http://localhost:8080/api/user/id?id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data.users).catch( er => {
        Swal.fire({
            timer: 5000,
            icon: 'error',
            titleText: 'Maaf, User tidak ada',
            showConfirmButton: false,
            text: `${er.message}`,
            customClass: {
                container: 'poppins',
            }
        })
    }))
 */

    return (
        <div className="left-content md:w-[300px] w-full sticky top-0 md:h-screen h-auto md:space-y-10 space-y-0">
            <div className="first-left md:flex hidden items-center">
                <div className="logo-wrapper flex space-x-7 w-full">
                    <img src="/assets/image/upn-logo.svg" width={48} height={46} alt="Group Logo" />
                    <div className="text-logo lato">
                        <h1>SIAMIK</h1>
                        <h2>Sistem Akademik</h2>
                    </div>
                </div>
            </div>
            <div className="second-left">
                <nav className="nav-dashboard">
                    <details className="md:hidden block inter relative w-full mr-[1rem]">
                        <summary className="summary-navside">
                            { activeText }
                        </summary>
                        <ul>
                            {
                                options.map(option => (
                                    option.hasOwnProperty('child') ?
                                        <React.Fragment key={2}>
                                            <li  className="flex items-center justify-between cursor-pointer have-child" onClick={() => {
                                                setIsOpen(state => !state)
                                            }}>
                                                <h3>
                                                    { option.name }
                                                </h3>
                                                {
                                                    isOpen ?
                                                        <ChevronRightIcon className="w-5 h-5 text-neutral-900" aria-hidden="true" />
                                                    :
                                                        <ChevronDownIcon className="w-5 h-5 text-neutral-900" aria-hidden="true" />
                                                }
                                            </li>
                                            <Collapse isOpen={!isOpen} onInit={onInit} style={{margin: 0}} elementType="div" className={`collapse-css-transition`}>
                                                    {
                                                        option.child.map( itemChild => (
                                                            <li key={itemChild.id} className="pt-6 pl-4 inter">
                                                                <NavLink to={itemChild.link} 
                                                                        className={({ isActive }) =>
                                                                            isActive ? 'active-visit child-item' : ''
                                                                        }
                                                                >
                                                                    <h3>
                                                                        {itemChild.name}
                                                                    </h3>
                                                                </NavLink>
                                                            </li>
                                                        ))
                                                    }
                                            </Collapse>
                                        </React.Fragment>
                                    :   
                                        <li key={option.id}>
                                            <NavLink to={option.link} 
                                                    className={({ isActive }) =>
                                                        isActive ? 'active-visit' : ''
                                                    }
                                            >{option.name}</NavLink>
                                        </li>
                                ))
                            }
                            <li>
                                <NavLink to="/change-password" 
                                className={({ isActive }) =>
                                    isActive ? 'active-visit' : ''
                                }
                                >Ganti Kata Sandi</NavLink>
                            </li>
                            <li>
                                <NavLink to="/change-password" 
                                className={({ isActive }) =>
                                    isActive ? 'active-visit' : ''
                                }
                                >Keluar</NavLink>
                            </li>
                        </ul>
                    </details>
                    <ul className="space-y-5 md:block hidden overflow-y-auto">
                        {
                            options.map(option => (
                                option.hasOwnProperty('child') ?
                                    <React.Fragment key={2}>
                                        <li className="nav-item-dashboard inter flex items-center justify-between cursor-pointer" onClick={() => {
                                            setIsOpen(state => !state)
                                        }}>
                                            <h3>
                                                { option.name }
                                            </h3>
                                            {
                                                isOpen ?
                                                    <ChevronRightIcon className="w-5 h-5 text-neutral-100" aria-hidden="true" />
                                                :
                                                    <ChevronDownIcon className="w-5 h-5 text-neutral-100" aria-hidden="true" />
                                            }
                                        </li>
                                        <Collapse isOpen={!isOpen} onInit={onInit} style={{margin: 0}} elementType="div" className={`collapse-css-transition`}>
                                                {
                                                    option.child.map( itemChild => (
                                                        <li key={itemChild.id} className="nav-item-dashboard pt-6 pl-4 inter">
                                                            <NavLink to={itemChild.link} 
                                                                    className={({ isActive }) =>
                                                                        isActive ? 'active-visit' : ''
                                                                    }
                                                            >
                                                                <h3>
                                                                    {itemChild.name}
                                                                </h3>
                                                            </NavLink>
                                                        </li>
                                                    ))
                                                }
                                        </Collapse>
                                    </React.Fragment>
                                :
                                    <li key={option.id} className="nav-item-dashboard inter">
                                        <NavLink to={option.link} className={({isActive}) =>
                                                isActive ? "active-visit" : ""
                                            }
                                        >
                                            <h3>{option.name}</h3>
                                        </NavLink>
                                    </li>
                            ))
                        }   
                        <li className="nav-item-dashboard inter border-t border-dashed pt-5">
                            <NavLink to="/change-password" className={({isActive}) =>
                                    isActive ? "active-visit" : ""
                                }
                            >
                                <h3>Ganti Kata Sandi</h3>
                            </NavLink>
                        </li>
                        <li className="nav-item-dashboard inter">
                            <NavLink to="/change-password" className={({isActive}) =>
                                    isActive ? "active-visit" : ""
                                }
                            >
                                <h3>Keluar</h3>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}