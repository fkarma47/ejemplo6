// Initialize Swiper instances
const swiper1 = new Swiper('#swiper1', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  const swiper2 = new Swiper('#swiper2', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  const swiper3 = new Swiper('#swiper3', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  
  // Add event listeners to the tabs
  document.querySelectorAll('.tabInput').forEach((input) => {
    input.addEventListener('change', (e) => {
      const tabId = e.target.id;
      const tab = document.querySelector(`#${tabId}`).nextElementSibling;
      document.querySelectorAll('.tab').forEach((t) => {
        t.style.display = 'none';
      });
      tab.style.display = 'block';
    });
  });