import classNames from 'classnames/bind';
import Styles from './Popper.module.scss';

const cs = classNames.bind(Styles);
function wrapper({ children }) {
    return <div className={cs('wrapper')}>{children}</div>;
}

export default wrapper;
