import { FC, useEffect, useRef } from "react";
import './Paragraph.css'

interface ParagraphProps {
    text?: string
    align?: 'center' | 'left' | 'right' | 'justify'
    fontSize?: number
    unitMeasurement?: 'px' | 'rem' | 'em'
}

export const ParagraphComponent: FC<ParagraphProps> = ({
    text = "texto prueba",
    align = 'right',
    fontSize = 14,
    unitMeasurement = 'px'
}) => {

    const paragraphRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (paragraphRef.current) {
            paragraphRef.current.style.fontSize = `${fontSize}${unitMeasurement}`
            paragraphRef.current.style.textAlign = align

        }
    })

    return (
        <p ref={paragraphRef} className="paragraph">
            {text}
        </p>
    )
}