const recipesData = {
    "Фруктовый салат": {
      "ingredients": [
        "Фрукты",
        "Нож"
      ],
      "imageUrl": '70135976-d662-46aa-90a9-7411b5eb74a3',
      "exclude": true
    },
    "Овощной салат": {
      "ingredients": [
        "Овощи",
        "Нож"
      ],
      "imageUrl": '3587a0bc-bd66-4397-842a-7c284d36368f',
      "exclude": true
    },
    "Яблоко в карамели": {
        "ingredients": [
          "Карамель",
          "Фрукты",
        ],
        "imageUrl": '3d8e1265-eb6f-4123-9182-aa997cda93aa'
      },
    "Мороженое": {
        "ingredients": [
          "Яйцо",
          "Сахар",
          "Молоко",
          "Лёд",
          "Венчик"
        ],
        "imageUrl": '8e95c6f7-a155-4433-bea1-01921e2f22ab'
      },
      "Карамельное мороженое": {
        "ingredients": [
          "Карамель",
          "Мороженое",
        ],
        "imageUrl": '3d3003db-0d5f-40bb-bf04-19cc35c7ce8f'
      },
    "Молочный коктейль": {
        "ingredients": [
          "Мороженое",
          "Молоко",
          "Венчик"
        ],
        "imageUrl": '338af613-a02f-44b8-9399-4ad74a41c99d'
      },
      "Карамельн. молочный коктейль": {
        "ingredients": [
          "Карамель",
          "Молочный коктейль",
        ],
        "imageUrl": '0ccbb4f3-d00f-4bcc-8871-03cd499d61cf'
      },
    "Овощной смузи": {
      "ingredients": [
        "Овощи",
        "Вода",
        "Венчик"
      ],
      "imageUrl": '0f726f1e-a8fa-47bc-ab03-3954bd9e2bc6'
    },
    "Фруктовый смузи": {
      "ingredients": [
        "Фрукты",
        "Вода",
        "Венчик"
      ],
      "imageUrl": 'cdcbe75f-4960-41ce-b0b4-78141bef8325'
    },
    "Фруктовый лёд": {
      "ingredients": [
        "Фрукты",
        "Лед",
        "Сахар",
        "Венчик"
      ],
      "imageUrl": '8ecf486b-6896-4da6-8381-5b64da434fb1'
    },
    "Карамель": {
        "ingredients": [
          "Сахар",
          "Огонь"
        ],
        "imageUrl": 'a9f38c89-5b3d-4b6f-b166-c591a99c05ae',
        "exclude": true
      },
    "Компот": {
        "ingredients": [
          "Сахар",
          "Вода",
          "Фрукты",
          "Огонь"
        ],
        "imageUrl": '3257b3e9-e3dd-4895-8b89-fee586f73eea'
    },
    "Масло": {
      "ingredients": [
        "Молоко",
        "Венчик"
      ],
      "imageUrl": '58d4d665-9ecd-401b-bfdb-ccfaa9b6e314',
      "exclude": true
    },
    "Картофельное пюре": {
      "ingredients": [
        "Овощи",
        "Масло",
        "Молоко",
        "Венчик",
        "Огонь"
      ],
      "imageUrl": 'b86ad9e6-d215-46be-a4ac-9bdeefba3fa0'
    },
    "Мясная котлета": {
      "ingredients": [
        "Мясной фарш",
        "Масло",
        "Огонь"
      ],
      "imageUrl": 'a248c9c0-4a7b-4a2b-b265-9b59e7f846f6',
      "exclude": true
    },
    "Мясной фарш": {
      "ingredients": [
        "Мясо",
        "Нож"
      ],
      "imageUrl": 'ccb70107-75c6-46d9-baca-6858b941c3fa',
      "exclude": true
    },
    "Рыбная котлета с пюре": {
      "ingredients": [
        "Картофельное пюре",
        "Рыбная котлета",
      ],
      "imageUrl": '8113c7b5-fbd7-4b0f-941f-5fd9d591e38d',
      "exclude": true
    },
    "Рыбная котлета": {
      "ingredients": [
        "Рыбный фарш",
        "Масло",
        "Огонь"
      ],
      "imageUrl": '3467930c-f851-480f-a786-23e0491cb56c',
      "exclude": true
    },
    "Рыбный фарш": {
      "ingredients": [
        "Любая рыба",
        "Нож"
      ],
      "imageUrl": '1a144dbf-aab6-4422-9115-e13fc2c2db5f',
      "exclude": true
    },
    "Поке": {
        "ingredients": [
          "Вареный рис",
          "Сыр",
          "Овощи",
          "Лосось",
        ],
        "imageUrl": '30a486b1-5f6d-4253-851e-e923f558c8e5'
      },
    "Тесто": {
      "ingredients": [
        "Мука",
        "Вода",
        "Яйцо",
        "Венчик"
      ],
      "imageUrl": '2ab3ed6e-3bb7-4360-b507-163e682a391c',
      "exclude": true
    },
    "Сухая рыбная котлета": {
      "ingredients": [
        "Рыбный фарш",
        "Огонь"
      ],
      "imageUrl": '16d70273-67d5-46de-9df5-9440ab649a34',
      "resizable": '35px',
      "exclude": true
    },
    "Сухая мясная котлета": {
      "ingredients": [
        "Мясной фарш",
        "Огонь"
      ],
      "imageUrl": 'dc52a564-7724-4464-b537-24648718b59e',
      "resizable": '35px',
      "exclude": true
    },
    "Вареный рис": {
      "ingredients": [
        "Рис",
        "Вода",
        "Огонь"
      ],
      "imageUrl": '2c479b84-bf16-482a-9f6d-b5d8a61a4d86',
      "exclude": true
    },
    "Рыбная котлета с рисом": {
      "ingredients": [
        "Рыбная котлета",
        "Вареный рис",
      ],
      "imageUrl": 'df62235c-9cd4-45b9-9700-8f6bd14c9c3e',
      "exclude": true
    },
    "Котлета с рисом": {
      "ingredients": [
        "Мясная котлета",
        "Вареный рис",
      ],
      "imageUrl": '0d5e9d9c-0875-4987-9b56-294f146fd699'
    },
    "Ролл с лососем": {
      "ingredients": [
        "Лосось",
        "Вареный рис",
        "Нож"
      ],
      "imageUrl": '71b09697-d1bf-4962-bc92-1a8da0f2b784',
      "resizable": '25px',
      "exclude": true
    },
    "Ролл с тунцом": {
      "ingredients": [
        "Тунец",
        "Вареный рис",
        "Нож"
      ],
      "imageUrl": '755e52bd-91d7-403b-b83f-d3c6779118fb',
      "resizable": '25px',
      "exclude": true
    },
    "Овощной ролл": {
      "ingredients": [
        "Овощи",
        "Вареный рис",
        "Нож"
      ],
      "imageUrl": '7cd06f72-451b-4c3b-8ccd-658557bc862d',
      "resizable": '25px'
    },
    "Рыба с рисом": {
      "ingredients": [
        "Любая рыба",
        "Вареный рис",
        "Огонь"
      ],
      "imageUrl": 'b4d605c0-1eda-406c-b1b0-cc12a5b12fed',
      "exclude": true
    },
    "Рыба с овощами": {
      "ingredients": [
        "Любая рыба",
        "Овощи",
        "Огонь"
      ],
      "imageUrl": 'a6d6bb91-eb53-41db-8080-445de05a2388',
      "exclude": true
    },
    "Яичница": {
      "ingredients": [
        "Яйцо",
        "Огонь"
      ],
      "imageUrl": '22af4a71-3ed0-47bd-9472-52d921649d47'
    },
    "Омлет": {
      "ingredients": [
        "Яйцо",
        "Молоко",
        "Венчик",
        "Огонь"
      ],
      "imageUrl": '77ce414b-52ed-4ae9-9c3c-2110dbb75a7a'
    },
    "Хлеб": {
      "ingredients": [
        "Тесто",
        "Огонь"
      ],
      "imageUrl": '3a256744-d18a-4bbd-ae0e-549f7bd5e90d'
    },
    "Чизкейк": {
      "ingredients": [
        "Тесто",
        "Сыр",
        "Сахар",
        "Венчик",
        "Огонь"
      ],
      "imageUrl": '8711a06b-f06e-41d8-99e1-7fe5a7f339bb',
      "exclude": true
    },
    "Сыр": {
      "ingredients": [
        "Молоко",
        "Венчик",
        "Огонь"
      ],
      "imageUrl": '3dddaacd-a814-47a7-b5d3-34343ab4125d',
      "exclude": true
    },
    "Фруктовый салат с карамелью": {
      "ingredients": [
        "Карамель",
        "Фруктовый салат",
      ],
      "imageUrl": '5506bc8a-e7f8-4641-8398-286114845917'
    },
    "Бульон": {
      "ingredients": [
        "Мясо",
        "Вода",
        "Огонь"
      ],
      "imageUrl": 'd8a53839-0dfe-4c9f-a380-7a358f6d0b5d',
      "exclude": true
    },
    "Жар. рыба на масле с овощами": {
      "ingredients": [
        "Любая рыба",
        "Овощи",
        "Масло",
        "Огонь"
      ],
      "imageUrl": 'a6d6bb91-eb53-41db-8080-445de05a2388',
      "exclude": true
    },
    "Салат Капрезе": {
      "ingredients": [
        "Сыр",
        "Овощи",
        "Нож"
      ],
      "imageUrl": 'de6f0483-7e4b-4908-b3da-98b49401fe8e'
    },
    "Макароны": {
      "ingredients": [
        "Тесто",
        "Вода",
        "Нож",
        "Огонь"
      ],
      "imageUrl": '93481dda-8ca3-4bf4-add3-65e93d6a790b'
    },
    "Стейк": {
      "ingredients": [
        "Мясо",
        "Огонь"
      ],
      "imageUrl": 'bdec7405-e3ad-450d-9324-858703a2c906',
      "resizable": '25px',
      "exclude": true
    },
    "Стейк с рисом": {
      "ingredients": [
        "Вареный рис",
        "Стейк",
        "Огонь"
      ],
      "imageUrl": '88c92bff-1421-4a93-874a-7fea13971c0a'
    },
    "Стейк с фруктовым соусом": {
      "ingredients": [
        "Мясо",
        "Фрукты",
        "Сахар",
        "Огонь"
      ],
      "imageUrl": '19341d8a-8886-424a-a5cb-7c5918b64e2c',
    },
    "Стейк с фруктовым соусом и рисом": {
      "ingredients": [
        "Стейк с фруктовым соусом",
        "Вареный рис",
      ],
      "imageUrl": null
    },
    "Стейк с фруктовым соусом и пюре": {
      "ingredients": [
        "Стейк с фруктовым соусом",
        "Картофельное пюре",
      ],
      "imageUrl": null
    },
    "Рыба с фруктовым соусом": {
      "ingredients": [
        "Рыба",
        "Фрукты",
        "Сахар",
        "Огонь"
      ],
      "imageUrl": 'db3c59b3-e1c7-4acc-9c59-aa978d197113',
      "exclude": true
    },
    "Рыба с фруктовым соусом и рисом": {
      "ingredients": [
        "Рыба с фруктовым соусом",
        "Вареный рис",
      ],
      "imageUrl": null,
      "exclude": true
    },
    "Рыба с фруктовым соусом и пюре": {
      "ingredients": [
        "Рыба с фруктовым соусом",
        "Картофельное пюре",
      ],
      "imageUrl": null,
      "exclude": true
    },
    "Мясо с овощами": {
        "ingredients": [
          "Мясо",
          "Овощи",
          "Огонь"
        ],
        "imageUrl": '076398f0-e078-46cd-874e-54ace4e6c0a4'
      },
    "Ризотто": {
      "ingredients": [
        "Бульон",
        "Рисовая крупа",
        "Сыр",
        "Огонь"
      ],
      "imageUrl": '4783f701-a858-4c8f-8208-99a8c5254f2a'
    },
    "Жар. мясо на масле с овощами": {
        "ingredients": [
          "Мясо",
          "Овощи",
          "Масло",
          "Огонь"
        ],
        "imageUrl": 'a95e6902-40d9-4718-99dc-2df257c516a2'
      },
    "Тако с мясом": {
      "ingredients": [
        "Хлеб",
        "Мясной фарш",
        "Сыр",
        "Овощи",
        "Огонь"
      ],
      "imageUrl": '15336d92-1252-4de9-93fb-63e795b184c3'
    },
    "Тако с рыбой": {
      "ingredients": [
        "Хлеб",
        "Рыбный фарш",
        "Сыр",
        "Овощи",
        "Огонь"
      ],
      "imageUrl": 'd802388b-4477-49fd-9e41-e37f4f87216b',
      "exclude": true
    },
    "Буррито": {
      "ingredients": [
        "Хлеб",
        "Вареный рис",
        "Мясной фарш",
        "Овощи",
        "Сыр",
        "Огонь"
      ],
      "imageUrl": '4b788fde-bc98-4ebb-9e9a-2ef1a80804bb'
    },
    "Мальма в сливочном соусе": {
      "ingredients": [
        "Мальма",
        "Овощи",
        "Молоко",
        "Огонь"
      ],
      "imageUrl": 'c76e3128-d78f-48de-8e73-7aeae35b5838'
    },
    "Мясо по-французски": {
      "ingredients": [
        "Мясо",
        "Овощи",
        "Сыр",
        "Огонь"
      ],
      "imageUrl": 'ec19d04a-7331-40ca-a076-b8010398703d'
    },
    "Оливье": {
      "ingredients": [
        "Мясо",
        "Овощи",
        "Яйца",
        "Вода",
        "Нож",
        "Огонь"
      ],
      "imageUrl": 'c1c3fd25-5bee-47e3-bc08-cd59cf9b0dbe'
    },
    "Сашими из фугу": {
      "ingredients": [
        "Фугу",
        "Нож"
      ],
      "imageUrl": 'c0f90303-d329-4d8d-9ac4-972eda8ba810',
      "exclude": true
    },
    "Сашими из лосося": {
      "ingredients": [
        "Лосось",
        "Нож"
      ],
      "imageUrl": '17ec747f-5828-47ce-80ca-35d9d3a6e057',
      "exclude": true
    },
    "Сашими из тунца": {
      "ingredients": [
        "Тунец",
        "Нож"
      ],
      "imageUrl": '4be78d43-9651-4fce-ad24-7c1540abbbbb',
      "exclude": true
    },
    "Суфле": {
        "ingredients": [
          "Яйцо",
          "Сахар",
          "Венчик",
          "Огонь"
        ],
        "imageUrl": '4698859d-6cdf-4b1d-9817-420149ac2d18'
    },
    "Мясная котлета с пюре": {
        "ingredients": [
          "Картофельное пюре",
          "Мясная котлета",
        ],
        "imageUrl": 'eeab85b3-1f70-4de8-b48c-2a4afdd7c6fc'
      },
    "Пельмени": {
        "ingredients": [
          "Мясной фарш",
          "Тесто",
          "Вода",
          "Огонь"
        ],
        "imageUrl": '8a710233-55d7-4e3d-bd7f-696ff90059d3'
      },
    "Яичница с беконом": {
        "ingredients": [
          "Яйцо",
          "Мясо",
          "Масло",
          "Огонь"
        ],
        "imageUrl": '46068a5a-81ed-481e-aa79-14a222ddc3d5'
      },
    "Оладьи": {
        "ingredients": [
          "Яйцо",
          "Молоко",
          "Мука",
          "Сахар",
          "Венчик",
          "Огонь"
        ],
        "imageUrl": '5d4ef361-c66f-496e-966e-6b7ea25ce8a7'
      },
    "Овощной омлет": {
        "ingredients": [
          "Яйцо",
          "Молоко",
          "Овощи",
          "Венчик",
          "Огонь"
        ],
        "imageUrl": '7d1921d0-852b-46db-b179-31605690f719'
      },
    "Карамельный чизкейк": {
        "ingredients": [
          "Чизкейк",
          "Карамель",
        ],
        "imageUrl": '82f1c256-30ae-497d-9473-d910972f1a72'
      },
    "Фруктовый чизкейк": {
        "ingredients": [
          "Чизкейк",
          "Фрукты",
        ],
        "imageUrl": '4fc448dc-b750-4019-b33b-bf727a77eddf'
      },
    "Овощной суп": {
        "ingredients": [
          "Бульон",
          "Овощи",
          "Огонь"
        ],
        "imageUrl": '6d43e716-ebf3-4745-a806-5eb3260dca88'
      },
    "Борщ": {
        "ingredients": [
          "Бульон",
          "Овощи",
          "Мясо",
          "Огонь"
        ],
        "imageUrl": 'c9391aac-d4f2-41dd-a31d-8d5e287d5074'
      },
    "Сендвич с сыром": {
        "ingredients": [
          "Сыр",
          "Хлеб",
          "Нож",
          "Огонь"
        ],
        "imageUrl": '8d090f5f-d9b6-4563-a6c9-f973cef5085e'
      },
    "Пицца": {
        "ingredients": [
          "Тесто",
          "Овощи",
          "Мясо",
          "Сыр",
          "Огонь"
        ],
        "imageUrl": 'pizza-1'
      },
      "Макароны с сыром": {
        "ingredients": [
          "Макароны",
          "Сыр",
          "Огонь"
        ],
        "imageUrl": '08bdd5bb-2800-4831-b2b3-205e440c9ae9'
      },
      "Макароны с мясной котлетой": {
        "ingredients": [
          "Макароны",
          "Мясная котлета",
        ],
        "imageUrl": '4142a1ba-e0fe-46c8-97d0-a153ac10028b'
      },
      "Макароны с рыбной котлетой": {
        "ingredients": [
          "Макароны",
          "Рыбная котлета",
        ],
        "imageUrl": '8113c7b5-fbd7-4b0f-941f-5fd9d591e38d',
        "resizable": '35px',
        "exclude": true
      },
      "Паста Болоньезе": {
        "ingredients": [
          "Макароны",
          "Сыр",
          "Овощи",
          "Мясной фарш",
          "Огонь"
        ],
        "imageUrl": 'e6fa3196-7cad-433c-96e2-00e65022e8fd'
      },
      "Паста Карбонара": {
        "ingredients": [
          "Макароны",
          "Сыр",
          "Мясо",
          "Яйцо",
          "Огонь"
        ],
        "imageUrl": 'a0b9b5ea-0aac-45a3-9b6c-c6baae0b4dba'
      },
      "Рамен": {
        "ingredients": [
          "Макароны",
          "Бульон",
          "Мясо",
          "Яйцо",
          "Огонь"
        ],
        "imageUrl": '0e56700c-239c-4fca-bc94-e772fc0eb070'
      },
      "Рагу": {
        "ingredients": [
          "Овощи",
          "Вода",
          "Мясо",
          "Огонь"
        ],
        "imageUrl": '11ab66c2-9fda-4da2-b666-a8a396fbf434'
      },
      "Стейк с салатом": {
        "ingredients": [
          "Стейк",
          "Овощной салат",
        ],
        "imageUrl": '76ae0c13-cbc3-43b4-92ee-ab95b65b6c98'
      },
      "Бургер": {
        "ingredients": [
          "Мясная котлета",
          "Овощи",
          "Хлеб",
        ],
        "imageUrl": 'burger'
      },
      "Стейк с макаронами": {
        "ingredients": [
          "Макароны",
          "Стейк",
        ],
        "imageUrl": 'c9b8c133-a454-460e-bd3c-f0de87231575'
      },
      "Крем-брюле": {
        "ingredients": [
          "Молоко",
          "Сахар",
          "Яйцо",
          "Огонь"
        ],
        "imageUrl": 'd6c2cc0d-1a62-4dc1-8ecb-c348fa8e0b8a',
        "resizable": '25px'
      },
      "Лазанья": {
        "ingredients": [
          "Молоко",
          "Мука",
          "Сыр",
          "Овощи",
          "Мясной фарш",
          "Огонь"
        ],
        "imageUrl": 'e0dd46fa-bc2a-4947-be1a-b7f03495c841',
        "resizable": '35px'
      },
  }

  function getRecipes() {
    const finalDish = document.getElementById('finalDish').value.trim();
    const resultDiv = document.getElementById('result');
    const suggestionsList = document.getElementById('suggestionsList');

    if (finalDish === '') {
        resultDiv.innerHTML = '<p>Пожалуйста, введите название конечного блюда.</p>';
        suggestionsList.innerHTML = '';
        suggestionsList.classList.remove('show');
        adjustContainerHeight();
        return;
    }

    const recipesToShow = new Set();

    function findRecipes(dish) {
        if (!recipesData[dish]) return;
        recipesToShow.add(dish);
        recipesData[dish].ingredients.forEach(ingredient => {
            if (recipesData[ingredient]) {
                findRecipes(ingredient);
            }
        });
    }

    findRecipes(finalDish);

    if (recipesToShow.size === 0) {
        resultDiv.innerHTML = '<p>Рецепты не найдены.</p>';
        suggestionsList.innerHTML = '';
        suggestionsList.classList.remove('show');
        adjustContainerHeight();
        return;
    }

    resultDiv.innerHTML = Array.from(recipesToShow).map(name => 
        `<div class="recipe">
            <b>${name}</b>
            <span>${recipesData[name].ingredients.join(', ')}</span>
        </div>`
    ).join('');

    suggestionsList.innerHTML = '';
    suggestionsList.classList.remove('show');
    adjustContainerHeight();
}

function createImageButtons() {
    const leftContainer = document.getElementById('leftContainer');
    const rightContainer = document.getElementById('rightContainer');
    const excludeEvent = document.getElementById('excludeEventCheckbox').checked;

    leftContainer.innerHTML = '';
    rightContainer.innerHTML = '';

    const imageUrls = Object.entries(recipesData).filter(([name, recipe]) => 
        !excludeEvent || !recipe.exclude
    ).map(([name, recipe]) => ({
        name,
        url: recipe.imageUrl || 'missing',
        resizable: recipe.resizable || false
    }));

    const halfLength = Math.ceil(imageUrls.length / 2);

    const leftImages = imageUrls.slice(0, halfLength);
    const rightImages = imageUrls.slice(halfLength);

    leftImages.forEach(({ name, url, resizable }) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';

        const imgElement = document.createElement('img');
        imgElement.src = url === 'missing' ? 'images/missing.png' : `images/${url}.png`;
        imgElement.alt = name;

        if (resizable) {
            imgElement.style.height = resizable;
        }

        imgElement.onclick = function() {
            document.getElementById('finalDish').value = name;
            getRecipes();
        };

        wrapper.appendChild(imgElement);
        leftContainer.appendChild(wrapper);
    });

    rightImages.forEach(({ name, url, resizable }) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';

        const imgElement = document.createElement('img');
        imgElement.src = url === 'missing' ? 'images/missing.png' : `images/${url}.png`;
        imgElement.alt = name;

        if (resizable) {
            imgElement.style.height = resizable;
        }

        imgElement.onclick = function() {
            document.getElementById('finalDish').value = name;
            getRecipes();
        };

        wrapper.appendChild(imgElement);
        rightContainer.appendChild(wrapper);
    });
}

function showSuggestions() {
    const input = document.getElementById('finalDish').value.trim().toLowerCase();
    const suggestionsList = document.getElementById('suggestionsList');

    if (input === '') {
        suggestionsList.innerHTML = '';
        suggestionsList.classList.remove('show');
        adjustContainerHeight();
        return;
    }

    const suggestions = Object.keys(recipesData).filter(name => name.toLowerCase().includes(input));
    
    if (suggestions.length === 0) {
        suggestionsList.innerHTML = '';
        suggestionsList.classList.remove('show');
    } else {
        suggestionsList.innerHTML = suggestions.map(name => 
            `<li onclick="selectSuggestion('${name}')">${name}</li>`
        ).join('');
        suggestionsList.classList.add('show');
    }

    adjustContainerHeight();
}

function selectSuggestion(name) {
    document.getElementById('finalDish').value = name;
    document.getElementById('suggestionsList').innerHTML = '';
    document.getElementById('suggestionsList').classList.remove('show');
    adjustContainerHeight();
    getRecipes();
}

function adjustContainerHeight() {
    const suggestionsList = document.getElementById('suggestionsList');
    const mainContainer = document.getElementById('mainContainer');
    const resultDiv = document.getElementById('result');

    if (suggestionsList.classList.contains('show')) {
        mainContainer.style.height = `${suggestionsList.offsetHeight + 150}px`;
    } else if (resultDiv.childElementCount > 0) {
        mainContainer.style.height = 'auto';
    } else {
        mainContainer.style.height = 'auto';
    }
}

document.getElementById('finalDish').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        
        const suggestionsList = document.getElementById('suggestionsList');
        const firstSuggestion = suggestionsList.querySelector('li');
        if (firstSuggestion) {
            selectSuggestion(firstSuggestion.innerText);
        }
    }
});

document.getElementById('finalDish').addEventListener('input', function() {
    document.getElementById('result').innerHTML = '';
    showSuggestions();
});

window.onload = createImageButtons;
window.onresize = createImageButtons;
