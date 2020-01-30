import React from 'react';


const Footer = () => {



    return (
        <footer className="secfooter">
            <section className="space-70 text-center">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-sm-4">
                            <h2 class="title-1 space-bottom-15">Our Telephones</h2>
                            <p>
                                <span>+90 555 999 77 44, +33 4849 154 843</span>
                            </p>

                        </div>
                        <div className="col-sm-4 footerpar">
                            <h2 class="title-1 space-bottom-15 ">Our Address</h2>
                            <p>
                                <span className="footerpol"> Place de la minauterie 25 B ,1080 la Zone</span>
                            </p>

                        </div>
                        <div className="col-sm-4 footerpar">
                            <h2 class="title-1 space-bottom-15 ">Keep in Touch</h2>
                            <p>
                                <span > Bryan.londot@hotmail.com </span>
                            </p>
                        </div>

                        <ul className="mesUls d-flex justify-content-center row container text-center mx-auto">
                            <li><i class="fab fa-google-plus-g fa-4x p-4"></i></li>
                            <li><i class="fab fa-facebook fa-4x p-4"></i></li>
                            <li><i class="fab fa-twitter fa-4x p-4"></i></li>
                            <li><i class="fab fa-google-plus-g fa-4x p-4"></i></li>
                        </ul>
                        <p className="mx-auto text-center">copyright blablablablabla</p>
                    </div>
                </div>


            </section>
        </footer>
    )
}



export default Footer;