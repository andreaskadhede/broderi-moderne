"use strict"

document.addEventListener('DOMContentLoaded', function() {

    const resultat = document.getElementById("se-resultat");
    resultat.addEventListener("click", seResultat)

    function seResultat() {
        const form = document.getElementById('test');
    
        // Collect answers
        const answers = {
            question1: form.elements['question1'].value,
            question2: form.elements['question2'].value,
            question3: form.elements['question3'].value,
            question4: form.elements['question4'].value,
            question5: form.elements['question5'].value,
        };
    
        // Define redirection logic based on the combination of answers
        if (answers.question1 === 'A' /*&& answers.question2 === 'A' && answers.question3 === 'A' && answers.question4 === 'A' && answers.question5 === 'A'*/) {
            window.location.href = '/resultat-strik.html';
        } else if (answers.question1 === 'B' /*&& answers.question2 === 'A' && answers.question3 === 'A' && answers.question4 === 'A' && answers.question5 === 'A'*/) {
            window.location.href = '/resultat-haekling.html';
        } else if (answers.question1 === 'C' /*&& answers.question2 === 'A' && answers.question3 === 'A' && answers.question4 === 'A' && answers.question5 === 'A'*/) {
            window.location.href = '/resultat-broderi.html';
        } else {
            window.location.href = '';
        }


        // /resultat-broderi.html
        // /resultat-strik.html
        // /resultat-haekling.html
    }

    const questions = document.querySelectorAll('.question');
    const img = document.querySelectorAll('.boelge');
    const resultButton = document.getElementById('se-resultat');
    const boelgeFuld = document.getElementById('boelgefuld');


    // Ensure the first question is visible on page load
    questions[0].style.display = 'flex';

    questions.forEach((question, index) => {
        const radioButtons = question.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                // Hide all subsequent questions
                for (let i = index + 1; i < questions.length; i++) {
                    questions[i].style.display = 'none';
                    img[i].style.display = 'none';
                }
                // for (let i = index + 1; i < img.length; i++) {
                    // img[i].style.display = 'none';
                // }

                // Show the next question or result button
                if (index < questions.length - 1) {
                    questions[index + 1].style.display = 'flex';
                    img[index + 1].style.display = 'flex';
                } else {
                    resultButton.style.display = 'block';
                    boelgeFuld.style.display = 'block';
                }

                // if (index < img.length - 1) {
                //     img[index + 1].style.display = 'flex';
                // } else {
                //     boelgeFuld.style.display = 'block';
                // }
            });
        });
    });

});
