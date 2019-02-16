let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn0 = document.getElementById('btn0');
let decimalBtn = document.getElementById('decimalBtn');
let delBtn = document.getElementById('delBtn');

let additionBtn = document.getElementById('additionBtn');
let subtractionBtn = document.getElementById('subtractionBtn');
let divisionBtn = document.getElementById('divisionBtn');
let multiplicationBtn = document.getElementById('multiplicationBtn');
let clearBtn = document.getElementById('clearBtn');
let equalBtn = document.getElementById('equalBtn');
let screen = document.getElementById('screen');

let value1 = [];
let value2 = [];
let numberBlock;
let arithmeticSign = false;
let result = undefined;


console.log(typeof(arithmeticSign))

function value(val) {
    

    numberBlock = joinArray(val);
    /* let float = parseInt(numberBlock); */
    

    return numberBlock;

    /* val.forEach(item => {
        if(item == decimalBtn.value) {
            numberBlock = joinArray(val);
            return numberBlock;
        }
    }); */

    
    
};

let Button = (btn) => {
    if(arithmeticSign === false) {
        value1.push(btn.value);
        console.log(value1);
        console.log(joinArray(value1));

        screen.value = value(value1);

        
    }else if(result === undefined) {
        value2.push(btn.value);
        console.log(value2);
        console.log(joinArray(value2));

        screen.value = value(value1) + " " + arithmeticSign + ' ' + value(value2);

        
    }

    if(screen.value === result) {

    }
}

 

btn1.addEventListener('click', function() {
    Button(btn1);
});

btn2.addEventListener('click', function() {
    Button(btn2);
});

btn3.addEventListener('click', function() {
    Button(btn3);
});

btn4.addEventListener('click', function() {
    Button(btn4);
});

btn5.addEventListener('click', function() {
    Button(btn5);
});

btn6.addEventListener('click', function() {
    Button(btn6);
});

btn7.addEventListener('click', function() {
    Button(btn7);
});

btn8.addEventListener('click', function() {
    Button(btn8);
});

btn9.addEventListener('click', function() {
    Button(btn9);
});

btn0.addEventListener('click', function() {
    Button(btn0);
});
decimalBtn.addEventListener('click', function() {
    /* if (value1.includes('.')) {
        screen.value = value(value1);
    } else {
        Button(decimalBtn);
    }

    if(value2.includes('.')) {
        screen.value = value(value1) + ' ' + arithmeticSign + " " + value(value2);
    } else {
        Button(decimalBtn);
    } */

    if (value1.includes('.')) {
        screen.value = value(value1);
    } else if (!value1.includes('.')) {

    if(arithmeticSign === false) {
        value1.push(decimalBtn.value);
        console.log(value1);
        console.log(joinArray(value1));

        screen.value = value(value1);

        
    } else if(value2.includes('.') || value1.includes('.')) {
        screen.value = value(value1) + ' ' + arithmeticSign + " " + value(value2);
    } else if(!value2.includes('.')) {

        if(result === undefined) {
            value2.push(decimalBtn.value);
            console.log(value2);
            console.log(joinArray(value2));
    
            screen.value = value(value1) + " " + arithmeticSign + ' ' + value(value2);
    
            
        }
    }

    if(screen.value === result) {

    }
}

    
});

/* for(let i = 0; i <= val.length; i++) {
    if (val[i] == decimalBtn.value) {
        numberBlock = joinArray(val);
    }
} */

delBtn.addEventListener('click', () => {

    

    if(value1.length>1 && arithmeticSign === false) {
        value1.pop();
        console.log(value1);
        screen.value = value(value1);
    } else if (value1.length<=1 && arithmeticSign === false) {
        value1.pop();
        console.log(value1);
        screen.value = '';
    }

    if (value1.length>=1 && arithmeticSign.length==1 && value2.length === 0) {
        arithmeticSign.pop();
        arithmeticSign = false;
        console.log(arithmeticSign);
        screen.value = value(value1);
        
    };

    if (value2.length == 1 && arithmeticSign.length == 1) {
        value2.pop();
        console.log('done');
        screen.value = value(value1) + ' ' + arithmeticSign;
    } else if (value2.length > 1 && arithmeticSign.length==1) {
        value2.pop();
        
        screen.value = value(value1) + ' ' + arithmeticSign + ' ' + value(value2);
    };
    if (!result === false) {
        result = undefined;
        value2.pop();
    }
     
});



function joinArray(arr) {
    return arr.join('');
}
function arithmeticSignBtn (arithmeticBtn) {
    if(value1.length >= 1) {
        arithmeticSign = [];
        arithmeticSign.push(arithmeticBtn.value);
        screen.value = value(value1) + " " + arithmeticSign;
        console.log(arithmeticSign);
    };
    if (value2.length >= 1) {
        screen.value = value(value1) + " " + arithmeticSign + ' ' + value(value2);
    }

    if (!result === false) {
        console.log('hello');
        value1 = [];
        value2 = [];
        value1.push(result)
        result = undefined;
        arithmeticSign = [];
        arithmeticSign.push(arithmeticBtn.value);
        screen.value = value(value1) + " " + arithmeticSign;
    }
}

clearBtn.addEventListener('click', function() {
    screen.value = '';
    value1 = [];
    value2 = [];
    arithmeticSign = false;
    result = undefined;
});

equalBtn.addEventListener('click', function() {
    
    /* if (arithmeticSign[0] === additionBtn.value){
        result = value(value1) + value(value2);
    } else if () */ 
    switch(arithmeticSign[0]) {
        case additionBtn.value:
        result = parseFloat(value(value1)) + parseFloat(value(value2));
        break;

        case subtractionBtn.value:
        result = value(value1) - value(value2);
        break;

        case divisionBtn.value:
        result = value(value1) / value(value2);
        break;

        case multiplicationBtn.value:
        result = value(value1) * value(value2);
        break;
    }
    screen.value = result;
    console.log(typeof(result))

    if(value1.length ===0 ) {
        screen.value = '';
    }
    

});

additionBtn.addEventListener('click', function () {
    
    arithmeticSignBtn(additionBtn);

    
});
subtractionBtn.addEventListener('click', function () {
    
    arithmeticSignBtn(subtractionBtn);

    
});
divisionBtn.addEventListener('click', function () {
    
    arithmeticSignBtn(divisionBtn);

    
});
multiplicationBtn.addEventListener('click', function () {
    
    arithmeticSignBtn(multiplicationBtn);

    
});

console.log(typeof(value2))








console.log(1);