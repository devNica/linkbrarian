import React from "react";
import { FrameComponent } from "../../components/Frame/Frame";
import { AuthFormComponent } from "../../components/Forms/AuthForm/AuthForm";
import userIcon from '../../assets/usermen.png'
import './AuthPage.css'

export const AuthPage: React.FC = () => {
    return (
        <div className="auth__page">
            <FrameComponent
                frameTitle="λinκβrariаη"
                useFrameIcon={true}
                urlIcon={userIcon}
                >
                <AuthFormComponent />
            </FrameComponent>
        </div>
    )
}