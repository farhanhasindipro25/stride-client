/* eslint-disable @typescript-eslint/no-explicit-any */
export const SELECT_LABEL_STYLES =
  "appearance-none block text-sm font-medium text-gray-700"

export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? "rgb(124, 58, 237)" : provided.borderColor,
    boxShadow: state.isFocused
      ? "0 0 0 2px rgb(124, 58, 237)"
      : provided.boxShadow,
    border: state.isFocused ? "none" : provided.border,
    paddingTop: "3px",
    paddingBottom: "5px",
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "rgb(124, 58, 237)"
        : provided.backgroundColor,
    color:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "white"
        : "rgb(139, 92, 246)",
    "&:hover": {
      backgroundColor: "rgb(139, 92, 246)",
      color: "white",
      cursor: "pointer",
    },
    overflow: "hidden",
    fontSize: "14px",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: "white",
    color: "rgb(124, 58, 237)",
    borderRadius: "20px",
    padding: "2px 6px",
    marginRight: "5px",
    fontWeight: 600,
    border: "1px solid",
    borderColor: "rgb(124, 58, 237)",
  }),

  multiValueLabel: (provided: any) => ({
    ...provided,
    color: "rgb(124, 58, 237)",
    backgroundColor: "white",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "rgb(124, 58, 237)",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "white",
  }),
  input: (provided: any) => ({
    ...provided,
    "input:focus": {
      boxShadow: "none",
    },
  }),
}
