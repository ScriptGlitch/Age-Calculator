const shareButton = document.getElementById("shareButton");
const shareModal = document.getElementById("shareModal");
const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("closeModal");
const copyButton = document.getElementById("copyButton");
const shareLink = document.getElementById("shareLink");
const currentPageUrl = window.location.href;
shareLink.value = currentPageUrl;
document
  .getElementById("facebookShare")
  .setAttribute(
    "href",
    `https://facebook.com/sharer/sharer.php?u=${currentPageUrl}`
  );
document
  .getElementById("messengerShare")
  .setAttribute(
    "href",
    `https://www.facebook.com/dialog/send?app_id=YOUR_APP_ID&link=${currentPageUrl}&redirect_uri=${currentPageUrl}`
  );
document
  .getElementById("twitterShare")
  .setAttribute("href", `https://twitter.com/share?url=${currentPageUrl}`);
document
  .getElementById("linkedinShare")
  .setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?mini=true&url=${currentPageUrl}`
  );
document
  .getElementById("redditShare")
  .setAttribute("href", `https://www.reddit.com/submit?url=${currentPageUrl}`);
document
  .getElementById("pinterestShare")
  .setAttribute(
    "href",
    `https://pinterest.com/pin/create/button/?url=${currentPageUrl}`
  );
document
  .getElementById("whatsappShare")
  .setAttribute("href", `https://wa.me/?text=${currentPageUrl}`);
document
  .getElementById("telegramShare")
  .setAttribute("href", `https://t.me/share/url?url=${currentPageUrl}`);
document
  .getElementById("tumblrShare")
  .setAttribute(
    "href",
    `https://www.tumblr.com/widgets/share/tool?url=${currentPageUrl}`
  );
document
  .getElementById("viberShare")
  .setAttribute("href", `https://www.viber.com/en/share?url=${currentPageUrl}`);
document
  .getElementById("discordShare")
  .setAttribute("href", `https://discord.com/share?url=${currentPageUrl}`);
document
  .getElementById("instagramShare")
  .setAttribute("href", `https://www.instagram.com/?url=${currentPageUrl}`);
document
  .getElementById("emailShare")
  .setAttribute(
    "href",
    `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(
      currentPageUrl
    )}`
  );
shareButton.addEventListener("click", () => {
  shareModal.style.display = "block";
  overlay.style.display = "block";
});
closeModal.addEventListener("click", () => {
  shareModal.style.display = "none";
  overlay.style.display = "none";
});
overlay.addEventListener("click", () => {
  shareModal.style.display = "none";
  overlay.style.display = "none";
});
copyButton.addEventListener("click", () => {
  shareLink.select();
  document.execCommand("copy");
  alert("Link copied to clipboard!");
});
