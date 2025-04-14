import React, { useState } from "react";
import { TextInputComponent } from "../../Inputs/TextInput/TextInput";
import { useAuthHookForm } from "../../../hooks/forms/useAuthHookForm";
import { SaveButtonComponent } from "../../Buttons/SaveButton/SaveButton";
import { InputMessageComponent } from "../../Inputs/InputError/InputMessage";
import { UserIconComponent } from "../../icons/UserIcon";
import { EmailIconComponent } from "../../icons/EmailIcon";
import { EyeIconComponent } from "../../icons/EyeIcon";

import './AuthForm.css'

export const AuthFormComponent: React.FC = () => {

    const { register, errors, onSubmit } = useAuthHookForm()

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);


    return (
        <form className="auth__form" onSubmit={onSubmit}>

            <TextInputComponent
                type="email"
                id="email"
                label="Email:"
                placeholder="Insert your email!"
                inlineIcon={true}
                {
                ...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato de correo invalido"
                    }
                })
                }
            >
                <EmailIconComponent width="27" height="27" />
            </TextInputComponent>

            <TextInputComponent
                type={showPassword ? "text" : "password"}
                id="password"
                label="Password:"
                placeholder="Insert your password!"
                inlineIcon={true}
                {
                ...register("password", {
                    required: "El password es requerido",
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
                        message: "Formato de contrasenia incorrecta"
                    }
                })
                }
            >
                <div className="interactive__icon"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                >
                    <EyeIconComponent isActive={showPassword} width="27" height="27" />
                </div>
            </TextInputComponent>

            <div className="form__actions">
                <SaveButtonComponent type="submit" buttonTitle="LOGIN" showIcon={true} showTitle={true}>
                    <UserIconComponent width="27" height="27" />
                </SaveButtonComponent>
            </div>


            {(errors.email || errors.password) && (
                <InputMessageComponent messages={
                    [errors.email?.message, errors.password?.message]
                } type="error" />
            )}

        </form>
    )
}