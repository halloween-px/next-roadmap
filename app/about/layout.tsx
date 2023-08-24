"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutLayouts({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navgation = [
    {
      title: 'Наша компания',
      href: '/about'
    },
    {
      title: 'Команда',
      href: '/about/teams'
    },
    {
      title: 'Контакты',
      href: '/about/contacts'
    },
  ]
  return (
    <div>
      <div className="container">
        <h1 className='mt-4 mb-4 text-3xl'>О компании</h1>
        <ul className='inline-flex flex-row gap-x-4 bg-dark rounded py-2 px-4'>
          {navgation.map((nav) => {
            return (
              <li key={nav.title}>
                <Link className={`text-sm ${pathname === nav.href ? 'text-primary' : 'text-white'}`} href={nav.href}>
                  {nav.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='mt-5'>
          {children}
        </div>
      </div>
    </div>
  )
}