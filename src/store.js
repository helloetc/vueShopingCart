import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        username:'宋伟强',
        number:0
    },
    //  改变state的值
    mutations:{
        changeName(state,payload){
            state.username = payload.username;
        }
    },
    //  清除state的值
    getters:{
        add(state){
            let newnumber = state.number + 5
            return  newnumber
        }
    },
    //  类似于事件的定义,发送ajax请求并且传递参数，服务器返回的值交给mutations进行处理
    actions:{
        changeTwo(context,payload){
            context.commit('changeName',payload);
        }
    }
});

export default store;


