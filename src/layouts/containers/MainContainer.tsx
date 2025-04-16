import { FC } from "react";


interface MainContainerProps {
    children: React.ReactNode
}

export const MainContainerComponent: FC<MainContainerProps> = ({ children }) => {

    return (
        <main className="main__container">
            {children}
        </main>
    )
}