import React from 'react'
import { useRouter } from 'next/router'

import NavItem from './nav-item'
import { World } from '../icons'

import styles from './navigation.module.css'

const Navigation = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <NavItem
        href="/"
        selected={
          router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
        }
      >
        <World />
        <span>Questions</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <img src="https://www.svgrepo.com/show/23943/price-tag.svg" alt="Tags" 
          width="18px" height="18px"
        />
        <span>Tags</span>
      </NavItem>

      <NavItem
        href="/users"
        selected={router.pathname.split('/')[1] == 'users'}
      >
        <img src="https://www.svgrepo.com/show/90056/magnifying-glass.svg" alt="Users" 
          width="18px" height="18px"
        />
        <span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
