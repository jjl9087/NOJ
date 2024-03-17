import { createRouter, createWebHistory } from "vue-router";
import userLogin from '@/components/user/userLogin'
import home from '@/components/views/home'
import userReg from '@/components/user/userReg'
import contestMain from '@/components/contest/contestMain'
import userEdit from '@/components/user/userEdit'
import problemMain from '@/components/problem/problemMain'
import submissionMain from '@/components/submission/submissionMain'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        meta: {
            title: '用户登录',
            activeTitle: '/user/login'
        },
        path: '/user/login', component: userLogin,
    }, 
    {
        meta: {
            title: '首页',
            activeTitle: '/'
        },
        path: '/', component: home,
    }, 
    {
        meta: {
            title: '用户注册',
            activeTitle: '/user/reg'
        },
        path: '/user/reg', component: userReg,
    } ,
    {
        meta: {
            title: '用户主页',
            activeTitle: '/user/reg'
        },
        path: '/user/userEdit', component: userEdit,
    },
    {
        meta: {
            title: '题库主页',
            activeTitle: '/problem/problemMain'
        },
        path: '/problem', component: problemMain,
    } ,
    {
        meta: {
            title: '比赛主页',
            activeTitle: '/contest/contestMain'
        },
        path: '/contest', component: contestMain,
    },
    {
        meta: {
            title: '提交主页',
            activeTitle: '/submission/submissionMain'
        },
        path: '/submission', component: submissionMain,
    }],
    caseSensitive: true
});

export default router;
