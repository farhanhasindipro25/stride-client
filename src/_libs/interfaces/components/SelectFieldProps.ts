/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

export interface SelectFieldProps {
  label?: string
  name: string
  id: string
  instanceId: string
  defaultValue?: any
  className?: string
  options: Array<{ label: string; value: string | number | boolean }>
  onChange?: any
  placeholder?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
  value?: any
  errors?: string | string[]
  isMulti?: boolean
  isClearable?: boolean
}
