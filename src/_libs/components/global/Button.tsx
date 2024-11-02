import { ButtonProps } from "@/_libs/interfaces/components/ButtonProps";
import {
    DEFAULT_BUTTON_STYLES,
    MEDIUM_BUTTON_STYLES,
    PRIMARY_BUTTON_STYLES,
    SECONDARY_BUTTON_STYLES,
    SMALL_BUTTON_STYLES,
} from "@/_libs/styles/ButtonStyles";
import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";
import { cva } from "class-variance-authority";
import React from "react";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
    variants: {
        variant: {
            primary: PRIMARY_BUTTON_STYLES,
            secondary: SECONDARY_BUTTON_STYLES,
        },
        size: {
            medium: MEDIUM_BUTTON_STYLES,
            small: SMALL_BUTTON_STYLES,
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "medium",
    },
});

export default function Button({
    children,
    variant,
    size,
    className,
    isLoading,
    type = "button",
    ...props
}: ButtonProps) {
    const BUTTON_STYLES = cn(
        BUTTON_VARIANTS({ variant, size }),
        className ?? "",
        isLoading ? "cursor-wait" : "",
        montserrat.className
    );

    return (
        <button className={BUTTON_STYLES} type={type} {...props}>
            {children}
        </button>
    );
}
