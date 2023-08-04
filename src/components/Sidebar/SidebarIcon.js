function SidebarIcon({
  icon,
  onClick,
  active = false,
  tooltip = "tooltip 💡 ",
}) {
  return (
    <div
      className={`sidebar-icon group ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="sidebar-highlight  group-hover:scale-100" />
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
}

export default SidebarIcon;
