import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return <header className={s.header}>
        <img src="https://im0-tub-ru.yandex.net/i?id=b62f41f00ecbd9afaee942529b76a186&n=13"/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;