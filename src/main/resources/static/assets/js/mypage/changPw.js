var active = document.getElementsByClassName("left");

function handleClick(event) {
    console.log(event.target);
    console.log(event.target.classList);

    active[0].classList.remove("clicked");
    if (event.target.classList[1] === "clicked") {
        event.target.classList.remove("clicked");
    } else {
        for (var i = 0; i < active.length; i++) {
            active[i].classList.remove("clicked");
        }

        event.target.classList.add("clicked");
    }
}
function init() {
    active[2].classList.add("clicked");
    for (var i = 0; i < active.length; i++) {
        active[i].addEventListener("click", handleClick);
    }
}
init();


//비밀번호 정규식
function validNewPw(obj){
    if(validNewPwCheck(obj)==false){
        $('#result_NewPw').text("최소8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자가 포함 되어야 합니다.");
        $('#result_NewPw').css('color', 'red');
        obj.value='';
        obj.focus();
        return false;
    }else {
        $('#result_NewPw').text("사용 가능한 비밀 번호 입니다..");
        $('#result_NewPw').css('color', '#19ce60');
    }
}

function validNewPwCheck(obj){
    // 최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자 정규식
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return (obj.value.match(pattern)!=null)
}

//새 비밀번호 확인
function sameNewPw(obj) {
    var newPw = document.querySelector('.new').value;
    var rePw = document.querySelector('.rePw').value;
    var result_reNewPw = document.getElementById('result_reNewPw');


    if(newPw != rePw){
        result_reNewPw.innerText = '비밀번호가 일치하지 않습니다.';
        result_reNewPw.style.color = 'red';
        obj.value ='';
        obj.focus();
        return false;
    }else {
        result_reNewPw.innerText = '비밀번호가 일치합니다.';
        result_reNewPw.style.color = '#19ce60';
    }
}