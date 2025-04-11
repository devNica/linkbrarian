import React from 'react';
import './InputMessage.css'

interface InputMessageProps {
    message: string | undefined;
    type: 'error' | 'warning' | 'info'
}

export const InputMessage: React.FC<InputMessageProps> = ({ message, type }) => {
    return (
        <div className={`input__error ${type}`}>
            <span>{message}</span>
        </div>
    )
}


export const InputMessageComponent= React.memo(InputMessage)