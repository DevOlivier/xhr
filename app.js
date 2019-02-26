
// en Ajax nous ne pouvons pas faire de requête sur des domaines différents, ex: 
var links = document.querySelectorAll('.user');
var result = document.getElementById('result');
for(var i = 0; i < links.length; i++){
    var link = links[i];

    link.addEventListener('click' , function(e){
        e.preventDefault();
        result.innerHTML = 'Chargement....'
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            
            if (xhr.readyState === 4) {
                result.innerHTML = "";
                if(xhr.status === 200) {
                    var results = JSON.parse(xhr.responseText);
                    var ul = document.createElement('ul');
                    result.appendChild(ul);
                    for (var i = 0; i < results.length; i++) {
                        var li = document.createElement('li');
                        li.innerHTML = results[i].name;
                        ul.appendChild(li);
                    }
                }else {
                    alert('Impossible de charger la page');
                }
            }
        }

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' , true);
        xhr.send();

    });
}