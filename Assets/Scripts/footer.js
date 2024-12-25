class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="profile-card">
        <div class="profile-photo"><img src="Assets/Images/img.dev.webp" alt="Kawsar Ahmed"></div>
        <div class="profile-info">
            <h2>Kawsar Ahmed</h2>
            <p>Computer Science & Engineering, UIU</p>
            <div class="socialIcons">
                <a href="https://www.github.com/scriptglitch">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.youtube.com/@scriptglitch">
                    <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/scriptglitch/">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/scriptglitchofficial/">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
        </div>
    </div>
</div>

    <footer>
        <div class="footerBottom">
            <!-- <p>Copyright &copy; 2024 | All rights reserved <span class="designer"> Kawsar Ahmed</span></p> -->
            <p>Copyright &copy; 2024 | All rights reserved @ <a href="https://www.github.com/scriptglitch"
                    class="copyright-link"> Script Glitch</a></p>
        </div>
    </footer>
`;
  }
}
customElements.define("footer-x", MyFooter);
