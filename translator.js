/*var quotesEn = [
"Hello, how are you?",
"I love you.",
"When does the bus come?",
"Where is the nearest market?",
"What time is it?",
"I didn't understand.",
"I need to go back home.",
"Dinner was delicious.",
"Congratulations!",
"Happy New Year!",
"I am cold.",
"The battery is dead.",
"We are going to the beach.",
"Let's dance!",
"I sent you an email.",
"You look good.",
"Thank you.",
"You're welcome.",
"Leave me alone.",
"I speak French.",
"My belly hurts."
]

//Amaziɣ Quotes Generator

var quotesAm = [
	"Azul, amek ttilliḍ?",
	"Hemlaɣk<br><gen>Hemlaɣkem<br> <tra>",
	"Melmi ad yas el car?",
	"Anda yella u marci i-di qeṛḅen?", 
	"Cḥal el saɛa?",
	"Ur fhimɣara.",
	"Lazem ad kecmaɣ s-axxam.",
	"Yelha umensi.",
	"Asseɛḍi!",
	"Aseguass amegaz!",
	"Iqes-ayi usemiḍ.",
	"Imuţ u-bateri.",
	"An roḥ al ḅḥar.",
	"Anecḍaḥ!",
	"Ceggɛeɣ-k taḅraţ elektroniţ.",
	"Tcebḥeḍ.",
	"Tanemmirţ.",
	"Ulac aɣilif.",
	"Ǧiyi-ḍ trankil.",
	"Heḍraɣ ţarumiţ.",
	"Iqarḥiyi aɛbuḍ-iw."
]

var phonetic = [
	"[Æzul, æmək tsilidh]",
	"[Ḥəmlaghk]<br><gen>[Ḥəmlaghkɛm]<br>",
	"[Melmi ad yass el car]",
	"[Ænda yella u marchi i-di qərβen]",
	"[Chħæl el saʕâ]",
	"[Uorˤ fhimgharˤa]",
	"[Læzem ad kechmagh s-a'kham]",
	"[Yelha oumensi]",
	"[Asseʕidhi]",
	"[Æsseguas aməgaz]",
	"[Iqɛss-ayi oussəmidh]",
	"[Imouth ou-bateri]",
	"[An roħ æl βħær]",
	"[Anechdhaħ]",
	"[Chəgʕəgh-k thaβrath elektronith]",
	"[Thcheβħədh]",
	"[Tænemmirth]",
	"[Oulæch əghilif]",
	"[Djiyi-dh trankil]",
	"[Hedragh thæroumith]",
	"[Iqarħiyi aʕəboudh-iw]",
]
*/

const icons = {
  mars: `<i class="fas fa-mars" aria-hidden="true"></i>`,
  venus: `<i class="fas fa-venus" aria-hidden="true"></i>`,
};

const phoneticInline = text => `<span class="phonetic">${text}</span>`;

/*Idem:
'<span class="phonetic">' + text + '</span>'; 
jQuery simplified (avant, JS = heavy duty than new JS)
$ to execute function
*/


/* All the same:
function fn () {
	return "to return";
}

var fn = function() { //passing a function to variable
	return "to return";
}

var fn = () => {
	return "to return";
}

<span> = in line <div> = block*/


const quotes = [
{
	en: "Hello, how are you?",
	am: "Azul, amek ttilliḍ?",
	phonetic: `${phoneticInline("[Æzul, æmək tsilidh]")}`
},
{
	en: "I love you.",
	am: `<gen>${icons.mars} Hemlaɣk ${phoneticInline("[Ḥəmlaghk]")}<br />
	<gen>${icons.venus} Hemlaɣkem ${phoneticInline("[Ḥəmlaghkem]")}<br />`,
	phonetic: "",
},

{
	en: "When does the bus come?",
	am: "Melmi ad yas el car?",
	phonetic: `${phoneticInline("[Melmi ad yass el car]")}`,
},

{
	en: "Where is the nearest market?",
	am: "Anda yella u marci i-di qeṛḅen?",
	phonetic: `${phoneticInline("[Ænda yella u marchi i-di qərβen]")}`,
},


{
	en: "What time is it?",
	am: "Cḥal el saɛa?",
	phonetic: `${phoneticInline("[Chħæl el saʕâ]")}`,
},

{
	en: "I did not understand.",
	am: "Ur fhimɣara.",
	phonetic: `${phoneticInline("[Our fhimghara]")}`,
},

{
	en: "I need to go back home.",
	am: "Lazem ad kecmaɣ s-axxam.",
	phonetic: `${phoneticInline("[Læzem ad kechmagh s-a'kham]")}`,
},

{
	en: "Dinner was delicious.",
	am: "Yelha umensi.",
	phonetic: `${phoneticInline("[Yelha oumensi]")}`,
},

{
	en: "Congratulations!",
	am: "Asseɛḍi!",
	phonetic: `${phoneticInline("[Asseʕdhi]")}`,
},

{
	en: "Happy New Year!",
	am: "Aseguas amegaz!",
	phonetic: `${phoneticInline("[Æsseguass aməgaz]")}`,
},

{
	en: "I am cold.",
	am: "Iqes-ayi usemiḍ.",
	phonetic: `${phoneticInline("[Iqɛss-ayi oussəmidh]")}`,
},

{
	en: "The battery is dead.",
	am: "Imuţ u-bateri.",
	phonetic: `${phoneticInline("[Imouth ou-bateri]")}`,
},

{
	en: "We are going to the beach.",
	am: "An roḥ al ḅḥar.",
	phonetic: `${phoneticInline("[An roħ æl βħær]")}`,
},

{
	en: "Let's dance!",
	am: "Anecḍaḥ!",
	phonetic: `${phoneticInline("[Anechdhaħ]")}`,
},

{
	en: "I sent you an email.",
	am: "Ceggɛeɣ-k taḅraţ elektroniţ.",
	phonetic: `${phoneticInline("[Chəgʕəgh-k thaβrath elektronith]")}`,
},

{
	en: "You look good.",
	am: "Tcebḥeḍ.",
	phonetic: `${phoneticInline("[Thcheβħədh]")}`,
},

{
	en: "Thank you.",
	am: "Tanemmirţ.",
	phonetic: `${phoneticInline("[Tænemmirth]")}`,
},

{
	en: "You are welcome.",
	am: "Ulac aɣilif.",
	phonetic: `${phoneticInline("[Oulæch əghilif]")}`,
},

{
	en: "Leave me alone.",
	am: "Ǧiyi-ḍ trankil.",
	phonetic: `${phoneticInline("[Djiyi-dh trankil]")}`,
},

{
	en: "I speak French.",
	am: "Heḍraɣ ţarumiţ.",
	phonetic: `${phoneticInline("[Hedhragh thæroumith]")}`,
},

{
	en: "My belly hurts.",
	am: "Iqarḥiyi aɛbuḍ-iw.",
	phonetic: `${phoneticInline("[Iqarħiyi aʕəboudh-iw]")}`,
},

]

console.table(quotes)



let uniqueRandomGenerator = n => {
  let set = new Set() // Use Set to remove any duplicates as keep adding #
  while (set.size < n) set.add(Math.floor(Math.random() * n)) // Keep adding #
  return Array.from(set) 
}

let randomQuotes = uniqueRandomGenerator(quotes.length), last = 0

function newQuoteEn() {
  document.getElementById('enQuoteDisplay').innerHTML = quotes[randomQuotes[last]].en;
  document.getElementById('amQuoteDisplay').innerHTML = `${quotes[randomQuotes[last]].am} ${quotes[randomQuotes[last]].phonetic}`;


  last = last == randomQuotes.length - 1 ? 0 : last + 1
}

/*phonetic in quotesAm

function fullArray(quotesAm, phonetic) {
  var mergedArray = [];

  for (let i = 0; i < quotesAm.length; i++) {
    mergedArray.push(quotesAm[i] + phonetic[i])

  }
  return mergedArray;

}
console.log(fullArray(quotesAm, phonetic))


function main() {
	for (element of fullArray(quotesAm, phonetic))
		displayQuote(element)

}

function displayQuote(quote) {
	if (quote.search ("<tra>") === -1){

		console.log(quote)
	}
	else {
		var res = quote.split("<tra>");
		var translation = res[0]
		var phonetic = res[1]
		res = translation.split("<gen>");
		var gender1 = res[0]
		var gender2 = res[1]
		res = phonetic.split("<gen>");
		var phonetic1 = res[0]
		var phonetic2 = res[1]
		console.log(gender1, phonetic1)
		console.log(gender2, phonetic2)
	}
	
}
*/
