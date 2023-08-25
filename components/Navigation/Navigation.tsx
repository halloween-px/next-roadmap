"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type linkNavigation = {
  label: string,
  href: string
}

type PropsNavigation = {
  navigation: linkNavigation[]
}

const Navigation = ({navigation}: PropsNavigation) => {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((nav) => {
        return (
          <li key={nav.label}>
            <Link className={`${pathname === nav.href ? 'text-primary' : 'text-white'}`} href={nav.href}>{nav.label}</Link>
          </li>
        )
      })}
    </>
  )
}

export default Navigation;