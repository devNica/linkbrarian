import { lazy } from "react";

const LazyAuthPage = lazy(() => import("../pages/auth/AuthPage"))
const LazyHomePage = lazy(() => import("../pages/home/HomePage"))

export {
    LazyAuthPage,
    LazyHomePage
}