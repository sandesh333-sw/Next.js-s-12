import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav className='bg-white shadow-sm border-b'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/*Logo */}
          <div className='shrink-0'>
            <Link href={"/"} className='text-xl font-bold text-gray-800'>
            My website
            </Link>
          </div>

          {/*Navigation links */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              <Link href={"/"} className='text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors'>
            HomePage
            </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
