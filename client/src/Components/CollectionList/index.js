import React from "react";
import "./style.css";

export function Collection({ children }) {
    return (
        <div className="collection-container">
            <ul className="collection">{children}</ul>
        </div>
    );
}
export function CollectionItem ({ children }) {
    return <li className="collection-item black">{children}</li>;
}