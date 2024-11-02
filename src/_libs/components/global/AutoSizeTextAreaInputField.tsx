"use client";
import { AutoSizeTextAreaInputFieldProps } from "@/_libs/interfaces/components/AutoSizeTextAreaProps";
import {
    TEXTAREA_BOX_STYLES,
    TEXTAREA_LABEL_STYLES,
} from "@/_libs/styles/AutoSizeTextAreaStyles";
import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";
import React from "react";

import ReactTextareaAutosize from "react-textarea-autosize";

export default function AutoSizeTextAreaField(
    props: AutoSizeTextAreaInputFieldProps
) {
    const {
        name,
        id,
        value,
        label,
        placeholder,
        defaultValue,
        className,
        minRows = 2,
        maxRows = 100,
        onChange,
        onBlur,
        ...otherProps
    } = props;

    const TEXTAREA_FIELD_STYLES = cn(
        TEXTAREA_BOX_STYLES,
        montserrat.className,
        className ?? ""
    );

    const isRequired = label.includes("*");
    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={id}
                className={cn(TEXTAREA_LABEL_STYLES, montserrat.className)}
            >
                {isRequired === false ? (
                    label
                ) : (
                    <div className="flex">
                        {label.split("*")[0]}
                        <span className="text-red-500">*</span>
                    </div>
                )}
            </label>
            <ReactTextareaAutosize
                placeholder={placeholder}
                minRows={minRows}
                maxRows={maxRows}
                name={name}
                id={id}
                value={value}
                className={TEXTAREA_FIELD_STYLES}
                defaultValue={defaultValue}
                onChange={onChange}
                onBlur={onBlur}
                {...otherProps}
            />
        </div>
    );
}
