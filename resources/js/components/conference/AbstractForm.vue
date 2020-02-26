<style>
    input {
        color: #373058 !important;
    }

    .ybtn {
        color: white;
        background-color: #c94328;
    }

    #submit {
        width: 100%;
    }
</style>
<template>
    <div id="form-section" class="container-fluid signup">
        <div class="form-holder">
            <div class="signin-signup-form">
                <div class="form-items">
                    <form id="signupform">
                        <div class="form-text">
                            <input type="email" name="email" placeholder="E-mail Address" required>
                        </div>
                        <div class="form-text">
                            <input type="text" name="username" placeholder="User Name" required>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="degree" placeholder="Degree" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="university" placeholder="University" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="phone" placeholder="Phone" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="clinic_phone" placeholder="Clinic Phone" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="place_of_work" placeholder="Place Of Work" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="address" placeholder="Address" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="country" placeholder="Country" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="city" placeholder="City" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="presenting_author" placeholder="Presenting Author" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="presenting_affiliation" placeholder="Presenter Affiliation"
                                       required>
                            </div>
                        </div>
                        <div class="form-text">
                            <input type="text" name="abstract_title" placeholder="Abstract Title" required>
                        </div>
                        <div class="form-text">
                            <textarea name="abstract" placeholder="Abstract" required></textarea>
                        </div>
                        <div class="form-button">
                            <button id="submit" type="submit" class="ybtn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
