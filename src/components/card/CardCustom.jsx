import "../../styles/component/card/_cardcustom.scss"
export default function CardCustom({classname, children}) {

    return (
        <div className={`${classname} card-custom rounded-b-[8px] shadow-md border-t-[8px]`}>
            {children}
        </div>
    )
}