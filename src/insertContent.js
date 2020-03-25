const contentDiv = document.querySelector('.content');
const tabs = document.querySelectorAll('.input-radio');
const title = document.createElement('h1');
const image = document.createElement('img');
const para = document.createElement('p');

const insertHome = () => {
  // Title
  title.innerHTML = 'Restaurant Project';

  // Image
  image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9fba334420899.56d68c8fa938f.jpg');
  image.setAttribute('alt', 'Restaurant');

  // Text
  para.innerHTML = 'We have been in the market for more than 100 years. We have a classic style and the same recipes from when we open for the first time. Take a moment to enjoy all of our plates; you will not be disappointed! If you have any suggestions or questions, feel free to ask us!';

  // Joining them together
  contentDiv.appendChild(title);
  contentDiv.appendChild(image);
  contentDiv.appendChild(para);
};

const insertMenu = () => {
  // Title
  title.innerHTML = 'Look our menu!';

  // Image
  image.setAttribute('src', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2baa5d55105465.597700cb2f87e.jpg');
  image.setAttribute('alt', 'Menu');

  // Text
  para.innerHTML = '*Prices may vary.';

  // Joining them together
  contentDiv.appendChild(title);
  contentDiv.appendChild(image);
  contentDiv.appendChild(para);
};

const insertContact = () => {
  // Title
  title.innerHTML = 'Contact information';

  // Text
  para.innerHTML = 'Phone: 927.776.1537 x26493 <br> Email: Cecile80@gmail.com <br> Adress: 0583 Rau Ramp, Howellton';

  // Joining them together
  contentDiv.appendChild(title);
  contentDiv.appendChild(para);
};

const tabLogic = () => {
  let currentTab = 1;
  insertHome();
  tabs.forEach((element) => {
    const tab = element;
    tab.onclick = () => {
      if (currentTab !== parseFloat(element.id.slice(4))) {
        currentTab = parseFloat(element.id.slice(4));
        contentDiv.innerHTML = '';
        switch (currentTab) {
          case 1:
            insertHome();
            break;
          case 2:
            insertMenu();
            break;
          default:
            insertContact();
            break;
        }
      }
    };
  });
};

export default tabLogic;
