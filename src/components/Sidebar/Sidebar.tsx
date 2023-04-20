import React from 'react'
import { UserIcon, HomeIcon } from '@heroicons/react/20/solid'

// eslint-disable-next-line no-undef

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

function NavLink({ href, children }: { href: string; children: JSX.Element[] | JSX.Element }) {
  return (
    <a className="flex items-center gap-3 hover:bg-base-4 p-2 rounded-lg" href={href}>
      {children}
    </a>
  )
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
