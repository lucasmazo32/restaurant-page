const contentDiv = document.querySelector('.content');
const title = document.createElement('h1');
const image = document.createElement('img');
const para = document.createElement('p');

const insertHome = () => {
  // Title
  const titleTextHome = document.createTextNode('Restaurant Project');
  title.appendChild(titleTextHome);

  // Image
  image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9fba334420899.56d68c8fa938f.jpg');
  image.setAttribute('alt', 'Restaurant');

  // Text
  const paraTextHome = document.createTextNode('We have been in the market for more than 100 years. We have a classic style and the same recipes from when we open for the first time. Take a moment to enjoy all of our plates; you will not be disappointed! If you have any suggestions or questions, feel free to ask us!');
  para.appendChild(paraTextHome);

  // Joining them together
  contentDiv.appendChild(title);
  contentDiv.appendChild(image);
  contentDiv.appendChild(para);
};

const insertMenu = () => {
  // Title
  const titleTextHome = document.createTextNode('Look our menu!');
  title.appendChild(titleTextHome);

  // Image
  image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2baa5d55105465.597700cb2f87e.jpg');
  image.setAttribute('alt', 'Menu');

  // Text
  const paraTextHome = document.createTextNode('*Prices may vary.');
  para.appendChild(paraTextHome);

  // Joining them together
  contentDiv.appendChild(title);
  contentDiv.appendChild(image);
  contentDiv.appendChild(para);
};

const insertContact = () => {
  // Title
  const titleTextHome = document.createTextNode('Contact information');
  title.appendChild(titleTextHome);

  // Text
  para.innerHTML = 'Phone: 927.776.1537 x26493 <br> Email: Cecile80@gmail.com <br> Adress: 0583 Rau Ramp, Howellton';

  // Joining them together
  contentDiv.appendChild(title);
  contentDiv.appendChild(para);
};

export { insertHome, insertMenu, insertContact };
