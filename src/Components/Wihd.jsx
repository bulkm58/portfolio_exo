import React from 'react'


const Whid = () => {

    return (
        <section className="wihdsect space-70">
            <div className="container">
                <div className="title-wihd">
                    <h2 className="section-title">What i have done</h2>
                    <p className="pwhid">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta repellendus consequuntur voluptate expedita, sed atque unde distinctio optio asperiores molestias temporibus tempore facilis dolor nostrum sunt nulla quaerat minus?</p>
                </div>
            </div>
            <div className="row container mx-auto">
                
                <div className="col-sm-4 text-center space-20">
                    <div className="my-work-icon">
                    <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div className="pointille">
                        <span className="fa fa-circle text-danger"> </span>
                    </div>
                    <div className="space-20">
                    <h2>7 months experiences</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, earum?</p>
                    </div>

                </div>
                <div className="col-sm-4 text-center space-20">
                    <div className="my-work-icon">
                    <i class="fas fa-laptop-code"></i>
                    </div>
                    <div className="pointille">
                        <span className="fa fa-circle text-danger"> </span>
                    </div>
                    <div className="space-20">
                    <h2>70 projects completed</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, earum?</p>
                    </div>

                </div>
                <div className="col-sm-4 text-center space-20">
                    <div className="my-work-icon">
                    <i class="fas fa-trophy"></i>
                    </div>
                    <div className="pointille">
                        <span className="fa fa-circle text-danger"> </span>
                    </div>
                    <div className="space-20">
                    <h2> 1 price</h2>
                    <p>Best inovation by sales forces ,samsung ,etc ..</p>
                    </div>
                    

                    </div>
                    <div className="col-sm-12 space-20 text-center">
                    <a href="#" className="buttonhigh theme-btn btn bg-danger text-light">See All Highlights</a>             
                </div>
            </div>


        </section>
    )
}

export default Whid;