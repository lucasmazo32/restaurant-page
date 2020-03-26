const title = document.createElement('h1');
const image = document.createElement('img');
const para = document.createElement('p');


const insertMenu = (contentDiv, container) => {
  // Title
  title.innerHTML = 'Look our menu!';

  // Image
  image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2baa5d55105465.597700cb2f87e.jpg');
  image.setAttribute('alt', 'Menu');

  // Text
  para.innerHTML = '*Prices may vary.';

  // Joining them together
  const content = contentDiv;
  content.innerHTML = '';
  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(para);
  container.appendChild(content);
};

export default insertMenu;
