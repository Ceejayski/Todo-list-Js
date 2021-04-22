import MenuCard from '../menu/menu';
import HomeCard from '../home/home';
import Testimonial from '../testimonial/testimonial';

const Nav = () => {
  const container = document.querySelector('.contain');
  const body = document.querySelector('.body');
  const links = [HomeCard().home, MenuCard().menu, Testimonial()];
  const navTag = document.createElement('nav');
  const navSection = document.createElement('div');
  navTag.appendChild(navSection);
  navSection.classList.add('navbar', 'navbar-expand-lg', 'text-white');
  const navBrand = document.createElement('a');
  navBrand.className = 'navbar-brand mx-2';
  navBrand.textContent = 'Sirchi';
  navBrand.setAttribute('href', '#');
  navBrand.id = 'home';
  navSection.appendChild(navBrand);
  const list = document.createElement('ul');
  list.className = 'navbar-nav';
  const home = document.createElement('li');
  home.innerHTML = '<a href=\'#\' id="links0" class="nav-link">HOME</a>';
  home.className = 'nav-item';
  const menu = document.createElement('li');
  menu.innerHTML = '<a href=\'#\' id="links1" class="nav-link">MENU</a>';
  menu.className = 'nav-item';
  const testi = document.createElement('li');
  testi.innerHTML = '<a href=\'#\' id="links2" class="nav-link">TESTIMONIAL</a>';
  testi.className = 'nav-item';
  const hyper = [home, menu, testi];
  hyper.forEach((li) => {
    list.appendChild(li);
  });
  navSection.appendChild(list);

  const linkOpener = (index = 0) => {
    if (container.childNodes.length) {
      container.removeChild(container.childNodes[0]);
    }
    container.appendChild(links[index]);
  };

  const activeLink = () => {
    const homeLink = document.getElementById('links0');
    const menuLink = document.getElementById('links1');
    const testiLink = document.getElementById('links2');
    if (
      container.firstChild.classList.contains('home')
    ) {
      homeLink.className += ' active';
      testiLink.classList.remove('active');
      menuLink.classList.remove('active');
    } else if (
      container.firstChild.classList.contains('testimonial')
    ) {
      testiLink.className += ' active';
      homeLink.classList.remove('active');
      menuLink.classList.remove('active');
    } else if (
      container.childNodes[0].firstChild.innerText
      === MenuCard().menu.firstChild.innerText
    ) {
      menuLink.className += ' active';
      homeLink.classList.remove('active');
      testiLink.classList.remove('active');
    }
  };

  const linkClick = () => {
    linkOpener();
    activeLink();
    body.addEventListener('click', (e) => {
      if (e.target.id.includes('links')) {
        const id = parseInt(e.target.id.replace('links', ''), 10);
        linkOpener(id);
        activeLink();
      } else if (e.target.id === 'home') {
        linkOpener();
        activeLink();
      }
      e.preventDefault();
    });
  };

  return {
    navTag,
    linkClick,
  };
};

export default Nav;
