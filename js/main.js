/*NOTE: FORM STILL HOOKED UP TO SIDSOMANAPP. NEED TO CHANGE AND FILTER EMAILS TO ADMIN AND WHATEVER*/
const william1=document.querySelector('#william1');
const william2=document.querySelector('#william2');
const william3=document.querySelector('#william3');
const johan1=document.querySelector('#johan1');
const johan2=document.querySelector('#johan2');
const johan3=document.querySelector('#johan3');
const johan4=document.querySelector('#johan4');
const johan5=document.querySelector('#johan5');
const praveen1=document.querySelector('#praveen1');
const praveen2=document.querySelector('#praveen2');
const praveen3=document.querySelector('#praveen3');
const abhinav1=document.querySelector('#abhinav1');
const abhinav2=document.querySelector('#abhinav2');
const abhinav3=document.querySelector('#abhinav3');
const abhinav4=document.querySelector('#abhinav4');
const abhinav5=document.querySelector('#abhinav5');

let cards=[william1, william2, william3, johan1, johan2, johan3, johan4, johan5, praveen1, praveen2, praveen3, abhinav1,
abhinav2, abhinav3, abhinav4, abhinav5];
let counter=0;
let price=0;
let cart;

document.querySelector('#next').addEventListener('click', nextCard);
document.querySelector('#prev').addEventListener('click', prevCard);
document.querySelector('#select').addEventListener('click', selectCard)

function selectCard(){
	cart=document.querySelector('#placeCodeHere').innerText;
	cart="  "+cart+",  ";
	document.querySelector('#placeSelectedHere').innerText+=cart;
	price++;
	document.querySelector('#placePriceHere').innerText=" "+price+"AED ";

}

function nextCard(){
	if(counter==15){
		cards[15].classList.add("hidden"); //n-1 case
		cards[0].classList.toggle("hidden");
		counter=0;
		document.querySelector('#placeCodeHere').innerText="1WILL";
		document.querySelector('#placeAuthorHere').innerText="William";
	}
	else{
		cards[counter+1].classList.toggle("hidden");
		cards[counter].classList.add("hidden");
		switch(counter+1){
			case 1: document.querySelector('#placeCodeHere').innerText="2WILL";
					document.querySelector('#placeAuthorHere').innerText="William";
					break;
			case 2: document.querySelector('#placeCodeHere').innerText="3WILL";
					document.querySelector('#placeAuthorHere').innerText="William";
					break;
			case 3: document.querySelector('#placeCodeHere').innerText="1JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break;
			case 4: document.querySelector('#placeCodeHere').innerText="2JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break;
			case 5: document.querySelector('#placeCodeHere').innerText="3JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break;
			case 6: document.querySelector('#placeCodeHere').innerText="4JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break;
			case 7: document.querySelector('#placeCodeHere').innerText="5JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break; //till case n-1
			case 8: document.querySelector('#placeCodeHere').innerText="1PRAV";
					document.querySelector('#placeAuthorHere').innerText="Pravin";
					break;
			case 9: document.querySelector('#placeCodeHere').innerText="2PRAV";
					document.querySelector('#placeAuthorHere').innerText="Pravin";
					break;
			case 10:document.querySelector('#placeCodeHere').innerText="3PRAV";
					document.querySelector('#placeAuthorHere').innerText="Pravin";
					break;
			case 11:document.querySelector('#placeCodeHere').innerText="1ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;
			case 12:document.querySelector('#placeCodeHere').innerText="2ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;
			case 13:document.querySelector('#placeCodeHere').innerText="3ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;
			case 14:document.querySelector('#placeCodeHere').innerText="4ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;
			case 15:document.querySelector('#placeCodeHere').innerText="5ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;

		}
		counter++;
	}
}

function prevCard(){
	if(counter===0){
		cards[0].classList.add("hidden");
		cards[15].classList.toggle("hidden"); //n-1 case  
		counter=15; //n-1 case
		document.querySelector('#placeCodeHere').innerText="5ABHI";
		document.querySelector('#placeAuthorHere').innerText="Abhinav";
	}
	else{
		cards[counter-1].classList.toggle("hidden");
		cards[counter].classList.add("hidden");
		switch(counter-1){
			case 0: document.querySelector('#placeCodeHere').innerText="1WILL";
					document.querySelector('#placeAuthorHere').innerText="William";
					break;
			case 1: document.querySelector('#placeCodeHere').innerText="2WILL";
					document.querySelector('#placeAuthorHere').innerText="William";
					break;
			case 2: document.querySelector('#placeCodeHere').innerText="3WILL";
					document.querySelector('#placeAuthorHere').innerText="William";
					break;
			case 3: document.querySelector('#placeCodeHere').innerText="1JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break;
			case 4: document.querySelector('#placeCodeHere').innerText="2JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break;
			case 5: document.querySelector('#placeCodeHere').innerText="3JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break;
			case 6: document.querySelector('#placeCodeHere').innerText="4JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break; //till case n-2
			case 7: document.querySelector('#placeCodeHere').innerText="5JOHAN";
					document.querySelector('#placeAuthorHere').innerText="Johan";
					break; 
			case 8: document.querySelector('#placeCodeHere').innerText="1PRAV";
					document.querySelector('#placeAuthorHere').innerText="Pravin";
					break;
			case 9: document.querySelector('#placeCodeHere').innerText="2PRAV";
					document.querySelector('#placeAuthorHere').innerText="Pravin";
					break;
			case 10:document.querySelector('#placeCodeHere').innerText="3PRAV";
					document.querySelector('#placeAuthorHere').innerText="Pravin";
					break;
			case 11:document.querySelector('#placeCodeHere').innerText="1ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;
			case 12:document.querySelector('#placeCodeHere').innerText="2ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;
			case 13:document.querySelector('#placeCodeHere').innerText="3ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;
			case 14:document.querySelector('#placeCodeHere').innerText="4ABHI";
					document.querySelector('#placeAuthorHere').innerText="Abhinav";
					break;

		}
		counter--;
	}
}