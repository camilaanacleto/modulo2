const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})

$('h1').fadeOut("2000").fadeIn("2000")
