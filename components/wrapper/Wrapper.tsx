import React, {ReactNode} from 'react';
import classNames from 'classnames';
//import './styles.scss';

type Props = {
    children: ReactNode;
    noPadding?: boolean;
}

const Wrapper: React.FC<Props> = ({children, noPadding}: Props) => {
    const wrapperClasses = classNames({
        wrapper: true,
        'wrapper_no-padding': noPadding
    });
    return (
        <div className={wrapperClasses}>
            {children}
        </div>
    );
};

export default Wrapper;
