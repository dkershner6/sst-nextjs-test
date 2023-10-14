import React from 'react'
import Link from 'next/link'
import { HOW_MANY_PAGES_ARE_THERE } from '@/lib/number'



export default function Home() {
  return (
    <main>
      <div>The land of many links</div>
      <div>
        {Array.from({length: HOW_MANY_PAGES_ARE_THERE}).map((_, index) => (<div key={index}><Link href={`/${index}`} prefetch={false}>Link to {index}</Link></div>))}
      </div>
    </main>
  )
}
