const Testimonial = () => {
  const test = document.createElement('div');
  test.className = 'testimonial container text-center';
  const testSection = document.createElement('div');
  testSection.className = 'row';
  const header = document.createElement('h1');
  header.appendChild(document.createTextNode('Testimonial'));
  header.className = 'page-header';
  test.appendChild(header);
  test.appendChild(testSection);
  const testCarousel = document.createElement('div');
  test.appendChild(testCarousel);
  testCarousel.className = 'd-flex justify-content-center align-items-center';
  const carouselBtnLeft = document.createElement('div');
  carouselBtnLeft.className = 'carousel-btn mx-3';
  carouselBtnLeft.innerHTML = '<button><i class="fa fa-chevron-left"></i></button>';
  const carouselBtnRight = document.createElement('div');
  carouselBtnRight.className = 'carousel-btn mx-3';
  carouselBtnRight.innerHTML = '<button><i class="fa fa-chevron-right"></i></button>';
  const testimonialText = document.createElement('div');
  testimonialText.className = 'testimonial-text';

  testCarousel.appendChild(carouselBtnLeft);
  testCarousel.appendChild(testimonialText);
  testCarousel.appendChild(carouselBtnRight);
  const testmonialArray = [
    {
      id: 0,
      name: 'Okoli Chijioke',
      reviews:
        'Donec imperdiet congue orci consequat mattis. Donec rutrum porttito sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices ne sed neque.',
      img: 'https://preview.colorlib.com/theme/burger/img/testmonial/3.png',
      alt: 'man',
      star: 3,
    },

    {
      id: 1,
      name: 'Okoli Chijioke',
      reviews:
        'Donec imperdiet congue orci consequat mattis. Donec rutrum porttito sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices ne sed neque.',
      img: 'https://preview.colorlib.com/theme/burger/img/testmonial/3.png',
      alt: 'man',
      star: 4,
    },

    {
      id: 2,
      name: 'Okoli Chijioke',
      reviews:
        'Donec imperdiet congue orci consequat mattis. Donec rutrum porttito sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices ne sed neque.',
      img: 'https://preview.colorlib.com/theme/burger/img/testmonial/3.png',
      alt: 'man',
      star: 4,
    },

    {
      id: 3,
      name: 'Okoli Chijioke',
      reviews:
        'Donec imperdiet congue orci consequat mattis. Donec rutrum porttito sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices ne sed neque.',
      img: 'https://preview.colorlib.com/theme/burger/img/testmonial/3.png',
      alt: 'man',
      star: 2,
    },
  ];
  const starCount = (no) => {
    let stars = '';
    for (let i = 1; i <= no; i += 1) {
      stars += ' <i class="fa fa-star"></i>';
    }
    return stars;
  };
  const testCreate = (testi) => {
    const starsReview = starCount(testi.star);
    testimonialText.id = `testi${testi.id}`;
    testimonialText.innerHTML = `<div class="single_testmonial text-center">
    <p>"${testi.reviews}"</p>
    <div class="testmonial_author">
    <div class="thumb">
    <img src="${testi.img}" alt="${testi.img}">
    </div>
     <h4>${testi.name}</h4>
    <div class="stars">
    ${starsReview}
    </div>
    </div>
    </div>`;
  };

  const testChange = (arr, no = 0) => {
    const { length } = arr;
    while (no < length) {
      (function timer(no) {
        setTimeout(() => {
          testCreate(arr[no]);
        }, 10000 * no);
      }(no++));
    }
  };

  const carouselbtn = (arr, e) => {
    let id = parseInt(testimonialText.id.replace('testi', ''), 10);

    if (e.target.className.includes('fa-chevron-right')) {
      if (id === arr.length - 1) {
        carouselBtnRight.disabled = true;
      } else {
        id += 1;
        setTimeout(() => {
          testCreate(arr[id]);
        }, 500);
      }
    } else if (e.target.className.includes('fa-chevron-left')) {
      if (id === 0) {
        carouselBtnLeft.disabled = true;
      } else {
        id -= 1;
        setTimeout(() => {
          testCreate(arr[id]);
        }, 500);
      }
    }
  };

  const carouselListner = (arr) => {
    document.getElementsByTagName('MAIN')[0].addEventListener('click', (e) => {
      carouselbtn(arr, e);
    });
  };

  const testiConst = (arr) => {
    testChange(arr);
    carouselListner(arr);
  };

  testiConst(testmonialArray);

  return test;
};

export default Testimonial;
