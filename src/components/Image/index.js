import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import Styles from './image.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(Styles);
const Image = forwardRef(({ src, alt, falseBack: customFalseBack = images.noImage, className, ...props }, ref) => {
    const [falseBack, setFalseBack] = useState('');

    return (
        <img
            ref={ref}
            className={cs('wrapper', { [className]: className })}
            {...props}
            src={falseBack || src}
            alt={alt}
            onError={() => {
                setFalseBack(customFalseBack);
            }}
        ></img>
    );
});

export default Image;
