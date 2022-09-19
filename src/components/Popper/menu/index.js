import Tippy from '@tippyjs/react/headless';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cs = classNames.bind(styles);
function Menu({ children, items = [] }) {
    return (
        <Tippy
            interactive
            visible
            delay={[0, 700]}
            placement="top-end"
            render={(attrs) => (
                <div className={cs('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cs('menu-popper')}>
                        {items.map((item, index) => {
                            return <MenuItem key={index} data={item} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
