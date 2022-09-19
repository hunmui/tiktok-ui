import classNames from 'classnames/bind';
import Styles from './Popper.module.scss';

const cs = classNames.bind(Styles);
function wrapper({ children, className }) {
    return <div className={cs('wrapper', className)}>{children}</div>;
}

export default wrapper;
