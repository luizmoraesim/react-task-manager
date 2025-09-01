const TasksSeparator = ({ text, icon }) => {
  return (
    <div className="flex gap-2 border-b border-solid border-brand-border pb-1">
      {icon}
      <p className="text-sm text-brand-text-gray">{text}</p>
    </div>
  )
}

export default TasksSeparator
