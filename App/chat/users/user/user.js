export default Vue.component('user',{
    data: function () {
        return{
            name: 'antoine'
        }
    },
    template: '      <div class="chat_list active_chat">\n' +
        '                       <div class="chat_people">\n' +
        '                          <div class="chat_img"><img src="https://ptetutorials.com/images/user-profile.png"\n' +
        '                                                       alt="sunil"></div>\n' +
        '                           <div class="chat_ib">\n' +
        '                               <h5>{{name}} <span class="chat_date">Dec 25</span></h5>\n' +
        '                               <p>Test, which is a new approach to have all solutions \n' +
        '                                   astrology under one roof.</p>\n' +
        '                           </div>\n' +
        '                       </div>\n' +
        '                  </div>'
})