//ajax
var user = {
    login: $.post('http://192.168.172.82:8000/admin/login', {
        user_name: name,
        password: password
    }).then(function (res) {
        if (res.code == 200) {
            alert('登陆成功')
        } else {
            console.log(name, password);

            alert(res.msg)
        }
    }),

}