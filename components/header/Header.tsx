import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router'

import HeaderToggle from './components/toggle/HeaderToggle';
import HeaderFullMenu from './components/full-menu/HeaderFullMenu';
//import styles from './styles.module.scss';

const Header: React.FC = () => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleClick = () => {
        setIsActive(!isActive);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    const headerClasses = classNames({
        'header': true,
        'header_scrolled': isScrolled,
        'header_static-background': router.pathname.includes('/project/')
    });

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={headerClasses}>
                <Link href="/" passHref>
                    <a>
                        <img
                            src='/images/logo-new.png'
                            alt={'Vsevolod Kurochka'}
                            className={'header__image'}
                        />
                    </a>
                </Link>
                <HeaderToggle
                    isActive={isActive}
                    onClick={toggleClick}
                />
            </header>
            <HeaderFullMenu
                isActive={isActive}
            />
        </>
    );
};

export default Header;
