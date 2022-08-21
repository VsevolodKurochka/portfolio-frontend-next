import {ICONS} from 'components/icon';
import {SOCIAL_COLORS} from './constants';

export type SocialItem = {
    url: string;
    icon: ICONS;
};

export type Props = {
    items?: SocialItem[],
    color: SOCIAL_COLORS
};
