

let result = document.querySelector('#screen');
const display = (a) => {
    console.log(result.value);

    if (a == 'del') {
        result.value = result.value.slice(0, -1);
    }
    else if (a == 'AC') {
        result.value = '';
    }

    else if (a == 'action') {
        try {
            result.value = eval(result.value);
        } catch (error) {
            alert('Erorr');
        }

    }
    else {
        result.value += a;
    }

}