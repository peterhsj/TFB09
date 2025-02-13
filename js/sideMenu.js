// 選單 ID 
const menuList = ['todoList', 'info', 'lcList', 'negotiationList', 'acceptNegotiation', 'checkNegotiation', 'setGroup', 'setBeneficiary', 'setLcTable', 'accountManager', 'roleManager', 'branchManager'];

menuList.forEach(menu => {
  this[`${menu}tab`] = document.querySelector(`#${menu}`);
  
  // 監聽連結
  if (this[`${menu}tab`]) {
    this[`${menu}tab`].addEventListener('click', (event) => {
      event.preventDefault();
      
      // 樣式切換
      clearAction();
      event.target.classList.add('active');  
      document.querySelector('#main-content').src = `./pages/${menu}.html`;
    });
  }
});

// 清除選單全部 [.active] 樣式
function clearAction() {
  menuList.forEach(menu => {
    this[`${menu}tab`] = document.querySelector(`#${menu}`);
    this[`${menu}tab`].classList.remove('active');
  });
};