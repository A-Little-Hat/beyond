import React, { useState } from 'react'

import styles from './search-btn.module.css'
import Button from '../button'

const SearchBtn = ({ setSearch }) => {
    const [keyword, setKeyword] = useState('')
  return (
    <div className={styles.buttonContainer}>
      <input type="text" placeholder="Search" value={keyword} onChange={e=>{
            setKeyword(e.target.value)
        }} onKeyDown={
            e=>{
                if(e.key==='Enter'){
                    setSearch(keyword)
                    setKeyword('')
                }
            }
        }/>
        <Button onClick={(e)=>{
            setSearch(keyword);
            setKeyword('');
        }} >Search</Button>
        </div>
  )
}

export default SearchBtn