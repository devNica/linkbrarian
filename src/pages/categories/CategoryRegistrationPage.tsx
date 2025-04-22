import { FC } from "react"
import { CategoryForm } from "../../components/Forms/categories/CategoryForm"
import { ParagraphComponent } from "../../components/Paragraph/Paragraph"
import './CategoryRegistrationPage.css'


const CategoryRegistrationPageComponent: FC = () => {
    return (
        <div className="category__registration__page">

            <section className="info">
                <ParagraphComponent
                    fontSize={1.4}
                    unitMeasurement="rem"
                    align="center"
                    text="Recuerda que las categorias te van a permitir agrupar tus enlaces por contexto"
                />
            </section>


            <section className="form">
                <CategoryForm />
            </section>

        </div>
    )
}


export default CategoryRegistrationPageComponent