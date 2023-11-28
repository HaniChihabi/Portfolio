window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const menuIcons = document.querySelectorAll('.icon');
  
    let current = '';
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    menuIcons.forEach((icon) => {
      icon.classList.remove('active-color');
      if (icon.href.includes(current)) {
        const color = document.querySelector(`#${current}`).style.backgroundColor;
        icon.style.color = color;
      }
    });
  });
  