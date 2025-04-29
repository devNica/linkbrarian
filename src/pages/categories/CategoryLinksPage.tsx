import { FC } from "react";
import { useParams } from "react-router-dom";
import { CategoriesListComponent } from "../../components/CategoriesList/CategoriesList";
import './CategoryLinksPage.css'

const CategoryLinksPageComponent: FC =() => {

    const { id } = useParams()

    return (
        <main className="category__links__page">
            <CategoriesListComponent categoryId={id}/>
        </main>
    )
}


export default CategoryLinksPageComponent