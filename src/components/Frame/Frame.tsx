import React from "react";
import './Frame.css'

interface FrameProps {
    frameTitle: string
    useFrameIcon?: boolean
    urlIcon?: string
    children?: React.ReactNode
}

export const FrameComponent: React.FC<FrameProps> = ({ frameTitle, useFrameIcon = false, urlIcon, children }) => {
    return (
        <div className="frame__container">
            {
                useFrameIcon ?
                    <div className="frame__icon">
                        <img src={urlIcon} alt="frameIcon" className="icon" />
                    </div> :
                    <></>
            }
            {
                frameTitle !== '' ?
                    <div className="frame__header">
                        <h2 className="title">{frameTitle}</h2>
                    </div> : <></>
            }
            <div className="frame__content">
                {children}
            </div>
        </div>
    )
}