const title = document.createElement('h1');
const para = document.createElement('p');

const insertContact = (contentDiv, container) => {
  // Title
  title.innerHTML = 'Contact information';

  // Text
  para.innerHTML = 'Phone: 927.776.1537 x26493 <br> Email: Cecile80@gmail.com <br> Adress: 0583 Rau Ramp, Howellton';

  // Joining them together
  const content = contentDiv;
  content.innerHTML = '';
  content.appendChild(title);
  content.appendChild(para);
  container.appendChild(content);
};

export default insertContact;
