function check(form) {
    if (form.userid.value == "abcd" && form.userpassword.value == "1234") {
        window.open('target.html')
    } else {
        alert("잘못된 아이디 또는 비밀번호 입니다.")
    }
}