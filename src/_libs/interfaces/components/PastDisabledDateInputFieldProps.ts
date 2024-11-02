import React from "react"

export interface DateSelectorInputFieldProps {
  label?: string | undefined
  id: string
  name: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  min?: string
}
