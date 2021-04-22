const FooterSection = () => {
  const footer = document.createElement('div');
  footer.innerHTML = `<footer class="footer">
    <div class="footer_top">
    <div class="container">
    <div class="row">
    <div class="col-xl-4 col-md-6 col-lg-4">
    <div class="footer_widget text-center ">
    <h3 class="footer_title pos_margin">
    New York
    </h3>
    <p>5th flora, 700/D kings road, <br>
    green lane New York-1782 <br>
    <a href="#">info@burger.com</a></p>
    <a class="number" href="#">+10 378 483 6782</a>
    </div>
    </div>
    <div class="col-xl-4 col-md-6 col-lg-4">
    <div class="footer_widget text-center ">
    <h3 class="footer_title pos_margin">
    California
    </h3>
    <p>5th flora, 700/D kings road, <br>
    green lane New York-1782 <br>
    <a href="#">info@burger.com</a></p>
    <a class="number" href="#">+10 378 483 6782</a>
    </div>
    </div>
    <div class="col-xl-4 col-md-12 col-lg-4">
    <div class="footer_widget">
    <h3 class="footer_title">
    Stay Connected
    </h3>
    <form action="#" class="newsletter_form">
    <input type="text" placeholder="Enter your mail">
    <button type="submit">Sign Up</button>
    </form>
    <p class="newsletter_text">Stay connect with us to get exclusive offer!</p>
    </div>
    </div>
    </div>
    <div class="row justify-content-center">
    <div class="col-lg-4">
    <div class="socail_links text-center">
    <ul>
    <li>
    <a href="#">
    <i class="fa fa-instagram"></i>
     </a>
    </li>
    <li>
    <a href="#">
    <i class="fa fa-facebook"></i>
    </a>
    </li>
    <li>
    <a href="#">
    <i class="fa fa-twitter"></i>
    </a>
    </li>
    <li>
    <a href="#">
    <i class="fa fa-github"></i>
    </a>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="copy-right_text">
    <div class="container">
    <div class="footer_border"></div>
    <div class="row">
    <div class="col-xl-12">
    <p class="copy_right text-center">
    
    Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script>document.write(new Date().getFullYear());</script>2021 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://github.com/Ceejayski" target="_blank">Ceejayski</a>
    
    </p>
    </div>
    </div>
    </div>
    </div>
    </footer>`;

  return footer;
};

export default FooterSection;
