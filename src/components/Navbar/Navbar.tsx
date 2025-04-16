import { FC } from "react";
import { Link } from "react-router-dom";
import { DropdownComponent } from "../DropDown/Dropdown";
import { AligmentComponent } from "../containers/AlignmentComponent";
import { useAuthStore } from "../../store/auth";

import './Navbar.css'

export const NavbarComponent: FC = () => {

    const { logout } = useAuthStore()

    function onHandleClick() {
        logout()
    }

    return (
        <nav className="navbar">
            <AligmentComponent>
                <DropdownComponent>
                    <li className="nav__item">
                        <Link to={'/links'} className="nav__link">
                            Links
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to={'/categories/register'} className="nav__link">
                            + Categories
                        </Link>
                    </li>
                </DropdownComponent>

                <ul className="common__links">
                    <li className="nav__item">
                        <button className="nav__button" onClick={onHandleClick}>
                            Salir
                        </button>
                    </li>
                </ul>
            </AligmentComponent>
        </nav>
    )
}