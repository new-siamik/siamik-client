import { useState } from "react";

import "../../../../styles/component/auth/form/input/_forminput.scss"

export default function FormInput(props) {

    const { icon, defValue, classInput, errorMessage, classname, onChange, ...inputProps} = props;
    
    const [focus, setFocus] = useState(false);

    const handleFocus = (e) => {
        setFocus(true);
    }

    return (
        <div className={` ${classname} form-control w-full mb-5 relative`}> 
            {/* {curData && 
            <h3>{curData}</h3>} */}
            <div className="flex absolute top-3 left-0 items-center pl-3 pointer-events-none">
                { icon }
                <svg aria-hidden="true" className="w-5 h-5 text-green-base" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div> 
            <input 
                {...inputProps}
                className={`${classInput} form-input inter w-full rounded-[0.5rem] pl-10 block p-2.5 border border-gray-200 border-solid rouded-[1rem] focus:outline-none text-green-base placeholder:text-neutral-400`} 
                onChange={onChange} 
                onBlur={handleFocus} 
                onFocus={ () => inputProps.name === "confirmPassword" && setFocus(true)} 
                focus={focus.toString()}
                defaultValue={defValue}
                />
            <h4 className="error-message text-red-500 text-[0.85rem] font-normal mt-3">{errorMessage}</h4>
        </div>
    )
}