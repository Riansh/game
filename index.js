document.addEventListener('keypress', function(event) {
    var name = event.key
    var code = event.code

    console.log(name)
    if (name == "o") {
        window.open('https://riansh.github.io/rs/')
    }
})