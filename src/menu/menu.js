const MenuCard = () => {
  const menu = document.createElement('div');
  menu.className = 'container text-center';
  const menuSection = document.createElement('div');
  menuSection.className = 'row';
  const header = document.createElement('h1');
  header.appendChild(document.createTextNode('Menu'));
  header.className = 'page-header';
  menu.appendChild(header);
  menu.appendChild(menuSection);

  const foodCreate = (src, alt, title, price) => {
    const foodGrid = document.createElement('div');
    foodGrid.classList.add('col-4', 'mb-3');
    const food = document.createElement('div');
    food.className = 'card';
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    const body = document.createElement('div');
    body.className = 'card-body';

    const text = document.createElement('div');
    text.className = 'card-title';

    const foodName = document.createElement('p');
    foodName.textContent = title;

    const foodPrice = document.createElement('p');
    foodPrice.innerHTML = `&#36; ${price}`;

    text.appendChild(foodName);
    text.appendChild(foodPrice);
    body.appendChild(text);
    food.appendChild(img);
    food.appendChild(body);
    foodGrid.appendChild(food);
    return foodGrid;
  };

  const getMenu = () => new Promise((resolve, reject) => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });

  getMenu().then((data) => {
    const foodArr = data.menu;
    foodArr.forEach((food) => {
      menuSection.appendChild(
        foodCreate(food.src, food.alt, food.title, food.price),
      );
    });
  });

  return { menu };
};

export default MenuCard;
