<!DOCTYPE html>
<html>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
 
    <style>
      body {
        font-family: "Poppins", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        background-color: #f5f5f5;
      }
 
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: -5px;
      }
 
      .header img {
        height: 120px;
        margin-right: 10px;
      }
      .header .logo {
        width: 250px;
        height: 150px;
      }
 
      .header .photo {
        height: 180px;
      }
 
      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
 
      .info {
        position: relative;
        margin-top: -10px;
        padding: 0px 15px 0px 15px;
      }
 
      .info a {
        text-decoration: none;
        color: #f87849;
      }
 
      .contact {
        margin-top: 10px;
        font-size: 14px;
      }
 
      .inc,
      .devCore {
        color: #f87849;
      }
 
      .learn p,
      .learn span {
        display: block;
        margin-block-start: 0em !important;
        margin-block-end: 0em !important;
        font-size: 40px;
        font-weight: 900;
      }
 
      .banner {
        margin-top: 12px;
        color: white;
        text-align: left;
        position: relative;
        width: auto;
        height: 250px;
      }
 
      .bannerImg {
        width: 100% !important;
        object-fit: cover;
        height: 240px;
      }
 
      .banner .learn {
        position: relative;
        bottom: 200px;
        left: 50px;
        font-family: "Open Sans", sans-serif;
        letter-spacing: 2px;
      }
 
      .social-icons {
        padding: 10px;
      }
 
      .social-icons img {
        width: 24px;
        margin-right: 5px;
      }
 
      .footer {
        font-size: 12px;
        color: gray;
        margin-top: 15px;
      }
 
      .footer a {
        text-decoration: none;
        color: #f87849;
      }
 
      .first-name {
        padding-right: 70px;
      }
 
      .first-name,
      .last-name {
        font-size: 24px;
        font-weight: bold;
        gap: 20px;
        color: #f87849;
      }
 
      .title {
        color: #01b4b1;
      }
 
      h3 {
        margin: 0;
        text-align: center;
      }
 
      .learn-more-btn {
        display: inline-block;
        padding: 3px 5px;
        border: 1px solid white;
        color: white;
        text-decoration: none;
        font-weight: bold;
        background: transparent;
        text-align: center;
        font-size: 10px;
        transition: background 0.3s, color 0.3s;
        margin-top: 5px;
        border-radius: 4px;
      }
 
      .learn-more-btn:hover {
        color: #f87849 !important;
      }
 
      .hline {
        height: 2px;
        background-color: #f87849;
        border: none;
      }
 
      .inquired h4 {
        font-size: 1.3rem;
        color: #ff6c00;
    }
 
    .inquired strong {
        font-size: 1rem;
        color: #ff6c00;
    }
 
      @media (max-width: 800px) {
        .footer .links {
          display: flex;
          flex-direction: column;
          padding: 0px 10px 0px 10px;
          line-height: 2;
        }
 
        .footer .links div {
          border-bottom: solid gray 1px;
        }
 
        .footer .links .lastdiv {
          border-bottom: none;
        }
      }
      @media only screen and (max-width: 600px) {
        .banner-text {
          font-size: 2rem !important;
        }
        .learn-more-btn {
          font-size: 1rem !important;
        }
        .footer .links {
          display: block !important;
          text-align: center !important;
        }
        table .links td {
          width: 100% !important;
          text-align: center !important;
          display: block !important;
          text-align: center !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="signature-container">
      <div class="header">
        <div class="left">
          <table>
            <!-- Logo -->
            <tr>
              <td>
                <img
                  src="https://supply-office.online/coredev-logo-transparent.png"
                  alt="CoreDev Logo"
                  class="logo"
                />
              </td>
            </tr>
            <!-- End of Logo -->
 
            <!-- Contact Information -->
            <tr>
              <td>
                <div class="info">
                    <strong class="first-name">Name: {{ $data['name'] }}</strong>
                    <br>
                    <span class="title">Title</span>
                    <br>
                    <p>
                        <strong>Phone no.:</strong> {{ $data['phone'] }} |
                        <strong>email:</strong> <a href="mailto:email@example.com">{{ $data['email']}}</a> <br>
                        {{  $data['address'] }}
                    </p>
                    <div class="inquired">
                        <h4>Product Inquiry:</h4>
                        <p><strong>Product:</strong>{{ $data['product'] }}</p>
                        <p><strong>Type:</strong>{{ $data['type'] }}</p>
                        <p><strong>Message:</strong>{{ $data['message'] }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="social-icons">
            <img src="{{ $message->embed(public_path('images\linkedin.png')) }}" alt="LinkedIn">
            <img src="{{ $message->embed(public_path('images\facebook.png')) }}" alt="Facebook">
        </div>

        <div class="banner">
            <img src="{{ $message->embed(public_path('images\banner.png')) }}" alt="banner" class="bannerImg">

        </div>

        <div class="footer">
            <div class="links">
                <div><strong> <a href="">coredev.com</a></strong></div>
                <div><strong> <a href="">software solutions</a></strong></div>
                <div><strong> <a href="">hardware products</a></strong></div>
                <div><strong> <a href="">about us</a></strong></div>
                <div class="lastdiv"><strong> <a href="">visit us</a></strong></div>
            </div>
            <hr class="hline">
            <div>
                <p>This email and any files transmitted with it are confidential and intended solely for the use of the
                    individual or entity to whom they are addressed. If you have recieved this email in error, please
                    notify us immediately and delete the message from your system.</p>
            </div>
        </div>
                  <p>
                    <strong>mobile:</strong> {{ $data['phone'] }} |
                    <strong>email:</strong>
                    <a href="mailto:email@example.com">{{ $data['email']}}</a>
                    <br />
                    {{  $data['address'] }}
                  </p>
                </div>
                <div class="inquired">
                  <h4>Product Inquiry:</h4>
                  <p><strong>Product:</strong>{{ $data['product'] }}</p>
                  <p><strong>Type:</strong>{{ $data['type'] }}</p>
                  <p><strong>Message:</strong>{{ $data['message'] }}
                  </p>
              </div>
              </td>
            </tr>
            <!-- End of Contact Information -->
          </table>
        </div>
      </div>
 
      <!-- Social Icons -->
      <div class="social-icons">
        <img
          src="{{ $message->embed(public_path('images\linkedin.png')) }}"
          id="linked"
          class="linked"
          alt="LinkedIn"
        />
 
        <img
          src="{{ $message->embed(public_path('images\facebook.png')) }}"
          id="fb"
          class="fb"
          alt="Facebook"
        />
        <img src="" alt="" />
      </div>
      <!-- End of Social Icons -->
 
      <!-- Banner -->
      <div class="banner">
        <table
          style="
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          "
          width="100%"
          height="100%"
          background="{{ $message->embed(public_path('images\banner.png')) }}"
        >
          <tr style="padding: 0; margin: 0">
 
            <!-- Banner Text -->
            <td
              style="
                color: #f87849;
 
                font-family: Poppins;
                font-weight: 600;
                margin: 0;
                padding: 0;
              "
            >
              <div
                class="banner-text"
                style="
                  margin-left: 10%;
                  font-size: 3rem;
                  text-shadow: 2px 2px 4px #000000;
                  font-family: 'Poppins', sans-serif;
                "
              >
                <span>Innovating</span> <br />
                <span style="color: white">your</span> <span>Future ...</span>
              </div>
              <a
                style="
                  margin-left: 10%;
                  font-size: 1rem;
                  padding: 0.5rem;
                  color: white;
                  font-family: 'Poppins', sans-serif;
                "
                href="#"
                class="learn-more-btn"
                >LEARN MORE</a
              >
            </td>
            <!-- End of Banner Text -->
          </tr>
        </table>
      </div>
      <!-- End of Banner -->
 
      <!-- Footer -->
      <table style="width: 100%" class="footer">
        <tr class="links">
          <td style="width: 20%; text-align: center">
            <strong> <a href="">coredev.ph</a></strong>
          </td>
          <td style="width: 20%; text-align: center">
            <strong> <a href="">software solutions</a></strong>
          </td>
          <td style="width: 20%; text-align: center">
            <strong> <a href="">hardware products</a></strong>
          </td>
          <td style="width: 20%; text-align: center">
            <strong> <a href="">about us</a></strong>
          </td>
          <td style="width: 20%; text-align: center" class="lastdiv">
            <strong> <a href="">visit us</a></strong>
          </td>
        </tr>
      </table>
      <hr class="hline" />
      <div>
        <p style="opacity: 0.5">
          This email and any files transmitted with it are confidential and
          intended solely for the use of the individual or entity to whom they
          are addressed. If you have recieved this email in error, please notify
          us immediately and delete the message from your system.
        </p>
      </div>
      <!-- End of Footer -->
    </div>
  </body>
</html>