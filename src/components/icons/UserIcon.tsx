import React from "react";
import { SVGIconProps } from "../../types/icons";

export const UserIconComponent: React.FC<SVGIconProps> = ({ color = "#ececec", width = "24", height = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}
            viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-login-2">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M3 12h13l-3 -3" /><path d="M13 15l3 -3" />
        </svg>
    )
}