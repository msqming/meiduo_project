let vm = new Vue({
    el: '#app',
    delimiters: ['[[',']]'],  //  修改Vue读取变量的语法
    data: {  // 数据对象
        // v-model
        username: '',
        password: '',
        password2: '',
        mobile: '',
        allow: '',

        // v-show
        error_name: false,
        error_password: false,
        error_password2: false,
        error_mobile: false,
        error_allow: false,

        // error_message
        error_name_message: '',
        error_mobile_message: '',
    },
    method: {  // 定义和实现事件的方法
        check_username() {  // 校验用户名
            let re = /^[a-zA-Z0-9_-]{5,20}$/;  // 正则表达式匹配用户名
			if (re.test(this.username)) {
				this.error_name = false;
			} else {
				this.error_name_message = '请输入5-20个字符的用户名';
				this.error_name = true;
			}
        },
        check_password() {  // 校验密码
            let re = /^[0-9A-Za-z]{8,20}$/;
			if (re.test(this.password)) {
				this.error_password = false;
			} else {
				this.error_password = true;
			}
        },
        check_password2() {  // 校验确认密码
            if (this.password != this.password2) {
                 this.error_password2 = false;
            } else {
                this.error_password2 = true;
            }
        },
        check_mobile() {  // 校验手机号码
            let re = /^1[3-9]\d{9}$/;
            if (re.test(this.mobile)) {
                this.error_mobile = false;
            } else {
                this.error_mobile_message = '您输入的手机号格式不正确';
                this.error_mobile = true;
            }
        },
        check_allow() {  // 校验是否勾选协议
            if(!this.allow) {
				this.error_allow = true;
			} else {
				this.error_allow = false;
			}
        },
        on_submit() {  // 监听表单提交事件
            this.check_username();
			this.check_password();
			this.check_password2();
			this.check_mobile();
			this.check_allow();

			if(this.error_name == true || this.error_password == true || this.error_password2 == true
				|| this.error_mobile == true || this.error_allow == true) {
                // 禁用表单的提交
				window.event.returnValue = false;
            }
        },
    },
});