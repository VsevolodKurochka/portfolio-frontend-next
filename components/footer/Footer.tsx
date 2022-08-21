import React, {useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/container';
//import './styles.scss';
import {setBodyPadding} from './utils';
import Social, {SOCIAL_COLORS} from 'components/social';

const Footer: React.FC = () => {
    const footer = useRef(null);
    const getCurrentYear = () => new Date().getFullYear();

    useEffect(() => {
        const initSetPadding = () => setBodyPadding(footer);
        initSetPadding();

        window.addEventListener('resize', initSetPadding);
        return () => window.removeEventListener('resize', initSetPadding);
    }, []);

    return (
        <footer className="footer" ref={footer}>
            <Container>
                <div className="footer__grid">
                    <div className="footer__info">
                        {/*<Link href="/">
                            <Image src={'/images/logo-new.png'} alt={'Vsevolod Kurochka'} className="footer__logo" />
                        </Link>*/}
                        <p className="footer__copy">
                            &copy; 2016-{getCurrentYear()} Vsevolod Kurochka Portfolio
                        </p>
                        <p className="footer__tools">
                            Backend: Strapi + GraphQL<br />
                            Frontend: Next.JS, Apollo, Typescript
                        </p>
                    </div>

                    <div className="footer__social">
                        <Social color={SOCIAL_COLORS.WHITE} />
                    </div>

                    <div className="footer__contact">
                        <p className="footer__title">Get In Touch</p>
                        <a href="mailto: seva.kurochka@gmail.com" className="footer__link">seva.kurochka@gmail.com</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
