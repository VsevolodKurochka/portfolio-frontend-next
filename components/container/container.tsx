import React from 'react';
import {Props} from './container.types';
//import './styles.scss';

const Container: React.FC<Props> = ({children, className}: Props) => {
    return (
        <div className={`container ${className ? className : ''}`}>{children}</div>
    );
};

export default Container;
