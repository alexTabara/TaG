<template>
  <div class="home">
    <div class="row top-img text-center d-block p-0 m-0">
      <div class="col-sm pt-3 pt-md-5 text-light">
        <span class="tag">TaG</span>
      </div>
      <h1 class="white-txt">The Next Evolution of</h1>
      <h1 class="highlight d-none d-lg-inline-block  orange-txt">Video Streaming</h1>
      <h1 class="highlight d-inline-block d-lg-none orange-txt">Streaming Shows</h1>
      <div class="col-sm white-txt my-2">Watch interactive shows and events for free, right from your phone</div>
      <router-link to="/beta"><button class="btn  btn__orange mb-2 mb-md-5" type="submit">Join the Beta</button></router-link>
      <div class="home-top-content padding ">
        <h4 class="d-none d-lg-block text-left pl-5">FEATURED ON <span class="tag">TaG</span></h4>
        <div class="row d-none d-lg-flex">
          <div class="col-sm " v-for="movie in featured" :key="movie.id">
            <img class="photo " :src="movie.img">
            <p >{{movie.name}}</p>
          </div>
        </div>
      </div>
      <div class="home-overlay"></div>
    </div>
    <div class="row  text-center d-block p-0 m-0">
      <div class="col-sm padding pb-5">
        <h1 class="blue-txt pt-3">A new type of</h1>
        <h1 class="orange-txt d-inline">streaming service.</h1>
      </div>
      <div class="cards-top-section padding border-bottom d-lg-flex">
        <div class="card mx-auto" style="width: 18rem;">
          <div class="card-img-top"><img src="../assets/card-img1.png" alt="Card image cap"></div>
          <div class="card-body">
            <h5 class="card-title">Storytellong Evolved</h5>
            <p class="card-text">Shows designed for mobile</p>
          </div>
        </div>
        <div class="card mx-auto py-3 py-md-0" style="width: 18rem;">
          <div class="card-img-top"><img src="../assets/card-img2.png" alt="Card image cap"></div>
          <div class="card-body">
            <h5 class="card-title">Empowering Creators</h5>
            <p class="card-text">Transparent metric & revenue share</p>
          </div>
        </div>
        <div class="card mx-auto" style="width: 18rem;">
          <div class="card-img-top"><img src="../assets/card-img3.png" alt="Card image cap"></div>
          <div class="card-body">
            <h5 class="card-title">Free Streaming</h5>
            <p class="card-text">Premium entertainment for free.</p>
          </div>
        </div>
      </div>
      <div class="streaming border-bottom padding d-lg-flex py-5">
        <div class="col-sm text-lg-left">
          <img src="../assets/service-mobile.png" class="img-fluid" alt="">
        </div>
        <div class="col-sm text-left">
          <h1 class="blue-txt">Streaming</h1>
          <h1 class="orange-txt d-inline">reinvented for mobile</h1>
          <p class="my-3">What’s the difference between traditional streaming like Netflix and mobile streaming with <span class="tag">TaG</span>? <span class="tag">TaG</span> shows are produced for mobile phones, and interactive storytelling is a major part of the experience, putting you directly into the action.</p>
          <div class="lear-more d-flex text-left">
            <i class="fas fa-play-circle my-auto"></i>
            <a href="" class="ml-2">Lear More</a>
          </div>
        </div>
      </div>
      <div class="magic d-none">
        <div><img src="../assets/img-movies/free.png" alt=""></div>
        <div><img src="../assets/img-movies/free.png" alt=""></div>
        <div><img src="../assets/img-movies/free.png" alt=""></div>
      </div>
      <div class="streaming streaming-bottom padding d-lg-flex">
        <div class="col-sm text-left py-5">
          <h1 class="blue-txt">We stand up for <span class="orange-txt">reinvented for mobile</span></h1>
          <p>What’s the difference between traditional streaming like Netflix and mobile streaming with <span class="tag">TaG</span>? <span class="tag">TaG</span> shows are produced for mobile phones, and interactive storytelling is a major part of the experience, putting you directly into the action.</p>
          <div class="lear-more d-flex text-left">
            <i class="fas fa-play-circle my-auto"></i>
            <a href="" class="ml-2">Behind the scenes</a>
          </div>
        </div>
        <div class="col-sm py-md-5">
          <img src="../assets/service-desktop.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      featured: [
        {
          name : "East Of La Brea",
          description : "East of La Brea tracks the untold stories of LA through the lives of two very different Muslim women from working class backgrounds: Aisha, a Black Muslim, and her Bangladeshi-American roommate, Farha.",
          creator: "Sameer Gardezi",
          cast: " GeffriMaya, Kausar Mohammed, Rufino Romero | See full cast & crew ",
          year: 2004,
          img: require("../assets/img-movies/Overtime.png"),
        },
        {
          name : "Represent",
          description : "Follow the Collington Square Middle School students as they get ready for the Maryland State Assessment Academic Challenge while dealing with some personal challenges of their own.",
          creator: " Lance Elliott (co-director)",
          cast: " GeffriMaya, Kausar Mohammed, Rufino Romero | See full cast & crew ",
          year: 2009,
          img: require("../assets/img-movies/Last-Seen.png"),
        },
        {
          name : "Adventure Capital",
          description : "Follow the Collington Square Middle School students as they get ready for the Maryland State Assessment Academic Challenge while dealing with some personal challenges of their own.",
          creator: " Britt Chandler",
          cast: " Jake D Williamson Britt Chandler Johnson Katie Wieland",
          year: 2018,
          img: require("../assets/img-movies/Freelance.png"),
        },
        {
          name : "Real Artist",
          description : "In the near future, a young animator is offered what should be her dream job, but, when she discovers the truth of the modern 'creative' process, she must make a hard choice about her passion for film.",
          creator: " Cameo Wood",
          cast: "Tamlyn Tomita, Tiffany Hines, Connie Jo Sechrist",
          year: 2017,
          img: require("../assets/img-movies/real-artist.png"),
        },
      ],
    }
  }
};
</script>
<style lang="scss">


  // HOME //

  @media only screen and (min-width: 1200px) {
    .home {
      h1 {
        font-size: 80px;
        font-weight: normal;
      }
      .top-img {
        position: relative;
        .highlight:before {
          border-bottom: 30px solid;
          bottom: 10px;
        }
        .btn {
          font-size: 32px;
          font-weight: bold;
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .home {
      h1 {
        font-size: 45px;
      }
    .top-img {
      .highlight:before {
        border-bottom: 15px solid;
        bottom: 8px;
      }
      .btn {
        font-size: 32px;
        font-weight: bold;
      }
    }
    }
  }


    .home {
      .home-top-content {
        height: 470px;
        color: white;
        .row {
          height: 400px;
          img {
            width: 160px;
            height: 300px;
          }
        }

      }
      .highlight {
        position: relative;
      }
      .highlight:before {
        content: '';
        position: absolute;
        left: 0;
        width: 0%;
        transition: 2500ms ease-in;
        background: #ffbbfa;
        opacity: 0.8;
      }
      .top-img:hover .highlight:before {
        width: 100%;

      }
   .top-img {
     background: url("../assets/img-top.jpg");
     background-size: cover;
     opacity: 0.8;
     img {
       height: 100px;
       font-size: 35px;
     }
     span {
       font-size: 35px;
     }
   }
    .row {
      .border--bottom {
        border-bottom: 1px solid grey;
      }
      .cards-top-section {
        .card {
          border: 0px;
          .card-img-top {
            border: 10px solid #E7EEFF;
            border-bottom-right-radius: 150px;
            border-top-right-radius: 150px;
            border-bottom-left-radius: 150px;
            img {
              width: 253px;
            }
          }
        }
      }
      .streaming {
        .lear-more {
          color: #ff4500;
          a {
            color: #ff4500;
          }
        }
      }
      .streaming-bottom {
        padding-bottom: 350px;
      }
    }
  }
</style>