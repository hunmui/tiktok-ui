//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/UpLoad';
import Search from '~/pages/Search';
//pub route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, Layout: HeaderOnly },
    { path: '/search', component: Search, Layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
