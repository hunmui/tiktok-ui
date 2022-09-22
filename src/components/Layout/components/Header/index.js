import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    faEllipsisV,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faAdd,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Button from '~/components/Button';
import Menu from '~/components/Popper/menu';
import Image from '~/components/Image';
import { MessageIcon, EmailIcon } from '~/components/Icons';
import Search from '~/components/Layout/components/Search';

const cs = classNames.bind(styles);
const MenuItems = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'VietNamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/Feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboad shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleOnchage = (menuItem) => {
        console.log(menuItem);
    };

    const MenuUser = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MenuItems,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'logout',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}>
                <div className={cs('logo')}>
                    <img src={images.logo} alt="Tik Tok" />
                </div>

                <Search></Search>

                <div className={cs('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={'Upload-btn'}
                                leftIcon={<FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>}
                                text
                            >
                                Upload
                            </Button>
                            <Tippy display={[0, 200]} content="Message" placement="bottom">
                                <button className={cs('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy display={[0, 200]} content="MailBox" placement="bottom">
                                <button className={cs('action-btn')}>
                                    <EmailIcon />
                                    <span className={cs('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log In</Button>
                        </>
                    )}
                    <Menu items={currentUser ? MenuUser : MenuItems} onChange={handleOnchage}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/feef791b23e820bb05dc9c30efb798d7~c5_300x300.webp?x-expires=1663495200&x-signature=tCFN%2FZ1DfLeHKLfr7XANSpXJQ2Y%3D"
                                className={cs('user-avatar')}
                                alt={'Nguyễn Văn A'}
                                falseBack={'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'}
                            ></Image>
                        ) : (
                            <button className={cs('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
