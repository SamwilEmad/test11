function generateRandomNumber() {
    let min =1;
    let max = 350;

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById("result").innerText = "Enter a valid range!";
        return;
    }

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerText = `رقم الفائز: 
    ${randomNumber}`;
}