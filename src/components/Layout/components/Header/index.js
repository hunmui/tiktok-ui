import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(styles);

function Header() {
    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}>
                <div className={cs('logo')}>
                    <img src={images.logo} alt="Tik Tok" />
                </div>
                <div className={cs('search')}>
                    <input placeholder="Search account and video" spellCheck={false} />
                    <button className={cs('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cs('loading')} icon={faSpinner} />
                    <button className={cs('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cs('action')}></div>
            </div>
        </header>
    );
}

export default Header;
