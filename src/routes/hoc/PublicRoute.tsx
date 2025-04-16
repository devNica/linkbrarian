import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../store/auth"


export function PublicRoute() {

    const { isAuth } = useAuthStore()
    const navigate = useNavigate()

    useEffect(()=> {
        if(isAuth){
            navigate('/home')
        }
    }, [isAuth])

    return <Outlet/>

}