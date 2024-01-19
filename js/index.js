$(document).ready(function () {

    // навигация: открытие и закрытие нав.панели по клику на меню

    let links_show = true;

    $('.menu img').click(function (){

        if (links_show) {
        $('.head_one .links').show(600);
        }
        else{
            $('.head_one .links').hide(600);
        }
        links_show = !links_show;
    });



    // 1-е модальное окно

    $('.se1 .start').click(function (){
        $('.overlay').show();
    });

    $('.overlay .close-popup').click(function (){
        $('.overlay').hide();
    });

    // <!-- модальное окно из модального окна -->

    $('.overlay button').click(function (){
        $('.shop').show();
    });

    $('.shop .close-popup_shop').click(function (){
        $('.shop').hide();
    });


    // блокировка заполненных полей

    $(function() {
        $('.btn').click(function(e) {
            e.preventDefault();
        if ($('.tur').val() != '') {
            $('.tur').attr('disabled', 'disabled');
        }
        if ($('.tur1').val() != '') {
            $('.tur1').attr('disabled', 'disabled');
        }
        if ($('.tur2').val() != '') {
            $('.tur2').attr('disabled', 'disabled');
        }
        if ($('.tur3').val() != '') {
            $('.tur3').attr('disabled', 'disabled');
        }
        if ($('.tur4').val() != '') {
            $('.tur4').attr('disabled', 'disabled');
        }
        })
    });

        
// проверка заполнения полей

$(function() {
    $('.btn').click(function(e) {
        e.preventDefault();
        if($('.tur').val() == '' || $('.tur1').val() == '' || $('.tur2').val() == '' || $('.tur3').val() == '' || $('.tur4').val() == ''){
            alert('Поля не заполнены');
        } 
        else {
            alert('Форма заполнена!');
        }
    });
    })

    // Подсвечивать ошибки в заполнении
   
         $('.btn').click(function(e) {
          $('input[required]').addClass('req');
        });

        // Подсвечивать ошибки в заполнении (css)

        // .popup_shop .req:invalid {
        //     border: 2px solid red;
        //   }
        //   .popup_shop .req:valid {
        //     border: 2px solid green;
        //   }
//    --------------------------------------



// проверка заполнения формы


// $(':submit').click(function(e) {
//     e.preventDefault();
// // 1 вариант
// if ($('.name_1').val() != '' && $('.email_1').val() != '' && $('.phone_1').val() != '' && $('textarea').val() != ''){
//     alert('поля формы успешно заполнены');
//     $('.name_1').attr('disabled', 'disabled');
//     $('.email_1').attr('disabled', 'disabled');
//     $('.phone_1').attr('disabled', 'disabled');
//     $('textarea').attr('disabled', 'disabled');
//     $('.top').attr('disabled', 'disabled');
// }
// else{
//     alert('не все поля формы заполнены');
// }


// блокировка 2 блока радиометки

// $('.block2 input').each(function () {

// let flag = true;

// if(flag) {
//     if ($(this).is(':checked')) {
//         $('.block2 input').each(function() {
//         $(this).attr('disabled', 'disabled');
//             })
//         }
//     }
//     else {
//         alert('Выберите способ связи!')
//         }
//         flag = !flag;
//         });

        // Блокировка выпадаюшегося списка

        // $('.top').each(function () {
        //     let flag = true;
                
        //     if(flag) {
        //     if ($('.top1').is(':checked')) {
        //         $('.top').each(function() {
        //         $(this).attr('disabled', 'disabled');
        //         })
        //         }
        //     if ($('.top2').is(':checked')) {
        //         $('.top').each(function() {
        //         $(this).attr('disabled', 'disabled');
        //         })
        //         }
        //     if ($('.top3').is(':checked')) {
        //         $('.top').each(function() {
        //         $(this).attr('disabled', 'disabled');
        //         })
        //         }
        //     if ($('.top4').is(':checked')) {
        //         $('.top').each(function() {
        //         $(this).attr('disabled', 'disabled');
        //         })
        //         }
        //     if ($('.top5').is(':checked')) {
        //         $('.top').each(function() {
        //         $(this).attr('disabled', 'disabled');
        //         })
        //         }
        // }
        //     flag = !flag;
        //     });
    // });

    // настройка первой большой картинки(галлерея)

    $('.point a').click(function(e) {
        e.preventDefault();

        if ($('.gal_big img').attr('src') != $(this).attr('href')) {
            $('.gal_big img').hide().attr('src', $(this).attr('href')).
            fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

        $('.point a img').mouseup(function(){// выделение выбранной картинки css свойства
            $(this).fadeTo(2000, 0.6);
        });

        $(document).mouseup(function(){
            $('.point a img').fadeTo(0.1);
        });


        // настройка второй большой картинки(галлерея)

    $('.point1 a').click(function(e) {
        e.preventDefault();

        if ($('.gal_big1 img').attr('src') != $(this).attr('href')) {
            $('.gal_big1 img').hide().attr('src', $(this).attr('href')).
            fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

        $('.point1 a img').mouseup(function(){// выделение выбранной картинки css свойства
            $(this).fadeTo(2000, 0.6);
        });

        $(document).mouseup(function(){
            $('.point1 a img').fadeTo(0.1);
        });

        // настройка третей большой картинки(галлерея)

    $('.point2 a').click(function(e) {
        e.preventDefault();

        if ($('.gal_big2 img').attr('src') != $(this).attr('href')) {
            $('.gal_big2 img').hide().attr('src', $(this).attr('href')).
            fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

        $('.point2 a img').mouseup(function(){// выделение выбранной картинки css свойства
            $(this).fadeTo(2000, 0.6);
        });

        $(document).mouseup(function(){
            $('.point2 a img').fadeTo(0.1);
        });


        // Слайдер

const slider = document.querySelector('.slider1');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider();

        // Смена языка

let arrLang = {
'en': {
    'title': 'Park Hotel "Cote d Azur"',
    'title1': 'tour-giude',
    'title2': 'Infrastructure for children',
    'title3': 'Equipment rental',
    'title4': 'Avocation',
    'title5': 'Service',
    'title6': 'Sanatorium "Signal"',
    'title7': 'Hotel complex "Iceberg Ugry"',
    'title8': 'Gallery',
    'title9': 'Features',
    'title10': 'Park Hotel Yukhnovgrad',
    'title11': 'Park Hotel "Yakhonty Tarusa"',
    'title12': 'Family resort "Bora-Borovsk"',
    'title13': 'Active recreation center "Ivolga"',
    'title14': 'Eco-park "Rozhdestveno"',
    'title15': 'Equestrian recreation center "Caravan"',
    'title16': 'Write to us',
    'title17': 'Name',
    'title18': 'Email',
    'title19': 'Phone',
    'title20': 'Contact me via:',
    'title21': 'Telegram',
    'title22': 'Topic:',
    'title23': 'Topic:',
    'title24': 'I am a human',
    

    'MainText': 'The hotel complex occupies a landscaped, landscaped area of ​​15 hectares. Guests are offered residential 3-storey buildings and detached cottages. The extensive number of rooms can accommodate more than 300 people. Vacationers can expect comfortable rooms, most of which are decorated in eco-style. Each has the necessary furniture, appliances and a bathroom with a shower; a number of cottages are equipped with their own sauna.',

    'MainText1': 'The Cote d Azur Park Hotel is located on the right bank of the Oka River in the village of Volkovskoye, Kaluga Region. The Moscow Ring Road is 130 kilometers away, the ancient city of Serpukhov is about half an hour’s drive, the railway station is 15 kilometers from the hotel.',

    'MainText2': 'The Signal sanatorium is located on the territory of an ancient park with an area of ​​more than 10 hectares, in the most ecologically clean area of ​​the city of Obninsk, on the banks of the Protva River, a few minutes from the unequipped city beach. The favorable location of the sanatorium allows our guests to enjoy a relaxing holiday in the lap of nature and take advantage of all the possibilities of the urban environment. The city center, museums, concert venues, shops and cafes can be reached in just a few minutes.',

    'MainText3': 'The complex is located in a picturesque region. Just 90 km from Kaluga, 180 km from Moscow and you are on the territory of the “Iceberg Ugra”. Guests are offered 43 rooms from economy class to two-level suites. Original room design. A combination of comfort and convenience with beauty and elegance. There is a restaurant and gazebos on site where you can cook kebabs or barbecue. There is also a magnificent tent here, and if you wish, in the summer you can celebrate a family celebration in the open air.',

    'MainText4': 'The country eco-park is located in the Yukhnovsky district on the territory of the Ugra National Park. The park is stylized as an old estate; guests are accommodated in large wooden houses made of Siberian pine with all the necessary communications.',

    'MainText5': 'Located in the Zhukovsky district in the Tarussky Nature Reserve, next to a picturesque lake. On its shore there is a beach area with sun loungers. There is an aquatic center with a large indoor swimming pool. A large selection of spa treatments is offered.',

    'MainText6': 'Located in the village of Komlevo near Lake Komlevskoye, 2 m from the city of Borovsk. 9 Finnish cottages with an area of ​​40 m2 have been prepared for accommodation of guests. Each has an equipped kitchen. The resort has a Finnish sauna',

    'MainText7': 'It is also located in the Zhukovsky district - in the village of Spas-Prognanye near the Mashkovsky pond. 23 cottages have been prepared for accommodation, all rooms in which have a separate entrance. There is a restaurant with two spacious banquet halls.',

    'MainText8': 'Located in the Babyninsky district in the village of Besovo. Accommodation options include hotel rooms, individual cottages or fishermen s cottages. In summer you can bring your own tent. There is a two-story VIP cottage with a bathhouse and a gazebo for relaxation.',

    'MainText9': 'Located in the village of Inino, Zhukovsky district. Several accommodation options have been prepared - economy rooms, standard cottages, panoramic cottages with a fireplace and sauna, domed sphere cottages. On the territory there is a bathhouse, barbecue gazebos.',
},
'ru': {
    'title': 'Парк-отель «Лазурный берег»',
    'title1': 'Экскурсовод',
    'title2': 'Инфраструктура для детей',
    'title3': 'Прокат снаряжения',
    'title4': 'Развлечения',
    'title5': 'Сервис',
    'title6': 'Санаторий «Сигнал»',
    'title7': 'Гостиничный комплекс «Айсберг Угры»',
    'title8': 'Галерея',
    'title9': 'Особенность',
    'title10': 'Парк-отель «Юхновград»',
    'title11': 'Парк-отель «Яхонты Таруса»',
    'title12': 'Семейный курорт «Бора-Боровск»',
    'title13': 'База активного отдыха «Иволга»',
    'title14': 'Эко-парк «Рождествено»',
    'title15': 'Центр конного отдыха «Караван»',
    'title16': 'Напишите нам',
    'title17': 'Имя',
    'title18': 'Электронная почта',
    'title19': 'Телефон',
    'title20': 'Свяжитесь со мной через:',
    'title21': 'Телеграм',
    'title22': 'Тема:',
    'title23': 'Сообщение:',
    'title24': 'Я человек',


    'MainText': 'Гостиничный комплекс занимает благоустроенную, озелененную территорию площадью 15 гектаров. Гостям предлагаются жилые 3-х этажные корпуса и отдельно стоящие коттеджи. Обширный номерной фонд способен вместить более 300 человек. Отдыхающих ожидают комфортабельные номера, большинство из которых оформлены в эко-стиле. В каждом имеется необходимая мебель, техника и санузел с душем, ряд коттеджей оснащен собственной сауной.',

    'MainText1': 'Парк-отель «Лазурный берег» расположен на правом берегу реки Оки в селе Волковском Калужской области. До МКАД – 130 километров, до древнего города Серпухова – около получаса езды, железнодорожный вокзал находится в 15 километрах от отеля.',

    'MainText2': 'Санаторий «Сигнал» расположен на территории старинного парка площадью более 10 га, в самом экологически чистом районе города Обнинск, на берегу реки Протвы, в нескольких минутах от необорудованного городского пляжа. Удачное расположение санатория дает возможность нашим гостям наслаждаться спокойным отдыхом на лоне природы и использовать все возможности городской среды. До центра города, музеев, концертных площадок, магазинов и кафе можно добраться всего за несколько минут.',

    'MainText3': 'Комплекс расположен в живописном регионе. Всего 90 км от Калуги 180 км от Москвы и вы на территории «Айсберг Угры». Для гостей предлагается 43 номера от эконом класса до двухуровневых люксов. Оригинальный дизайн номеров. Сочетание комфорта и удобства с красотой и элегантностью. На территории есть ресторан, беседки, где вы сможете приготовить шашлыки или барбекю. Здесь же разбит великолепный шатер, и при желании летом вы сможете отметить на свежем воздухе семейное торжество.',

    'MainText4': 'Загородный эко-парк находится в Юхновском районе на территории национального парка Угра. Парк стилизован под старинную усадьбу, гостей заселяют в большие деревянные дома из сибирской сосны со всеми необходимыми коммуникациями.',

    'MainText5': 'Находится в Жуковском районе в Тарусском заповеднике, рядом с живописным озером. На его берегу оборудована пляжная зона с шезлонгами. Работает аквацентр с большим крытым плавательным бассейном. Предложен большой выбор СПА-процедур.',

    'MainText6': 'Расположен в деревне Комлево у Комлевского озера, в 2 м от города Боровск. Для заселения гостей подготовлено 9 финских коттеджей площадью 40 м2. В каждом есть оборудованная кухня. На территории курорта есть финская сауна.',

    'MainText7': 'Расположена также в Жуковском районе – в поселке Спас-Прогнанье у Машковского пруда. Для проживания подготовлено 23 коттеджа, все номера в которых имеют отдельный вход. Работает ресторан с двумя просторными банкетными залами.',

    'MainText8': 'Находится в Бабынинском районе в поселке Бесово. Для проживания доступны номера в гостинице, отдельные коттеджи или рыбацкие домики. Летом можно приехать со своей палаткой. Есть двухэтажный VIP коттедж с баней и беседкой для отдыха.',

    'MainText9': 'Находится в деревне Инино Жуковского района. Подготовлено несколько вариантов проживания – эконом-номера, коттеджи «стандарт», панорамные, с камином и сауной, купольные коттеджи-сферы. На территории есть баня, барбекю-беседки.',
}
}

$(function () {
$('.translate').click(function () {
    let lang = $(this).attr('id');

    $('.lang').each(function (){
        $(this).text(arrLang[lang][$(this).attr('key')])
    })
})
})


});

