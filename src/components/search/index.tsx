import React from 'react'
import { Input } from '../ui/input'

type Props = {
  placeholder: string,
  className: string,
}

const Search = ({ className, ...props }: Props) => {
  return (
    <div>
      <Input className={`rounded-full border-2 border-slate-200 h-full bg-slate-100 ${className}`} {...props} />
    </div>
  )
}

export default Search