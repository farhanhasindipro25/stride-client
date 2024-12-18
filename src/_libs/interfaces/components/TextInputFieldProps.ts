import React from "react"

export interface TextInputFieldProps {
  type?: string
  name: string
  id: string
  label?: string | undefined
  placeholder: string
  className?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string
}
