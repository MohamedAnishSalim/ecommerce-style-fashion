import React from "react";

export function Home() {

    return(
        <>
       {/* nav-bar */}
 <nav class="navbar navbar-expand-lg bg-light fixed-top" >
 <div class="container-fluid m-3 ">
 <a class="navbar-brand" href="#"></a>
 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bstarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle
navigation">
 <span class="navbar-toggler-icon"></span>
 </button>
 <div class=" ms-5 nav-home collapse navbar-collapse" id="navbarNav">
 <ul class="navbar-nav">
 <li class="nav-item">
 <a class="nav-link active" aria-current="page" href="#">HOME</a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="#">ABOUT US</a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="#">SERVICES</a>
 </li>
 <div className='ms-5 '>
 <h2>#<span className='nav-light '>LOOK UP</span> 03</h2>
 </div>
 <div>
 <li class="nav-item nav-head">
 <a class="nav-link" href="#">CONTACT US</a>
 </li>
 </div>
 </ul>
 </div>
 <button className='nav-button'>BOOK AN APPOINMENT</button>
 </div>
</nav>

<div className='container-fluid '>
<div className='row'>
<div className='bg-container d-flex flex-column justify-content-end '>
<div className='col-lg-7 col-md-6 '>
<h1 className='title-headig heading-style'># LOOK <span className='heading-light'> UP-03</span></h1>
<p className='title-para heading-style'>Customize Perfect Hairstyle Bloom Your Beauty</p>
<div className=' adust-button text-center '>
<a href='/problem'> <button className='button:hover home-button button-design' >MEN</button></a>
<a href='/tension'> <button className='button:hover style-button'>WOMEN</button></a>
</div>
</div>
</div>
</div>
</div>

        </>
    );
}