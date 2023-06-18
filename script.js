var randomQuestions = getRandomQuestions(4, questions);

var quizContainer = document.getElementById("quiz-container");

// Skapa frågeelement och svarsalternativ för varje slumpad fråga
for (var i = 0; i < randomQuestions.length; i++) {
  var question = randomQuestions[i];

  // Skapa h2-element för frågan
  var questionElement = document.createElement("h2");
  questionElement.textContent = question.question;

  // Skapa form-element för svarsalternativen
  var optionsElement = document.createElement("form");

  // Kopiera svarsalternativen till en ny array
  var shuffledOptions = question.options.slice();

  // Använd Fisher-Yates-algoritmen för att blanda svarsalternativen
  for (var j = shuffledOptions.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1));
    var temp = shuffledOptions[j];
    shuffledOptions[j] = shuffledOptions[k];
    shuffledOptions[k] = temp;
  }

  // Skapa radioknappar och etiketter för varje svarsalternativ
  for (var j = 0; j < shuffledOptions.length; j++) {
    var option = shuffledOptions[j];

    // Skapa input-element för radioknappen
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "svar" + i;
    input.value = option;

    // Skapa etikett-element för svarsalternativet
    var label = document.createElement("label");
    label.textContent = option;

    // Lägg till input och label i optionsElement
    optionsElement.appendChild(input);
    optionsElement.appendChild(label);
    optionsElement.appendChild(document.createElement("br"));
  }

  // Lägg till frågeelement och optionsElement i quizContainer
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

// Funktion för att slumpa frågor
function getRandomQuestions(numQuestions, questionsArray) {
  var shuffledArray = questionsArray.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, numQuestions);
}

// Hämta referens till "Rätta svar"-knappen
const submitButton = document.getElementById("submit-button");

// Lägg till en lyssnare för knappklick
submitButton.addEventListener("click", rattaSvar);

// Funktion som körs när knappen klickas på
function rattaSvar() {
  // Hämta alla frågelement och optionsElement
  var questionElements = document.getElementsByTagName("h2");
  var optionsElements = document.getElementsByTagName("form");

  // Räkna antalet rätt svar
  var poang = 0;
  for (var i = 0; i < questionElements.length; i++) {
    var questionElement = questionElements[i];
    var optionsElement = optionsElements[i];

    var selectedOption = optionsElement.querySelector("input[type=radio]:checked");
    if (selectedOption !== null) {
      var selectedAnswer = selectedOption.value;
      var correctAnswer = randomQuestions[i].answer;

      if (selectedAnswer === correctAnswer) {
        poang++;
      }
    }
  }

  // Visa popup med poängmeddelande
  var popup = document.createElement("div");
  popup.id = "popup";
  var popupMessage = document.createElement("p");
  popupMessage.id = "popup-message";

  var audio = new Audio();

  if (poang === 0) {
    var gif = document.createElement("img");
    gif.src = "media/Sad/sad.gif";
    gif.id = "fail";
    document.body.appendChild(gif.cloneNode());

    popupMessage.textContent = "Tyvärr, du fick inga rätt";
    audio.src = "media/sound/fail.mp3";
  }
  else if (poang === 1) {
    var gif = document.createElement("img");
    gif.src = "media/klapp.gif";
    gif.id = "fail";
    document.body.appendChild(gif.cloneNode());
    popupMessage.textContent = "Grattis du fick 1 poäng! (0 mynt)";
    audio.src = "media/sound/win.mp3";
  }
  else if (poang === 2) {
    var gif = document.createElement("img");
    gif.src = "media/klapp.gif";
    gif.id = "fail";
    document.body.appendChild(gif.cloneNode());
    popupMessage.textContent = "Grattis du fick 2 poäng! (0mynt)";
    audio.src = "media/sound/win.mp3";
  }
  else if (poang === 3) {
    var gif = document.createElement("img");
    gif.src = "media/klapp.gif";
    gif.id = "fail";
    document.body.appendChild(gif.cloneNode());
    popupMessage.textContent = "Grattis du fick 3 poäng!(1 mynt)";
    audio.src = "media/sound/win.mp3";
  }

  else if (poang === 4) {
    var gif = document.createElement("img");
    gif.src = "media/konf.gif";
    gif.id = "fail";
    document.body.appendChild(gif.cloneNode());
    popupMessage.textContent = "GRATTIS! Du fick full pott! (1 mynt)";
    audio.src = "media/sound/super.mp3";
  }

  audio.play();

  // Skapa knapp för att spela igen
  var playAgainButton = document.createElement("button");
  playAgainButton.id = "play-again-button";
  playAgainButton.textContent = "Spela igen";
  playAgainButton.addEventListener("click", spelaIgen);

  // Lägg till meddelande och knapp i popup
  popup.appendChild(popupMessage);
  popup.appendChild(playAgainButton);
  document.body.appendChild(popup);

  // Visa gif efter att användaren har fått 4 rätt svar
  if (poang === 4) {
    var gif = document.createElement("img");
    gif.src = "media/fire.gif";
    gif.id = "fire1";
    document.body.appendChild(gif.cloneNode());
    gif.id = "fire2";
    document.body.appendChild(gif.cloneNode());
  }
}

// Funktion för att spela igen
function spelaIgen() {
  location.reload();
}

// Scrolla till toppen vid sidomladdning
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
document.addEventListener("keydown", function (event) {
  if (event.shiftKey && event.key.length === 1) {
    var letter = event.key.toLowerCase();
    if (letter === "f") {
      window.location.href = "../tistel/index.html";
    } else if (letter === "d") {
      window.location.href = "../distans/index.html";
    } else if (letter === "g") {
      window.location.href = "../geo/index.html";
    } else if (letter === "s") {
      window.location.href = "../distans/svar.html";
    }
  }

});

