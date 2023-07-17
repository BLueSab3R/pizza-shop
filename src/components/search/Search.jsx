import React from 'react'
import styles from './_search.module.scss'
import { SearchContext } from '../../App';
const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const handleSearch = (input) => {
    setSearchValue(input);
  }
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        className={styles.input}
        onChange={(event) => handleSearch(event.target.value)}
        placeholder='Search pizza...'
      />
      <svg onClick={() => setSearchValue('')} className={styles.close__icon} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
    </div>
  )
}

export default Search;

