'use strict';

$(function () {
  $('body').on('click', '[href*="#"]', function (e) {
    var fixed_offset = '';
    $('html,body')
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 400);
    e.preventDefault();
  });
});

const yearOfBirth = 1985;
const newDate = new Date();
const yearOfOld = newDate.getFullYear() - yearOfBirth;
const ageTag = document.querySelector('.js-age');

function declination(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
}

const title = declination(yearOfOld, [' год', ' года', ' лет']);
const age = yearOfOld + title;

ageTag.textContent = age;
