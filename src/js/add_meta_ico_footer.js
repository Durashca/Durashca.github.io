document.addEventListener('DOMContentLoaded', function() {
let meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1.0';


let footer_css = document.createElement('link');
footer_css.rel = "stylesheet";
footer_css.href = "src/css/footer.css";

let footer_js = 
`
<!-- footer -->


    <!----------- Footer ------------>
    <footer style="margin-top: 65px;">
    <div  class="row">
    <div class="col-md-4 footer-brand animated fadeInLeft">
    <h3 style="font-family: 'Montserrat', sans-serif; font-weight: bold;">WseProIT</h3>
    <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
    <p>© 2024 Kosmylev Wlad</p>
    </div>
    <div class="col-md-4 footer-nav animated fadeInUp">
    <h4>Menu —</h4>
    <div class="col-md-6">
    <ul class="pages">
    <li><a href="#">Travel</a></li>
    <li><a href="#">Nature</a></li>
    <li><a href="#">Explores</a></li>
    <li><a href="#">Science</a></li>
    <li><a href="#">Advice</a></li>
    
    </ul>
    </div>
    <!-- <div class="col-md-6">
    <ul class="list">
    <li><a href="#">About Us</a></li>
    <li><a href="#">Contacts</a></li>
    <li><a href="#">Terms & Condition</a></li>
    <li><a href="#">Privacy Policy</a></li>
    </ul>
    </div> -->
    </div>
    <div class="col-md-4 footer-social animated fadeInDown">
    <h4>Follow Us</h4>
    <ul>
    <li><a href="#">Facebook</a></li>
    <li><a href="#">Twitter</a></li>
    <li><a href="#">Instagram</a></li>
    <li><a href="#">RSS</a></li>
    </ul>
    </div>
    </div>
    </footer>

  
<!-- footer -->
`;



  document.body.insertAdjacentHTML('beforeend', footer_js);


let head = document.querySelector('head');
head.appendChild(meta);

head.appendChild(footer_css);
});
