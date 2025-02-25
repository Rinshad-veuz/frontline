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



window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}

$('.product-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        475: {
            items: 1.5
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('.client-carousel').owlCarousel({

    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        375: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 1
        },
        1000: {
            items: 1.5
        }
    }
})

//   loop: true,
//   margin: 15,
//   nav: false, 
//   dots: false, 
//   autoplay: true, 
//   autoplayTimeout: 3000,
//   autoplayHoverPause: true, 
//   responsive: {
//       0: {
//           items: 1
//       },
//      375: {
//           items: 2
//       },
//       600: {
//           items: 3
//       },
//       1000: {
//           items: 5
//       }
//   }
// })

$('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: false, 
  dots: false, 
  autoplay: true, 
  autoplayTimeout: 3000, 
  autoplayHoverPause: true, 
  responsive: {
      0: {
          items: 1
      },
      992: {
          items: 1
      },
      1000: {
          items: 1.5
      }
  }

})




$('.product-carousel2').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        475: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
//   loop: true,
//   margin: 15,
//   nav: false, 
//   dots: true, 
//   autoplay: true, 
//   autoplayTimeout: 3000, 
//   autoplayHoverPause: true, 
//   responsive: {
//       0: {
//           items: 1
//       },
//       475: {
//           items: 2
//       },
//       768: {
//           items: 3
//       },
//       1000: {
//           items: 5
//       }
//   }
// });


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



document.addEventListener("DOMContentLoaded", function () {
    function updateTabActivation() {
        const tabs = document.querySelectorAll("#productTabs .nav-link");
        const tabPanes = document.querySelectorAll(".tab-pane");
        const tabContentSection = document.querySelector("#productTabsContent");

        if (window.innerWidth <= 992) {
            // Mobile: Hide tab content initially
            tabContentSection.style.display = "none";

            // Remove active classes
            tabs.forEach(tab => tab.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("show", "active"));

            // Add event listener to show content when a tab is clicked
            tabs.forEach(tab => {
                tab.addEventListener("click", function () {
                    tabContentSection.style.display = "block"; // Show tab content
                });
            });

        } else {
            // Desktop: Ensure the first tab is active and show tab content
            tabContentSection.style.display = "block"; // Show tab content by default
            if (!document.querySelector("#productTabs .nav-link.active")) {
                tabs[0].classList.add("active");
                tabPanes[0].classList.add("show", "active");
            }
        }
    }

    updateTabActivation();
    window.addEventListener("resize", updateTabActivation);
});





// $(document).ready(function () {
//     function toggleStickyNavbar() {
//         let screenWidth = $(window).width();

//         // Remove any previous scroll event to avoid duplicates
//         $(window).off("scroll");

//         if (screenWidth > 992) {
//             $(window).on("scroll", function () {
//                 if ($(this).scrollTop() > 250) {
//                     $('.nav-bg').addClass('sticky');
//                 } else {
//                     $('.nav-bg').removeClass('sticky');
//                 }
//             });
//         } else {
//             $('.nav-bg').removeClass('sticky'); // Ensure sticky is removed on smaller screens
//         }
//     }

//     toggleStickyNavbar();
//     $(window).on("resize", function () {
//         toggleStickyNavbar();
//     });
// });


$(document).ready(function () {
    function toggleStickyNavbar() {
        let screenWidth = $(window).width();

        // Remove any previous scroll event to avoid duplicates
        $(window).off("scroll");

        if (screenWidth > 992) {
            function checkScroll() {
                if ($(window).scrollTop() > 250) {
                    $('.nav-bg').addClass('sticky');
                } else {
                    $('.nav-bg').removeClass('sticky');
                }
            }

            // Check scroll on page load
            checkScroll();

            // Check scroll on scroll event
            $(window).on("scroll", checkScroll);
        } else {
            $('.nav-bg').removeClass('sticky'); // Ensure sticky is removed on smaller screens
        }
    }

    toggleStickyNavbar();
    $(window).on("resize", toggleStickyNavbar);
});



AOS.init();

AOS.init({ disable: 'mobile' });




const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
        return;
    }
    if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
    }
});
goBack.addEventListener("click", () => {
    hideSubMenu();
})
menuTrigger.addEventListener("click", () => {
    toggleMenu();
})
closeMenu.addEventListener("click", () => {
    toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
})
function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
    if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
            toggleMenu();
        }

    }
}













