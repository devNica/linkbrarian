import React, { Suspense } from "react";
import { TopContainerComponent } from "./containers/TopContainer";
import { MainContainerComponent } from "./containers/MainContainer";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/Navbar/Navbar";

import './MainLayout.css'


export const MainLayoutComponent: React.FC = () => {
    return (
        <div className="main__layout">
            <TopContainerComponent>
                <NavbarComponent/>
            </TopContainerComponent>
            <Suspense>
                <MainContainerComponent>
                    <Outlet />
                </MainContainerComponent>
            </Suspense>
        </div>
    )
}