document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);
  
    var lightboxBg = document.createElement('div');
    lightboxBg.className = 'lightbox-bg';
    document.body.appendChild(lightboxBg);
  
    function showLightbox(imageSrc) {
      var img = document.createElement('img');
      img.src = imageSrc;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
      lightbox.style.display = 'block';
      lightboxBg.style.display = 'block';
    }
  
    function hideLightbox() {
      lightbox.style.display = 'none';
      lightboxBg.style.display = 'none';
    }
    var images = document.querySelectorAll('.gallery img');
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        showLightbox(image.src);
      });
    });
    lightboxBg.addEventListener('click', hideLightbox);
  });
  