import React from "react";
import { SVGIconProps } from "../../types/icons";

type FavoriteIconProps  = SVGIconProps & {
    isFavorite: boolean
}

export const FavoriteIconComponent: React.FC<FavoriteIconProps> = ({ isFavorite, width = "24", height = "24" }) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" stroke={
            isFavorite ? "#e0b92a" : "#ececec"
        } fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>

    )
}