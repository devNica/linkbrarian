import { FC } from "react";
import { GreetingsComponent } from "../../components/Greetings/Greetings";
import { useCategoriesStore } from "../../store/categories";
import { useFetchCategoriesHook } from "../../hooks/useCategoriesHook";
import { FirstTimeSectionComponent } from "../../components/Greetings/FirstTimeSection";

import './HomePage.css'
import { Link } from "react-router-dom";
import { AddIconComponent } from "../../components/icons/AddIcon";
import { useAuthStore } from "../../store/auth";


const HomePageComponent: FC = () => {

    const { filled } = useCategoriesStore(state => state)
    const { user } = useAuthStore(state=> state)
    const { states } = useFetchCategoriesHook()

    return (
        <div className="home__page">
            <GreetingsComponent subject={user?.email ?? ''} greeting="Saludos" />
            {
                states.isLoading ? <h2>...cargando</h2> :
                    filled ? <h1>cargados</h1> :
                        <FirstTimeSectionComponent>
                            <div className="add_category">
                                <Link to={'/categories/add'}>Agregar Categoria</Link>
                                <AddIconComponent width="30" height="30"/>
                            </div>
                        </FirstTimeSectionComponent>
            }
        </div>
    )
}

export default HomePageComponent