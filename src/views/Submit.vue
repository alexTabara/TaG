<template>
    <div class="submit">
        <div class="img-submit col-9 mx-auto  text-center py-5">
            <h1 class="blue-txt">Submit a Show</h1>
            <div class="col my-4 col-lg-10 col-xl-6 mx-auto">
                <p>Submit your feature, show or short today. Get paid based on views. That means real money deposited into your bank account each month.</p>
            </div>
            <div class="btn btn__blue">Apply now</div>
        </div>
    </div>
</template>


<style lang="scss">


    // SUBMIT //

    @media only screen and (min-width: 600px) {
        .img-submit {
            height: 500px;
            h1 {
                font-size: 60px;
                font-weight: bold;
            }
            .btn {
                font-size: 25px;
                width: 260px;
                height: 60px;
            }
        }
    }
    @media only screen and (max-width: 1200px) {
        .img-submit {
            height: 300px;

        }
    }

    .submit {
        background: #f3f3f3;
        .img-submit {
            background-image: url(https://ficto.tv/wp-content/uploads/2019/12/submit_show_bg.svg);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }


</style>