import './style.scss';

const tab1 = document.querySelector('.tab-1');
const tab2 = document.querySelector('.tab-2');
const tab3 = document.querySelector('.tab-3');

// Title
const title = document.createElement('h1');
const titleText = document.createTextNode('Restaurant Project');
title.appendChild(titleText);

// Image
const image = document.createElement('img');
image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9fba334420899.56d68c8fa938f.jpg');
image.setAttribute('alt', 'Restaurant');

// Text
const para = document.createElement('p');
const paraText = document.createTextNode('We have been in the market for more than 100 years. We have a classic style and the same recipes from when we open for the first time. Take a moment to enjoy all of our plates; you will not be disappointed! If you have any suggestions or questions, feel free to ask us!');
para.appendChild(paraText);

// Joining them together
tab1.appendChild(title);
tab1.appendChild(image);
tab1.appendChild(para);
