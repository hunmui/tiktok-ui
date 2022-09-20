import Tippy from '@tippyjs/react/headless';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cs = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    return (
        <Tippy
            interactive
            offset={[12, 8]}
            delay={[0, 700]}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            placement="top-end"
            render={(attrs) => (
                <div className={cs('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cs('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Languages'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></Header>
                        )}
                        {current.data.map((item, index) => {
                            const isParent = !!item.children;

                            return (
                                <MenuItem
                                    key={index}
                                    data={item}
                                    onClick={() => {
                                        if (isParent) {
                                            setHistory((prev) => {
                                                return [...prev, item.children];
                                            });
                                        } else {
                                            onChange(item);
                                        }
                                    }}
                                />
                            );
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
