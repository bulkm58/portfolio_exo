import React, {useEffect} from 'react';
import $ from 'jquery';


const Skills = () => {

    useEffect ((each_bar_width) =>{
        $(function () { 
            $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
          });  
          
          
            $(".progress-bar").each(function(){
              each_bar_width = $(this).attr('aria-valuenow');
              $(this).width(each_bar_width + '%');
            });
                 
           
    })





    return (
        <div className="bgskills ">
          <div className="row">
            <div className="text-light offset-lg-8 col-lg-4 col-md-12 text-center space-70 my-auto">
                <h2 className="">About me & Expertise</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus at magnam error maxime minima vel sunt modi, voluptate necessitatibus adipisci? Aperiam qui error repellat id eius, aut impedit corporis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, deserunt fuga? Veniam eligendi optio laudantium provident, odit deleniti quo, ipsa earum rem fugiat repudiandae ut adipisci quidem architecto officia inventore.
        </p>
            </div>
            </div>

            <div class="row">
  <div class="single-chart col-lg-3 col-xs-12">
    <svg viewBox="0 0 36 36" class='circular-chart orange'>
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="30, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage"> Bash 30%</text>
    </svg>
  </div>

  <div class="single-chart col-lg-3 col-xs-12">
    <svg viewBox="0 0 36 36" className="circular-chart purple">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="65, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">HTML 30%</text>
    </svg>
  </div>

  
  <div class="single-chart col-lg-3 col-xs-12">
    <svg viewBox="0 0 36 36" class="circular-chart red">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">React.js 60%</text>
    </svg>
  </div>



  <div class="single-chart col-lg-3 col-xs-12">
    <svg viewBox="0 0 36 36" class="circular-chart gold">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">Laravel 60%</text>
    </svg>
  </div>

  <div class="single-chart col-lg-3 col-xs-12">
    <svg viewBox="0 0 36 36" class="circular-chart black">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage text-center">Javascrpit 60%</text>
    </svg>
  </div>


  <div class="single-chart col-lg-3 col-xs-12">
    <svg viewBox="0 0 36 36" class="circular-chart green">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage"> SCSS 60%</text>
    </svg>
  </div>

  <div class="single-chart col-lg-3 col-xs-12">
    <svg viewBox="0 0 36 36" class="circular-chart blue">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="90, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage"> EMMET 90%</text>
    </svg>
  </div>
</div>
                </div>
            





            )
        
        }
        
        
        
export default Skills; 