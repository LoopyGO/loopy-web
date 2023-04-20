'use client'

import { useState } from 'react'
import { UserIcon, HomeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
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

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full flex-col gap-6 p-6 border-b border-base-6 bg-base-2">
      <button className="self-end" onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon width={24} height={24} /> : <Bars3Icon width={24} height={24} />}
      </button>
      {open && (
        <div>
          <nav>
            <ul className="flex flex-col gap-2">
              {Object.values(links).map((link) => (
                <li key={link.label} className="w-full">
                  <NavLink href={link.href}>
                    {link.icon}
                    <p>{link.label}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-sm flex flex-col mt-2 gap-1 border-t border-base-6">
            <NavLink href="#">
              <p>Changelog</p>
            </NavLink>
            <NavLink href="#">
              <p>Share Feedback</p>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

/* <nav>
<ul className="flex gap-2">
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
<div className="text-sm flex gap-1">
<NavLink href="#">
  <p>Changelog</p>
</NavLink>
<NavLink href="#">
  <p>Share Feedback</p>
</NavLink>
  </div> */
