'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

export function Footer() {
  const year = new Date().getFullYear()

  const [contactHash, setContactClass] = useState(
    typeof window !== 'undefined' ? window.location.hash : ''
  )

  useEffect(() => {
    const handleHashChange = () => {
      setContactClass(
        window.location.hash === '#contact' ? 'contact-highlight' : ''
      )
    }
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <footer className='flex justify-center items-center w-full mx-auto md:max-w-2xl container'>
      <div className='w-full mx-auto md:flex md:items-center md:justify-between text-sm font-medium text-neutral-700 dark:text-neutral-300'>
        <p>
          © {year}
          <span className='ms-2 me-2'>•</span>
          <a
            href='https://link.emapeire.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:underline-offset-4'
          >
            Emanuel Peire
          </a>
          <span className='ms-2 me-2'>—</span>
          All rights reserved.
        </p>
        <ul className='flex flex-wrap items-center pt-2 md:pt-0'>
          <li>
            <a
              href='/#about'
              className='hover:underline hover:underline-offset-4'
            >
              About
            </a>
          </li>
          <span className='ms-4 me-4'>|</span>
          <li>
            <a
              id='contact'
              href='mailto:me@emapeire.xyz'
              className={clsx(
                'hover:underline hover:underline-offset-4',
                contactHash
              )}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
