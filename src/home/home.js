const HomeCard = () => {
  const home = document.createElement('div');
  home.className = 'home';
  home.innerHTML = `<div class="container textspan">
    <div class="row align-items-center justify-content-center">
    <div class="col-xl-9 col-md-9 col-md-12">
    <div class="slider_text text-center">
    <div class="deal_text">
    <span>Big Deal</span>
    </div>
    <h3>Burger <br>
    Bachelor</h3>
    <h4>Maxican</h4>
    </div>
    </div>
    </div>
    </div>`;

  return { home };
};

export default HomeCard;
