import { montserrat } from "../utils/font"

export const SELECT_LABEL_STYLES =
  "appearance-none block text-xs font-medium text-gray-700"

export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    boxShadow: state.isFocused
      ? "0 0 0 2px #0f172a"
      : provided.boxShadow,
    border: "none",
    minHeight: "40px",
    fontSize: "12px",
    backgroundColor: "#0c1017",
    opacity: 50,
    color:"#020617",
    fontFamily: montserrat.style.fontFamily,
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "#020617"
        : provided.backgroundColor,
    color: "white",
    "&:hover": {
      backgroundColor: "#020617",
      color: "white",
      cursor: "pointer",
    },
    overflow: "hidden",
    fontSize: "12px",
    fontFamily: montserrat.style.fontFamily
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
    fontFamily: montserrat.style.fontFamily
  }),

  multiValueLabel: (provided: any) => ({
    ...provided,
    color: "white",
    fontSize: "10px",
    fontWeight: 600,
    fontFamily: montserrat.style.fontFamily
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
    fontFamily: montserrat.style.fontFamily
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#0f172a",
    fontFamily: montserrat.style.fontFamily
  }),
  input: (provided: any) => ({
    ...provided,
    "input:focus": {
      boxShadow: "none",
      fontFamily: montserrat.style.fontFamily
    },
  }),
}
