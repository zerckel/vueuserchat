    export default  Vue.component('users', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<div class="inbox_people">\n' +
            '    <div class="headind_srch">\n' +
            '        <div class="recent_heading">\n' +
            '            <h4>Recent</h4>\n' +
            '        </div>\n' +
            '        <div class="srch_bar">\n' +
            '            <div class="stylish-input-group">\n' +
            '                <input type="text" class="search-bar" placeholder="Search">\n' +
            '                <span class="input-group-addon">\n' +
            '                <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>\n' +
            '                </span></div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="inbox_chat">\n' +
            '        <user class="chat_list">\n' +
            '        </user>\n' +
            '    </div>\n' +
            '</div>'
    })
