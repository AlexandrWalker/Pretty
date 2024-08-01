(() => {
  document.addEventListener('DOMContentLoaded', () => {

    (function () {
      var burgerBtn = document.getElementById('burger');

      burgerBtn.addEventListener('click', function (e) {
        burgerBtn.parentNode.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        e.stopPropagation();
      });
    })();

  });
})();