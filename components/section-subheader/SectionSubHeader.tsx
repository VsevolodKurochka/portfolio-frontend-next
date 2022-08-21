import React, {ReactNode} from 'react';
//import './styles.scss';
import classNames from 'classnames';

type Props = {
    title: ReactNode;
    mod?: 'center' | 'default';
    children?: ReactNode;
};

const SectionSubHeader: React.FC<Props> = ({mod, title, children}) => {
    const classes = classNames({
        'section-subheader': true,
        'section-subheader_center': mod === 'center'
    });

    return (
        <div className={classes}>
            <h2 className="section-subheader__title">{title}</h2>
            {children}
        </div>
    );
};

export default SectionSubHeader;
