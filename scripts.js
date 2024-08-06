const recipesData = {
    "Фруктовый салат": [
      "Фрукты",
      "Нож"
    ],
    "Овощной салат": [
      "Овощи",
      "Нож"
    ],
    "Овощной смузи": [
      "Овощи",
      "Вода",
      "Венчик"
    ],
    "Фруктовый смузи": [
      "Фрукты",
      "Вода",
      "Венчик"
    ],
    "Фруктовый лёд": [
      "Фрукты",
      "Лед",
      "Сахар",
      "Венчик"
    ],
    "Масло": [
      "Молоко",
      "Венчик"
    ],
    "Картофельное пюре": [
      "Овощи",
      "Масло",
      "Молоко",
      "Венчик",
      "Огонь"
    ],
    "Мясная котлета с пюре": [
      "Карт. пюре",
      "Мясная котлета",
      "-"
    ],
    "Мясная котлета": [
      "Мясной фарш",
      "Масло",
      "Огонь"
    ],
    "Мясной фарш": [
      "Мясо",
      "Нож"
    ],
    "Рыбная котлета с пюре": [
      "Карт. пюре",
      "Рыбная котлета",
      "-"
    ],
    "Рыбная котлета": [
      "Рыбный фарш",
      "Масло",
      "Огонь"
    ],
    "Рыбный фарш": [
      "Любая рыба*",
      "Нож"
    ],
    "Тесто": [
      "Мука",
      "Вода",
      "Яйцо",
      "Венчик"
    ],
    "Сухая рыбная котлета": [
      "Рыбный фарш",
      "Огонь"
    ],
    "Пельмени": [
      "Мясной фарш",
      "Тесто",
      "Вода",
      "Огонь"
    ],
    "Сухая мясная котлета": [
      "Мясной фарш",
      "Огонь"
    ],
    "Вареный рис": [
      "Рис",
      "Вода",
      "Огонь"
    ],
    "Рыбная котлета с рисом": [
      "Рыбная котлета",
      "Вареный рис",
      "-"
    ],
    "Котлета с рисом": [
      "Мясная котлета",
      "Вареный рис",
      "-"
    ],
    "Ролл с лососем": [
      "Лосось",
      "Вареный рис",
      "Нож"
    ],
    "Ролл с тунцом": [
      "Тунец",
      "Вареный рис",
      "Нож"
    ],
    "Овощной ролл": [
      "Овощи",
      "Вареный рис",
      "Нож"
    ],
    "Рыба с рисом": [
      "Любая рыба",
      "Вареный рис",
      "Огонь"
    ],
    "Рыба с овощами": [
      "Любая рыба",
      "Овощи",
      "Огонь"
    ],
    "Мясо с овощами": [
      "Мясо",
      "Овощи",
      "Огонь"
    ],
    "Яичница": [
      "Яйцо",
      "Огонь"
    ],
    "Яичница с беконом": [
      "Яйцо",
      "Мясо",
      "Масло",
      "Огонь"
    ],
    "Омлет": [
      "Яйцо",
      "Молоко",
      "Венчик",
      "Огонь"
    ],
    "Оладьи": [
      "Яйцо",
      "Молоко",
      "Мука",
      "Сахар",
      "Венчик",
      "Огонь"
    ],
    "Суфле": [
      "Яйцо",
      "Сахар",
      "Венчик",
      "Огонь"
    ],
    "Овощной омлет": [
      "Яйцо",
      "Молоко",
      "Овощи",
      "Венчик",
      "Огонь"
    ],
    "Хлеб": [
      "Тесто",
      "Огонь"
    ],
    "Чизкейк": [
      "Тесто",
      "Сыр",
      "Сахар",
      "Венчик",
      "Огонь"
    ],
    "Сыр": [
      "Молоко",
      "Венчик",
      "Огонь"
    ],
    "Карамельный чизкейк": [
      "Чизкейк",
      "Карамель",
      "-"
    ],
    "Карамель": [
      "Сахар",
      "Огонь"
    ],
    "Фруктовый чизкейк": [
      "Чизкейк",
      "Фрукты",
      "-"
    ],
    "Компот": [
      "Сахар",
      "Вода",
      "Фрукты",
      "Огонь"
    ],
    "Яблоко в карамели": [
      "Карамель",
      "Фрукты",
      "-"
    ],
    "Фруктовый салат с карамелью": [
      "Карамель",
      "Фруктовый салат",
      "-"
    ],
    "Мороженое": [
      "Яйцо",
      "Сахар",
      "Молоко",
      "Лёд",
      "Венчик"
    ],
    "Карамельное мороженое": [
      "Карамель",
      "Мороженое",
      "-"
    ],
    "Молочный коктейль": [
      "Мороженое",
      "Молоко",
      "Венчик"
    ],
    "Карамельн. молочный коктейль": [
      "Карамель",
      "Молочный коктейль",
      "-"
    ],
    "Овощной суп": [
      "Бульон",
      "Овощи",
      "Огонь"
    ],
    "Бульон": [
      "Мясо",
      "Вода",
      "Огонь"
    ],
    "Борщ": [
      "Бульон",
      "Овощи",
      "Мясо",
      "Огонь"
    ],
    "Жар. мясо на масле с овощами": [
      "Мясо",
      "Овощи",
      "Масло",
      "Огонь"
    ],
    "Жар. рыба на масле с овощами": [
      "Любая рыба",
      "Овощи",
      "Масло",
      "Огонь"
    ],
    "Сендвич с сыром": [
      "Сыр",
      "Хлеб",
      "Нож",
      "Огонь"
    ],
    "Салат Капрезе": [
      "Сыр",
      "Овощи",
      "Нож"
    ],
    "Пицца": [
      "Тесто",
      "Овощи",
      "Мясо",
      "Сыр",
      "Огонь"
    ],
    "Макароны": [
      "Тесто",
      "Вода",
      "Нож",
      "Огонь"
    ],
    "Макароны с сыром": [
      "Макароны",
      "Сыр",
      "Огонь"
    ],
    "Макароны с мясной котлетой": [
      "Макароны",
      "Мясная котлета",
      "-"
    ],
    "Макароны с рыбной котлетой": [
      "Макароны",
      "Рыбная котлета",
      "-"
    ],
    "Паста Болоньезе": [
      "Макароны",
      "Сыр",
      "Овощи",
      "Мясной фарш",
      "Огонь"
    ],
    "Паста Карбонара": [
      "Макароны",
      "Сыр ",
      "Мясо",
      "Яйцо",
      "Огонь"
    ],
    "Рамен": [
      "Макароны",
      "Бульон",
      "Мясо",
      "Яйцо",
      "Огонь"
    ],
    "Рагу": [
      "Овощи",
      "Вода",
      "Мясо",
      "Огонь"
    ],
    "Стейк": [
      "Мясо",
      "Огонь"
    ],
    "Стейк с рисом": [
      "Вареный рис",
      "Стейк",
      "Огонь"
    ],
    "Стейк с салатом": [
      "Стейк",
      "Овощной салат",
      "-"
    ],
    "Стейк с макаронами": [
      "Макароны",
      "Стейк",
      "-"
    ],
    "Бургер": [
      "Котлета",
      "Овощи",
      "Хлеб",
      "-"
    ],
    "Крем-брюле": [
      "Молоко",
      "Сахар",
      "Яйцо",
      "Огонь"
    ],
    "Стейк с фруктовым соусом": [
      "Мясо",
      "Фрукты",
      "Сахар",
      "Огонь"
    ],
    "Стейк с фруктовым соусом и рисом": [
      "Стейк с ф.с.",
      "Вареный рис",
      "-"
    ],
    "Стейк с фруктовым соусом и пюре": [
      "Стейк с ф.с.",
      "Картофельное пюре",
      "-"
    ],
    "Рыба с фруктовым соусом": [
      "Рыба",
      "Фрукты",
      "Сахар",
      "Огонь"
    ],
    "Рыба с фруктовым соусом и рисом": [
      "Рыба с ф.с",
      "Вареный рис",
      "-"
    ],
    "Рыба с фруктовым соусом и пюре": [
      "Рыба с ф.с",
      "Картофельное пюре",
      "-"
    ],
    "Лазанья": [
      "Молоко",
      "Мука",
      "Сыр",
      "Овощи",
      "Фарш",
      "Огонь"
    ],
    "Ризотто": [
      "Бульон",
      "Рисовая крупа",
      "Сыр",
      "Огонь"
    ],
    "Тако с мясом": [
      "Хлеб",
      "Мясной фарш",
      "Сыр",
      "Овощи",
      "Огонь"
    ],
    "Тако с рыбой": [
      "Хлеб",
      "Рыбный фарш",
      "Сыр",
      "Овощи",
      "Огонь"
    ],
    "Буррито": [
      "Хлеб",
      "Вареный рис",
      "Мясной фарш",
      "Овощи",
      "Сыр",
      "Огонь"
    ],
    "Поке": [
      "Вареный рис",
      "Сыр",
      "Овощи",
      "Лосось",
      "-"
    ],
    "Мальма в сливочном соусе": [
      "Мальма",
      "Овощи",
      "Молоко",
      "Огонь"
    ],
    "Мясо по-французски": [
      "Мясо",
      "Овощи",
      "Сыр",
      "Огонь"
    ],
    "Оливье": [
      "Мясо",
      "Овощи",
      "Яйца",
      "Вода",
      "Нож",
      "Огонь"
    ],
    "Сашими из фугу": [
      "Фугу",
      "Нож"
    ],
    "Сашими из лосося": [
      "Лосось",
      "Нож"
    ],
    "Сашими из тунца": [
      "Тунец ",
      "Нож"
    ]
  }
  
  function getRecipes() {
    const finalDish = document.getElementById('finalDish').value.trim();
    const resultDiv = document.getElementById('result');
  
    if (finalDish === '') {
      resultDiv.innerHTML = '<p>Пожалуйста, введите название финального блюда.</p>';
      return;
    }
  
    const recipesToShow = new Set();
  
    function findRecipes(dish) {
      if (!recipesData[dish]) return;
      recipesToShow.add(dish);
      recipesData[dish].forEach(ingredient => {
        if (recipesData[ingredient]) {
          findRecipes(ingredient);
        }
      });
    }
  
    findRecipes(finalDish);
  
    if (recipesToShow.size === 0) {
      resultDiv.innerHTML = '<p>Рецепты не найдены.</p>';
      return;
    }
  
    resultDiv.innerHTML = Array.from(recipesToShow).map(name => 
      `<div class="recipe">
        <b>${name}</b>
        <span>${recipesData[name].join(', ')}</span>
      </div>`
    ).join('');
  }
  