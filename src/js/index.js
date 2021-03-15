import "./import/modules";

let tabBtn = document.querySelectorAll('.tabs__item');
let tabBody = document.querySelectorAll('.tab-body');
tabBtn.forEach(function(item){

  item.onclick = function(){
    let tabId = item.getAttribute('data-tab');
    let currentId = document.querySelector(tabId);
    
    tabBtn.forEach(function(item){
      item.classList.remove('active');
    });
    tabBody.forEach(function(item){
      item.classList.remove('active');
    });
    item.classList.add('active');
    currentId.classList.add('active');
  }
});