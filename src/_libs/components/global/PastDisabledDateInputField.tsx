import { DateSelectorInputFieldProps } from "@/_libs/interfaces/components/PastDisabledDateInputFieldProps";
import {
    DATE_BOX_STYLES,
    DATE_LABEL_STYLES,
} from "@/_libs/styles/DateInputFieldStyles";
import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";
import React from "react";

export default function PastDisabledDateInputField(
    props: DateSelectorInputFieldProps
) {
    const { label = "", name, id, value, onChange, ...otherProps } = props;
    const DATE_FIELD_STYLES = cn(DATE_BOX_STYLES, montserrat.className);
    const today = new Date().toISOString().split("T")[0];
    const isRequired = label.includes("*");
    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={id}
                className={cn(DATE_LABEL_STYLES, montserrat.className)}
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
            <input
                type="date"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className={DATE_FIELD_STYLES}
                min={today}
                {...otherProps}
            />
        </div>
    );
}
