        document.querySelectorAll('.filter button').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter button').forEach(b => b.classList.remove('active1'));
                // Add active class to clicked button
                this.classList.add('active1');
                const filter = this.getAttribute('data-filter');
                document.querySelectorAll('.myGallary .img1').forEach(item => {
                    const categories = item.querySelector('img').getAttribute('data-category').split(' ');
                    if (filter === 'all' || categories.includes(filter)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
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

