var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function () {

    fetch('https://api.openweathermap.org/data/2.5/weather?id=524901&q=' + inputValue.value + '&appid=1dd08bfefe5ccc0d5473adf9acb45ec4&lang=en')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue
        })

     
        .catch(err => { alert("Wrong City name!") })

})


