import React from 'react';
import classNames from 'classnames';
import Icon, {ICONS} from 'components/icon';
import {Props} from './types';
//import './styles.scss';
import {SOCIAL_CLASSES} from './constants';

const defaultItems = [
    {url: 'https://twitter.com/sevakurochka', icon: ICONS.TWITTER},
    {url: 'https://www.linkedin.com/in/vsevolod-kurochka/', icon: ICONS.LINKEDIN},
    {url: 'https://t.me/kurochka', icon: ICONS.TELEGRAM}
]

const Social: React.FC<Props> = ({items = defaultItems, color}: Props) => {
    const socialClasses = classNames({
        'social': true,
        [SOCIAL_CLASSES[color]]: true
    });

    return (
        <ul className={socialClasses}>
            {items.map((item, index) => {
                return (
                    <li key={index} className="social__item">
                        <a className="social__link" href={item.url} target="_blank" rel="noopener noreferrer">
                            <Icon icon={item.icon} />
                        </a>
                    </li>
                )
            })}
        </ul>
    );
};

export default Social;
