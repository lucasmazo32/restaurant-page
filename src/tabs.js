const tabs = (contentDiv) => {
  const input1 = document.createElement('input');
  input1.setAttribute('checked', '');
  input1.setAttribute('id', 'tab-1');
  const input2 = document.createElement('input');
  input2.setAttribute('id', 'tab-2');
  const input3 = document.createElement('input');
  input3.setAttribute('id', 'tab-3');

  [input1, input2, input3].forEach((element) => {
    element.setAttribute('class', 'input-radio');
    element.setAttribute('type', 'radio');
    element.setAttribute('name', 'tabs');
  });

  const label1 = document.createElement('label');
  label1.setAttribute('class', 'tab-label');
  label1.setAttribute('for', 'tab-1');
  label1.textContent = 'Home';
  const label2 = document.createElement('label');
  label2.setAttribute('class', 'tab-label');
  label2.setAttribute('for', 'tab-2');
  label2.textContent = 'Menu';
  const label3 = document.createElement('label');
  label3.setAttribute('class', 'tab-label');
  label3.setAttribute('for', 'tab-3');
  label3.textContent = 'Contact';

  contentDiv.append(input1, label1, input2, label2, input3, label3);
};

export default tabs;
