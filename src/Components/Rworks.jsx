import React, { useEffect } from 'react';
import $ from 'jquery';

const Rworks = () => {

    useEffect(() => {
        $(function () {
            var selectedClass = "";
            $(".filter").click(function () {
                selectedClass = $(this).attr("data-rel");
                $("#gallery").fadeTo(100, 0.1);
                $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
                setTimeout(function () {
                    $("." + selectedClass).fadeIn().addClass('animation');
                    $("#gallery").fadeTo(300, 1);
                }, 300);
            });
        });
    })



    return (




        <section>
            <div className="container text-center space-70">
                <h2>Recents Works</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, perspiciatis!</p>
            </div>
            <div>

                <div class="row container mx-auto">


                    <div class="col-md-12 d-flex justify-content-center mb-2">

                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="all">All</button>
                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="1">Mountains</button>
                        <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">Sea</button>

                    </div>




                    <div class="gallery" id="gallery">


                        <div class="mb-3 pics animation all 2">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="Card image cap" />
                        </div>

                        <div class="mb-3 pics animation all 1">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg" alt="Card image cap" />
                        </div>

                        <div class="mb-3 pics animation all 1">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg" alt="Card image cap" />
                        </div>

                        <div class="mb-3 pics animation all 2">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap" />
                        </div>

                        <div class="mb-3 pics animation all 2">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap" />
                        </div>



                        <div class="mb-3 pics animation all 1">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg" alt="Card image cap" />
                        </div>


                    </div>
                </div>
            </div>
            <div className="col-sm-12 space-20 text-center mb-5">
                <a href="#" className="buttonhigh theme-btn btn bg-danger text-light">See All Highlights</a>
            </div>

        </section>

    )

}



export default Rworks;