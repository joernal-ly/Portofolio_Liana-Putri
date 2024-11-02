fetch('components/navbar.html')
.then(response => response.text())
.then(data => {
  document.body.insertAdjacentHTML('afterbegin', data);
});

fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  });


  document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);


        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});