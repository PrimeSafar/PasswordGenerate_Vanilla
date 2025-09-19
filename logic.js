const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const passwordDisplay = document.getElementById("passwordDisplay");
const copyBtn = document.getElementById("copyBtn")

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChar = "!#$%&()*+/?@";

function Generate(length) {
    let chars = "";

    // Add characters based on selections
    if (uppercaseCheck.checked) chars += uppercase;
    if (lowercaseCheck.checked) chars += lowercase;
    if (numberCheck.checked) chars += number;
    if (symbolsCheck.checked) chars += specialChar;

    if (!chars) return ""; // Nothing selected

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}

document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    let currentPassword = "";

    generateBtn.addEventListener("click", () => {
        currentPassword = Generate(18); 
        passwordDisplay.textContent = currentPassword;
    });

    copyBtn.addEventListener('click', () => {
        if (currentPassword) {
            copyTextToClipboard(currentPassword);
        }
    });
});


async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert("Copy success !")
  } catch (err) {
    console.error('Failed to copy content: ', err);
  }
}