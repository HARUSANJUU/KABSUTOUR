document.addEventListener('DOMContentLoaded', function() {
  // Create the lightbox div and append it to the body
  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  document.body.appendChild(lightbox);

  // Create the lightbox background and append it to the body
  var lightboxBg = document.createElement('div');
  lightboxBg.className = 'lightbox-bg';
  document.body.appendChild(lightboxBg);

  // Function to show the lightbox with the specified image
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

  // Function to hide the lightbox
  function hideLightbox() {
    lightbox.style.display = 'none';
    lightboxBg.style.display = 'none';
  }

  // Add click event to images to open the lightbox
  var images = document.querySelectorAll('.gallery img');
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      showLightbox(image.src);
    });
  });

  // Hide the lightbox when the background is clicked
  lightboxBg.addEventListener('click', hideLightbox);
});