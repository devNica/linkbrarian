import { FC } from "react";
import '../MainLayout.css'

interface TopContainerProps {
    children: React.ReactNode
}

export const TopContainerComponent: FC<TopContainerProps> = ({ children }) => {
    return (
        <header className="top__container">
            {children}
        </header>
    )
}