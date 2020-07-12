function make_excercize(sm_array) {
  var questions_array = [];

  for (i in sm_array) {
    var question = {};
    var correct_or_not = Math.random();

    if (correct_or_not > 0.3) {
      question = {option: sm_array[i]['word'], correct: true};
    } else {
      question = {option: sm_array[i]['misspelling'], correct: false};
    };

    questions_array.push(question);
  };

  return questions_array;
}

var sample_array = [
  {word: 'caught', misspelling: 'cought'},
  {word: 'name', misspelling: 'neim'},
  {word: 'fight', misspelling: 'fite'},
  {word: 'travel', misspelling: 'trevel'},
  {word: 'fire', misspelling: 'faire'},
];

exerc = make_excercize(sample_array);

for (i in exerc) {
  console.log(exerc[i]);
};
