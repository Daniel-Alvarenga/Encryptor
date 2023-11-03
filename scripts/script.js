var userInput;
var textOutput;
var binaryOutput;
var asciiCode;
var binaryArray;
var key = 0x0;
var index = 0x0;
var iterator;
var text;
var asciiText;
var binaryText;
var asciiLength = keyAlphanumerics.length - 0x1;

document.getElementById('encryptButton').onclick = () => {
    userInput = document.getElementById('userInputField').value;
    text = userInput;
    binaryText = '';

    for (iterator = 0x0; iterator < text.length; iterator++) {
        asciiCode = text.charCodeAt(iterator);
        binaryText += asciiCode.toString(0x2);
    }

    textOutput = text.length;

    for (index = 0x0; index < textOutput; index++) {
        if (key == 0x0) {
            key = document.getElementById('encryptionKeyField').value;
        } else {
            key = document.getElementById('decryptionKeyField').value;
        }

        document.getElementById('decryptionKeyField').value = '';

        for (var i = 0x0; i < key.length; i++) {
            for (var j = 0x0; j <= asciiLength; j++) {
                if (keyAlphanumerics[j] == key[i]) {
                    index = j;
                }
            }

            for (var k = 0x0; k < text[index]; k++) {
                if (index < asciiLength) {
                    index++;
                } else {
                    index = 0x0;
                }
            }

            document.getElementById('decryptionKeyField').value += keyAlphanumerics[index];
        }
    }

    document.getElementById('encryptionKeyField').value = '';

    text = document.getElementById('decryptionKeyField').value;
    binaryOutput = '';

    for (iterator = 0x0; iterator < text.length; iterator++) {
        asciiCode = text.charCodeAt(iterator);
        binaryOutput += asciiCode.toString(0x2) + " ";
    }

    document.getElementById('decryptionKeyField').value = binaryOutput;
    key = 0x0;
};

document.getElementById('decryptButton').onclick = () => {
    binaryOutput = document.getElementById('decryptionKeyField').value;
    binaryArray = binaryOutput.split(" ");
    text = '';

    for (iterator = 0x0; iterator < binaryArray.length; iterator++) {
        decimal = parseInt(binaryArray[iterator], 0x2);
        text += String.fromCharCode(decimal);
    }

    document.getElementById('decryptionKeyField').value = text;
    userInput = document.getElementById('userInputField2').value;
    text = userInput;
    binaryOutput = '';

    for (iterator = 0x0; iterator < text.length; iterator++) {
        asciiCode = text.charCodeAt(iterator);
        binaryOutput += asciiCode.toString(0x2);
    }

    textOutput = text.length;

    for (index = 0x0; index < textOutput; index++) {
        if (key == 0x0) {
            key = document.getElementById('decryptionKeyField').value;
        } else {
            key = document.getElementById('encryptionKeyField').value;
        }

        document.getElementById('encryptionKeyField').value = '';

        for (var i = 0x0; i < key.length; i++) {
            for (var j = 0x0; j <= asciiLength; j++) {
                if (keyAlphanumerics[j] == key[i]) {
                    index = j;
                }
            }

            for (var k = 0x0; k < text[index]; k++) {
                if (index > 0x0) {
                    index--;
                } else {
                    index = asciiLength;
                }
            }

            document.getElementById('encryptionKeyField').value += keyAlphanumerics[index];
        }
    }

    document.getElementById('decryptionKeyField').value = '';
    key = 0x0;
};

var keyAlphanumerics = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-+,.:;?/ \"'!@#$%&*()^~{}[]=\u00C0\u00C8\u00CC\u00D2\u00D9\u00E0\u00E8\u00EC\u00F2\u00F9\u00C1\u00C9\u00CD\u00D3\u00DA\u00E1\u00E9\u00ED\u00F3\u00FA\u00C3\u00D5\u00E3\u00F5\u00FC<>\u00C2\u00CA\u00CE\u00D4\u00DB\u00E2\u00EA\u00EE\u00F4\u00FB";