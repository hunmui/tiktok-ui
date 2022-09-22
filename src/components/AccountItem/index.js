import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cs = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cs('wrapper')}>
            <Image
                className={cs('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/feef791b23e820bb05dc9c30efb798d7~c5_300x300.webp?x-expires=1663495200&x-signature=tCFN%2FZ1DfLeHKLfr7XANSpXJQ2Y%3D"
                alt="Avatar"
            />
            <div className={cs('info')}>
                <h4 className={cs('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cs('check')} icon={faCheckCircle} />
                </h4>
                <span className={cs('username')}>Nguyễn Văn A</span>
            </div>
        </div>
    );
}

export default AccountItem;
