/* .js files add interaction to your website */

// Variables for Home Page
var fact = document.getElementById("fact");
var depButton = document.getElementById("depButton");
var anxButton = document.getElementById("anxButton");
var suiButton = document.getElementById("suiButton");
var genButton = document.getElementById("genButton");
var countFacts = 0;

var depFacts = [
  "Approximately 280 million people in the world suffer from depression (3.8% of the world population)",
  "Depression is 50% more common in women than in men. More than 10% of pregnant women or women who have recently given birth experience depression (Postpartum Depression)",
  "Just like many illnesses, there are different levels of depression (mild, moderate, severe). Nonetheless, it can affect a person's daily life, how a person functions in society, and their interpersonal relationships.",
  "According to research conducted by the Columbia University Mailman School of Public Health and City University of New York in 2020, depressive symptoms were found among nearly 1 in 5 American adolescents and young adults."
];

var anxFacts = [
  "Anxiety is one of the most common mental illnesses in the U.S., affecting 40 million adults and 31.9% of adolescents between ages 13-17.",
  "Anxiety can co-exist with depression, eating-disorders, and ADHD.",
  "Anyone can get anxious/worried about many things, but it is not nexessarily an anxiety disorder. An anxiety disorder happens constantly and at excessive rates. If not treated, it may get worse over time and affects a person's daily life.",
  "There different mental illnesses that fall under anxiety such as Social Anxiety, Panic Disorder, and Phobia-Related Disorders."
];

var suiFacts = [
  "There are still 20 countries that criminalize suicide. Those who live in poverty/are disadvantaged in society are least likely to get the help they need.",
  "The Sustainable Development Goal (SDG) is planning to decrease the rate of suicide deaths by one-third by 2030.",
  "\"Lesbian, gay, bisexual, and questioning youth are almost 5 times more likely to attempt suicide.\" Not because they were born that way, but because of the stigma and discrimination towards their identities."
];

var genFacts = [
  "In 2019, about 1 billion people worldwide were living with a mental illness.",
  "After the first year of the COVID-19 Pandemic, depression and anxiety increased by 25% worldwide.",
  "Some common treatments for mental illnesses are psychotherapy, counseling, cognitive therapy, and prescription medicine. However, every person is different and no single treatment will work for everyone. Make sure you talk to a proper therapist/psychatrist to discuss what is best for YOU.",
  "Marginalized groups are more likely to suffer from untreated mental health issues (regarding racial, ethnic, gender, and sexual identities). This can be due to poverty, lack of mental-health instutions nearby, lack of awarness/education, cultural stigma, discrimination, etc."
];


// Variables for Support Page
var supMsg = document.getElementById("supMsg");
var supButton = document.getElementById("supButton");
var count = 0;

var posMsgs = [
  "you are amazing for who you are today, who you were yesterday, and who you will be tomorrow.",
  "you are a strong individual person. Keep being an awesome person doing awesome things!",
  "although you feel like you are at your lowest point, don't give up! There is always light at the end of a dark tunnel.",
  "I may not know you, but I know that you deserve a positive message everyday! Sending a virtual hot cocoa to you!",
  "your feelings and experiences are valid. Don't let anyone tell you otherwise! You are allowed to feel this way and you deserve a support system that you can rely on."
];


// Variables for Donation Page
var one = document.getElementById("one");
var five = document.getElementById("five");
var ten = document.getElementById("ten");
var selfInsert = document.getElementById("selfInsert");
var price = document.getElementById("price");
var reset = document.getElementById("reset");
var done = document.getElementById("done");
var equivalent = document.getElementById("equivalent");

// Code for scroll-to-top button
// Source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
var toTheTopButtons = document.getElementsByClassName("toTheTop");

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  for (var i = 0; i < toTheTopButtons.length; i++) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTheTopButtons[i].style.display = "block";
    } else {
      toTheTopButtons[i].style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Event Listeners
if (depButton) {
  depButton.addEventListener("click", event => {
    displayFacts(depFacts);
  })
}

if (anxButton) {
  anxButton.addEventListener("click", event => {
    displayFacts(anxFacts);
  })
}

if (suiButton) {
  suiButton.addEventListener("click", event => {
    displayFacts(suiFacts);
  })
}

if (genButton) {
  genButton.addEventListener("click", event => {
    displayFacts(genFacts);
  });
}

if (supButton) {
  supButton.addEventListener("click", displayMsg);
}

if (one) {
  one.addEventListener("click", event => {
    disable(one);
  })
}

if (five) {
  five.addEventListener("click", event => {
    disable(five);
  })
}

if (ten) {
  ten.addEventListener("click", event => {
    disable(ten);
  })
}

if (selfInsert) {
  selfInsert.addEventListener("click", checkInput);
}

if (reset) {
  reset.addEventListener("click", event => {
    enableAll()
    equivalent.innerHTML = "";
  });
}

if (done) {
  done.addEventListener("click", calcEquivalence);
}

// Functions
function displayFacts(list) {
  if (countFacts >= list.length) {
    countFacts = 0;
  }
  fact.innerHTML = list[countFacts]
  countFacts++;

  // Words take space AFTER button is clicked
  fact.style.border = "dotted";
  fact.style.padding = "1em";
  fact.style.marginTop = "2em";
  fact.style.marginBottom = "2em";
}

function displayMsg() {
  var name = document.getElementById("name").value;
  supMsg.innerHTML = name + ", " + posMsgs[count];
  count++;
  if (count == posMsgs.length) {
    count = 0;
  }

  // Words take space AFTER button is clicked
  supMsg.style.border = "dotted";
  supMsg.style.padding = "2em";
  supMsg.style.marginTop = "2em";
  supMsg.style.marginBottom = "2em";
  supMsg.style.marginLeft = "15%";
  supMsg.style.marginRight = "15%";

  supButton.innerHTML = "Click to see another positive message!";
}

function disable(button) {
  one.disabled = true;
  five.disabled = true;
  ten.disabled = true;
  selfInsert.disabled = true;
  button.style.border = "dotted";
}

function checkInput() {
  if (price.value < 1) {
    selfInsert.innerHTML = "You can't donate $0 or negative money!";
  }
  else {
    selfInsert.innerHTML = "Thank you!";
    disable(selfInsert);
  }
}

// I wish I could've used a loop like I did in my last project, but the loop would only affect the last element in the array
function enableAll() {
  one.disabled = false;
  one.style.border = "none";
  five.disabled = false;
  five.style.border = "none";
  ten.disabled = false;
  ten.style.border = "none";
  selfInsert.disabled = false;
  selfInsert.style.border = "none";
  selfInsert.innerHTML = "Name your own price!";
  price.value = null;
}

var marshCount = 0;
var cocoCount = 0;
function calcEquivalence() {
  if (one.style.border == "dotted") {
    equivalent.innerHTML = "Your donation is equal to a bag of marshmallows!"
  }
  else if (five.style.border == "dotted") {
    equivalent.innerHTML = "Your donation is equal to a cup of hot cocoa!"
  }
  else if (ten.style.border == "dotted") {
    equivalent.innerHTML = "Your donation is equal to two cups of hot cocoa!"
  }
  else if (selfInsert.style.border == "dotted") {
    marshCount = price.value % 5;
    cocoCount = Math.trunc(price.value / 5);
    equivalent.innerHTML = "Your donation is equal to " + cocoCount + " cups of hot cocoa and " + marshCount + " bags of marshmallows!";
  }
  else {
    equivalent.innerHTML = "Please click one of the donation options before clicking \"Donate!\" If you're inputing a price, make sure to click \"Name your own price!\" before clicking \"Donate!\"";
  }
  enableAll();
}