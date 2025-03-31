function opennav(){
    document.getElementById("mysidenav").style.width= "250px" ;
}

function closenav(){
    document.getElementById("mysidenav").style.width="0";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.getElementById('plates-wrapper');
  const items = document.querySelectorAll('.plate-item');
  const prevBtn = document.getElementById('plate-prev');
  const nextBtn = document.getElementById('plate-next');
  let currentIndex = 0;
  let itemWidth = items[0].offsetWidth;
  const gap = 20; // Motsvarar gap-värdet i CSS
  
  function updateCarousel() {
      if (window.innerWidth <= 500) {
          // Mobilvisning - karusell
          const offset = currentIndex * (itemWidth + gap);
          wrapper.style.transform = `translateX(-${offset}px)`;
          
          // Visa/dölj pilar baserat på position
          prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
          nextBtn.style.display = currentIndex >= items.length - 1 ? 'none' : 'block';
      } else {
          // Desktopvisning - visa alla sida vid sida
          wrapper.style.transform = 'translateX(0)';
      }
  }
  
  function handleResize() {
      itemWidth = items[0].offsetWidth;
      updateCarousel();
  }
  
  prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });
  
  nextBtn.addEventListener('click', function() {
      if (currentIndex < items.length - 1) {
          currentIndex++;
          updateCarousel();
      }
  });
  
  // Initialisering
  updateCarousel();
  
  // Hantera fönsterstorleksändringar
  window.addEventListener('resize', function() {
      if (window.innerWidth > 500) {
          currentIndex = 0;
      }
      handleResize();
  });
});