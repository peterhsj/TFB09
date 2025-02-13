// 選單 ID 
const menuList = ['todoList', 'info', 'lcList', 'negotiationList', 'acceptNegotiation', 'checkNegotiation', 'setGroup', 'setBeneficiary', 'setLcTable', 'accountManager', 'roleManager', 'branchManager'];

const homePage = document.querySelector('#homePage');
homePage.addEventListener('click', (e) => {
  e.preventDefault();
  const lcListTab = window.parent.document.querySelector('#lcList');
  clearAction();
  lcListTab.classList.add('active');
  window.parent.document.querySelector('#main-content').src = `./pages/lcList.html`;
});

// 清除選單全部 [.active] 樣式
function clearAction() {
  menuList.forEach(menu => {
    this[`${menu}tab`] = window.parent.document.querySelector(`#${menu}`);
    this[`${menu}tab`].classList.remove('active');
  });
};