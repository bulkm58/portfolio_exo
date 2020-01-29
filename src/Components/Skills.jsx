import React, {useEffect}  from 'react' ;
import $ from 'jquery';



const Skills = () => { 



    useEffect (()=>{


        $('.progress > .loader').each(function() {
            var $this = $(this);
            var svg = '<svg viewBox="-10 -10 220 220"><circle cx="0" cy="0" fill="#eee" r="100" stroke="#4cd964" stroke-width="10" transform="translate(100, 100)"></circle></svg>';
            
            $this.append(svg, svg).find('>svg').last().find ('>circle').attr('stroke-dashoffset', -Math.round((parseInt($this.data('percent').replace('%', ''))*629)/100));
          });
          
    })
    
    



    return(
<section className="bgskills ">
    <div className="text-light offset-8 text-center space-70 mr-5">
        <h2 className="">About me & Expertise</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus at magnam error maxime minima vel sunt modi, voluptate necessitatibus adipisci? Aperiam qui error repellat id eius, aut impedit corporis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, deserunt fuga? Veniam eligendi optio laudantium provident, odit deleniti quo, ipsa earum rem fugiat repudiandae ut adipisci quidem architecto officia inventore.
        </p>
    </div>
    <div class="maProgression">
        <div class="loader" data-percent="20%"></div>
        <div class="loader" data-percent="40%"></div>
        <div class="loader" data-percent="60%"></div>
        <div class="loader" data-percent="80%"></div>
        <div class="loader" data-percent="100%"></div>
    </div>
    


 
        </section>
        

    )

}



export default Skills; 