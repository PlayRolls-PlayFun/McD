// Дані меню (страви McDonald's) з категоріями та красивими SVG зображеннями
const menuData = [
    {
        id: 1,
        name: "Біг Мак",
        category: "Бургери",
        description: "Легендарний бургер з двома яловичими котлетами, сиром чеддер, салатом, цибулею, соленими огірками та фірмовим соусом на булочці з кунжутом.",
        price: 89,
        calories: 540,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bun1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f4c430'/%3E%3Cstop offset='100%25' style='stop-color:%23d4a017'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23ffbc0d' width='400' height='300'/%3E%3Cellipse cx='200' cy='80' rx='120' ry='30' fill='url(%23bun1)'/%3E%3Crect x='80' y='100' width='240' height='15' fill='%234CAF50'/%3E%3Crect x='80' y='115' width='240' height='25' fill='%238B4513'/%3E%3Crect x='80' y='140' width='240' height='8' fill='%23FFA500'/%3E%3Crect x='80' y='148' width='240' height='25' fill='%238B4513'/%3E%3Crect x='80' y='173' width='240' height='8' fill='%23FFA500'/%3E%3Cellipse cx='200' cy='200' rx='120' ry='30' fill='url(%23bun1)'/%3E%3Ctext x='200' y='250' font-family='Arial' font-size='32' font-weight='bold' fill='%23da291c' text-anchor='middle'%3EБіг Мак%3C/text%3E%3C/svg%3E"
    },
    {
        id: 2,
        name: "Чізбургер",
        category: "Бургери",
        description: "Соковита яловича котлета з розплавленим сиром чеддер, огірками, цибулею, кетчупом та гірчицею.",
        price: 55,
        calories: 300,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bun2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f4c430'/%3E%3Cstop offset='100%25' style='stop-color:%23d4a017'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23ffa500' width='400' height='300'/%3E%3Cellipse cx='200' cy='90' rx='110' ry='28' fill='url(%23bun2)'/%3E%3Crect x='90' y='110' width='220' height='20' fill='%238B4513'/%3E%3Crect x='90' y='130' width='220' height='10' fill='%23FFD700'/%3E%3Crect x='90' y='140' width='220' height='5' fill='%234CAF50'/%3E%3Cellipse cx='200' cy='165' rx='110' ry='28' fill='url(%23bun2)'/%3E%3Ctext x='200' y='230' font-family='Arial' font-size='28' font-weight='bold' fill='%23da291c' text-anchor='middle'%3EЧізбургер%3C/text%3E%3C/svg%3E"
    },
    {
        id: 3,
        name: "Філе-о-Фіш",
        category: "Бургери",
        description: "Ніжне рибне філе в хрусткій паніровці з сиром та соусом тартар на паровій булочці.",
        price: 75,
        calories: 390,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bun3' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f5f5dc'/%3E%3Cstop offset='100%25' style='stop-color:%23deb887'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%234682b4' width='400' height='300'/%3E%3Cellipse cx='200' cy='90' rx='110' ry='28' fill='url(%23bun3)'/%3E%3Crect x='90' y='110' width='220' height='22' fill='%23f0e68c'/%3E%3Crect x='90' y='132' width='220' height='10' fill='%23FFD700'/%3E%3Crect x='90' y='142' width='220' height='5' fill='%23f5f5f5'/%3E%3Cellipse cx='200' cy='167' rx='110' ry='28' fill='url(%23bun3)'/%3E%3Ctext x='200' y='230' font-family='Arial' font-size='26' font-weight='bold' fill='%23fff' text-anchor='middle'%3EФіле-о-Фіш%3C/text%3E%3C/svg%3E"
    },
    {
        id: 4,
        name: "Чікен МакНаггетс",
        category: "Гарніри",
        description: "Хрусткі шматочки курячого філе в золотистій паніровці. Ідеально поєднуються з різними соусами.",
        price: 65,
        calories: 380,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23daa520' width='400' height='300'/%3E%3Cellipse cx='120' cy='120' rx='50' ry='35' fill='%23d4a017' transform='rotate(-15 120 120)'/%3E%3Cellipse cx='200' cy='110' rx='55' ry='38' fill='%23d4a017' transform='rotate(10 200 110)'/%3E%3Cellipse cx='280' cy='125' rx='48' ry='33' fill='%23d4a017' transform='rotate(-20 280 125)'/%3E%3Cellipse cx='160' cy='180' rx='52' ry='36' fill='%23d4a017' transform='rotate(5 160 180)'/%3E%3Cellipse cx='240' cy='175' rx='50' ry='35' fill='%23d4a017' transform='rotate(-10 240 175)'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle'%3EНаггетси%3C/text%3E%3C/svg%3E"
    },
    {
        id: 5,
        name: "Картопля Фрі",
        category: "Гарніри",
        description: "Золотиста картопля фрі, приготована до хрусткої скоринки. Класична страва, яку всі люблять!",
        price: 45,
        calories: 320,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='fry' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ffd700'/%3E%3Cstop offset='100%25' style='stop-color:%23daa520'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23da291c' width='400' height='300'/%3E%3Cpath d='M 120 200 L 130 80 L 145 80 L 135 200 Z' fill='url(%23fry)'/%3E%3Cpath d='M 150 200 L 160 70 L 175 70 L 165 200 Z' fill='url(%23fry)'/%3E%3Cpath d='M 180 200 L 190 85 L 205 85 L 195 200 Z' fill='url(%23fry)'/%3E%3Cpath d='M 210 200 L 220 75 L 235 75 L 225 200 Z' fill='url(%23fry)'/%3E%3Cpath d='M 240 200 L 250 90 L 265 90 L 255 200 Z' fill='url(%23fry)'/%3E%3Cpath d='M 270 200 L 280 80 L 295 80 L 285 200 Z' fill='url(%23fry)'/%3E%3Cpath d='M 100 200 Q 200 210 300 200 L 300 230 Q 200 240 100 230 Z' fill='%23da291c' stroke='%23fff' stroke-width='3'/%3E%3Ctext x='200' y='270' font-family='Arial' font-size='28' font-weight='bold' fill='%23ffd700' text-anchor='middle'%3EФрі%3C/text%3E%3C/svg%3E"
    },
    {
        id: 6,
        name: "Кока-Кола",
        category: "Холодні напої",
        description: "Освіжаючий газований напій Coca-Cola. Ідеальне доповнення до будь-якої страви.",
        price: 35,
        calories: 150,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='cup1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b'/%3E%3Cstop offset='100%25' style='stop-color:%23dc143c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23dc143c' width='400' height='300'/%3E%3Cpath d='M 140 80 L 120 220 L 280 220 L 260 80 Z' fill='url(%23cup1)' stroke='%23fff' stroke-width='3'/%3E%3Cellipse cx='200' cy='80' rx='60' ry='15' fill='%23fff' opacity='0.3'/%3E%3Crect x='180' y='40' width='40' height='50' rx='5' fill='%23fff' opacity='0.8'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='26' font-weight='bold' fill='%23fff' text-anchor='middle'%3ECoca-Cola%3C/text%3E%3C/svg%3E"
    },
    {
        id: 7,
        name: "Спрайт",
        category: "Холодні напої",
        description: "Освіжаючий лимонно-лаймовий газований напій. Чудово втамовує спрагу!",
        price: 35,
        calories: 140,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='cup2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300ff7f'/%3E%3Cstop offset='100%25' style='stop-color:%2300cc66'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%2300cc66' width='400' height='300'/%3E%3Cpath d='M 140 80 L 120 220 L 280 220 L 260 80 Z' fill='url(%23cup2)' stroke='%23fff' stroke-width='3'/%3E%3Cellipse cx='200' cy='80' rx='60' ry='15' fill='%23fff' opacity='0.3'/%3E%3Crect x='180' y='40' width='40' height='50' rx='5' fill='%23fff' opacity='0.8'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='30' font-weight='bold' fill='%23fff' text-anchor='middle'%3ESprite%3C/text%3E%3C/svg%3E"
    },
    {
        id: 8,
        name: "Маккафе Латте",
        category: "Гарячі напої",
        description: "Ароматна кава еспресо з ніжним молоком. Ідеальний напій для початку дня.",
        price: 50,
        calories: 190,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='coffee' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23d2691e'/%3E%3Cstop offset='100%25' style='stop-color:%238b4513'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%238b4513' width='400' height='300'/%3E%3Cellipse cx='200' cy='200' rx='90' ry='20' fill='%23654321'/%3E%3Cpath d='M 110 200 Q 110 100 200 100 Q 290 100 290 200' fill='%23fff' stroke='%23654321' stroke-width='4'/%3E%3Cellipse cx='200' cy='100' rx='90' ry='20' fill='url(%23coffee)'/%3E%3Cpath d='M 290 140 Q 330 140 330 170 Q 330 200 290 200' fill='none' stroke='%23654321' stroke-width='4'/%3E%3Cpath d='M 160 70 Q 180 50 200 70' fill='none' stroke='%23999' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M 200 70 Q 220 50 240 70' fill='none' stroke='%23999' stroke-width='2' opacity='0.5'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='26' font-weight='bold' fill='%23fff' text-anchor='middle'%3EЛатте%3C/text%3E%3C/svg%3E"
    },
    {
        id: 9,
        name: "Гарячий Шоколад",
        category: "Гарячі напої",
        description: "Насичений шоколадний напій з вершками. Ідеальний для холодної погоди.",
        price: 45,
        calories: 250,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='choco' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23a0522d'/%3E%3Cstop offset='100%25' style='stop-color:%236b4423'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%236b4423' width='400' height='300'/%3E%3Cellipse cx='200' cy='200' rx='90' ry='20' fill='%234a2511'/%3E%3Cpath d='M 110 200 Q 110 100 200 100 Q 290 100 290 200' fill='%23fff' stroke='%234a2511' stroke-width='4'/%3E%3Cellipse cx='200' cy='100' rx='90' ry='20' fill='url(%23choco)'/%3E%3Cellipse cx='200' cy='90' rx='70' ry='15' fill='%23fff' opacity='0.9'/%3E%3Ccircle cx='180' cy='85' r='8' fill='%23ff6b6b'/%3E%3Cpath d='M 290 140 Q 330 140 330 170 Q 330 200 290 200' fill='none' stroke='%234a2511' stroke-width='4'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle'%3EШоколад%3C/text%3E%3C/svg%3E"
    },
    {
        id: 10,
        name: "Морозиво Сандей",
        category: "Десерти",
        description: "Ніжне морозиво з шоколадним, карамельним або полуничним топінгом.",
        price: 40,
        calories: 280,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='cream' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fff'/%3E%3Cstop offset='100%25' style='stop-color:%23f5f5f5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23ff69b4' width='400' height='300'/%3E%3Cpath d='M 150 200 L 140 240 L 260 240 L 250 200 Z' fill='%23ff6b6b' stroke='%23fff' stroke-width='2'/%3E%3Cellipse cx='200' cy='180' rx='60' ry='25' fill='url(%23cream)'/%3E%3Cellipse cx='200' cy='140' rx='55' ry='25' fill='url(%23cream)'/%3E%3Cellipse cx='200' cy='105' rx='48' ry='22' fill='url(%23cream)'/%3E%3Cpath d='M 180 70 Q 200 50 220 70 Q 200 85 180 70' fill='%23ff6b6b'/%3E%3Cpath d='M 170 120 Q 165 110 175 105' fill='%23a0522d' stroke='%23a0522d' stroke-width='3'/%3E%3Cpath d='M 190 150 Q 185 140 195 135' fill='%23a0522d' stroke='%23a0522d' stroke-width='3'/%3E%3Cpath d='M 210 170 Q 205 160 215 155' fill='%23a0522d' stroke='%23a0522d' stroke-width='3'/%3E%3Ctext x='200' y='280' font-family='Arial' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle'%3EМорозиво%3C/text%3E%3C/svg%3E"
    },
    {
        id: 11,
        name: "Яблучний Пиріг",
        category: "Десерти",
        description: "Хрусткий пиріг з ніжною яблучною начинкою та корицею.",
        price: 35,
        calories: 230,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='pie' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f4a460'/%3E%3Cstop offset='100%25' style='stop-color:%23d2691e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23d2691e' width='400' height='300'/%3E%3Cpath d='M 100 180 Q 100 120 150 100 Q 200 90 250 100 Q 300 120 300 180 L 280 200 Q 200 210 120 200 Z' fill='url(%23pie)' stroke='%23a0522d' stroke-width='3'/%3E%3Cpath d='M 140 140 Q 160 130 180 140' fill='none' stroke='%23a0522d' stroke-width='2'/%3E%3Cpath d='M 190 135 Q 210 125 230 135' fill='none' stroke='%23a0522d' stroke-width='2'/%3E%3Cpath d='M 160 160 Q 180 150 200 160' fill='none' stroke='%23a0522d' stroke-width='2'/%3E%3Cpath d='M 210 155 Q 230 145 250 155' fill='none' stroke='%23a0522d' stroke-width='2'/%3E%3Cellipse cx='200' cy='100' rx='50' ry='10' fill='%23f4a460'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='26' font-weight='bold' fill='%23fff' text-anchor='middle'%3EПиріг%3C/text%3E%3C/svg%3E"
    },
    {
        id: 12,
        name: "Кетчуп",
        category: "Соуси",
        description: "Класичний томатний кетчуп. Ідеально підходить до картоплі фрі та бургерів.",
        price: 10,
        calories: 30,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23dc143c' width='400' height='300'/%3E%3Crect x='150' y='60' width='100' height='30' rx='5' fill='%23fff'/%3E%3Cpath d='M 160 90 L 160 200 Q 160 220 180 220 L 220 220 Q 240 220 240 200 L 240 90 Z' fill='%23ff6b6b' stroke='%23fff' stroke-width='3'/%3E%3Cellipse cx='200' cy='220' rx='40' ry='10' fill='%23dc143c'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='28' font-weight='bold' fill='%23fff' text-anchor='middle'%3EКетчуп%3C/text%3E%3C/svg%3E"
    },
    {
        id: 13,
        name: "Гірчиця",
        category: "Соуси",
        description: "Пікантна гірчиця для справжніх гурманів. Додає особливого смаку.",
        price: 10,
        calories: 25,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ffd700' width='400' height='300'/%3E%3Crect x='150' y='60' width='100' height='30' rx='5' fill='%23fff'/%3E%3Cpath d='M 160 90 L 160 200 Q 160 220 180 220 L 220 220 Q 240 220 240 200 L 240 90 Z' fill='%23f4c430' stroke='%23fff' stroke-width='3'/%3E%3Cellipse cx='200' cy='220' rx='40' ry='10' fill='%23daa520'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='26' font-weight='bold' fill='%23333' text-anchor='middle'%3EГірчиця%3C/text%3E%3C/svg%3E"
    },
    {
        id: 14,
        name: "Барбекю",
        category: "Соуси",
        description: "Солодкий соус барбекю з димком. Чудово поєднується з курячими стравами.",
        price: 12,
        calories: 40,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%238b4513' width='400' height='300'/%3E%3Crect x='150' y='60' width='100' height='30' rx='5' fill='%23fff'/%3E%3Cpath d='M 160 90 L 160 200 Q 160 220 180 220 L 220 220 Q 240 220 240 200 L 240 90 Z' fill='%23a0522d' stroke='%23fff' stroke-width='3'/%3E%3Cellipse cx='200' cy='220' rx='40' ry='10' fill='%236b4423'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='26' font-weight='bold' fill='%23fff' text-anchor='middle'%3EБарбекю%3C/text%3E%3C/svg%3E"
    },
    {
        id: 15,
        name: "Сирний соус",
        category: "Соуси",
        description: "Ніжний сирний соус. Ідеальний для наггетсів та картоплі.",
        price: 12,
        calories: 50,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ffa500' width='400' height='300'/%3E%3Crect x='150' y='60' width='100' height='30' rx='5' fill='%23fff'/%3E%3Cpath d='M 160 90 L 160 200 Q 160 220 180 220 L 220 220 Q 240 220 240 200 L 240 90 Z' fill='%23ffd700' stroke='%23fff' stroke-width='3'/%3E%3Cellipse cx='200' cy='220' rx='40' ry='10' fill='%23ffb347'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='24' font-weight='bold' fill='%23333' text-anchor='middle'%3EСирний%3C/text%3E%3C/svg%3E"
    },
    {
        id: 16,
        name: "Макфлюррі",
        category: "Десерти",
        description: "Ніжне морозиво з шоколадними або карамельними добавками.",
        price: 55,
        calories: 350,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e6f3ff' width='400' height='300'/%3E%3Cpath d='M 150 120 L 140 240 L 260 240 L 250 120 Z' fill='%23fff' stroke='%23333' stroke-width='3'/%3E%3Cellipse cx='200' cy='120' rx='55' ry='15' fill='%23f0f0f0'/%3E%3Cellipse cx='200' cy='100' rx='50' ry='20' fill='%23fff'/%3E%3Cellipse cx='200' cy='75' rx='45' ry='20' fill='%23fff'/%3E%3Ccircle cx='180' cy='90' r='5' fill='%23a0522d'/%3E%3Ccircle cx='210' cy='85' r='6' fill='%23a0522d'/%3E%3Ccircle cx='195' cy='110' r='4' fill='%23a0522d'/%3E%3Ctext x='200' y='280' font-family='Arial' font-size='24' font-weight='bold' fill='%23333' text-anchor='middle'%3EМакфлюррі%3C/text%3E%3C/svg%3E"
    },
    {
        id: 17,
        name: "Чікен Роял",
        category: "Бургери",
        description: "Великий бургер з хрусткою курячою котлетою, салатом та майонезом.",
        price: 79,
        calories: 480,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bun4' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f4c430'/%3E%3Cstop offset='100%25' style='stop-color:%23d4a017'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23ff8c00' width='400' height='300'/%3E%3Cellipse cx='200' cy='85' rx='115' ry='30' fill='url(%23bun4)'/%3E%3Crect x='85' y='105' width='230' height='18' fill='%234CAF50'/%3E%3Crect x='85' y='123' width='230' height='28' fill='%23f0e68c'/%3E%3Crect x='85' y='151' width='230' height='8' fill='%23fff'/%3E%3Cellipse cx='200' cy='180' rx='115' ry='30' fill='url(%23bun4)'/%3E%3Ctext x='200' y='240' font-family='Arial' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle'%3EЧікен Роял%3C/text%3E%3C/svg%3E"
    },
    {
        id: 18,
        name: "Фанта",
        category: "Холодні напої",
        description: "Апельсиновий газований напій. Яскравий смак літа!",
        price: 35,
        calories: 160,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='cup3' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff8c00'/%3E%3Cstop offset='100%25' style='stop-color:%23ff6600'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23ff8c00' width='400' height='300'/%3E%3Cpath d='M 140 80 L 120 220 L 280 220 L 260 80 Z' fill='url(%23cup3)' stroke='%23fff' stroke-width='3'/%3E%3Cellipse cx='200' cy='80' rx='60' ry='15' fill='%23fff' opacity='0.3'/%3E%3Crect x='180' y='40' width='40' height='50' rx='5' fill='%23fff' opacity='0.8'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='30' font-weight='bold' fill='%23fff' text-anchor='middle'%3EFanta%3C/text%3E%3C/svg%3E"
    },
    {
        id: 19,
        name: "Капучино",
        category: "Гарячі напої",
        description: "Класичний капучино з густою молочною пінкою.",
        price: 48,
        calories: 180,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='cappuccino' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23c8a882'/%3E%3Cstop offset='100%25' style='stop-color:%23a0826d'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23a0826d' width='400' height='300'/%3E%3Cellipse cx='200' cy='200' rx='90' ry='20' fill='%23654321'/%3E%3Cpath d='M 110 200 Q 110 100 200 100 Q 290 100 290 200' fill='%23fff' stroke='%23654321' stroke-width='4'/%3E%3Cellipse cx='200' cy='100' rx='90' ry='20' fill='url(%23cappuccino)'/%3E%3Cellipse cx='200' cy='90' rx='75' ry='18' fill='%23f5f5dc' opacity='0.9'/%3E%3Cpath d='M 290 140 Q 330 140 330 170 Q 330 200 290 200' fill='none' stroke='%23654321' stroke-width='4'/%3E%3Ctext x='200' y='260' font-family='Arial' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle'%3EКапучино%3C/text%3E%3C/svg%3E"
    },
    {
        id: 20,
        name: "Крипер Бургер",
        category: "Minecraft x McDonald's",
        description: "Вибуховий смак! Бургер з зеленою булочкою, яловичою котлетою, сиром та спеціальним TNT-соусом. Обережно - може вибухнути смаком!",
        price: 129,
        calories: 620,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='creeper' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2366cc66'/%3E%3Cstop offset='100%25' style='stop-color:%23339933'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23228B22' width='400' height='300'/%3E%3Cellipse cx='200' cy='80' rx='120' ry='30' fill='url(%23creeper)'/%3E%3Crect x='80' y='100' width='240' height='15' fill='%234CAF50'/%3E%3Crect x='80' y='115' width='240' height='25' fill='%238B4513'/%3E%3Crect x='80' y='140' width='240' height='8' fill='%23FFA500'/%3E%3Crect x='80' y='148' width='240' height='5' fill='%2366cc66'/%3E%3Cellipse cx='200' cy='175' rx='120' ry='30' fill='url(%23creeper)'/%3E%3Crect x='170' y='50' width='15' height='15' fill='%23000'/%3E%3Crect x='215' y='50' width='15' height='15' fill='%23000'/%3E%3Crect x='185' y='65' width='30' height='10' fill='%23000'/%3E%3Ctext x='200' y='240' font-family='Arial' font-size='26' font-weight='bold' fill='%23fff' text-anchor='middle'%3E🧨 Крипер Бургер%3C/text%3E%3C/svg%3E"
    },
    {
        id: 21,
        name: "Діамантові Наггетси",
        category: "Minecraft x McDonald's",
        description: "Рідкісні та цінні! Хрусткі наггетси з блакитним покриттям та діамантовим смаком. Крафт рівня легенда!",
        price: 99,
        calories: 420,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2300CED1' width='400' height='300'/%3E%3Cpath d='M 100 120 L 120 100 L 160 100 L 180 120 L 140 160 Z' fill='%2387CEEB' stroke='%234682b4' stroke-width='3'/%3E%3Cpath d='M 180 110 L 200 90 L 240 90 L 260 110 L 220 150 Z' fill='%2387CEEB' stroke='%234682b4' stroke-width='3'/%3E%3Cpath d='M 260 125 L 280 105 L 320 105 L 340 125 L 300 165 Z' fill='%2387CEEB' stroke='%234682b4' stroke-width='3'/%3E%3Cpath d='M 140 170 L 160 150 L 200 150 L 220 170 L 180 210 Z' fill='%2387CEEB' stroke='%234682b4' stroke-width='3'/%3E%3Cpath d='M 220 175 L 240 155 L 280 155 L 300 175 L 260 215 Z' fill='%2387CEEB' stroke='%234682b4' stroke-width='3'/%3E%3Ctext x='200' y='270' font-family='Arial' font-size='22' font-weight='bold' fill='%23fff' text-anchor='middle'%3E💎 Діамантові Наггетси%3C/text%3E%3C/svg%3E"
    },
    {
        id: 22,
        name: "Золоте Яблуко Десерт",
        category: "Minecraft x McDonald's",
        description: "Магічний десерт! Яблучний пиріг з золотим покриттям. Дає +5 до задоволення!",
        price: 89,
        calories: 380,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3CradialGradient id='gold'%3E%3Cstop offset='0%25' style='stop-color:%23FFD700'/%3E%3Cstop offset='100%25' style='stop-color:%23FFA500'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='%23FF8C00' width='400' height='300'/%3E%3Ccircle cx='200' cy='130' r='70' fill='url(%23gold)' stroke='%23DAA520' stroke-width='4'/%3E%3Crect x='195' y='60' width='10' height='25' fill='%238B4513'/%3E%3Cellipse cx='200' cy='60' rx='15' ry='8' fill='%234CAF50'/%3E%3Cpath d='M 150 130 Q 150 160 180 170' fill='none' stroke='%23DAA520' stroke-width='3'/%3E%3Cpath d='M 250 130 Q 250 160 220 170' fill='none' stroke='%23DAA520' stroke-width='3'/%3E%3Ctext x='200' y='240' font-family='Arial' font-size='20' font-weight='bold' fill='%23fff' text-anchor='middle'%3E🍎 Золоте Яблуко%3C/text%3E%3C/svg%3E"
    },
    {
        id: 23,
        name: "Зілля Швидкості",
        category: "Minecraft x McDonald's",
        description: "Енергетичний напій з ефектом швидкості! Кола з магічними бульбашками. Тривалість ефекту: 3 хвилини.",
        price: 65,
        calories: 180,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2300BFFF' width='400' height='300'/%3E%3Cpath d='M 160 90 L 150 100 L 150 200 Q 150 220 170 220 L 230 220 Q 250 220 250 200 L 250 100 L 240 90 Z' fill='%2387CEEB' stroke='%23fff' stroke-width='3'/%3E%3Crect x='170' y='70' width='60' height='25' rx='3' fill='%23A9A9A9'/%3E%3Cellipse cx='200' cy='220' rx='50' ry='12' fill='%234682b4'/%3E%3Ccircle cx='180' cy='150' r='5' fill='%23fff' opacity='0.7'/%3E%3Ccircle cx='210' cy='130' r='6' fill='%23fff' opacity='0.7'/%3E%3Ccircle cx='195' cy='170' r='4' fill='%23fff' opacity='0.7'/%3E%3Ccircle cx='220' cy='160' r='5' fill='%23fff' opacity='0.7'/%3E%3Ctext x='200' y='270' font-family='Arial' font-size='20' font-weight='bold' fill='%23fff' text-anchor='middle'%3E⚡ Зілля Швидкості%3C/text%3E%3C/svg%3E"
    },
    {
        id: 24,
        name: "Хеппі Міл Стів",
        category: "Minecraft x McDonald's - Хеппі Міл",
        description: "Набір для справжнього шахтаря! Міні-бургер, картопля фрі, напій та іграшка Стіва. Бонус: міні-кирка!",
        price: 119,
        calories: 550,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ffbc0d' width='400' height='300'/%3E%3Crect x='80' y='100' width='240' height='140' rx='10' fill='%23da291c' stroke='%23fff' stroke-width='4'/%3E%3Crect x='100' y='120' width='80' height='60' fill='%23f4c430' stroke='%23333' stroke-width='2'/%3E%3Crect x='190' y='120' width='50' height='80' fill='%23ffd700' stroke='%23333' stroke-width='2'/%3E%3Crect x='250' y='120' width='50' height='50' fill='%2387CEEB' stroke='%23333' stroke-width='2'/%3E%3Crect x='140' y='190' width='30' height='40' fill='%238B4513'/%3E%3Crect x='140' y='185' width='30' height='10' fill='%23A9A9A9'/%3E%3Ctext x='200' y='80' font-family='Arial' font-size='28' font-weight='bold' fill='%23da291c' text-anchor='middle'%3EHappy Meal%3C/text%3E%3Ctext x='200' y='270' font-family='Arial' font-size='24' font-weight='bold' fill='%23333' text-anchor='middle'%3E⛏️ Стів%3C/text%3E%3C/svg%3E"
    },
    {
        id: 25,
        name: "Хеппі Міл Крипер",
        category: "Minecraft x McDonald's - Хеппі Міл",
        description: "Вибуховий набір! Міні-бургер з зеленою булочкою, картопля фрі, напій та іграшка Крипера. Бонус: стікери TNT!",
        price: 119,
        calories: 560,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ffbc0d' width='400' height='300'/%3E%3Crect x='80' y='100' width='240' height='140' rx='10' fill='%2366cc66' stroke='%23fff' stroke-width='4'/%3E%3Crect x='100' y='120' width='80' height='60' fill='%2366cc66' stroke='%23333' stroke-width='2'/%3E%3Crect x='190' y='120' width='50' height='80' fill='%23ffd700' stroke='%23333' stroke-width='2'/%3E%3Crect x='250' y='120' width='50' height='50' fill='%2387CEEB' stroke='%23333' stroke-width='2'/%3E%3Crect x='110' y='130' width='15' height='15' fill='%23000'/%3E%3Crect x='145' y='130' width='15' height='15' fill='%23000'/%3E%3Crect x='120' y='150' width='30' height='10' fill='%23000'/%3E%3Ctext x='200' y='80' font-family='Arial' font-size='28' font-weight='bold' fill='%2366cc66' text-anchor='middle'%3EHappy Meal%3C/text%3E%3Ctext x='200' y='270' font-family='Arial' font-size='24' font-weight='bold' fill='%23333' text-anchor='middle'%3E🧨 Крипер%3C/text%3E%3C/svg%3E"
    },
    {
        id: 26,
        name: "Хеппі Міл Ендермен",
        category: "Minecraft x McDonald's - Хеппі Міл",
        description: "Таємничий набір! Міні-бургер, картопля фрі, напій та іграшка Ендермена. Бонус: фіолетові окуляри!",
        price: 119,
        calories: 540,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ffbc0d' width='400' height='300'/%3E%3Crect x='80' y='100' width='240' height='140' rx='10' fill='%23663399' stroke='%23fff' stroke-width='4'/%3E%3Crect x='100' y='120' width='80' height='60' fill='%23f4c430' stroke='%23333' stroke-width='2'/%3E%3Crect x='190' y='120' width='50' height='80' fill='%23ffd700' stroke='%23333' stroke-width='2'/%3E%3Crect x='250' y='120' width='50' height='50' fill='%2387CEEB' stroke='%23333' stroke-width='2'/%3E%3Crect x='110' y='190' width='25' height='40' fill='%23000'/%3E%3Crect x='145' y='190' width='25' height='40' fill='%23000'/%3E%3Crect x='115' y='195' width='15' height='15' fill='%23ff00ff'/%3E%3Crect x='150' y='195' width='15' height='15' fill='%23ff00ff'/%3E%3Ctext x='200' y='80' font-family='Arial' font-size='28' font-weight='bold' fill='%23663399' text-anchor='middle'%3EHappy Meal%3C/text%3E%3Ctext x='200' y='270' font-family='Arial' font-size='22' font-weight='bold' fill='%23333' text-anchor='middle'%3E👾 Ендермен%3C/text%3E%3C/svg%3E"
    }
];

// Кошик (об'єкт для зберігання обраних страв з кількістю)
let cart = {};

// Функція для створення навігації по категоріях
function createCategoryNav() {
    const categoryLinksContainer = document.getElementById('category-links');
    const categories = [...new Set(menuData.map(item => item.category))];
    
    categories.forEach(category => {
        const link = document.createElement('a');
        link.href = `#category-${category}`;
        link.className = 'category-link';
        link.textContent = category;
        
        // Додаємо обробник для плавного скролу
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.getElementById(`category-${category}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            
            // Оновлюємо активний клас
            document.querySelectorAll('.category-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
        
        categoryLinksContainer.appendChild(link);
    });
}

// Функція для відображення меню на сторінці з категоріями
function displayMenu() {
    const menuContainer = document.getElementById('menu-items');
    
    // Отримуємо унікальні категорії
    const categories = [...new Set(menuData.map(item => item.category))];
    
    // Для кожної категорії створюємо секцію
    categories.forEach(category => {
        // Створюємо заголовок категорії з ID для навігації
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.id = `category-${category}`;
        categoryTitle.textContent = category;
        menuContainer.appendChild(categoryTitle);
        
        // Створюємо контейнер для страв цієї категорії
        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'menu-grid';
        
        // Фільтруємо страви за категорією
        const categoryItems = menuData.filter(item => item.category === category);
        
        // Для кожної страви створюємо HTML елемент
        categoryItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description.substring(0, 60)}...</p>
                    <div class="menu-item-footer">
                        <span class="price">${item.price} грн</span>
                    </div>
                </div>
            `;
            
            // При кліку на страву відкриваємо модальне вікно з деталями
            menuItem.addEventListener('click', () => openModal(item));
            
            categoryGrid.appendChild(menuItem);
        });
        
        menuContainer.appendChild(categoryGrid);
    });
}

// Змінна для зберігання кількості
let currentQuantity = 1;

// Функція для відкриття модального вікна з деталями страви
function openModal(item) {
    const modal = document.getElementById('modal');
    
    // Скидаємо кількість до 1
    currentQuantity = 1;
    document.getElementById('quantity-display').textContent = currentQuantity;
    
    // Заповнюємо модальне вікно даними страви
    document.getElementById('modal-image').src = item.image;
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-description').textContent = item.description;
    document.getElementById('modal-calories').textContent = item.calories;
    document.getElementById('modal-price').textContent = item.price;
    
    // Показуємо модальне вікно
    modal.style.display = 'block';
    
    // Обробники для кнопок +/-
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    
    decreaseBtn.onclick = () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            document.getElementById('quantity-display').textContent = currentQuantity;
        }
    };
    
    increaseBtn.onclick = () => {
        if (currentQuantity < 99) {
            currentQuantity++;
            document.getElementById('quantity-display').textContent = currentQuantity;
        }
    };
    
    // Додаємо обробник для кнопки "Додати в кошик"
    const addBtn = document.getElementById('add-to-cart-btn');
    addBtn.onclick = () => {
        addToCart(item, currentQuantity);
        modal.style.display = 'none';
    };
}

// Функція для додавання страви в кошик
function addToCart(item, quantity) {
    // Якщо страва вже є в кошику, збільшуємо кількість
    if (cart[item.id]) {
        cart[item.id].quantity += quantity;
    } else {
        // Інакше додаємо нову страву
        cart[item.id] = {
            ...item,
            quantity: quantity
        };
    }
    
    updateCartCount();
    
    if (quantity === 1) {
        alert(`${item.name} додано в кошик!`);
    } else {
        alert(`${item.name} (${quantity} шт.) додано в кошик!`);
    }
}

// Функція для оновлення лічильника кошика
function updateCartCount() {
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Функція для відображення кошика
function displayCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Очищаємо контейнер
    cartItemsContainer.innerHTML = '';
    
    const cartItems = Object.values(cart);
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Ваш кошик порожній</p>';
    } else {
        // Відображаємо кожну страву в кошику
        cartItems.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name} ${item.quantity > 1 ? `<span class="quantity-badge">${item.quantity}x</span>` : ''}</h4>
                    <p class="cart-item-price">${item.price} грн ${item.quantity > 1 ? `× ${item.quantity} = ${item.price * item.quantity} грн` : ''}</p>
                </div>
                <button class="remove-btn" onclick="removeOneFromCart(${item.id})">Видалити 1</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
    
    // Підраховуємо загальну суму
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = total;
    
    // Показуємо модальне вікно кошика
    cartModal.style.display = 'block';
}

// Функція для видалення однієї одиниці страви з кошика
function removeOneFromCart(itemId) {
    if (cart[itemId]) {
        cart[itemId].quantity--;
        
        // Якщо кількість стала 0, видаляємо страву повністю
        if (cart[itemId].quantity === 0) {
            delete cart[itemId];
        }
        
        updateCartCount();
        displayCart();
    }
}

// Закриття модальних вікон
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.querySelector('.close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Закриття модального вікна при кліку поза ним
window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    const cartModal = document.getElementById('cart-modal');
    
    if (e.target === modal) {
        modal.style.display = 'none';
    }
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Відкриття кошика при кліку на кнопку
document.getElementById('cart-btn').addEventListener('click', (e) => {
    e.preventDefault();
    displayCart();
});

// Обробник кнопки "Оформити замовлення"
document.querySelector('.order-btn').addEventListener('click', () => {
    const cartItems = Object.values(cart);
    
    if (cartItems.length === 0) {
        alert('Ваш кошик порожній!');
    } else {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Дякуємо за замовлення! Загальна сума: ${total} грн`);
        cart = {};
        updateCartCount();
        document.getElementById('cart-modal').style.display = 'none';
    }
});

// Ініціалізація: відображаємо навігацію та меню при завантаженні сторінки
createCategoryNav();
displayMenu();
