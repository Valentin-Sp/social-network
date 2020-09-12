import React from "react";
import s from "./nav.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a href="/profile" className={s.item}>Profile</a>
            </div>
            <div>
                <a href="/dialogs" className={s.item}>Massages</a>
            </div>
            <div>
                <a href="https://github.com/Valentin-Sp/my-first-repo" className={s.item}>News</a>
            </div>
            <div>
                <a href="https://github.com/Valentin-Sp/my-first-repo" className={s.item}>Music</a>
            </div>
            <div>
                <a href="https://github.com/Valentin-Sp/my-first-repo" className={s.item}>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;
