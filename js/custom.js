gsap.registerPlugin(ScrollTrigger);


// nav dropdown

document.querySelectorAll('.dropdown-submenu > a').forEach(subMenu => {
    subMenu.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
  
        const submenu = this.nextElementSibling;
  
        this.parentElement.parentElement.querySelectorAll('.dropdown-item').forEach(item => {
            item.classList.remove('active');
        });
  
        if (submenu.classList.contains('show')) {
            submenu.classList.remove('show');
            this.classList.remove('active');
        } else {
            this.parentElement.parentElement.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove('show');
                }
            });
  
            submenu.classList.add('show');
            this.classList.add('active'); 
        }
    });
  });
  
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        if (!menu.parentElement.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
  
    document.querySelectorAll('.dropdown-item.active').forEach(item => {
        if (!item.parentElement.contains(e.target)) {
            item.classList.remove('active');
        }
    });
  });



// preloader
  // Ensure preloader disappears only after the page is fully loaded
  window.onload = function () {
    let preloader = document.getElementById("preloader");
    let content = document.getElementById("content");

    preloader.style.opacity = "0"; // Smooth fade-out

    setTimeout(() => {
        preloader.style.display = "none"; // Hide preloader
        content.style.display = "block"; // Show content
    }, 500); // Delay to match fade-out effect
};







// scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// close







