import { UserIcon, HomeIcon } from '@heroicons/react/20/solid'

export function Sidebar() {
  return (
    <div className="flex h-screen w-full max-xl:items-center justify-between flex-col gap-6 p-6   border-r border-base-6 bg-base-2">
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <a className="flex items-center gap-3 hover:bg-base-4 rounded-lg p-2" href="/">
              <HomeIcon width={24} height={24} />
              <p>Home</p>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 hover:bg-base-4 rounded-lg p-2" href="/">
              <UserIcon width={24} height={24} />
              <p>User</p>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 hover:bg-base-4 rounded-lg p-2" href="/">
              <UserIcon width={24} height={24} />
              <p>user</p>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 hover:bg-base-4 rounded-lg p-2" href="/">
              <UserIcon width={24} height={24} />
              <p>User</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-sm flex flex-col gap-1">
        <div className="flex items-center gap-3 hover:bg-base-4 p-2 rounded-lg">
          <p>Changelog</p>
        </div>
        <div className="flex items-center gap-3 hover:bg-base-4 p-2 rounded-lg">
          <p>Share Feedback</p>
        </div>
      </div>
    </div>
  )
}
