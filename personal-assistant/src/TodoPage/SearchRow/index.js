import React from 'react'
import { Input } from './styles'

const SearchRow = ({ search, setSearch }) => (
  <Input placeholder="Search Todos..." value={search} onChange={e => setSearch(e.target.value)} />
)
// TODO
// value={search} onChange={e => setSearch({e.target.value})}
export default SearchRow
