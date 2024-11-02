"use client";
import { SelectFieldProps } from "@/_libs/interfaces/components/SelectFieldProps";
import {
    customStyles,
    SELECT_LABEL_STYLES,
} from "@/_libs/styles/SelectFieldStyles";
import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";
import Select from "react-select";

export default function SelectField(props: SelectFieldProps) {
    const {
        label = "",
        name,
        id = "",
        instanceId,
        defaultValue,
        options,
        onChange,
        onBlur,
        placeholder,
        value,
        isMulti = false,
        isClearable = false,
        ...otherProps
    } = props;
    const isRequired = label.includes("*");

    return (
        <div
            className="flex w-full flex-col gap-1"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <label
                htmlFor={id}
                className={cn(SELECT_LABEL_STYLES, montserrat.className)}
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

            <Select
                name={name}
                inputId={id}
                value={value}
                styles={customStyles}
                instanceId={instanceId}
                classNamePrefix="select2-selection"
                placeholder={placeholder}
                options={options}
                noOptionsMessage={() => "No options"}
                isMulti={isMulti}
                onChange={onChange}
                onBlur={onBlur}
                isClearable={isClearable}
                defaultValue={defaultValue}
                {...otherProps}
            />
        </div>
    );
}
