import React from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.create}>
           <Link to='/create'>Create New</Link>
        </div>
        <div className={s.tasks}>
            <Link to='/myTasks'>MyTasks</Link>
        </div>
    </header>
}

export default Header;
