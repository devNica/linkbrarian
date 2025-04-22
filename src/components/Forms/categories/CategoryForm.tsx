import { FC } from "react";
import { TextInputComponent } from "../../Inputs/TextInput/TextInput";
import { SaveButtonComponent } from "../../Buttons/SaveButton/SaveButton";
import { SaveModIconComponent } from "../../icons/SaveModIcon";
import useCategoryHookForm from "../../../hooks/forms/useCategoryHookForm";
import { InputMessageComponent } from "../../Inputs/InputError/InputMessage";
import './CategoryForm.css'

export const CategoryForm: FC = () => {

    const { register, errors, onSubmit } = useCategoryHookForm()

    return (
        <form className="category__form" onSubmit={onSubmit}>
            <TextInputComponent
                type="text"
                id="categoryName"
                label="Nombre Categoria"
                placeholder="Ingrese el nombre de la categoria"
                {
                ...register("categoryName", {
                    required: "El nombre de la categoria es requerido",
                    maxLength: {
                        value: 20,
                        message: "El nombre no puede tener más de 20 caracteres"
                    },
                    minLength: {
                        value: 3,
                        message: "El nombre debe tener al menos 3 caracteres"
                    }

                })
                }

            />

            <div className="form__actions">
                <SaveButtonComponent
                    theme="success"
                    type="submit"
                    buttonTitle="Guardar"
                    showIcon={true}
                    showTitle={true}
                >
                    <SaveModIconComponent width="27" height="27" />
                </SaveButtonComponent>
            </div>


            {(errors.categoryName) && (
                <InputMessageComponent messages={
                    [errors.categoryName?.message]
                } type="error" />
            )}

        </form>
    )
}