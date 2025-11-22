import React from 'react'

export default function Navigation(){
  return (
    <nav>
      <ul className="hidden md:flex items-center gap-6 text-sm">
        <li><a className="hover:text-primary" href="#features">Features</a></li>
        <li><a className="hover:text-primary" href="#about">About</a></li>
        <li><a className="hover:text-primary" href="#contact">Contact</a></li>
        <li><a className="inline-block px-4 py-2 rounded-md bg-primary text-white text-sm" href="#contact">Get Started</a></li>
      </ul>
      <button className="md:hidden p-2 rounded bg-neutral-100">Menu</button>
    </nav>
  )
}
