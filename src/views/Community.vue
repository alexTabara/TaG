<template>
    <div class="community">
        <div class="row padding">
            <div class="col col-md-6 pt-5">
                <h1>ADVENTURE CAPITAL</h1>
                <p class="py-3">Featured Series</p>
                <p class="pb-3">After being fired from his cushy Wall Street job, Hale decides to exploit a fantastical new sport called Squimig. Unfortunately he may have underestimated the game’s enthusiastic players, the Westside Warlox!</p>
                <div class="btn btn__blue">More details</div>
            </div>
            <div class="col-6 d-none d-md-flex "><img class="img-fluid" src="../assets/promo.jpg" alt=""></div>
        </div>
        <div class="row padding pt-5">
            <div class="row d-block d-lg-flex advertise-img mx-0">
                <div class="col-10 mx-auto col-lg-4">
                    <div>
                        <h5>Sponsorship & Interactive Placements</h5>
                        <p>Reach an engaged audience with unique sponsorship and interactive advertising opportunities</p>
                    </div>
                    <div>
                        <h5>Show Sponsorships</h5>
                        <ul>
                            <li>Title sponsor, exclusivity tiers</li>
                            <li>Product placement</li>
                            <li>Sponsorship bumpers</li>
                            <li>Ancillary content and B-roll video Footage</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Interactivity</h5>
                        <ul>
                            <li>Custom A/R and creative interactivity</li>
                            <li>Gamification opportunities</li>
                            <li>Ecommerce "click-to-purchase" units</li>
                        </ul>
                    </div>
                </div>
                <div class="col-10 mx-auto col-lg-4">
                    <div>
                        <h5>Activate on a Creator-First Platform</h5>
                        <p>Exclusive event partnerships and unique experential marketing campaigns.</p>
                    </div>
                    <div>
                        <h5>Sponsored Event Opportunities</h5>
                        <ul>
                            <li>Sponsorship of tent events with <span class="tag">TaG</span></li>
                            <li>Pop-up events nationwide</li>
                            <li>VIP/Celebrity Launch Parties</li>
                        </ul>
                    </div>
                </div>
                <div class="col-10 mx-auto col-lg-4">
                    <div>
                        <h5>Amplify with Artist Support</h5>
                        <p><span class="tag">TaG</span> is Built for creators and creatives.Your brand will be aligned with a platform that supports artists.</p>
                    </div>
                    <div>
                        <span>
                            Social Amplification
                        </span>
                        <ul>
                            <li>Social promotion using talent/footprint ofcast/crew</li>
                        </ul>
                    </div>
                    <div>
                        <span>Media</span>
                        <ul>
                            <li>Pre/Post Roll (:06 and:15)</li>
                            <li>VPAID and VAST support</li>
                        </ul>
                    </div>
                    <div>
                        <span>Promotion</span>
                        <ul>
                            <li>PR Releases/First-to-Market Opportunities</li>
                            <li>Carousel Placement - High impact placement within <span class="tag">TaG</span> App</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">


    // COMMUNITY //

    @media only screen and (min-width: 1000px) {
        .community {
            .row {
                .advertise-img {
                    height: 650px;
                }
            }
        }
    }
    @media only screen and (max-width: 1000px) {
        .community {
            .row {
                .advertise-img {
                    height: 1050px;
                }
            }
        }
    }

    .community {
        color: white;
        background: black;
        .row {
            .advertise-img {
                background-image: url("../assets/advertisebg2.jpg");
                background-size: cover;
                opacity: 0.8;
            }
            h5, span {
                color: #FD7873;
                text-shadow: 1px 1px black;
            }
        }

    }



</style>

<script>

</script>