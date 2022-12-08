var button = document.getElementById("button");
button.addEventListener("click", function(e) {


    e.preventDefault();

var salary01 = parseFloat(document.getElementById("salary01").value);
var salary02 = parseFloat(document.getElementById("salary02").value);
var salary03 = parseFloat(document.getElementById("salary03").value);
var salary04 = parseFloat(document.getElementById("salary04").value);
var salary05 = parseFloat(document.getElementById("salary05").value);
var salary06 = parseFloat(document.getElementById("salary06").value);

var pension01 = parseFloat(document.getElementById("pension01").value);
var pension02 = parseFloat(document.getElementById("pension02").value);
var pension03 = parseFloat(document.getElementById("pension03").value);
var pension04 = parseFloat(document.getElementById("pension04").value);
var pension05 = parseFloat(document.getElementById("pension05").value);
var pension06 = parseFloat(document.getElementById("pension06").value);

var other01 = parseFloat(document.getElementById("other01").value);
var other02 = parseFloat(document.getElementById("other02").value);
var other03 = parseFloat(document.getElementById("other03").value);
var other04 = parseFloat(document.getElementById("other04").value);
var other05 = parseFloat(document.getElementById("other05").value);
var other06 = parseFloat(document.getElementById("other06").value);

var age01 = parseFloat(document.getElementById("age01").value);
var age02 = parseFloat(document.getElementById("age02").value);
var age03 = parseFloat(document.getElementById("age03").value);
var age04 = parseFloat(document.getElementById("age04").value);
var age05 = parseFloat(document.getElementById("age05").value);
var age06 = parseFloat(document.getElementById("age06").value);


let salary = [salary01,salary02,salary03,salary04,salary05,salary06];
let pension = [pension01,pension02,pension03,pension04,pension05,pension06];
let other = [other01,other02,other03,other04,other05,other06];
let age = [age01,age02,age03,age04,age05,age06];


for(let i = 0; i < 6; i++) {
if(!salary[i]){
    salary[i] = 0 ;
    }else if(salary[i] < 551000){
    salary[i] = 0 ;
    }else if(salary[i]<= 650000){
    salary[i] = 0 ;
    }else if(salary[i]< 1619000){
    salary[i] = salary[i] - 550000 - 100000 ;
    }else if(salary[i]< 1620000){
    salary[i] = 1069000 - 100000;
    }else if(salary[i] < 1622000){
    salary[i] = 1070000 - 100000 ;
    }else if(salary[i] <1624000){
    salary[i] = 1072000 - 100000;
    }else if(salary[i] <1628000){
    salary[i] = 1074000 - 100000 ; 
    }else if(salary[i]< 1800000){
    salary[i] = (Math.floor(salary[i]/4000)*4000)*0.6 + 100000 - 100000 ;
    }else if(salary[i] < 3600000){
    salary[i] = (Math.floor(salary[i]/4000)*4000)*0.7 -80000 - 100000 ;
    }else if(salary[i] < 6600000){
    salary[i] = (Math.floor(salary[i]/4000)*4000)*0.8 - 440000 - 100000 ;
    }else if(salary[i] < 8500000){
    salary[i] = salary[i]*0.9 - 1100000 - 100000;
    }else if(salary[i] >= 8500000){
    salary[i] = salary[i] - 1950000 ;
    }

if(65 <= age[i]){
    if(!pension[i]){
    pension[i] = 0 ;
    }else if(pension[i] <= 1100000){
    pension[i] = 0;
    }else if(pension[i] <= 1200000){
    pension[i] = 0 ;
    }else if(pension[i]<3300000){
    pension[i] = pension[i] - 1100000 - 100000;
    }else if(pension[i]<4100000){
    pension[i] = Math.floor(pension[i] * 0.75 - 275000 - 100000 ); 
    }else if(pension[i]<7700000){
    pension[i] = Math.floor(pension[i] * 0.85 - 685000 - 100000 );
    }else if(pension[i]<10000000){
    pension[i] = Math.floor(pension[i] *0.95 - 1455000 - 100000 );
    }
}else if(65 > age[i] || !age[i]){
    if(!pension[i]){pension[i] = 0 ;
    }else if (pension[i] <=600000){
    pension[i] = 0;
    }else if (pension[i] <= 700000){
    pension[i] = 0;
    }else if (pension[i] < 1300000){
    pension[i] = pension[i] - 600000 - 100000 ;
    }else if (pension[i] < 4100000){
    pension[i] = Math.floor(pension[i] * 0.75 - 275000 - 100000);
    }else if (pension[i] < 7700000){
    pension[i] = Math.floor(pension[i] *0.85 - 685000 - 100000);
    }else if(pension[i] <=10000000){
    pension[i] = Math.floor(pension[i] * 0.95 - 1455000 - 100000);
    } 
}

if(!other[i]){
    other[i] = 0;
}else{
    other[i] = other[i]
}

}

let result = salary[0]+salary[1]+salary[2]+salary[3]+salary[4]+salary[5]+pension[0]+pension[1]+pension[2]+pension[3]+pension[4]+pension[5]+other[0]+other[1]+other[2]+other[3]+other[4]+other[5];


 result03.value = result;



let deduction01 = parseFloat(document.getElementById("deduction01").value);
let deduction02 = parseFloat(document.getElementById("deduction02").value);
let deduction03 = parseFloat(document.getElementById("deduction03").value);
let deduction04 = parseFloat(document.getElementById("deduction04").value);
let deduction05 = parseFloat(document.getElementById("deduction05").value);
let deduction06 = parseFloat(document.getElementById("deduction06").value);


let deduction = [deduction01,deduction02,deduction03,deduction04,deduction05,deduction06];


for(let i = 0; i < deduction.length; i++) {
    if(!deduction[i]){
    deduction[i]= 0 ;
    }else if(deduction[i]>=0){
    deduction[i] = deduction[i];
    }
    }
        
deduction = deduction[0]*380000+deduction[1]*380000+deduction[2]*100000+deduction[3]*250000+deduction[4]*270000+deduction[5]*400000;


let kari =result - deduction;
if(kari>=0){
kari = kari ;
}else if(kari < 0){
kari = 0 ;
}
    
    

let kari2 = Math.floor(kari/12); 

let division ;
let base ;
if(kari2 <= 123000){
    division = '分位１';
    base = 37100;
}else if(kari2 <= 153000){
    division = "分位２";
    base = 45000 ;
}else if(kari2 <= 178000){
    division = "分位３";
    base = 53200 ;
}else if(kari2 <= 200000){
    division = "分位４";
    base = 61400 ;
}else if(kari2 <= 238000){
    division ="分位５";
    base = 70900 ;
}else if(kari2 <= 268000){
    division ="分位６";
    base = 81400 ;
}else if(kari2 <= 322000){
    division ="分位７";
    base = 94100 ;
}else if(kari2 > 322000){
    division = "分位８";
    base = 107700 ;
}    
    
/*
let division ;
let base ;
if(kari <= 123000){
    division = '分位１';
    base = 37100;
}else if(kari <= 153000){
    division = "分位２";
    base = 45000 ;
}else if(kari <= 178000){
    division = "分位３";
    base = 53200 ;
}else if(kari <= 200000){
    division = "分位４";
    base = 61400 ;
}else if(kari <= 238000){
    division ="分位５";
    base = 70900 ;
}else if(kari <= 268000){
    division ="分位６";
    base = 81400 ;
}else if(kari <= 322000){
    division ="分位７";
    base = 94100 ;
}else if(kari > 322000){
    division = "分位８";
    base = 107700 ;
}*/


result04.value = deduction;

result01.value = kari;

result02.value = Math.floor(kari/12); 

result05.value = division;


result06.value = base;










});





/* テキストボックスを取得 
var NBR = document.querySelectorAll( "[data-type='number']" );
/* イベント操作 
for(var i=0;i<NBR.length;i++){ NBR[ i ].oninput = fmtInput }

/* 入力時に実行する処理 
function fmtInput( evt ){
var target = evt.target;
var data = target.value[ target.value.length-1 ];
if( ! data.match( /[0-9]/ ) ){
target.value = target.value.slice( 0, target.value.length-1 );
}
target.value = target.value
.replace( /,/g, '' )
.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' );
}*/
