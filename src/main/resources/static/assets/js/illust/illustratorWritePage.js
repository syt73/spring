$('#textBox').keyup(function (e) { let content = $(this).val(); // 글자수 세기
    if (content.length == 0 || content == '') {
        $('.textCount').text('0자');
    } else { $('.textCount').text(content.length + '자'); }; // 글자수 제한
    if (content.length > 50) { // 200자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0, 50)); // 200자 넘으면 알림창 뜨도록
        alert('글자수는 50자까지 입력 가능합니다.'); };
});

$('#textBox2').keyup(function (e) { let content = $(this).val(); // 글자수 세기
    if (content.length == 0 || content == '') {
        $('.textCount2').text('0자');
    } else { $('.textCount2').text(content.length + '자'); }; // 글자수 제한
    if (content.length > 600) { // 200자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0, 600)); // 200자 넘으면 알림창 뜨도록
        alert('글자수는 600자까지 입력 가능합니다.'); };
});

/*--------사이트 추가 버튼 클릭시 div추가---------------------*/
$('.webSite').on("click", function () {
    let div ="<div class='inputFlex sitediv'>" +
        "<p class='infoText'></p>" +
        "<p><input type='text' class='inputCss intpuCss2' ></p>" +
        "</div>";
    $('.divs').append(div);
})

