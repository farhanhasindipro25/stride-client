import React from "react";
import { cva } from "class-variance-authority";
import { BadgeProps } from "@/_libs/interfaces/components/BadgeProps";
import {
    DEFAULT_BADGE_STYLES,
    INFO_BADGE_STYLES,
} from "@/_libs/styles/BadgeStyles";
import cn from "@/_libs/utils/cn";

export default function Badge({
    children,
    className,
    variant,
    ...props
}: BadgeProps) {
    const BADGE_VARIANTS = cva(DEFAULT_BADGE_STYLES, {
        variants: {
            variant: {
                INFO: INFO_BADGE_STYLES,
            },
        },
    });
    const BADGE_STYLES = cn(BADGE_VARIANTS({ variant }), className!);

    return (
        <span className={BADGE_STYLES} {...props}>
            {children}
        </span>
    );
}
