import React, { FC, useState, useEffect, useRef } from "react"
import './DropDown.css'

interface DropdownProps {
    children: React.ReactNode
}

export const DropdownComponent: FC<DropdownProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    function toggleDropdown() {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown__button" onClick={toggleDropdown}>
                Menu
            </button>
            <ul className={`dropdown__list ${isOpen ? 'open' : ''}`}>
                {children}
            </ul>
        </div>
    );
};
