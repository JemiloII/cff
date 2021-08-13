<template>
  <div>
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>

    <section class="contact-area ptb-60">
      <div class="container">
        <div class="section-title page-title mb-4 border-0">
          <h2><span class="dot"></span> Contact Us</h2>
        </div>

        <div class="row">
          <div class="col-lg-7 col-md-12">
            <div class="contact-form">
              <h3>Drop Us A Line</h3>
              <p>We’re happy to answer any questions you have. Just send us a message in
                the form below with any questions you may have.</p>

              <form id="contactForm" action="mailto:info@conventionfoamfighting.com">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Name <span>(required)*</span></label>
                      <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Email <span>(required)*</span></label>
                      <input type="email" name="email" id="email" class="form-control"
                             placeholder="Enter your Email Address" required>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Phone Number <span>(optional)*</span></label>
                      <input type="text" name="phone_number" id="phone_number" class="form-control"
                             placeholder="Enter your Phone Number">
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Your Message <span>(required)*</span></label>
                      <textarea name="message" id="message" cols="30" rows="8" class="form-control"
                                placeholder="Enter your Message" required></textarea>
                    </div>
                  </div>

                  <input style="visibility: hidden" type="text" name="subject" class="form-control" value="CFF Website Inquiry">

                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-lg-5 col-md-12">
            <div class="contact-info">
              <h3>Here to Help</h3>
              <p>Have a question?</p>

              <ul class="contact-list">
                <li>
                  <i class="far fa-envelope"></i>
                  Email Us:
                  <a href="mailto:info@conventionfoamfighting.com">
                    info@conventionfoamfighting.com
                  </a>
                </li>
              </ul>

              <ul class="social">
                <li>
                  <h3>Follow Us:</h3>
                </li>
                <li>
                  <a href="https://www.facebook.com/Convention.foam.fighting">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/conventionfoamfighting">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
