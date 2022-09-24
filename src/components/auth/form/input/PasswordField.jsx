import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/solid";

import "../../../../styles/component/auth/form/input/_forminput.scss";

export default function PasswordField(props) {

    const { defValue, classInput, classname, onChange, required} = props;
    
    const [focus, setFocus] = useState(false);
    const handleFocus = (e) => {
        setFocus(true);
    }

    const [passwordType, setPasswordType] = useState("password")

    const changePasswordType = () => {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
    }

    return (
        <div className={` ${classname} form-control w-full relative`}> 
            <div className="relative">
                <span className="absolute top-3 right-3" onClick={changePasswordType}>
                    {
                        passwordType === "password" ?
                            <EyeSlashIcon className="h-5 w-5 cursor-pointer text-green-base" />
                        :
                            <EyeIcon className="h-5 w-5 cursor-pointer text-green-base" />
                    }
                </span>
            </div>
            <div className="flex absolute top-3 left-0 items-center pl-3 pointer-events-none">
                    <LockClosedIcon className="w-5 h-5 text-green-base" aria-hidden="true"/>
            </div> 
            <input 
                id="password"
                name="password"
                type={passwordType}
                required={required}
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,25}$"
                className={`${classInput} form-input inter w-full rounded-[0.5rem] pl-10 pr-10 block p-2.5 border border-gray-200 border-solid rouded-[1rem] focus:outline-none placeholder:text-neutral-400`} 
                onChange={onChange} 
                onBlur={handleFocus} 
                focus={focus.toString()}
                defaultValue={defValue}
                placeholder="Kata Sandi"
                />
            <h4 className="error-message text-red-500 text-[0.85rem] font-normal mt-3">
                Minimal 8-25 karakter, 1 huruf, 1 angka, dan 1 special character!
            </h4>
        </div>
    )
}