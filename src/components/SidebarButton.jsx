const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-brand-dark-blue"
    }
    if (variant === "selected") {
      return "bg-[#E6F7F8] text-brand-primary"
    }
  }
  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg py-3 ${getVariantClasses()} px-6`}
    >
      {children}
    </a>
  )
}

export default SidebarButton
