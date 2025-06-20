

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector("main").scrollIntoView({ behavior: "smooth" });
    });
  });

  const fadeIns = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-visible");
      }
    });
  }, { threshold: 0.3 });

  fadeIns.forEach(section => {
    observer.observe(section);
  });


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }

  const fadeElements = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    appearOnScroll.observe(el);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }


  const fadeElements = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    appearOnScroll.observe(el);
  });
});

});
function myFunction(event) {
    event.preventDefault();
  
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contrasena").value;
  
    if (usuario === "oasis" && contraseña === "2025") {
      localStorage.setItem("sesionIniciada", "true");
      localStorage.setItem("usuario", usuario);
      alert("¡Sesión iniciada con éxito!");
    } else {
      alert("Contraseña o usuario incorrecto");
    }
  }