document.getElementById("nav").classList.add("hidden");
document.getElementById("learn").classList.add("hidden");
document.getElementById("faq").classList.add("hidden");

document.getElementById("login-btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;

  const password = document.getElementById("password").value;

  if (name.length === 0) {
    Swal.fire({
      title: "Name not Given!",
      text: "Please Tell Us Your Name First",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (parseInt(password) !== 123456) {
    //alert("Wrong Password. Contact admin to get your Login Code");
    Swal.fire({
      title: "Wrong Password",
      text: "Contact admin to get your Login Code",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else {
    //alert("অভিনন্দন! চলুন আজ নতুন কিছু শেখা যাক");
    Swal.fire({
      title: "অভিনন্দন!",
      text: "চলুন আজ নতুন কিছু শেখা যাক",
      icon: "success",
      confirmButtonText: "OK",
    });
    document.getElementById("nav").classList.remove("hidden");
    document.getElementById("learn").classList.remove("hidden");
    document.getElementById("faq").classList.remove("hidden");
    document.getElementById("banner").classList.add("hidden");
  }
});

document.getElementById("logout-btn").addEventListener("click", function () {
  document.getElementById("nav").classList.add("hidden");
  document.getElementById("learn").classList.add("hidden");
  document.getElementById("faq").classList.add("hidden");
  document.getElementById("banner").classList.remove("hidden");
});
