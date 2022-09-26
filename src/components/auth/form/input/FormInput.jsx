import { useState } from "react";

import "../../../../styles/component/auth/form/input/_forminput.scss"

export default function FormInput(props) {

    const { children, defValue, classInput, errorMessage, classname, onChange, ...inputProps} = props;
    
    const [focus, setFocus] = useState(false);

    const handleFocus = (e) => {
        setFocus(true);
    }

    return (
        <div className={` ${classname} form-control w-full relative`}> 
            {/* {curData && 
            <h3>{curData}</h3>} */}
            <div className="flex absolute top-3 left-0 items-center pl-3 pointer-events-none">
                {children}
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