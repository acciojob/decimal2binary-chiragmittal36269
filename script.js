function decimalToBinary(decimalNum) {
  //Write you code here
	 if (decimalNum === 0) {
        return '0';
    }

    let binaryNum = '';
    while (decimalNum > 0) {
        const remainder = decimalNum % 2;
        binaryNum = remainder + binaryNum;
        decimalNum = Math.floor(decimalNum / 2);
    }

    return binaryNum;
  
}

window.decimalToBinary = decimalToBinary;
