import { FC } from "react";

interface GreetingsProps {
    greeting?: string
    subject: string
}

export const GreetingsComponent: FC<GreetingsProps> = ({ greeting="Bienvenido", subject }) => {
    return (
        <section className="greetings__section">
            <h1>
                ¡{greeting}, <i>{`${subject}`}</i>!
            </h1>
        </section>
    )
}