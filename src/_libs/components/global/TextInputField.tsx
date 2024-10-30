import { TextInputFieldProps } from "@/_libs/interfaces/components/TextInputFieldProps";
import {
    INPUT_BOX_STYLES,
    INPUT_LABEL_STYLES,
} from "@/_libs/styles/TextInputFieldStyles";
import cn from "@/_libs/utils/cn";
import { montserrat } from "@/_libs/utils/font";

export default function TextInputField(props: TextInputFieldProps) {
    const {
        type = "text",
        name,
        id,
        label = "",
        placeholder,
        className,
        value,
        onChange,
        onBlur,
        defaultValue,
        ...otherProps
    } = props;

    const INPUT_FIELD_STYLES = cn(
        INPUT_BOX_STYLES,
        montserrat.className,
        className ?? ""
    );
    const isRequired = label.includes("*");
    return (
        <div className="flex w-full flex-col gap-1">
            <label
                htmlFor={id}
                className={cn(INPUT_LABEL_STYLES, montserrat.className)}
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
                type={type}
                defaultValue={defaultValue}
                id={id}
                name={name}
                placeholder={placeholder}
                className={INPUT_FIELD_STYLES}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...otherProps}
            />
        </div>
    );
}
