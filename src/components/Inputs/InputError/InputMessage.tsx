import React from 'react';
import './InputMessage.css'

interface InputMessageProps {
    messages: (string | undefined)[];
    type: 'error' | 'warning' | 'info'
}

export const InputMessage: React.FC<InputMessageProps> = ({ messages, type }) => {
    return (
        <div className={`input__error ${type}`}>
            <span>{messages.filter(ele =>Boolean(ele)).join(", ")}</span>
        </div>
    )
}


export const InputMessageComponent= React.memo(InputMessage)