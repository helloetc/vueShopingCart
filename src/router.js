//  引入vue文件和vue-router文件
import Vue from 'vue'
import Router from 'vue-router'

//  引入模块
import Cart from './components/Cart';
import List from './components/List';

//  说明在Vue中要使用router
//  所有vue的插件的使用方式都是这样的
Vue.use(Router);

//  向外暴露router模块
export default new Router({
    routes:[
        {
            path:'/cart',
            component:Cart
        },{
            path:'/list',
            component: List
        }
    ]
})
