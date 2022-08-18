const $ = selector => document.querySelector(selector)
const $table = $('#table')
const $btn = document.getElementById('btn');
const $file = document.getElementById('file1');
console.log(btn); // 👉️ null
const $submit = $('#submit')
const $results = $('#results')


let td = document.createElement("li")

$btn.addEventListener('click', () => {


    event.preventDefault()
    const name1 = document.getElementById('name1').value;
    if (name1 == "") { return false; }
    var url = "https://api-rest-brucorp.herokuapp.com/upload/" + name1;
    console.log(url)
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };
    xhr.send();

    setTimeout((function() {
        window.location.reload();
    }), 250);




})