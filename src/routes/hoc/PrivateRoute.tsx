import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { useEffect } from "react";


export function PrivateRoute() {

    const { isAuth } = useAuthStore()
    const navigate = useNavigate()

    useEffect(()=> {
        if(!isAuth){
            navigate('/signin')
        }
    }, [isAuth])

    return <Outlet/>

}