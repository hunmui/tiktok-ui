import Button from '~/components/Button';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cs('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
