import { PropsWithChildren } from "react";
import classNames from "classnames";

interface Props {
    primary? : boolean,
    secondary? : boolean,
    success? : boolean,
    warning? : boolean,
    danger? : boolean,
    outline? : boolean,
    rounded? : boolean
}

// In React, the children prop is a special prop that allows you to pass content 
// or components to a React component from its parent component. 
// It is a way to include elements, text, or other React components between the opening and closing tags of a custom component. 
// This enables you to create reusable components that can render different content based on the context in which they are used.
const Button = ({ children, primary, secondary, success, warning, danger, outline, rounded } : PropsWithChildren<Props>) => {
    
    // const trueCount = [primary, secondary, success, warning, danger].filter(x => x === true).length;
    const trueCount = [primary, secondary, success, warning, danger].filter(Boolean).length;
    // If more than one property is "true", throw an error
    if (trueCount > 1) {
        throw new Error("Only one of primary, secondary, success, warning, danger, outline, or rounded can be true.");
    }

    const classes = classNames("px-3 py-1.5 border mb-2", {
        "border-blue-500 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-500 bg-yellow-500 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-500": outline && warning,
        "text-red-500": outline && danger,
    });
    return <button className={classes}>{children}</button>;
}

export default Button;