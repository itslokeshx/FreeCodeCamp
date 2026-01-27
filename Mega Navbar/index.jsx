export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href='#'>Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
        <ul aria-label ="Apps" className="sub-menu"></ul>  
        </li>
      </ul>
    </nav>
  )
}