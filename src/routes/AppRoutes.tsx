import { Route, Routes } from "react-router-dom"
import { PublicRoute } from "./hoc/PublicRoute"
import { LazyAuthPage, LazyCategoryLinksPage, LazyCategoryRegistrationPage, LazyHomePage } from "./LazyRoutes"
import { PrivateRoute } from "./hoc/PrivateRoute"
import { MainLayoutComponent } from "../layouts/MainLayout"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route element={<MainLayoutComponent />}>
                    <Route path="/home" element={<LazyHomePage />} />
                    <Route path="/categories/add" element={<LazyCategoryRegistrationPage />} />
                    <Route path="/categories/:id/links" element={<LazyCategoryLinksPage />} />
                </Route>
            </Route>
            <Route element={<PublicRoute />}>
                <Route path="/signin" element={<LazyAuthPage />} />
            </Route>
        </Routes>
    )
}
