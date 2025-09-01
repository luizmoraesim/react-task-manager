import { forwardRef } from "react"
import InputLabel from "./InputLabel"
import InputErrorMessage from "./InputErrorMessage"

const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        ref={ref}
        {...rest}
      />
      {error && <InputErrorMessage>{error.message}</InputErrorMessage>}
    </div>
  )
})

Input.displayName = "Input"

export default Input
