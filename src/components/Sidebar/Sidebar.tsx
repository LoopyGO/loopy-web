import React from 'react'
import { UserIcon, HomeIcon } from '@heroicons/react/20/solid'
import { NavLink } from './NavLink'

const links = {
  home: {
    href: '/',
    icon: <HomeIcon width={24} height={24} />,
    label: 'Home',
  },
  user: {
    href: '#',
    icon: <UserIcon width={24} height={24} />,
    label: 'User',
  },
}

export function Sidebar() {
  return (
    <div className="flex h-screen w-full max-xl:items-center justify-between flex-col gap-6 p-6   border-r border-base-6 bg-base-2">
      <nav>
        <ul className="flex flex-col gap-2">
          {Object.values(links).map((link) => (
            <li key={link.label}>
              <NavLink href={link.href}>
                {link.icon}
                <p>{link.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-sm flex flex-col gap-1">
        <NavLink href="#">
          <p>Changelog</p>
        </NavLink>
        <NavLink href="#">
          <p>Share Feedback</p>
        </NavLink>
      </div>
    </div>
  )
}
