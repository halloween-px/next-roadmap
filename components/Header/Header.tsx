import Link from "next/link";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  const navgation = [
    {
      label: 'Главная',
      href: '/'
    },
    {
      label: 'О нас',
      href: '/about'
    },
    {
      label: 'Блог',
      href: '/blog'
    },
  ]
  return (
    <header className="header">
      <ul className="list-navigation">
        <Navigation navigation={navgation} />
      </ul>
    </header>
  )
}

export default Header;