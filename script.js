document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(projectItem => {
      const imageSection = projectItem.querySelector('.image-section');
      const descriptionSection = projectItem.querySelector('.description-section');
      const overlay = imageSection.querySelector('.overlay');
      const unextendText = descriptionSection.querySelector('span');

      // Show overlay text to extend on hover
      imageSection.addEventListener('mouseenter', () => {
          overlay.style.display = 'block';
      });

      // Hide overlay text when not hovering
      imageSection.addEventListener('mouseleave', () => {
          overlay.style.display = 'none';
      });

      // Extend the description section when clicked
      imageSection.addEventListener('click', () => {
          imageSection.style.width = '50%';
          descriptionSection.style.width = '50%';
          descriptionSection.style.display = 'flex'; // Show the description section
      });

      // Unextend the description section when clicked
      unextendText.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent triggering the image section click
          imageSection.style.width = '100%';
          descriptionSection.style.display = 'none'; // Hide the description section
      });
  });
});