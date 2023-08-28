import { ReactNode } from "react"

type FormWrapperProps = {
    title: string,
    children: ReactNode
}

export function FormWrapper({title, children}: FormWrapperProps) {
  return (
    <>
        <h2>{title}</h2>
        {children}
    </>
  )
}
