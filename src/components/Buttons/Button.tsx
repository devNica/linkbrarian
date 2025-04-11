import React from "react";

interface ButtonProps {
    textButton?: string
    adjIcon: boolean
    children?: React.ReactNode
}

export const ButtonComponent: React.FC<ButtonProps> = ({ children, textButton, adjIcon }) => {
    return (
        <button className="button">
            {textButton}
            <>
                {
                    adjIcon ? { children } : <></>
                }
            </>
        </button>
    )
}