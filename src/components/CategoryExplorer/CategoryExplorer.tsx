import { FC, useMemo, useState } from 'react'
import { useCategoriesStore } from '../../store/categories'
import { CategoryAPI } from '../../types/api'
import { Link } from 'react-router-dom'
import './CategoryExplorer.css'

interface CategoryExplorerProps {
    title?: string
    enableTitle?: boolean
    isNavigable?: boolean
}

export const CategoryExplorerComponent: FC<CategoryExplorerProps> = ({
    title = "Hemos creado esta utilidad para que puedas navegar por tus colecciones",
    enableTitle = true,
    isNavigable = true
}) => {

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

   
    const categoriesList = filteredCategories.map((category: CategoryAPI) => (
        <div className="category__item" key={category.categoryId}>
            {
                isNavigable ?
                    <Link to={`/categories/${category.categoryId}/links`}>
                        {category.name}
                    </Link> :
                    <span>
                        {category.name}
                    </span>
            }
        </div>
    ))

    return (
        <section className='category__explorer'>
            {
                enableTitle ?
                    <h2 className='title'>{title}</h2> :
                    <></>
            }

            <form className='category__search' role='search'>
                <input
                    type='text'
                    placeholder='Filtrar lista de categorias...'
                    value={catStr}
                    onChange={(e) => setCatStr(e.target.value)}
                />
            </form>

            <div className="categories__list">
                {categoriesList}
            </div>

        </section>
    )
}