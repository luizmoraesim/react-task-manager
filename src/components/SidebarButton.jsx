const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-[#35383e]"
    }
    if (variant === "selected") {
      return "bg-[#E6F7F8] text-[#00ADB5]"
    }
  }
  return (
    <a href="#" className={`rounded-lg py-3 ${getVariantClasses()} px-6`}>
      {children}
    </a>
  )
}

export default SidebarButton
