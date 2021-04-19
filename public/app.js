const button = document.getElementById('fetch');
const result = document.getElementById('result');

button.onclick = (ev) => {
    fetch('https://us-central1-olgin-sad.cloudfunctions.net/api/flowers/list')
        //fetch('http://localhost:5001/olgin-sad/us-central1/randomNumber')
        .then(res => console.log(res))
}
