        document.addEventListener("DOMContentLoaded", function () {
          const filterButtons = document.querySelectorAll('.filter button');
          const galleryItems = Array.from(document.querySelectorAll('.myGallary .img1'));

          filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
              // Remove active class from all buttons
              filterButtons.forEach(b => b.classList.remove('active1'));
              // Add active class to clicked button
              this.classList.add('active1');
              const filter = this.getAttribute('data-filter');

              // Filter and sort items
              const filteredItems = galleryItems.filter(item => {
                const categories = item.querySelector('img').getAttribute('data-category').split(' ');
                return filter === 'all' || categories.includes(filter);
              });

              // Hide all items first
              galleryItems.forEach(item => {
                item.style.display = 'none';
              });

              // Show filtered items in order
              filteredItems.forEach(item => {
                item.style.display = '';
                item.parentNode.appendChild(item); // Move to end to keep order
              });
            });
          });
        });



  document.addEventListener("DOMContentLoaded", function () {
  const scrollUpBtn = document.getElementById("scrollUpBtn");

  scrollUpBtn.style.display = "none";


  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollUpBtn.style.display = "flex";
    } else {
      scrollUpBtn.style.display = "none";
    }
  });

  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
 });
});
});

const menuBtn = document.getElementById('menuBtn');
const iconDiv = menuBtn.querySelector('.lines');
const scrollBar = document.getElementById('scrollbar');

   menuBtn.addEventListener('click', () => {
    iconDiv.classList.toggle('active1');
    scrollBar.classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active1')); // remove from all
      link.classList.add('active1'); // add to clicked
    });
  });