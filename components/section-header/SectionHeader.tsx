import React, {ReactNode} from 'react';
//import './styles.scss';
import Particles from 'react-particles-js';
import {particles} from 'helpers/particles';
import classNames from 'classnames';

type Props = {
    title: ReactNode;
    subtitle?: ReactNode;
    mod?: 'center' | 'default' | 'full';
    children?: ReactNode;
};

const SectionHeader: React.FC<Props> = ({mod, title, children, subtitle}) => {
    const classes = classNames({
        'section-header': true,
        'section-header_center': mod === 'center',
        'section-header_full': mod === 'full'
    });

    return (
        <div className={classes}>
            <Particles
                params={particles}
                className="section-header__particles"
            />
            <div className="section-header__content">
                <h1 className="section-header__title">{title}</h1>
                {subtitle ? <p className="section-header__subtitle">{subtitle}</p> : null}
                {children}
            </div>
        </div>
    );
};

export default SectionHeader;
