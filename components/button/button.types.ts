import {ReactNode} from 'react';
import {ButtonSizes, ButtonTypes} from './button.enums';

export interface Props {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    styleType?: ButtonTypes;
    styleSize?: ButtonSizes;
    href?: string;
    target?: string;
    routerLink?: string;
}
