import { FC } from "react";
import { GreetingsComponent } from "../../components/Greetings/Greetings";
import { useCategoriesStore } from "../../store/categories";
import { useFetchCategoriesHook } from "../../hooks/useCategoriesHook";
import { FirstTimeSectionComponent } from "../../components/Greetings/FirstTimeSection";
import { Link } from "react-router-dom";
import { AddIconComponent } from "../../components/icons/AddIcon";
import { useAuthStore } from "../../store/auth";

import './HomePage.css'
import { CategoryExplorerComponent } from "../../components/CategoryExplorer/CategoryExplorer";

const HomePageComponent: FC = () => {

    const { filled } = useCategoriesStore(state => state)
    const { user } = useAuthStore(state => state)
    const { states } = useFetchCategoriesHook()

    return (
        <div className="home__page">
            <GreetingsComponent subject={user?.email ?? ''} greeting="Saludos" />
            {
                states.isLoading ? <h2>...cargando</h2> :
                    filled ?
                        <CategoryExplorerComponent isNavigable={true}/> :
                        <FirstTimeSectionComponent>
                            <div className="add_category">
                                <Link to={'/categories/add'}>Agregar Categoria</Link>
                                <AddIconComponent width="30" height="30" />
                            </div>
                        </FirstTimeSectionComponent>
            }
        </div>
    )
}

export default HomePageComponent