import React from "react"

export interface AutoSizeTextAreaInputFieldProps {
  name: string
  id: string
  value?: string
  label: string
  placeholder: string
  defaultValue?: string
  className?: string
  minRows?: number
  maxRows?: number
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: React.ChangeEventHandler<HTMLTextAreaElement>
}
