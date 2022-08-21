import React from 'react';
import {Props} from './button.types';
import Link from 'next/link';

import {ButtonSizes, ButtonTypes} from './button.enums';
//import './styles.module.scss';

const Button: React.FC<Props> = ({children, onClick, styleType, styleSize, href, type, routerLink, target}) => {
    const elementClass = `btn btn_${styleType} btn_${styleSize}`;

    if (href) {
        return <a href={href} rel="noopener noreferrer" target={target} className={elementClass}>{children}</a>;
    } else if (routerLink) {
        return <Link href={routerLink}><a className={elementClass}>{children}</a></Link>;
    }

    return (
        <button
            type={type}
            className={elementClass}
            onClick={onClick}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    styleSize: ButtonSizes.DEFAULT,
    styleType: ButtonTypes.FILLED_WHITE
};

export default Button;
