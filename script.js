const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const copy = document.querySelector(".copyText");
copy.style.display = "none"

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function validateText(){
    let writtenText = document.querySelector(".text-area").value;
    let validator = writtenText.match(/^[a-z\s,?.]*$/);

    if(!validator || validator === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncrypt(){
    if(!validateText()) {
        const encryptedText = encrypt(textArea.value);
        message.value = encryptedText
        message.style.backgroundImage = "none"
        textArea.value = "";
        copy.style.display = "block"
    }
}

function encrypt(stringEncrypted){
    let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase();

    for(let i = 0; i < codeMatrix.length; i++){
        if(stringEncrypted.includes(codeMatrix[i][0])){
            stringEncrypted = stringEncrypted.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
        }
    }
    return stringEncrypted
}


function btnDecrypt(){
    const decryptedText = decrypt(textArea.value)
    message.value = decryptedText
    textArea.value = "";
}

function decrypt(stringDecrypted){
    let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase();

    for(let i = 0; i < codeMatrix.length; i++){
        if(stringDecrypted.includes(codeMatrix[i][1])){
            stringDecrypted = stringDecrypted.replaceAll(codeMatrix[i][1], codeMatrix[i][0]);
        }
    }
    return stringDecrypted
}


function copyText(){
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
}