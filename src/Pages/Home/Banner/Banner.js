import React from 'react';

const Banner = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="https://i.pinimg.com/originals/41/fb/6c/41fb6c5a7e9c82267fd7f73394b961e1.jpg" class="d-block   w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.drivespark.com/images/2020-09/2021-rolls-royce-ghost-exterior-5.jpg" class="d-block fit-content w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://s1.cdn.autoevolution.com/images/news/justin-bieber-s-floating-rolls-royce-coupe-is-a-very-strange-sighting-155479-7.jpg" class="d-block  w-100 " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Banner;