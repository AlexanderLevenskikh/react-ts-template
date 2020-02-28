import cn from 'classnames';
import React, { ComponentType, FC } from 'react';
import { NavLink } from 'redux-first-router-link';
import styles from './styles.less';

interface IMenuItemProps {
    isActive: boolean;
    title: string;
    link: string;
    logo: ComponentType;
}

export const MenuItem: FC<IMenuItemProps> = props => {
    const { isActive, title, link, logo: Logo } = props;
    const classes = cn({
        [ styles.menuItem ]: true,
        [ styles.menuItemActive ]: isActive,
    });

    return (
        <li>
            <NavLink
                to={ link }
                className={ classes }
            >
                <div className={ styles.logoWrapper }>
                    <Logo/>
                </div>
                <span className={ styles.menuItemTitle }>
                    { title }
                </span>
            </NavLink>
        </li>
    );
};
