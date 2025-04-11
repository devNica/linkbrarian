import React from "react";
import { TextInputComponent } from "../../Inputs/TextInput/TextInput";
import { useAuthHookForm } from "../../../hooks/forms/useAuthHookForm";
import { SaveButtonComponent } from "../../Buttons/SaveButton/SaveButton";
import { InputMessageComponent } from "../../Inputs/InputError/InputMessage";
import { UserIconComponent } from "../../icons/UserIcon";
import { EmailIconComponent } from "../../icons/EmailIcon";

import './AuthForm.css'

export const AuthFormComponent: React.FC = () => {

    const { register, errors, onSubmit } = useAuthHookForm()

    return (
        <form className="auth__form" onSubmit={onSubmit}>

            <TextInputComponent
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
   
            <div className="form__actions">
                <SaveButtonComponent type="submit" buttonTitle="LOGIN" showIcon={true} showTitle={true}>
                    <UserIconComponent width="27" height="27" />
                </SaveButtonComponent>
            </div>
            
            {errors.email && (
                <InputMessageComponent message={errors.email?.message} type="error"/>
            )}
        </form>
    )
}