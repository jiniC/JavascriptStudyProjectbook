var $inp = $('form[name=cal]');
var $input = $inp.find('input');
var $btn_clear = $('.btn_clear');
var $btn_result = $('.btn_result');
var $result = $inp.find('input[name=result]');

function clear() {
    $result.val(0);
}
function calc(value) {
    if($result.val()==0) {
        $result.val('');
    }

    var val = $result.val() + value;
    $result.val(val);
}

function my_result() {
    var calc=eval($result.val());
    $result.val(calc);
}

$('input').click(function() {
    var $input_value = $(this).val();
    if($input_value != '=' && $input_value != 'clear') {
        calc($input_value);
    }
});

$('.btn_clear').click(function() {
    clear();
});

$('.btn_result').click(function() {
    try {
        my_result();
    }
    catch(err) {
        $result.val('입력오류');
    }
});
