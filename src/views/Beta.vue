<template>
    <div class="beta">
       <div class="col text-center bg py-5" >
           <h1 class="blue-txt">Joint the Beta</h1>
           <p>Start streaming exclusive shows on <span class="tag">TaG</span> and share feedback to help us build the future of mobile entertainment.</p>
       </div>
        <div class="row d-block text-center d-md-flex text-center justify-content-center">
            <div class="col col-xl-3">
                <i class="fab fa-apple mb-3 mx-auto"></i>
                <h5 class="my-3">Instruction for iPhone</h5>
                <p class="my-2">1.Download Apple Test Flight:</p>
                <button class="btn btn__orange my-2" type="button" >Download Test Flight</button>
                <p class="my-2">2. Download the beta</p>
                <button type="button" class="btn btn__orange my-2" >Download <span class="tag">TaG</span> Beta</button>
                <p class="my-2">3. Click "View in TestFlight" or "Start Testing."</p>
            </div>
            <div class="div-border d-none d-md-flex justify-content-center">
                <span class="tag">TaG</span>
            </div>
            <div class="col col-xl-3 pl-5">
                <i class="fab fa-android mb-3 mx-auto"></i>
                <h5 class="my-3 text-center text-md-left">Instruction for Android</h5>
                <p class="col text-center text-md-left pl-0">Send an email to <a href="#">accounts@<span class="tag">TaG</span>.tv</a> with "Android Beta" in the subject line. Make sure you use the email account you registered with Android.
                    We will send an email response with a link to download the Beta</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss">


    // BETA //

    @media only screen and (min-width: 600px) {
    }
    @media only screen and (max-width: 1200px) {

    }

    .beta {
        .div-border {
            width: 100px;
            height: 100px;
            border: 2px solid #d8d8d8;
            border-radius: 30px;
        }
        .col {
            .fab {
                font-size: 100px;
            }
            .fa-apple {
                color: grey;
            }
            .fa-android {
                color: limegreen;
            }
        }
    }

</style>
