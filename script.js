let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textConent = 'Article 004';
newParagraph.textContent = 'Ask to be pet then attack owners hand jumps ' +
    'off balcony gives owner dead mouse at present then poops in litter ' +
    'box snatches yarn and fights with dog cat chases laser then plays in ' +
    'grass finds tiny spot in cupboard and sleeps all day jumps in bathtub ' +
    'and meows when owner fills food dish the cat knocks over the food dish ' +
    'cat slides down the water slide and into pool and swims even though it ' +
    'does not like water or meowzer.';
newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');
newArticle.setAttribute('id', 'art-004');

let mains = document.querySelector('main');
mains.appendChild(newArticle);