import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-12">
      <div className="container py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} Vincent. All rights reserved.</div>
        <div className="mt-3 md:mt-0">Built with React + Tailwind</div>
      </div>
    </footer>
  )
}
