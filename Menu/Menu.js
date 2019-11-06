/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
/* Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  The function takes an array as its only argument. */
function createMenu(menuItems) {
  const menu = document.createElement('div')
  menu.classList.add('menu');

  const mItemList = document.createElement('ul')
  menu.append(mItemList);
  
  menuItems.forEach(i => {
    const items = document.createElement('li');
    items.textContent = `${i}`;
    mItemList.append(items);
  });

  const menubtn = document.querySelector('.menu-button');
  menubtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  return menu;
}
document.querySelector('.header').append(createMenu(menuItems));
append(MenuCreator(menuItems));
