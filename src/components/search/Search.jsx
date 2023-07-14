import React from 'react'
import styles from './_search.module.scss'
const Search = ({ setSearchValue,searchValue }) => {
  const handleSearch = (input) => {
    setSearchValue(input);
  }
  return (
    <div className={styles.root}>
      <svg className={styles.search__icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> </svg>
      <input
        value = {searchValue}
        className={styles.input}
        onChange={(event) => handleSearch(event.target.value)}
        placeholder='Search pizza...'
      />
      <svg onClick={()=>setSearchValue('')} className={styles.close__icon} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
    </div>

  )
}
export default Search
