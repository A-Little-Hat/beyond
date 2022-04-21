import React, { useState, useEffect, useContext } from 'react'
import cn from 'classnames'
import swal from 'sweetalert';
import { AuthContext } from '../../store/auth'

import Button from '../button'

import styles from './page-title.module.css'

const PageTitle = ({ title, button, borderBottom = true, children }) => {
  const { isAuthenticated } = useContext(AuthContext)
  const [showButt, setShowButt] = useState()
  useEffect(() => {
    // check if the url is /questions/[slug]
    const url = window.location.href
    if (url.includes('/questions/')) {
      setShowButt(true)
    } else {
      setShowButt(false)
    }
  }, showButt)
  
  return (
    <div className={cn(styles.container, borderBottom && styles.borderBottom)}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <div className={styles.buttonContainer}>
          {showButt&&(
            <Button secondary style={{ 
              marginRight: '10px',
              maxHeight: '40px',
            }}
            onClick={() => {
              //if navigator.share is available then share the url or copy to clipboard
              if (navigator.share) {
                navigator.share({
                  title: title,
                  url: window.location.href,
                })
                navigator.clipboard.writeText(window.location.href)
              } else {
                navigator.clipboard.writeText(window.location.href)
                // alert('Copied to clipboard')
                swal({
                  icon: "success",
                  text: "Copied to clipboard",
                });
              }}}
            >
              <img src="/images/copy.svg" alt="copy" height="100%" />
            </Button>
          )}
          {button && (
            <Button
              href={isAuthenticated() ? '/questions/ask' : '/auth'}
              primary
            >
              Ask Question
            </Button>
          )}
        </div>
      </div>
      {children && <p className={styles.summary}>{children}</p>}
      
    </div>
  )
}

export default PageTitle
