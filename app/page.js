import React from 'react';
import Portfolio from '@/components/portfolio';
import {promises as fs} from 'fs';

export default async function Home() {
  const [english, indonesian] = await Promise.all([
    fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8'),
    fs.readFile(process.cwd() + '/public/translations/id.json', 'utf-8')
  ]);

  return (
    <main suppressHydrationWarning className="flex min-h-screen flex-col items-center px-6 lg:px-24">
      <Portfolio translations={{ en: JSON.parse(english), id: JSON.parse(indonesian) }} />
    </main>
  )
}
