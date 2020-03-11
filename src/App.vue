<template>
  <div id="app" >
    <div id="nav" class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-lg-3">
        <router-link to="/"><a class="navbar-brand px-2" href="#"><span class="tag">TaG</span></a></router-link>
        <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto px-4">
            <router-link class="routerLink" to="/shows"><li class="nav-item active">
              <a class="nav-link" href="#">Shows </a>
            </li></router-link>
            <router-link class="routerLink" to="/advertise"><li class="nav-item active">
              <a class="nav-link" href="#">Advertise <span class="sr-only">(current)</span></a>
            </li></router-link>
            <router-link class="routerLink" to="/contact"><li class="nav-item active">
              <a class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
            </li></router-link>
            <router-link class="routerLink" to="/company"><li class="nav-item active d-lg-none">
              <a class="nav-link" href="#">Company <span class="sr-only">(current)</span>
              </a>
            </li></router-link>
            <li class="nav-item active d-lg-none">
              <a class="nav-link" href="#">Advertise<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div class="row d-flex flex-column text-center pt-4 pt-lg-0 flex-lg-row m-0 ">
            <router-link to="/submit"><button class="btn btn__white  mr-lg-3" type="submit">+ Submit a Show</button></router-link>
            <router-link to="/beta"><button class="btn btn__orange mt-2 mt-lg-0 mr-lg-3" type="submit">Join the Beta</button></router-link>
          </div>
        </div>
      </nav>
    </div>
    <router-view />

  <div class="footer padding">
    <div class="footer-content">
      <div class="col-lg-10 mx-auto mt-5 text-center">
        <p>
          TaG connects professional creators and storytelling communities around the world to create an interactive, mobile video movement. Sign up to stay in the loop on <span class="tag">TaG</span> events, product updates, and new shows. You don’t want to miss this.
        </p>
      </div>
      <div class="col-sm col-lg-8 mx-auto pt-2">
        <div class="input-group mt-3">
          <input type="text" class="form-control" placeholder="Your email address" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <button class="btn btn__blue d-none d-md-flex" type="submit">Button</button>
        </div>
        <button class="btn btn__blue d-flex mx-auto mt-3 d-md-none mt-2 text-center" type="submit">Subscribe</button>
      </div>
      <div class="col-sm col-lg-8 mx-auto mt-3 text-center">
        <a href="" ><i class="fab fa-twitter mx-2"></i> Share on Twitter</a>
        <a href="" ><i class="fab fa-facebook-f mx-2"></i>Share on Facebook</a>
      </div>
    </div>
    <div class="foot-bar d-xs-block d-lg-flex">
      <div class="col-lg-2 text-center text-md-left">
        <p class="text-light">@ 2019, <span class="tag">TaG</span></p>
      </div>
      <div class="col text-center d-block col-md-4 d-md-none col-lg my-4">
        <h5 class="d-none d-md-flex">Follow us</h5>
        <div >
          <a href=""><i class="fab fa-instagram"></i></a>
          <a href=""><i class="fab fa-facebook-f pl-4"></i></a>
          <a href=""><i class="fab fa-youtube pl-4"></i></a>
          <a href=""><i class="fab fa-twitter pl-4"></i></a>
        </div>
      </div>
      <div class="d-block col-lg-10">
        <div class="row ">
          <div class="col-6 link-hover col-md-4 col-lg">
            <h5>Company</h5>
            <router-link to="/about"><a href=""><p>About</p></a></router-link>
            <a href=""><p>Community</p></a>
            <a href=""><p>Press</p></a>
            <router-link to="/contact"><a href=""><p>Contact</p></a></router-link>
          </div>
          <div class="col-6 col-md-4 col-lg">
            <h5>Programming</h5>
            <router-link to="/shows"><a href=""><p>Shows</p></a></router-link>
            <a href=""><p>Featured</p></a>
            <a href=""><p>Captive Me</p></a>
            <a href=""><p>Excite Me</p></a>
          </div>
          <div class="col-12 col-md-4 col-lg">
            <h5>Actions</h5>
            <router-link to="/advertise"><a href=""><p>Advertise</p></a></router-link>
            <router-link to="/submit"><a href=""><p>Submit a Show</p></a></router-link>
            <a href=""><p>Get the App</p></a>
          </div>
          <div class="col-12 col-md-6 col-lg">
            <h5>Location</h5>
            <a ><p>Airfax Ave</p></a>
            <a ><p>Los Angeles</p></a>
            <a><p>424.242.255.255</p></a>
          </div>
          <div class="col footer-media d-none col-md-4 d-md-block col-lg">
            <h5>Follow us</h5>
            <div class="d-flex">
              <div class="round-media "><a href="" class="my-auto"><i class="fab fa-instagram"></i></a></div>
              <div class="round-media ml-3"><a href="" class="my-auto"><i class="fab fa-facebook-f"></i></a></div>
              <div class="round-media ml-3"><a href="" class="my-auto"><i class="fab fa-youtube"></i></a></div>
              <div class="round-media ml-3"><a href="" class="my-auto"><i class="fab fa-twitter"></i></a></div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 privacy py-3">
          <a href="" >Term of Use</a>
          <a href="" class="ml-3">Privacy Policy</a>
          <a href="" class="ml-3">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss">
  #app {
    $deepBlue : #1C57F8;
    $deepOrange : #F97873;
    $deepWhite : #FFFFFF;
    $deepGrey : #95A1BA;
    $deepBackground : #1A315B;

    .routerLink{
      text-decoration: none;
    }


    .about, .shows, .beta, .contact, .submit, .community {
      padding-bottom: 350px;
    }
    .tag {
      font-weight: bold;
      color: $deepOrange;
    }

    .btn {
      border-radius: 30px;
      padding: 5px 20px;
      color: $deepWhite;
      transition: 500ms ease-in-out;
    }
    .btn__orange {
      background: $deepOrange;
    }
    .btn__orange:hover {
      background: $deepBlue;
    }
    .btn__blue {
      background: $deepBlue;
    }
    .btn__blue:hover {
      background: $deepOrange;
    }
    .btn__white {
      background: $deepWhite;
      color: $deepBlue;
      border: 2px solid $deepBlue;
    }
    .btn__white:hover {
      background: $deepBlue;
      color: $deepWhite;
    }

    .white-txt {color: $deepWhite;}
    .blue-txt {color: $deepBlue;}
    .orange-txt {color: $deepOrange;}

    .highlight-animate {
      position: relative;
    }
    .highlight-animate:before {
      content: '';
      position: absolute;
      border-bottom: 30px solid;
      left: 0;
      bottom: 10px;
      width: 0%;
      transition: 2500ms ease-in;
      background: $deepOrange;
      color: $deepOrange;
      opacity: 0.5;
    ;
    }

    //GENERAL CLASS --  Padding //

    @media only screen and (min-width: 1200px) {
      .padding {
        padding-left: 16.75%;
        padding-right: 16.75%;
      }
    }
    @media only screen and (max-width: 1200px) {
      .padding {
        padding-left: 6%;
        padding-right: 6%;}
    }

    // NAVBAR //

    @media only screen and (min-width: 1200px) {
      .navbar {
        padding: 0 16.75%;
      }
    }
    @media only screen and (min-width: 1200px) {
      .navbar {
        padding: 0 16.75%;
      }
    }
    @media only screen and (min-width: 992px) {
      .navbar {
        .navbar-nav {
          .nav-item:hover:before {
            border-bottom: 2px solid $deepOrange;
          }
          .nav-item:hover .nav-link {
            color: $deepOrange;
          }
          .nav-item:before {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
          }
          .nav-item {
            position:relative;
            .nav-link {
              color: $deepBlue;
              font-weight: bold;

            }
          }
        }
      }
    }
    @media only screen and (max-width: 992px) {
      .navbar {
        padding: 0 0;
        .navbar-collapse {
          background: #192F5B;
        }
        .navbar-nav {
          .nav-item:hover a {
            color: white;
          }
          .nav-item {
            border-bottom: 1px solid $deepBlue;
            .nav-link {
              color: $deepOrange;
              a {
                font-size: 12px;
                color: $deepOrange;
              }
            }
          }
        }
        .btn {
          width: 80%;
          margin: 5px auto;
        }
      }
    }
    p {
      font-size: 18px;
      line-height: 35px;
    }

.navbar {
  .navbar-nav {
    .nav-item:before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
    .nav-item:hover .nav-link {
      border-bottom: 0;
      text-decoration: none;
      list-style: none;
    }
    .nav-item {
      position:relative;
      .nav-link {
        font-weight: bold;
      }
    }
  }
}



    // FOOTER //

    @media only screen and (min-width: 1200px) {
      .footer {
        .footer-content {
          left: 16.75%;
          right: 16.75%;
        }
      }
    }
    @media only screen and (max-width: 1199px) {
      .footer {
        .footer-content {
          left: 4%;
          right: 4%;
          .input-group {
          }
          a {
            font-size: 13px;
          }
        }
      }
    }
    @media only screen and (min-width: 767px) {
      .footer {
        p {
          font-size: 18px;
          line-height: 40px;

        }
      }
    }
    @media only screen and (max-width: 767px) {
      .footer {
        p {
          font-size: 15px;
          line-height: 25px;
        }
          .input-group {
            padding-right: 20px;
          }
      }
    }

.footer {
  background: $deepBackground;
  position: relative;
  .footer-content {
    p {
      color: #303030;
      font-weight: 300;
    }
    .input-group {
      border: 1px solid $deepGrey;
      border-radius: 20px;
      padding-left: 20px;
      background: white;
      .form-control {
        border: 0px;
      }
    }
  }
  .foot-bar {
    padding-top: 150px;
    h5 {color: $deepGrey;}

    a {
      text-decoration: none;
      color: $deepWhite;
      p {
        font-weight: normal;
      }

    }
    .row {
      a {
        font-weight: bold;
      }
    }
    .privacy {
      font-size: 12px;
    }
  }
  .footer-content {
    background: #efefef;
    position: absolute;
    top: -300px;
    height: 400px;


  }
    .footer-media {
      .round-media:hover {
        background: $deepWhite;
        a {
          color: black;
        }
      }
      .round-media {
        background: #1d4c8c;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        display: flex;
        justify-content: center;
        a {
          font-size: 14px;

        }
      }
    }
  }

  }

</style>
