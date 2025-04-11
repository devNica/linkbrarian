import { Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/auth/AuthPage"


export const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<AuthPage />} />

        </Routes>
    )
}
