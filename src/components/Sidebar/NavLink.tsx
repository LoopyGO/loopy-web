export function NavLink({
  href,
  children,
}: {
  href: string
  // eslint-disable-next-line no-undef
  children: JSX.Element[] | JSX.Element
}) {
  return (
    <a className="flex items-center gap-3 hover:bg-base-4 p-2 rounded-lg" href={href}>
      {children}
    </a>
  )
}
