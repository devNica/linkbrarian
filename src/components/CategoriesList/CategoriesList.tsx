import { FC, useMemo, useState } from "react";
import { useCategoriesStore } from "../../store/categories";
import { CategoryAPI } from "../../types/api";
import { Link } from "react-router-dom";
import './CategoriesList.css'


interface CategoriesListProps {
    categoryId: string | undefined
}

export const CategoriesListComponent: FC<CategoriesListProps> = ({ categoryId }) => {

    const [catStr, setCatStr] = useState('')

    const categories = useCategoriesStore(state => state.categories)


    const filteredCategories = useMemo(() => {
        const filterFn = (category: CategoryAPI): boolean => {
            return catStr
                ? String(category.name).toLowerCase().includes(catStr.toLowerCase())
                : true
        }
        return categories.filter(filterFn)

    }, [catStr, categories])

    const categoriesList = filteredCategories.map((category, _index) => (
        <li
            className="category__item"
            key={`categories-pg-${category.categoryId}`}
        >
            <span className="category__item-name">{category.name}</span>
            <span className="category__item-size">{category.collectionSize}</span>
        </li>
    ))

    return (
        <section className="categories__list">
            <header className="categories__list-header">
                <h1>Mis otras Categorias</h1>

                <nav className="add-link">
                    <Link to={`/categories/${categoryId}/link/add`}>
                        Agregar a la Categoria Actual
                    </Link>
                </nav>
            </header>

            <form className='categories__list-search' role='search'>
                <input
                    type='text'
                    placeholder='Filtrar lista de categorias...'
                    value={catStr}
                    onChange={(e) => setCatStr(e.target.value)}
                />
            </form>

            <ul className="categories__list-content">
                {categoriesList}
            </ul>
        </section>
    )
}