const STORE = {
    questions: {
     accessibility: [
      {
       question: "नेपाल सरकारले कुन फललाई राष्ट्रिय फल घोषणा गरेको छ ?",
       code: `&lt;html lang="en"&gt;`,
       answers: [
        "आँप",
        "स्याउ",
        "सुन्तला",
        "केरा"
       ],
       correctAnswer: "सुन्तला"
      },{
       question: "सार्क स्थापना हुँदा नेपालका प्रधानमन्त्री को थिए ?",
       code: `&lt;div role="progressbar"&gt;&lt;/div&gt;`,
       answers: [
        "गिरीजा प्रसाद कोइराला",
        "लोकेन्द्र बहादुर चन्द",
        "सुर्य बहादुर थापा",
        "वि.पी. कोइराला"
       ],
       correctAnswer: "लोकेन्द्र बहादुर चन्द"
      },{
       question: "मकै पर्वमा पोलखोल्ने व्यक्ति को थिए?",
       code: ``,
       answers: [
        "विजयराज बस्नेत",
        "गणेशमान सिंह",
        "लक्ष्मणराज थापा",
        "रामहरी जोसी र भोजराज जोसी"
       ],
       correctAnswer: "रामहरी जोसी र भोजराज जोसी"
      },{
       question: "विश्वको सबैभन्दा अग्लो स्थानमा धान उत्पादन हुने जिल्ला कुन हो?",
       code: ``,
       answers: [
        "मुस्ताङ ",
        "मनाङ",
        "जुम्ला",
        "डोल्पा"
       ],
       correctAnswer: "जुम्ला"
      },{
       question: "नेपालमा सबैभन्दा थोरै धान उत्पादन हुने जिल्ला कुन हो?",
       code: ``,
       answers: [
        "मुस्ताङ ",
        "मनाङ",
        "जुम्ला",
        "डोल्पा"
       ],
       correctAnswer: "जुम्ला"
      }
     ],
     arrays: [
      {
       question: "चित्वन भरतपुर आँखा अस्पताल कुन मुलुकको सहयोगमा निर्माण भएको हो?",
       code: `let arr = [2,4,6,8,10]`,
       answers: [
        "पाकिस्तान",
        "चिन",
        "बंगलादेश",
        "भारत"
       ],
       correctAnswer: "पाकिस्तान"
      },{
       question: "चित्वन भरतपुर क्यान्सर अस्पताल कुन मुलुकको सहयोगमा निर्माण भएको हो ?",
       code: `let arr = 
   ['a','b','c','d','e']`,
       answers: [
        "पाकिस्तान",
        "चिन",
        "बंगलादेश",
        "भारत"
       ],
       correctAnswer: "चिन"
      },{
       question: "सर्वप्रथम एटम बम पत्ता लगाउने बैज्ञानिक को हुन ?",
       code: `let arr = 
   [3,1,4,1,5,9]`,
       answers: [
        "डेनिस लेक",
        "जोन डाल्टन)",
        "ओटो हान",
        "माइकल फराडे"
       ],
       correctAnswer: "ओटो हान"
      },{
       question: "“आमा र छोरा”, “आफ्नो कथा” कुन साहित्यकार का प्रसिद्ध कृति हुन?",
       code: `let arr = 
   [23,1,943,81,-52,3.14159]`,
       answers: [
        "बालकृष्ण सम",
        "शम्भुप्रसाद ढुङ्गेल",
        "गोपालप्रसाद रिमाल",
        "विश्वप्रसाद कोइराला"
       ],
       correctAnswer: "विश्वप्रसाद कोइराला"
      },{
       question: "जेठो दाजुसँग नछुटिएर बसेमा मात्र कान्छो भाइले पैत्रीक सम्पतिमा अधिकार रहने चलन कुन जातिमा रहेको छ ?",
       code: `let arr = 
   [23,1,943,81,9,3.14159]`,
       answers: [
        "बाह्रगाँउले",
        "दनुवार",
        "बनकारिया",
        "राजवंशि"
       ],
       correctAnswer: "बाह्रगाँउले"
      }
     ],
     elements: [
      {
       question: "प्रश्न वाचक भएको ठाँउमा उपयुक्त विकल्प छनोट गर्नुहोस?",
       code: `(भरतपुरःनाराणी “?” ः निकासखोला)`,
       answers: [
        "बुटवल",
        "विरेन्द्रनगर",
        "तुल्सीपुर",
        "नेपालगंज"
       ],
       correctAnswer: "विरेन्द्रनगर"
      },{
       question: "महमा सबैभन्दा बढी कुन तत्व पाइन्छ?",
       code: ``,
       answers: [
        "सुक्रोज",
        "फ्रुक्टोज",
        "माल्टोज",
        "ग्लुकोज;"
       ],
       correctAnswer: "फ्रुक्टोज"
      },{
       question: "Global Skill अनुसार नेपाल कतिऔ स्थानमा रहेको छ?",
       code: `
   &lt;p&gt;The quick brown fox... 
   &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
       answers: [
        "१०७",
        "१०८",
        "१०९",
        "११०"
       ],
       correctAnswer: "१०८"
      },{
        question: "खास तराई कती मिटरसम्मलाई मानिन्छ ?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "५८ देखी २०० मिटर",
         "५८ देखी ३०० मिटर",
         "७८ देखी २०० मिटर",
         "५८ देखी २५८ मिटर"
        ],
        correctAnswer: "५८ देखी २०० मिटर"
       },{
        question: "नेपालमा ६००० मिटर माथिका हिमालहरु कति रहेका छन ?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "१२१०",
         "१५१०",
         "१३१०",
         "१४१०"
        ],
        correctAnswer: "१३१०"
       },{
        question: "दुर्लभ मानिने मगर गोही  घडियाल गोही कुन नदीमा पाइन्छ ?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "कर्णाली",
         "नारायणी",
         "गण्डकी",
         "कोसी"
        ],
        correctAnswer: "गण्डकी"
       },{
        question: "नेपालमा हरेक बर्ष संसद दिवस कहीले मनाइन्छ?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "मंसिर ८",
         "माघ ८",
         "माघ २०",
         "मंसिर १८"
        ],
        correctAnswer: "मंसिर ८"
       },{
        question: "प्रकृतिको वरदान र कृडास्थ भनेर कुन ठाँउलाई चिनिन्छ ?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "लुम्विनी",
         "बडिमालिका",
         "गोसाइकुण्ड",
         "पोखरा, काँस्की"
        ],
        correctAnswer: "पोखरा, काँस्की"
       },{
        question: "रिग्मो उपनामले नेपालको कुन प्रसिद्ध ताललाई चिनिन्छ ?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "रारा",
         "तिलीचो",
         "से फोक्सुण्डो",
         "झिलिमीला ताल"
        ],
        correctAnswer: "से फोक्सुण्डो"
       },{
        question: "तल देहाएका मध्य कुन संगठन सवैभन्दा अन्तीम स्थापना भएको हो?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "विमस्टेक",
         "सयुक्त राष्टसंघ",
         "सार्क",
         "आसीयान"
        ],
        correctAnswer: "विमस्टेक"
       },{
        question: "विश्वमा सबैभन्दा धेरै देशहरुसँग सिमाना जोडिएको राष्ट्र कुन हो?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "भारत",
         "चिन",
         "वेलायत",
         "जापान"
        ],
        correctAnswer: "चिन"
       },{
        question: "नेपालको पहिलो महिला मुख्यसचिब को हुन?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "लिलादेबि गडतौला",
         "सुमना श्रेष्ठ",
         "अंसारि घर्ती",
         "मिरा राना"
        ],
        correctAnswer: "लिलादेबि गडतौला"
       },{
        question: "युरोकप २०२४ को विजेता राष्ट्र कुन हो?",
        code: `
    &lt;p&gt;The quick brown fox... 
    &lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: [
         "France",
         "Spain",
         "Portugol",
         "Korea"
        ],
        correctAnswer: "Spain"
       },
      
     ]
    }
   };
   
   
   // Make the quiz. Create a model for our app's state
   function makeQuiz(){
       // Creating an object to store the app's state when beginning the quiz
       return {
           // Gathering a random question out of the available questions for each category
           questions: helpers.getRandomQuestions(STORE),
           // Boolean for if the quiz is in progress or not
           midQuiz: false,
           // Array of correct/incorrect answers to use for our progress bar
           progress: {
               progressBar: [],
               incorrectCategories: []
           },
           // Boolean to determine if the end state should display
           completed: false,
           // Monitoring which question we are currently on
           currentQuestion: 0,
           // Keeps track of total correct answers
           correctAnswers: 0,
           // Keeps current selected answer
           currentAnswer: "",
           // Keeps track of % completed
           percCorrect: 0
       }
   }
   
   // Apply fadeOut animations and set the stage for DOM text/element changes
   function $fade(appState){
   
       // This is the completed state of of a quiz
       if(appState.completed){
           
           // Fade out elements with a promise to avoid choppy behavior
           $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
               .done(function(){
   
                   // Display results of the quiz
                   $showResults(appState);
                   $('.results-wrapper').hide().removeClass('hide');
                   $('.question-answer-wrapper, .results-wrapper').fadeIn(500);
           });
   
       // This is if the app is just starting
       } else if(appState.midQuiz === false){
   
           // Set a flag that the app has begun
           appState.midQuiz = true;
           // Fade out elements with a promise to avoid choppy behavior
           $.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
               .done(function(){
                   // Remove any progress from a previous quiz (if any);
                   helpers.updateProgressBar(appState);
                   $('.progress-count').html('1 / 10');
                   $('.progress-perc').html('');
                   // Kill previous results
                   $('.failures').remove();
                   // Lots to do... mostly just setting up a new environment for a new quiz
                   $updateQuestion(appState);
                   $('progress-bar').empty();
                   $('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
                   $('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
                   $('.submit-btn, .progress, .progress-bar').removeClass('hide');
                   $('.progress, .progress-bar').hide();
                   $('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
                   if(!$('.code').hasClass('hide')){$('.code').fadeIn(500)};
           });
   
       // This is if the app is in the middle of execution
       } else if(appState.midQuiz){
           $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
               .done(function(){
                   $updateQuestion(appState);
                   $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
           });
       }
   }
   
   // Work in progress...
   function $showResults(appState){
       if(appState.correctAnswers === 10){
           let endMsg = `You got ${appState.percCorrect}% correct!
   I have nothing else to teach you. Move on and prosper!
   `;
       } else {
           $('.answer-btn').remove();
           let endMsg = `You got ${appState.percCorrect}% correct!`
           let endFeedback = ``;
           if(appState.progress.incorrectCategories.length === 0){
               endFeedback = `You aced it! Good job!`;
           } else {
               endFeedback = `If you want to try again then click to "Retry" button otherwise you can click to "Home" Button Thankyou!`;
           }
           
           $('.quiz-end-score').html(endMsg);
           let $failList = $('<ul class="failures"></ul>');
           appState.progress.incorrectCategories.map((cat => {
               $failList.append("<li class='category'>" + cat + "</li>");
           }));
           $('.quiz-end-feedback-p').html(endFeedback);
           $('.quiz-end-categories').append($failList);
           $('.results-wrapper').removeClass('hide').css('display', 'flex');
           $('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);		
       }
   
   }
   
   // Update the question, code, answers, buttons in the DOM while we're in a faded out state
   function $updateQuestion(appState){
       $('.answer-btn').remove();
   
       // Update the question and code text with the current question
       $('.question').html(appState.questions[appState.currentQuestion].question);
   
       // This is a hack to hide/show the code portion
       // Only 1/3 of the questions contain code so we hide it if they aren't present
       if(appState.questions[appState.currentQuestion].code == ``){
           $('.code').addClass('hide');
       } else {
           $('.code').removeClass('hide');
           $('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
       }
       
       // Change continue back to submit
       $('.continue-btn')
           .val("Submit")
           .removeClass('continue-btn')
           .addClass('submit-btn')
           .prop('disabled', true);
   
       // Add in available answers for the question
       let $answers = [];
   
       // Adding the answers to a temporary array
       for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){
   
           // Add current question answers to an array
           let $answer = $('<button class="answer-btn" type="button"></button>');
           $answer.html(appState.questions[appState.currentQuestion].answers[i]);
           $answers.push($answer);
       }
   
       // Shuffle the answers
       helpers.shuffleAnswers($answers)
   
       // Push answers to the DOM
       $answers.forEach((answer) => {
           $('.answer-wrapper').prepend(answer);
       });
   }
   
   // Simple class and enable/disable DOM selection when answer is selected
   function selectAnswer(answer){
       $('.answer-btn').removeClass('selected');
       answer.addClass('selected');
       $('.submit-btn').prop('disabled', false);
   }
   
   // Answer is selected and submitted
   // Push a feedback state
   function submitAnswer(appState){
   
       // This will be returned true or false based on their answer
       let correct;
   
       // Add styles to the answers to show if their answer was correct or not
       $('.answer-btn').each(function () {
           if($(this).html() === appState.questions[appState.currentQuestion].correctAnswer){
               $(this).addClass('pass');
               // If answer is correct and selected...
               if($(this).hasClass('selected')){
                   correct = "pass";
                   appState.correctAnswers++;
                   appState.questions[appState.currentQuestion];
               }
   
           // Handle correct answer if selected answer is incorrect
           } else if ($(this).hasClass('selected')){
               $(this).addClass('fail dim-answer');
               correct = "fail";
               appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);
   
           // Dim the other answers to make the correct one more prevalent
           } else {
               $(this).addClass('dim-answer');
           }
       });
   
       // Add a progress bar indicator to our appState object
       appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);
       
       // Update our percent correct (parse a float and set it to a fixed percentage)
       appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();
   
       // Update our current question VS total quiz length
       $('.progress-count').html(`
           ${appState.currentQuestion + 1} / ${appState.questions.length}
       `);
   
       // Update our current correct percentage
       $('.progress-perc').html(`
            // ${(appState.percCorrect)}% Correct
       `)
   
       // Change submit back to continue
       $('.submit-btn')
           .val("Continue")
           .removeClass('submit-btn')
           .addClass('continue-btn')
   
       // Disable selecting answers
       $('.answer-btn').prop("disabled", true);
   
       // Update our progress-bar DOM
       helpers.updateProgressBar(appState);
   
       // Continue to next question
       appState.currentQuestion++;
   
       // Verify if we're done or not
       if(appState.currentQuestion === appState.questions.length){
           appState.completed = true;
       }
       
   }
   
   // Silly easter egg for saying you don't want to do the quiz
   function killQuiz(){
       $('.start-quiz, .quit-quiz').hide();
       let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
       let msgSplit = failureMsg.split(" ");
       let counter = 0;
       $('.question').empty();
       let startTroll = setInterval(function () {
           $('.question').append(msgSplit[counter] + " ");
           counter++;
           if(counter > msgSplit.length - 1){
                 clearInterval(startTroll);
                 $('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
           }
       }, 250);
   }
   
   // These are simple algorithms to modify data that don't need an individual function
   let helpers = {
       // Pick a random question from the available ones
       pickRandomQ: function(obj,section){
           return Math.floor(Math.random() * obj.questions[section].length);		
       },
       // Gather a random question from every category
       getRandomQuestions: function(obj){
           let questions = [];
           let categories = Object.keys(obj.questions);
           categories.forEach((cat) => {
               let randomQ = this.pickRandomQ(obj,cat);
               let question = obj.questions[cat][randomQ];
               question.category = cat;
               questions.push(question);
           });
           return questions;
       },
       // Shuffle the answers so they don't appear in the same order
       shuffleAnswers: function(arr){
           for (var i = arr.length - 1; i > 0; i--) {
               var j = Math.floor(Math.random() * (i + 1));
               var temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
           }
       },
       // Update progress bar DOM element
       updateProgressBar: function(appState){
           $('.progress-bar').empty();
           appState.progress.progressBar.forEach((progInd => {
               $('.progress-bar').append(progInd);
           }))
       }
   }
   
   // Lets start the show
   $(function(){
   
       // Kill any form refresh
       $('.answer-wrapper').on('submit', function(e){
           e.preventDefault();
       });
   
       // Storage for quiz app state
       let quizData;
   
       // Start quiz
       $('.start-quiz, .retry-btn').on('click', function(){
           quizData = makeQuiz();
           $fade(quizData);
       });
   
       // Select an answer
       $('.question-answer-wrapper').on('click', '.answer-btn', function(){
           selectAnswer($(this));
       })
   
       // Submit your answer to display feedback and advance question counter
       $('.question-answer-wrapper').on('click', '.submit-btn', function(e){
           submitAnswer(quizData);
       });
   
       // Submit your answer to display feedback and advance question counter
       $('.question-answer-wrapper').on('click', '.continue-btn', function(){
           $fade(quizData);
       });
   
       // Easter egg to chastize the user
       $('.quit-quiz').on('click', function(){
           killQuiz();
       })
   })