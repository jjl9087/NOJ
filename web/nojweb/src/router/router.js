import { createRouter, createWebHistory } from "vue-router";
import userLogin from '@/components/user/userLogin'
import home from '@/components/views/home'
import userReg from '@/components/user/userReg'
import contestMain from '@/components/contest/contestMain'
import userEdit from '@/components/user/userEdit'
// import problemMain from '@/components/problem/problemMain'
import submissionMain from '@/components/submission/submissionMain'
import userMain from '@/components/user/userMain'
import problemDescription from '@/components/problem/problemDescription'
import problemSubmission from '@/components/problem/problemSubmission'
import problemList from '@/components/problem/problemList.vue'
import submissionDetail from '@/components/submission/submissionDetail.vue'
import store from "@/sto/store";

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
        },
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
                activeTitle: '/problem'
            },
            path: '/problem', component: problemList,
        },
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
        },
        {
            meta: {
                title: '用户信息',
                activeTitle: '/user'
            },
            path: '/user/:uid', component: userMain,
        },
        {
            meta: {
                title: '用户信息',
                activeTitle: '/user'
            },
            path: '/problem/:pid', component: problemDescription,
        },
        {
            meta: {
                title: '用户信息',
                activeTitle: '/user'
            },
            path: '/problem/:pid/submission', component: problemSubmission,
        },
        {
            meta: {
                title: '提交之后',
                activeTitle: '/submission'
            },
            path: '/submission/:sid', component: submissionDetail,
        }],
    caseSensitive: true
});

router.afterEach((to) => {
    store.state.activeTitle = to.meta.activeTitle;
    if (to.meta.title) {
        document.title = to.meta.title
    }
})



/*router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行
    // next() 放行   next('/login') 强制跳转
    if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) this.$store.commit('setUid', 0);
  })
*/


export default router;

