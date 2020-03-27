const title = document.createElement('h1');
const image = document.createElement('img');
const para = document.createElement('p');
const contentDiv = document.createElement('div');
contentDiv.setAttribute('class', 'content');

const insertHome = (container) => {
  // Title
  title.textContent = 'Restaurant Project';

  // Image
  image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9fba334420899.56d68c8fa938f.jpg');
  image.setAttribute('alt', 'Restaurant');

  // Text
  para.textContent = 'We have been in the market for more than 100 years. We have a classic style and the same recipes from when we open for the first time. Take a moment to enjoy all of our plates; you will not be disappointed! If you have any suggestions or questions, feel free to ask us!';

  // Joining them together
  contentDiv.append(title, image, para);
  container.appendChild(contentDiv);
};

export default insertHome;
