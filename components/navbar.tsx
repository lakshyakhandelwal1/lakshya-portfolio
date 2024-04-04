import Link from 'next/link'
import React from 'react'
import { Toggle } from './ui/toggle'
import ThemeSwitcher from './theme-switcher'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="flex justify-between items-center backdrop-blur-md bg-opacity-30 bg-gray-400 dark:text-slate-50 rounded-xl p-4 sticky top-4">
        <div className="font-bold text-xl">Lakshya Khandelwal</div>
        <nav className="hidden md:block space-x-4">
          <Link className="hover:underline" href="/blogs">
            Blog
          </Link>
          <Link className="hover:underline" href="#projects">
            Projects
          </Link>
          <Link className="hover:underline" href="#skills">
            Skills
          </Link>
          <Link className="hover:underline" href="#contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeSwitcher/>
        </div>
      </header>
  )
}

export default Navbar