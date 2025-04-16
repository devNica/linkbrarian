import { FC, useEffect, useRef } from "react";
import { AlignedContainerProps } from "../../types/containers";

import './Containers.css'


export const AligmentComponent: FC<AlignedContainerProps> = ({ align = 'right', gap = "10px", children }) => {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const childCount = container.children.length;
            const dynamicGap = childCount > 1 ? gap : "0px";
            container.style.gap = dynamicGap;
        }
    }, [gap]);

    return (
        <section ref={containerRef} className={`container ${align}`}>
            {children}
        </section>
    )
}