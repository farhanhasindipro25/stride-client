/* eslint-disable @typescript-eslint/no-explicit-any */
export const SELECT_LABEL_STYLES =
  "appearance-none block text-sm font-medium text-gray-700"

export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? "#1e293b" : "#0f172a",
    boxShadow: state.isFocused
      ? "0 0 0 2px #1e293b"
      : provided.boxShadow,
    border: state.isFocused ? "none" : provided.border,
    minHeight: "40px",
    fontSize: "12px",
    backgroundColor: "#020617",
    color:"#020617"
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "#cbd5e1"
        : provided.backgroundColor,
    color:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "#0f172a"
        : "#cbd5e1",
    "&:hover": {
      backgroundColor: "#1e293b",
      color: "white",
      cursor: "pointer",
    },
    overflow: "hidden",
    fontSize: "12px",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: "#1e293b",
    color: "white",
    borderRadius: "20px",
    padding: "2px 6px",
    marginRight: "5px",
    fontSize: "12px",
    fontWeight: 600,
    border: "1px solid",
    borderColor: "white",
  }),

  multiValueLabel: (provided: any) => ({
    ...provided,
    color: "white",
    fontSize: "10px",
    fontWeight: 600
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#1e293b",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#0f172a",
  }),
  input: (provided: any) => ({
    ...provided,
    "input:focus": {
      boxShadow: "none",
    },
  }),
}
