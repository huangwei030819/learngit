import Vue from 'vue'
import Vuex from 'vuex'
import mapdata from './mapdata'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        countsum:0,
        search_string:mapdata,
        map_data:new Object
    },
    mutations:{
        init_date(sum){
            console.log(sum);
        },
        return_data(sum_data){
            console.log(1);
            console.log(typeof(this.state.map_data));
            this.state.map_data=sum_data;
        }
    }
});

export default store;