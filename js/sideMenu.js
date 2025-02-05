// 選單 ID 
const menuList = ['lcList', 'negotiationList', 'acceptNegotiation', 'checkNegotiation', 'setGroup', 'setBeneficiary', 'setLcTable', 'accountManager', 'roleManager', 'branchManager'];

$("#main-content").load("/pages/lcList.html #lcList");
// 選單操作
menuList.forEach(menu => {
  this[`${menu}tab`] = document.querySelector(`#${menu}`);

  // 監聽連結
  this[`${menu}tab`].addEventListener('click', (event) => {
    event.preventDefault();
    
    // 樣式切換
    this.clearAction();
    event.target.classList.add('active');

    $("#main-content").load(`/pages/${menu}.html #${menu}`);
  });
});

// 清除選單全部 [.active] 樣式
function clearAction() {
  menuList.forEach(menu => {
    this[`${menu}tab`] = document.querySelector(`#${menu}`);
    this[`${menu}tab`].classList.remove('active');
  });
};