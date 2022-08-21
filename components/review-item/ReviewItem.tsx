import React from 'react';
import {Props} from './types';
//import './styles.scss';
import classNames from 'classnames';

const ReviewItem: React.FC<Props> = ({name, position, text, image, modification}) => {

	const reviewClasses = classNames({
		'review-item': true,
		'review-item_slider': modification === 'slider'
	});

	return (
		<figure className={reviewClasses}>
			<div className="review-item__body">
				<figcaption className="review-item__text">{text}</figcaption>
			</div>
			<div className="review-item__footer">
				{
					name ? <p className="review-item__name">{name}</p> : null
				}
				{
					position ? <p className="review-item__position">{position}</p> : null
				}
				{
					image ? <img src={image} alt={name} className="review-item__logo" /> : null
				}
			</div>
		</figure>
	);
};

export default ReviewItem;
