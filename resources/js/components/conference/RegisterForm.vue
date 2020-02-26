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
                            <input type="text" name="name" placeholder="Name" required>
                        </div>
                        <div class="form-text">
                            <input type="email" name="email" placeholder="E-mail Address" required>
                        </div>
                        <div class="form-text">
                            <input type="text" name="description" placeholder="Description" required>
                        </div>
                        <div class="form-text">
                            <input type="text" name="phone" placeholder="Phone" required>
                        </div>
                        <div class="form-text">
                            <input type="text" name="place_of_work" placeholder="Place Of Work" required>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="degree" placeholder="Degree" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="department" placeholder="Department" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="registeration_type" placeholder="Registration Type" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="work_category" placeholder="Work Category" required>
                            </div>
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
