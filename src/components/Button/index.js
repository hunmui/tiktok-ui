import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Styles from './Button.module.scss';

const cs = classNames.bind(Styles);
function Button({
    to,
    href,
    outline = false,
    primary = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disable = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cs('wrapper', { [className]: className, primary, outline, small, large, text, rounded });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cs('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cs('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
