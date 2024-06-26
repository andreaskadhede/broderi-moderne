"use strict"

document.addEventListener('DOMContentLoaded', function() {

    const questions = document.querySelectorAll('.question');
    const imgLaptop = document.querySelectorAll('.boelgetest-laptop');
    const imgMobil = document.querySelectorAll('.boelgetest-mobil');
    const resultButton = document.getElementById('se-resultat');
    const boelgeFuld = document.getElementById('boelgefuld');
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
    }


    // Ensure the first question is visible on page load
    questions[0].style.display = 'flex';

    questions.forEach((question, index) => {
        const radioButtons = question.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                // Hide all subsequent questions and images
                for (let i = index + 1; i < questions.length; i++) {
                    questions[i].style.display = 'none';
                    imgLaptop[i].style.display = 'none';
                    imgMobil[i].style.display = 'none';
                }

                // Show the next question or result button
                if (index < questions.length - 1) {
                    questions[index + 1].style.display = 'flex';
                    if (window.innerWidth >= 820) {
                        imgLaptop[index + 1].style.display = 'flex';
                    } else {
                        imgMobil[index + 1].style.display = 'flex';
                    }
                } else {
                    document.getElementById('se-resultat').style.display = 'flex';
                    resultButton.style.display = 'block';
                    boelgeFuld.style.display = 'block';
                }
            });
        });
    });

    // Listen for window resize to adjust images accordingly
    window.addEventListener('resize', () => {
        const currentIndex = Array.from(questions).findIndex(question => question.style.display === 'flex');
        if (currentIndex !== -1) {
            if (window.innerWidth >= 820) {
                imgLaptop[currentIndex].style.display = 'flex';
                imgMobil[currentIndex].style.display = 'none';
            } else {
                imgLaptop[currentIndex].style.display = 'none';
                imgMobil[currentIndex].style.display = 'flex';
            }
        }
    });

    // Initial adjustment on page load
    const currentIndex = Array.from(questions).findIndex(question => question.style.display === 'flex');
    if (currentIndex !== -1) {
        if (window.innerWidth >= 820) {
            imgLaptop[currentIndex].style.display = 'flex';
            imgMobil[currentIndex].style.display = 'none';
        } else {
            imgLaptop[currentIndex].style.display = 'none';
            imgMobil[currentIndex].style.display = 'flex';
        }
    }

});
