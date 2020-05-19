function errorForm() {

    let changeInput;
    let changeError;
    let changeLabel;

    changeInput = document.getElementsByClassName('my-input');
    for (let i = changeInput.length - 1; i >= 0; i--) {
        changeInput[i].style.border = "1px solid #e01f15";
    }

    changeError = document.getElementsByClassName('error-text');
    for (let i = changeError.length - 1; i >= 0; i--) {
        changeError[i].style.display = "inline";
    }

    changeLabel = document.getElementsByTagName('label');
    for (let i = changeLabel.length - 1; i >= 0; i--) {
        changeLabel[i].style.color = "red";
    }

}