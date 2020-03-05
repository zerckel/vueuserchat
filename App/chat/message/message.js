export default Vue.component('message', {
    data: function () {
        return{
            messages:{
                message: 'bloblo'
            }
        }
    },
    template: '                <div class="mesgs">\n' +
        '                    <div class="msg_history">\n' +
        '                        <div class="incoming_msg">\n' +
        '                            <div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png"\n' +
        '                                                               alt="sunil"></div>\n' +
        '                            <div class="received_msg">\n' +
        '                                <div class="received_withd_msg">\n' +
        '                                    <p>Test which is a new approach to have all\n' +
        '                                        solutions</p>\n' +
        '                                    <span class="time_date"> 11:01 AM    |    June 9</span></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="outgoing_msg">\n' +
        '                            <div class="sent_msg">\n' +
        '                                <p>Test which is a new approach to have all\n' +
        '                                    solutions</p>\n' +
        '                                <span class="time_date"> 11:01 AM    |    June 9</span></div>\n' +
        '                        </div>\n' +
        '                        <div class="incoming_msg">\n' +
        '                            <div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png"\n' +
        '                                                               alt="sunil"></div>\n' +
        '                            <div class="received_msg">\n' +
        '                                <div class="received_withd_msg">\n' +
        '                                    <p>Test, which is a new approach to have</p>\n' +
        '                                    <span class="time_date"> 11:01 AM    |    Yesterday</span></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="outgoing_msg">\n' +
        '                            <div class="sent_msg">\n' +
        '                                <p>Apollo University, Delhi, India Test</p>\n' +
        '                                <span class="time_date"> 11:01 AM    |    Today</span></div>\n' +
        '                        </div>\n' +
        '                        <div class="incoming_msg">\n' +
        '                            <div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png"\n' +
        '                                                               alt="sunil"></div>\n' +
        '                            <div class="received_msg">\n' +
        '                                <div class="received_withd_msg">\n' +
        '                                    <p>We work directly with our designers and suppliers,\n' +
        '                                        and sell direct to you, which means quality, exclusive\n' +
        '                                        products, at a price anyone can afford.</p>\n' +
        '                                    <span class="time_date"> 11:01 AM    |    Today</span></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="type_msg">\n' +
        '                        <div class="input_msg_write">\n' +
        '                            <input type="text" class="write_msg" placeholder="Type a message"/>\n' +
        '                            <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o"\n' +
        '                                                                          aria-hidden="true"></i></button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>'
})