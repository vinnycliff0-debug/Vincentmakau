import React from 'react'
import Navigation from './Navigation'

export default function Header(){
  return (
    <header className="bg-neutral-50 border-b border-neutral-200">
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-md" aria-hidden="true"></div>
          <div>
            <h1 className="text-lg font-semibold">Vincent</h1>
            <p className="text-xs text-neutral-600">Design & Strategy</p>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  )
}
