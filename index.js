function openMenu() {
    document.body.classList += ' menu--open'
}


function closeMenu() {
    document.body.classList.remove('menu--open')
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".temp__overlay--loading");
  const success = document.querySelector(".temp__overlay--success");
  loading.classList += " temp__overlay--visible";
  emailjs
    .sendForm(
      "service_sqmgemo",
      "template_d9refyl",
      event.target,
      "aXlVnZVZjkjMTnpmw"
    )
    .then(() => {
      loading.classList.remove("temp__overlay--visible");
      success.classList += " temp__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("temp__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at nstephens@koomson.co or call us at 813-323-1954"
      );
    });
  }