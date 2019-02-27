//https://devdocs.io/dom/formdata

var result = document.querySelector('#result');
var form = document.querySelector('#form');

form.addEventListener('click', function (e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            result.innerHTML = "";
            if (xhr.status === 200) {
                result.innerHTML = xhr.responseText;
            } else {
                alert('Impossible de charger la page');
            }
        }
    }
    xhr.open('POST', 'index.php', true);
    var data = new FormData(form);
    xhr.send(data);


    //IE caractère spéciaux
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // var encodingSpecialChar = "_token&4851ef=test";
    // xhr.send("token=" + encodeURIComponent(encodingSpecialChar));
});
