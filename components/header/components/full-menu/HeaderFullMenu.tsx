import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import {SOCIAL_COLORS} from 'components/social';
import Social from 'components/social/Social';

type Props = {
    isActive: boolean
};

const HeaderFullMenu: React.FC<Props> = ({isActive}: Props) => {
    const list = [
        {text: 'Home', link: '/'},
        {text: 'About me', link: '/about'},
        {text: 'Projects', link: '/projects'},
        {text: 'Contact', link: '/contacts'}
    ];

    const classes = classNames({
        'header-full-menu': true,
        'active': isActive
    });

    return (
        <div className={classes}>
            <div className="header-full-menu__content">
                <ul className="header-full-menu__list">
                    {list.map((item, index) => {
                        return (
                            <li key={index} className="header-full-menu__list-item">
                                <Link href={item.link} passHref>
                                    <a className="header-full-menu__list-link">{item.text}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="header-full-menu__info">
                <div className="header-full-menu__info-content">
                    <p className="header-full-menu__info-title
                    header-full-menu__info-animation
                    header-full-menu__info-animation-1">Get In Touch</p>
                    <a
                        href="mailto: seva.kurochka@gmail.com"
                        className="header-full-menu__info-link
                        header-full-menu__info-animation
                        header-full-menu__info-animation-2">
                        seva.kurochka@gmail.com
                    </a>
                    <div
                        className="header-full-menu__info-social
                        header-full-menu__info-animation
                        header-full-menu__info-animation-3">
                        <Social color={SOCIAL_COLORS.WHITE} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderFullMenu;
