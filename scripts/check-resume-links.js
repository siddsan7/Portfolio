import { readFileSync } from 'node:fs'
import { profile } from '../src/data/profile.js'

const expectedResumeUrl =
  'https://drive.google.com/file/d/1b-1fFbyEB5KZibWbzwQiYJZNb8ajk_le/view?usp=sharing'

const sourceChecks = [
  {
    file: 'src/components/layout/Navbar.jsx',
    expected: 'href={profile.resume}',
  },
  {
    file: 'src/components/home/Hero.jsx',
    expected: 'href={profile.resume}',
  },
  {
    file: 'src/pages/Contact.jsx',
    expected: 'href={value}',
  },
]

if (profile.resume !== expectedResumeUrl) {
  throw new Error(`Expected profile.resume to be ${expectedResumeUrl}, received ${profile.resume}`)
}

for (const { file, expected } of sourceChecks) {
  const source = readFileSync(file, 'utf8')

  if (!source.includes(expected)) {
    throw new Error(`Expected ${file} to include ${expected}`)
  }
}

console.log('Resume links point to the shared Google Drive resume URL.')
