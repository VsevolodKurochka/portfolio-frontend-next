import React from 'react';
import {Props} from './types';
import {pickIcon} from './pickIcon';

const Icon: React.FC<Props> = ({icon}: Props) => {
	const SVG = pickIcon(icon);

	return (
		<SVG />
	);
};

export default Icon;
