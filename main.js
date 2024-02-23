const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle("open");
  const subMenu = document.querySelector('.sidebar .nav-list li:nth-child(3) > ul.sub-menu');
  const trackingProgressParent = document.querySelector('.sidebar .nav-list li:nth-child(3)');
  
  if (!sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    subMenu.classList.remove('active');
    trackingProgressParent.classList.remove('open');
  } else {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const trackingProgress = document.querySelector('.sidebar .nav-list li:nth-child(3) > a');
    const subMenu = document.querySelector('.sidebar .nav-list li:nth-child(3) > ul.sub-menu');
  
    trackingProgress.addEventListener('click', function(e) {
      e.preventDefault();
      subMenu.classList.toggle('active');
      trackingProgress.parentNode.classList.toggle('open'); 
    });
  });
  