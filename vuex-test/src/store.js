import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 4,
    todos: [
        {
            id: 1,
            text: 'id为1',
            done: true
        },
        {
            id: 2,
            text: 'id为2',
            done: false
        }
    ]
};

const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length;
    },
    getTodosById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
};

const mutations = {
    increment(state, payload) {
        state.count += payload.number
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions: {}
});
