//ajax
var user = {
    //用户登录
    login: function (name, password) {
        return $.post(BASEURL + APILIST.user_login, {
            user_name: name,
            password: password
        })
    },
    //退出
    logout: function () {
        return $.post(BASEURL + APILIST.user_logout)

    },
    //用户信息
    info: function () {
        return $.get(BASEURL + APILIST.user_info)
    }
}