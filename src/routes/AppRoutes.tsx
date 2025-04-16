import { Route, Routes } from "react-router-dom"
import { PublicRoute } from "./hoc/PublicRoute"
import { LazyAuthPage, LazyHomePage } from "./LazyRoutes"
import { PrivateRoute } from "./hoc/PrivateRoute"
import { MainLayoutComponent } from "../layouts/MainLayout"


export const AppRoutes = () => {
    return (
        <Routes>

            <Route element={<PrivateRoute />}>
                <Route element={<MainLayoutComponent />}>
                    <Route path="/home" element={<LazyHomePage />} />
                </Route>
            </Route>

            <Route element={<PublicRoute />}>
                <Route path="/signin" element={<LazyAuthPage />} />
            </Route>

        </Routes>
    )
}
