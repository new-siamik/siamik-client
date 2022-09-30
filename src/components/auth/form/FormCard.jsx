import React, { Fragment } from "react"
import { Popover, Transition } from '@headlessui/react'

export default function FormCard(props) {

    const { classParent, classButton, classOverlay, classPanel, children} = props;

    return (
        <Popover as="div" className={classParent}>
        <Popover.Button className = {classButton}>
                Masuk
        </Popover.Button>
        <Popover.Overlay className = {classOverlay} />
        <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Popover.Panel className = {classPanel}>
                { children }
            </Popover.Panel>
        </Transition>
        </Popover>
    )
}
