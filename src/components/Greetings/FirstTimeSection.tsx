import { FC } from "react";
import './Greetings.css'

interface FirstTimeProps {
    children: React.ReactNode
}

export const FirstTimeSectionComponent: FC<FirstTimeProps> = ({ children }) => {
    return (
        <section className="first__time">
            <h1>En Linkbrarian, te damos la bienvenida</h1>
            <div>
                <p>Ahora que ya estas aqui,</p>
                <p>Puedes empezar registrando las categorias de tus enlaces</p>
            </div>
            {children}
        </section>
    )
}