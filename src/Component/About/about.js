import React from "react";

export function About() {

    return(
        <>


    <div id="detail-end-container">
  <div className="container-fluid" >  
      <div className="row">
          <div className="detail-container mt-3 " >
            <h5 className="detail-title-headig ">FIND YOUR FASHION & OUTFIT</h5>
              <div className="d-flex flex-row  justify-content-left">
                <div className="  col-md-6 col-sm-6 col-12">
                   <div className="details-card mt-3">
                     <img src="https://img.freepik.com/free-photo/fashion-photo-handsome-elegant-man-suit-with-beautiful-sexy-woman-colorful-dress-white_158538-11197.jpg?ga=GA1.1.345767075.1739020818&semt=ais_keywords_boost" className="details-card-image"/>
                </div>
             </div>
              
        

              </div>
             
              <div className="d-flex flex-row justify-content-center   ">
             <div className="col-12 col-md-6  ">
             <p className="detail-card-paragraph">Discover a world of fashion-forward trends, curated collections, and timeless pieces <br/>
                    that inspires.Unleash your inner fashionista and embarik on a journey of confidence, <br/>
                     elegance and impeccable style.
                  <br/></p>
             

             <div>
             <div className="email-card">
                    <div className="">
                  <p className="email-card-paragraph">Name :<input type="" placeholder="Enter your name "className="email-design" /></p>
                  <p className="email-card-paragraph">Email :<input type="" placeholder="@Email "className="email-design" /></p>
                  <p className="email-card-paragraph">Contact :<input type="number" placeholder="Phone Number "className="email-design" /></p>
                   </div>
                   </div>
                   <div className="mt-3">
                   <button className="email-card-button">Sign up</button>
                   <button className="email-card-button ms-3">login</button>
                   </div>
             </div>
           </div>
             </div>
           </div>
            </div>
           </div>
    
            
  
           </div>
    </>
    );
}

