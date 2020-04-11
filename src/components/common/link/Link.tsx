import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Link.scss";

export const Link: React.FC<{
    to: string,
    newTab?: boolean,
} & any> = (props) => {
    const { newTab, ...filteredProps } = props;

    if (props.to.startsWith("https://")) {
        return (
            <a {...filteredProps} href={props.to} className={`portfolio-link ${props.className}`} rel="noopener noreferrer" target={(props.newTab !== undefined && props.newTab) ? "_blank" : "_self"}>
                {props.children}
            </a>
        );
    } else {
        return (
            <RouterLink {...filteredProps} className={`portfolio-link ${props.className}`} to={props.to}>
                {props.children}
            </RouterLink>
        );
    }
};
