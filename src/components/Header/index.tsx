import React from 'react';
import style from './style.module.css';
import { UserContext } from '../../context';

const Header = () => {
    const context = React.useContext(UserContext)
        return(
            <header>
                <div className={style.blockHeader}>
                    <a href="/#">{context.name}</a>
                </div>
            </header>
        )
}

export default React.memo(Header)
