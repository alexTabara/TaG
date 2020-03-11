<template>
    <div class="contact">
        <div class="img-contact">
            <div class="padding">
                <h1>Let's Talk</h1>
            </div>
        </div>
        <div class="contact-form ">
            <div class="row padding">
                <div class="col-absolute col-12 col-md-6  p-5">
                    <p>First Name</p>
                    <input type="text">
                    <p>Last Name</p>
                    <input type="text">
                    <p>Email</p>
                    <input type="text">
                    <p>Message</p>
                    <input type="text">
                    <p class="btn btn__blue mt-4">Submit</p>
                </div>
                <div class="col-12 col-md-6 text-left p-5">
                    <h1>Our Office</h1>
                    <p>145 S FairFax Ave, Ste 200</p>
                    <p>Los Angeles, CA 90036</p>
                    <p>424.250.2500</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.862115332756!2d-118.36395198441703!3d34.07304872408007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b93112b5b699%3A0x882d518184e16a92!2s145%20S%20Fairfax%20Ave%20%23200%2C%20Los%20Angeles%2C%20CA%2090036%2C%20USA!5e0!3m2!1sen!2sro!4v1580727245246!5m2!1sen!2sro" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">


    // CONTACT //

    @media only screen and (min-width: 501px) {
        .img-contact {
            h1 {
                font-size: 60px;
            }
        }
        .contact-form {
            iframe {
                width: 350px;
                height: 250px;
            }
        }
    }
    @media only screen and (max-width: 500px) {
        .img-contact {
            h1 {
                font-size: 30px;
            }
        }
        .contact-form {
            iframe {
                width: 220px;
                height: 250px;
            }
        }
    }

.contact {
    background: #f3f3f3;
    .img-contact {
        background-image: url(https://ficto.tv/wp-content/uploads/2019/12/BG-IMAGE@2x.jpg);
        background-position: center center;
        background-size: cover;
        height: 350px;
        h1 {
            color: white;
            padding: 140px 0 0 30px;
            font-weight: bold;

        }
    }
    .contact-form {
        .row {
            position: relative;
            .col-absolute {
                margin-top: -80px;
                background: white;
                input {
                    width: 90%;
                    height: 50px;
                }
            }
        }
    }
}

</style>