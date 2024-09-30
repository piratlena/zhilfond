import axios from "axios"

const url = import.meta.env.APP_BACKEND_HOST

const state = () => ({
    employees: {},
})

const getters = {
    getEmployees(state) {
        return state.employees
    }
}

const mutations = {
    setEmployees(state, payload){
        state.employees = payload

    },
}

const actions = {

    async getEmployee(context, payload) {
        try {
            let response = null
            console.log(payload)
            response = await axios.get(`https://jsonplaceholder.typicode.com/users?${payload.query}`)
            console.log(response)
            if (response) {
                context.commit('setEmployees', response.data)
            }
        } catch (e) {
            console.log(e)
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}