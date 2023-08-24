import Link from "next/link";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  return (
    <header className="header">
      <ul className="list-navigation">
        <Navigation />
      </ul>
    </header>
  )
}

export default Header;