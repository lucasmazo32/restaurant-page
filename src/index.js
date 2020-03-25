import './style.scss';

const contentDiv = document.querySelector('.content');
const tabs = document.querySelectorAll('.input-radio');

// Title
const titleHome = document.createElement('h1');
const titleTextHome = document.createTextNode('Restaurant Project');
titleHome.appendChild(titleTextHome);

// Image
const imageHome = document.createElement('img');
imageHome.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9fba334420899.56d68c8fa938f.jpg');
imageHome.setAttribute('alt', 'Restaurant');

// Text
const paraHome = document.createElement('p');
const paraTextHome = document.createTextNode('We have been in the market for more than 100 years. We have a classic style and the same recipes from when we open for the first time. Take a moment to enjoy all of our plates; you will not be disappointed! If you have any suggestions or questions, feel free to ask us!');
paraHome.appendChild(paraTextHome);

// Joining them together
contentDiv.appendChild(titleHome);
contentDiv.appendChild(imageHome);
contentDiv.appendChild(paraHome);
