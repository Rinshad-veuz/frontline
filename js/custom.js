gsap.registerPlugin(ScrollTrigger);

// about
// gsap.from(".about-sec", {
//     duration: 1,
//     x: 300,
//     opacity: 0,
//     stagger: 0.3,
//     scrollTrigger: {
//       trigger: ".about-sec",
//       start: "top 80%",
//       end: "top 20%",
//       scrub: true, 
//       markers: false,
//       toggleActions: "play none none reverse",
//     },
//   });

//   // vision mission
//   gsap.from(".vision-mission-head", {
//         duration: 1,
//         y: 100, 
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//         trigger: ".vision-mission-head",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true, 
//         markers: false,
//         toggleActions: "play none none reverse",
//         },
//     });

//     // vision mission
//     gsap.from(".miss-outer", {
//         duration: 1,
//         y: 100, 
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//         trigger: ".miss-outer",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true, 
//         markers: false,
//         toggleActions: "play none none reverse",
//         },
//     });

//     // core values
//     gsap.from(".core-value-cont", {
//         duration: 1,
//         x: 300,
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: ".core-value-cont",
//           start: "top 80%",
//           end: "top 20%",
//           scrub: true, 
//           markers: false,
//           toggleActions: "play none none reverse",
//         },
//     });

//     // product-carousel
//     gsap.from(".product-carousel", {
//         duration: 1,
//         x: -300,
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: ".product-carousel",
//           start: "top 80%",
//           end: "top 10%",
//           scrub: true, 
//           markers: false,
//           toggleActions: "play none none reverse",
//         },
//     });

//     // why Choose
//     gsap.from(".choose", {
//         duration: 1,
//         y: 100, 
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//         trigger: ".choose",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true, 
//         markers: false,
//         toggleActions: "play none none reverse",
//         },
//     });

//     // clients
//     gsap.from(".client-inner", {
//         duration: 1,
//         x: -300,
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//         trigger: ".client-inner",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true, 
//         markers: false,
//         toggleActions: "play none none reverse",
//         },
//     });

//     // about
//     gsap.from(".testim-in", {
//         duration: 1,
//         x: 300,
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//         trigger: ".testim-in",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true, 
//         markers: false,
//         toggleActions: "play none none reverse",
//         },
//     });

//     // location card
//     gsap.from(".location-card", {
//         duration: 1,
//         y: 100, 
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//         trigger: ".location-card",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true, 
//         markers: false,
//         toggleActions: "play none none reverse",
//         },
//     });

//     // clients
//     gsap.from(".subscribe-cont", {
//         duration: 1,
//         y: -100, 
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//             trigger: ".subscribe-cont",
//             start: "top 80%",
//             end: "top 20%",
//             scrub: true, 
//             markers: false, 
//             toggleActions: "play none none reverse",
//         },
//     });

//     // clients
//     gsap.from(".subscribe-form", {
//         duration: 1,
//         y: -100, 
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//             trigger: ".subscribe-form",
//             start: "top 80%",
//             end: "top 20%",
//             scrub: true, 
//             markers: false, 
//             toggleActions: "play none none reverse",
//         },
//     });

//     // about
//     gsap.from(".productlist-out .item", {
//         duration: 1,
//         x: 300,
//         opacity: 0,
//         stagger: 0.3,
//         scrollTrigger: {
//         trigger: ".productlist-out",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true, 
//         markers: false,
//         toggleActions: "play none none reverse",
//         },
//     });
    




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







