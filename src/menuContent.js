const title = document.createElement('h1');
const image = document.createElement('img');
const para = document.createElement('p');
const contentDiv = document.createElement('div');
contentDiv.setAttribute('class', 'content');


const insertMenu = (container) => {
  // Title
  title.textContent = 'Look our menu!';

  // Image
  image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2baa5d55105465.597700cb2f87e.jpg');
  image.setAttribute('alt', 'Menu');

  // Text
  para.textContent = '*Prices may vary.';

  // Joining them together
  contentDiv.append(title, image, para);
  container.appendChild(contentDiv);
};

export default insertMenu;
