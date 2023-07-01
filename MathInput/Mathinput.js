    let inputValueElement = document.getElementById("inputValue");
    let gameResultElement = document.getElementById("gameResult")

    let randomNumber = Math.ceil(Math.random() * 100);
    

    function guessCheck() {
        let guessedNumber = parseInt(inputValueElement.value)
        
        if (guessedNumber > randomNumber) {
            gameResultElement.textContent = "Too High. Try Again"
            gameResultElement.style.backgroundColor = "Red"
        }
        
        else if (guessedNumber < randomNumber) {
            gameResultElement.textContent = "Too Low. Try Again"
            gameResultElement.style.backgroundColor = 'Blue'
        }

        else if (guessedNumber === randomNumber) {
            gameResultElement.textContent = "Perfect"
            gameResultElement.style.backgroundColor = "Green"
        }
        else{
            gameResultElement.textContent = "Please Enter correct value"

        }

    }