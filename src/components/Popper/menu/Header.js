import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <header className={cs('header')}>
            <div className={cs('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </div>
            <h6 className={cs('header-title')}>{title}</h6>
        </header>
    );
}

export default Header;
