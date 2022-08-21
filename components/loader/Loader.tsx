import React from 'react';
import classNames from 'classnames';
import {Props} from './types';
import {LOADER_COLORS_CLASSES, LOADER_SIZES_CLASSES} from './constants';
//import './styles.scss';

const Loader: React.FC<Props> = ({size, color}: Props) => {
	const loaderClasses = classNames({
		'loader': true,
		[LOADER_SIZES_CLASSES[size]]: true,
		[LOADER_COLORS_CLASSES[color]]: true
	});

	return (
		<div className={loaderClasses}>
			<div className="loader__ball loader__ball_1">
				<div className="loader__inner"></div>
			</div>
			<div className="loader__ball loader__ball_2">
				<div className="loader__inner"></div>
			</div>
			<div className="loader__ball loader__ball_3">
				<div className="loader__inner"></div>
			</div>
			<div className="loader__ball loader__ball_4">
				<div className="loader__inner"></div>
			</div>
			<div className="loader__ball loader__ball_5">
				<div className="loader__inner"></div>
			</div>
		</div>
	);
};

export default Loader;
