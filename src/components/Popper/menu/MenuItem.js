import Button from '~/components/Button';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cs('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
