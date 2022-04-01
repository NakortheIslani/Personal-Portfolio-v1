var words = [
    'Resourcful.',
    'a Quick Study.',
    'Reliable.',
    'Learning Everyday.',
    'Punctual.',
    'Fun to Work With.',
    'a Hard Worker.',
    'Awesome.',
    'a Problem Solver.',
    'Legendary.',
    'an Alien.',
    'an Array of Positive Adjectives.',
    'a Meat Popsicle.',
    'Spartacus.',
    'Batman.',
    'Ironman.',
    'Pickle Rick!!!',
    'Not Really an Alien.'
];

function randomWord() {
    document.getElementById("textbox").value = words[Math.floor(Math.random() * words.length)];
}

