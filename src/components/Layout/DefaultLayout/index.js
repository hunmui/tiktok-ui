import Header from '../components/Header';
import SideBar from './SideBar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cs = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <Header />
            <hr />
            <div className={cs('container')}>
                <SideBar />
                <div className={cs('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
