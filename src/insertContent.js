import insertContact from './contactContent';
import insertHome from './homeContent';
import insertMenu from './menuContent';
import insertTabs from './tabs';

const container = document.querySelector('.container');

const tabLogic = () => {
  let currentTab = 1;
  insertTabs(container);
  const tabs = document.querySelectorAll('.input-radio');
  insertHome(container);
  tabs.forEach((element) => {
    const tab = element;
    tab.onclick = () => {
      if (currentTab !== parseFloat(element.id.slice(4))) {
        currentTab = parseFloat(element.id.slice(4));
        const currentDiv = document.querySelector('.content');
        currentDiv.remove();
        switch (currentTab) {
          case 1:
            insertHome(container);
            break;
          case 2:
            insertMenu(container);
            break;
          default:
            insertContact(container);
            break;
        }
      }
    };
  });
};

export default tabLogic;
