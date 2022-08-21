import React from 'react';
import classNames from 'classnames';
//import './styles.scss';

type Props = {
    isActive: boolean,
    onClick(): void
};

const HeaderToggle: React.FC<Props> = ({isActive, onClick}: Props) => {
    const classes = classNames({
        'header-toggle': true,
        'active': isActive
    });

    return (
        <>
            <button className={classes} onClick={onClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </>
    );
};

export default HeaderToggle;
