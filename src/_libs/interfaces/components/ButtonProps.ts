import React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
  size?: "medium" | "small"
  type?: "button" | "submit" | "reset"
  className?: string
  onClick?: any
  isLoading?: boolean
}
