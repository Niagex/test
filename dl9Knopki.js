
 
 
 'use strict';
let answer=prompt("какое оф название", "");
alert(answer);
if (answer=="ECMAScript"){
    alert("right!!!");
}
else{
    alert("ne znaete? ECMAScript");
}
   /* let name = prompt("Ваше имя?", "");
    alert(name);
let isBoss = confirm("Ты здесь главный?");

alert( isBoss );*/
let zxc=prompt("KTO TAM: ","");
	   if(zxc=="admin"){
		   let pass=prompt("pass: ","");
		   if(pass=="zxc"){
			   alert("PRIVET");
		   }
		   else if (pass==null || pass==""){
			   alert("otmmena");
		   }
		   else{
			   alert("wrong pass");
		   }
	   }
	   else if(zxc==null || zxc==""){
		   alert("отмена: ");
	   }
	   else{
		   alert("я вас не знаю!");

}




  do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);



	   
let n=prompt("chislo: ","");
	 for(let i=2;i<n;i++){
		 let k=1;
		 while (k<i){
			 k++;
		 if(i%k==0)
		 {
			 alert(i);
			
		 }
		 }
	 }


let ask=(question, yes, no)=>{
	confirm(question)?yes():no();
}
ask("вы согласны?",
	()=>alert("вы согласились"),
	()=>alert("net!")
);

// использование: функции showOk, showCancel передаются в качестве аргументов ask