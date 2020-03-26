const title = document.createElement('h1');
const image = document.createElement('img');
const para = document.createElement('p');

const insertHome = (contentDiv, container) => {
  // Title
  title.innerHTML = 'Restaurant Project';

  // Image
  image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9fba334420899.56d68c8fa938f.jpg');
  image.setAttribute('alt', 'Restaurant');

  // Text
  para.innerHTML = 'We have been in the market for more than 100 years. We have a classic style and the same recipes from when we open for the first time. Take a moment to enjoy all of our plates; you will not be disappointed! If you have any suggestions or questions, feel free to ask us!';

  // Joining them together
  const content = contentDiv;
  content.innerHTML = '';
  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(para);
  container.appendChild(content);
};

export default insertHome;
