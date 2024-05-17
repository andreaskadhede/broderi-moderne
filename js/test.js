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
        if (answers.question1 === 'A' && answers.question2 === 'A' && answers.question3 === 'A' && answers.question4 === 'A' && answers.question5 === 'A') {
            window.location.href = '/resultat-strik.html';
        } else if (answers.question1 === 'B' && answers.question2 === 'A' && answers.question3 === 'A' && answers.question4 === 'A' && answers.question5 === 'A') {
            window.location.href = '/resultat-strik.html';
        } else if (answers.question1 === 'C' && answers.question2 === 'A' && answers.question3 === 'A' && answers.question4 === 'A' && answers.question5 === 'A') {
            window.location.href = '/resultat-haekling.html';
        } else if (answers.question1 === 'C' && answers.question2 === 'A' && answers.question3 === 'A' && answers.question4 === 'A' && answers.question5 === 'A') {
            window.location.href = '';
        } else {
            window.location.href = '';
        }


        // /resultat-broderi.html
        // /resultat-strik.html
        // /resultat-haekling.html
    }

    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        const radioButtons = question.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                if (index < questions.length - 1) {
                    questions[index + 1].style.display = 'flex';
                } else {
                    document.getElementById('se-resultat').style.display = 'flex';
                }
            });
        });
    });
    
});



  