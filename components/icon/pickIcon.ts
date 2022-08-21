import {TelegramIcon, TwitterIcon, LinkedinIcon} from 'public/images/icons';
import {ICONS} from './constants';

const pickIcon = (name: ICONS) => {
	switch (name) {
		case ICONS.TELEGRAM: return TelegramIcon;
		case ICONS.TWITTER: return TwitterIcon;
		case ICONS.LINKEDIN: return LinkedinIcon;
		default: throw new Error('no SVG for: ' + name);
	}
};

export {
	pickIcon
};
