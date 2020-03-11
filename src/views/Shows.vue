<template>
    <div class="shows">
        <div class="row shows-img padding mx-0">
            <div class="col index-content col-md-6 pt-5">
                <h1>ADVENTURE CAPITAL</h1>
                <p>Featured Series</p>
                <p>After being fired from his cushy Wall Street job, Hale decides to exploit a fantastical new sport called Squimig. Unfortunately he may have underestimated the game’s enthusiastic players, the Westside Warlox!</p>
                <div class="btn btn__blue">More details</div>
            </div>
            <div class="show-overlay"></div>
        </div>
        <div class="shows-content padding text-center text-md-left">
            <h4>FEATURED ON <span class="tag">TaG</span></h4>
            <div class="row d-flex ">
                <div class="col-sm" v-for="movie in featured" :key="movie.id">
                    <img class="photo" :src="movie.img">
                    <p>{{movie.name}}</p>
                </div>
            </div>
            <h4>CAPTIVATE ME</h4>
            <div class="x d-flex ">
                <div class="row d-flex ">
                    <div class="col-sm" v-for="movie in captivate" :key="movie.id">
                        <img class="photo" :src="movie.img">
                        <p>{{movie.name}}</p>
                    </div>
                </div>
            </div>
            <h4>EXCITE ME</h4>
            <div class="row d-flex ">
                <div class="col-sm" v-for="movie in excite" :key="movie.id">
                    <img class="photo" :src="movie.img">
                    <p>{{movie.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">


    // Shows //


    .shows {
        background: #1A315B;
        color: white;
        .shows-img {
            background-image: url(../assets/bg-hero.jpg);
            background-position: center center;
            background-size: cover;
            height: 650px;
            color: white;
            position: relative;
            .index-content { z-index: 99}
            .show-overlay {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: transparent;
                background-image: linear-gradient(180deg, rgba(26, 49, 91, 0.5333333333333333) 0%, #1A315B 100%);
                opacity: 1;
                transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
                z-index: 5;
            }
        }
        .shows-content {
        }
    }

</style>

<script>
    export default {
        name: 'shows',
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
                captivate: [
                    {
                        name : "Jada",
                        description : "Jada is a 2019 Indian Tamil language sports drama film. The film stars Kathir and Roshini Prakash in the lead roles, while Kishore and Yogi Babu play supporting roles",
                        creator: " Kathir as Jada",
                        cast: "Kishore as Sethu Gowtham Selvaraj as Anto",
                        year: 2019,
                        img: require("../assets/img-movies/Jada.png"),
                    },
                    {
                        name : "Nothingman",
                        description : "A homeless alcoholic living on Skid Row dons himself a Private Investigator to solve cases for others living on the street.",
                        creator: "Eli Kooris (co-director), Joshua Shaffer (co-director)",
                        cast: "Richard Burgi, Zach Crowley, Colman Domingo ",
                        year: 2018,
                        img: require("../assets/img-movies/Nothingman.png"),
                    },
                    {
                        name : "The Study",
                        description : "Because this project is categorized as in development, the data is only available on IMDbPro and is subject to change.",
                        creator: "x",
                        cast: "x",
                        year: 2015,
                        img: require("../assets/img-movies/Study.png"),
                    },
                    {
                        name : "Last Sean",
                        description : "A young woman embarks on a road trip with her boyfriend to a place he promises will be beautiful and peaceful. But a series of strange events occur on their journey, and it becomes clear",
                        creator: "Sean Durkin (as T. Sean Durkin)",
                        cast: " Brady Corbet, Alexia Rasmussen, Stefanie Estes",
                        year: 2012,
                        img: require("../assets/img-movies/Last.png"),
                    },
                ],
                excite: [
                    {
                        name : "Holly Wire",
                        description : "x",
                        creator: "x",
                        cast: "x",
                        year: 2012,
                        img: require("../assets/img-movies/holly.png"),
                    },
                    {
                        name : "Freelance",
                        description : "Freelancers is a 2012 direct-to-video crime-drama film directed by Jessy Terrero, written by L.Philippe Casseus and stars 50 Cent, Forest Whitaker, and Robert De Niro.[2] It had a limited release in very few in Los Angeles and New York on August 10, 2012 with a simultaneous VOD release and was released on DVD and Blu-ray on August 21, 2012",
                        creator: "Robert Wisdom as Terrence Burke",
                        cast: "Jeff Chase as Angie Andre Royo as Daniel Maldonado",
                        year: 2016,
                        img: require("../assets/img-movies/Freelance.png"),
                    },
                    {
                        name : "Ming's Dynasty",
                        description : "Freelancers is a 2012 direct-to-video crime-drama film directed by Jessy Terrero, written by L.Philippe Casseus and stars 50 Cent, Forest Whitaker, and Robert De Niro.[2] It had a limited release in very few in Los Angeles and New York on August 10, 2012 with a simultaneous VOD release and was released on DVD and Blu-ray on August 21, 2012",
                        creator: "Robert Wisdom as Terrence Burke",
                        cast: "Mikaela Cochrane, Julian DeZotti, Antony Hall",
                        year: 2012,
                        img: require("../assets/img-movies/ming.png"),
                    },
                    {
                        name : "Over time",
                        description : "Raph and Max only kill bad guys, and only after their boss Sam, a high-powered attorney, has cashed a nice paycheck for getting her sleazy clients off the hook. When Sam sends our heroes on",
                        creator: "Brian Cunningham, Matt Niehoff",
                        cast: " Al Snow, John Wells, Sebrina Scott ",
                        year: 2011,
                        img: require("../assets/img-movies/over-time.png"),
                    },
                ]
            }
        }
    }
</script>