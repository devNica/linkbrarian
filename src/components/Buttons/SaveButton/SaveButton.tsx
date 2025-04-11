import React from 'react'
import './SaveButton.css'

interface SaveButtonProps {
    type: 'button' | 'submit'
    buttonTitle: string
    showIcon?: boolean
    showTitle?: boolean
    handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void
    children?: React.ReactNode
}

const SaveButton: React.FC<SaveButtonProps> = ({
    type = 'button',
    buttonTitle = 'Guadar',
    showIcon = true,
    showTitle = true,
    handleClick,
    children
}) => {
    return (
        <button
            type={type}
            className="button"
            onClick={handleClick}
        >
            <div className="button__group">
                <>
                    {showTitle ?
                        <strong className={`button__title ${showIcon ? 'shared' : ''}`}>{buttonTitle}</strong> :
                        <></>
                    }
                </>
                <>
                    {showIcon ?
                        <div className={`button__icon ${!showTitle ? 'full' : ''}`}>{children} </div> :
                        <></>
                    }
                </>
            </div>

        </button>
    )
}

export const SaveButtonComponent = React.memo(SaveButton)