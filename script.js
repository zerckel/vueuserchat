import users from '/vueuserchat/App/chat/users/users.js'
import user from '/vueuserchat/App/chat/users/user/user.js'
import message from '/vueuserchat/App/chat/message/message.js'


let app = new Vue({
    el: '#app',
    data: {
        users:{

        }
    },
    components:{
        users,
        user,
        message
    },
    methods:{
        logUser: function () {

        }
    },
    created: function () {
        setInterval(() => {
            this.logUser()
        }, 30 * 1000)
    }
})