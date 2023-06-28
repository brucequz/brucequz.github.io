window.addEventListener('load', function() {
    var canvas = document.getElementById('reflection-canvas');
    var context = canvas.getContext('2d');
  
    var image = new Image();
    image.src = 'images/blog/AI.png';
  
    image.addEventListener('load', function() {
      canvas.width = image.width;
      canvas.height = image.height;
  
      // Draw the original image
      context.drawImage(image, 0, 0);
  
      // Reflect the image vertically
      context.save();
      context.scale(1, -1);
      context.drawImage(image, 0, -image.height * 2); // Adjust the height multiplier as needed
      context.restore();
  
      // Apply a linear opacity gradient to the reflection
      var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      context.globalCompositeOperation = 'destination-out';
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
    });
});
  