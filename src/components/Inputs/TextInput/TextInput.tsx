import React, { forwardRef } from "react";
import './TextInput.css';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    value?: string;
    editable?: boolean;
    label?: string;
    orientation?: 'column' | 'row';
    inlineIcon?: boolean;
    children?: React.ReactNode;
}

export const TextInputComponent = forwardRef<HTMLInputElement, FormInputProps>(({
    id,
    name,
    editable = true,
    placeholder = '',
    label = '',
    orientation = 'column',
    value,
    defaultValue = null,
    autoComplete = 'off',
    onChange,
    onKeyDown,
    onBlur,
    inlineIcon = false,
    children,
    ...rest
}, ref) => {


    return (
        <div className={`input__wrapper ${orientation}`}>
            {label && <label htmlFor={id} className="text__label">{label}</label>}
            <div className="input__group">
                <input
                    ref={ref}
                    id={id}
                    name={name}
                    type="text"
                    value={value}
                    defaultValue={defaultValue ?? ''}
                    readOnly={!editable}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    className={`text__input ${inlineIcon ? "shared" : ""}`}
                    {...rest}
                />
                {inlineIcon && <div className="inline__icon">{children}</div>}
            </div>
        </div>
    );
});

TextInputComponent.displayName = "TextInputComponent";
