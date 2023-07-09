let downloadVideoBtn = document.querySelector(".download-video"),
  urlInput = document.querySelector(".url-input"),
  downloadthumBtn = document.querySelector(".download-thumbnail"),
  imgs = document.querySelectorAll(".img-container img"),
  output = document.querySelector(".img-cont");

downloadVideoBtn.addEventListener("click", () => {
  if (urlInput.value == "") {
    alert("Plese Enter Correct URL..!");
  } else {
    console.log(`URL: ${urlInput.value}`);
    sendURL(urlInput.value);
  }
});

let sendURL = (URL) => (location.href = `${window.location.href}?URL=${URL}`);
downloadthumBtn.addEventListener("click", () => {
  var query = urlInput.value;
  if (urlInput.value == "") {
    alert("Plese Enter Correct URL..!");
  }
  if (query.includes("v=") == true) {
    var linkRemoved = query.split("v=");
    var id = linkRemoved[1].split("&")[0];
  } else {
    var linkRemoved = query.split("/");
    var id = linkRemoved[3];
  }
  if (id != undefined || id != null) {
    for (var i = 0; i <= 3; i++) {
      imgs[i].src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
    }
    output.style.display = "flex";
    output.caption = id;
  }
  if (output.style.display == "flex") {
    document.querySelector(".container").classList.add("active");
  }
});

var preview = (v) => {
  var id = document.querySelector(".img-cont").caption,
    a = document.createElement("a");
  a.target = "_blank";
  if (v == 1) {
    a.href = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  } else if (v == 2) {
    a.href = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  } else if (v == 3) {
    a.href = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
  } else if (v == 4) {
    a.href = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }
  a.click();
};
