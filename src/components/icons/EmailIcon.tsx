import React from "react";
import { SVGIconProps } from "../../types/icons";

export const EmailIconComponent: React.FC<SVGIconProps> = ({ color = "#ececec", width = "24", height = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}
            viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-mail-up">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
            <path d="M19 22v-6" /><path d="M22 19l-3 -3l-3 3" /><path d="M3 7l9 6l9 -6" />
        </svg>
    )
}