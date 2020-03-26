import insertContact from './contactContent';
import insertHome from './homeContent';
import insertMenu from './menuContent';

const tabs = document.querySelectorAll('.input-radio');
const container = document.querySelector('.container');
const contentDiv = document.createElement('div');
contentDiv.setAttribute('class', 'content');

const tabLogic = () => {
  let currentTab = 1;
  insertHome(contentDiv, container);
  tabs.forEach((element) => {
    const tab = element;
    tab.onclick = () => {
      if (currentTab !== parseFloat(element.id.slice(4))) {
        currentTab = parseFloat(element.id.slice(4));
        const currentDiv = document.querySelector('.content');
        currentDiv.remove();
        switch (currentTab) {
          case 1:
            insertHome(contentDiv, container);
            break;
          case 2:
            insertMenu(contentDiv, container);
            break;
          default:
            insertContact(contentDiv, container);
            break;
        }
      }
    };
  });
};

export default tabLogic;
