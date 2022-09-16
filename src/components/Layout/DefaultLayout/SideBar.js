import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cs = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cs('wrapper')}>
            <h1>SideBar</h1>
        </aside>
    );
}

export default SideBar;
