import { forwardRef } from "react"
import InputLabel from "./InputLabel"
import InputErrorMessage from "./InputErrorMessage"

const TimeSelect = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        {...props}
        ref={ref}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="night">Noite</option>
      </select>
      {props.error && (
        <InputErrorMessage>{props.error.message}</InputErrorMessage>
      )}
    </div>
  )
})

TimeSelect.displayName = "TimeSelect"

export default TimeSelect
