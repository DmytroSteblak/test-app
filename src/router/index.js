import { PostPage, Posts, About, Error, Login } from '../pages';

export const PrivateRouters = [
    { path: '/about', component: About, exact: true },
    { path: '/posts', component: Posts, exact: true },
    { path: '/posts/:id', component: PostPage, exact: true },
    { path: '/error', component: Error, expect: true }
];

export const PublicRoutes = [
    { path: '/login', component: Login, exact: true },
];
