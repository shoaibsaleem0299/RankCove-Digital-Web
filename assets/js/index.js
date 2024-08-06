// document.addEventListener('mousemove', (e) => {
//   const trailContainer = document.querySelector('.trail-container');

//   // Create a new trail item
//   const trail = document.createElement('div');
//   trail.className = 'trail-item';
//   trail.style.left = `${e.pageX}px`;
//   trail.style.top = `${e.pageY}px`;
//   trail.style.background = `radial-gradient(circle, ${getRandomBrightColor()} 0%, transparent 80%)`;

//   // Append the new trail item to the container
//   trailContainer.appendChild(trail);

//   // Move the trail item with cursor and create a smooth trailing effect
//   setTimeout(() => {
//     trail.style.transform = `translate(-50%, -50%)`;
//     trail.style.opacity = '0.1'; // Fade out the trail
//   }, 0); // Immediate start of the fade out and movement

//   // Remove the element from the DOM to prevent memory leaks
//   setTimeout(() => {
//     trail.remove();
//   }, 800); // Should be longer than the fade-out transition
// });

// function getRandomBrightColor() {
//   const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#ee82ee'];
//   return colors[Math.floor(Math.random() * colors.length)];
// }


document.addEventListener('DOMContentLoaded', function() {
    const animateNumber = (element, duration) => {
        const start = 0; // Start from 0 for animation
        const end = parseInt(element.getAttribute('data-number').replace(/,/g, ''), 10);
        const stepTime = Math.abs(Math.floor(duration / end));
        let current = start;

        const step = () => {
            current += 1;
            element.textContent = current.toLocaleString();
            if (current < end) {
                setTimeout(step, stepTime);
            } else {
                element.textContent = end.toLocaleString(); // Ensure the final value is correct
            }
        };

        step();
    };

    // Animate each number
    document.querySelectorAll('.funfact-number').forEach(el => {
        animateNumber(el, 2000); // Duration in milliseconds
    });
});




  $(document).on('ready', function () {
    // initialization of aos
    AOS.init({
      duration: 650,
      once: true
    });
  });


document.getElementById('services-menu-button').addEventListener('click', function () {
  const menu = document.getElementById('services-menu');
  menu.classList.toggle('hidden');
});

// Close the dropdown if clicked outside
document.addEventListener('click', function (event) {
  const menuButton = document.getElementById('services-menu-button');
  const menu = document.getElementById('services-menu');
  if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.add('hidden');
  }
});



// Remove the script.js file or comment out the following code if you're not using it.

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}


