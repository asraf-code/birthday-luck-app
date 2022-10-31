const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputResult = document.querySelector("#output-result")

checkNumberButton.addEventListener ("click", checkDobIsLucky);

function checkDobIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calulateSumDob(dob);
    if (sum&&dob) {
        compareValues(sum, luckyNumber);
    } else {
        outputResult.innerText = "Plese enter values to check 😡"
    }
    
}

function calulateSumDob(dob) {
    dob= dob.replaceAll("-", "");
    let sum = 0;
    for (let i=0; i<dob.length; i++) {
        sum = sum+Number(dob.charAt(i));
        
    }
    return sum;
    
}

function compareValues(sum, luckyNumber)
{
    if (sum%luckyNumber.value === 0) {
        outputResult.innerText = "Your birthday is lucky 🚀";
            } else {
                    outputResult.innerText = "Your birthday is not lucky 😭";
            }
}