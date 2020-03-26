const title = document.createElement('h1');
const para = document.createElement('p');
const contentDiv = document.createElement('div');
contentDiv.setAttribute('class', 'content');

const insertContact = (container) => {
  // Title
  title.textContent = 'Contact information';

  // Text
  para.innerHTML = 'Phone: 927.776.1537 x26493 <br> Email: Cecile80@gmail.com <br> Adress: 0583 Rau Ramp, Howellton';

  // Joining them together
  contentDiv.append(title, para);
  container.appendChild(contentDiv);
};

export default insertContact;
