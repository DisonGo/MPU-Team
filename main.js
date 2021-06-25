Velocity.defaults.duration = 0
let aHeight = document.documentElement.clientHeight;
main.style.height = (aHeight - 100) + "px"
// mainContainer.style.maxHeight = (aHeight - 100) + "px"
let module = document.getElementsByClassName("moduleWindow")[0]
module.onclick = () => {
    module.velocity({
        opacity: 0
    }, {
        duration: 300
    }).velocity({
        display: "none"
    })
}
module.container = document.getElementsByClassName('moduleWindowInnerContainer')[0]
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let users = [{
    name:'Михаил',
    surname:'Новиков',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/tIflDwO9e-k.jpg',
},
{
    name:'Кристина',
    surname:'Базаева',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/anon_pic.jpg',
},
{
    name:'Алексей',
    surname:'Арановский',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/aranovskii.jpg',
},
{
    name:'Милена',
    surname:'Крюкова',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/milena.jpg',
},
{
    name:'Павел',
    surname:'Симоненко',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/anon_pic.jpg',
},
{
    name:'М.',
    surname:'Крюкова',
    project:'Разработка рамы БПЛА',
    imgLink:'imgs/photos/anon_pic.jpg',
},
{
    name:'А.',
    surname:'Лапикова',
    project:'Разработка рамы БПЛА',
    imgLink:'imgs/photos/anon_pic.jpg',
},
]
let projects = [{
        name: 'Разработка заданий по стандартам WS',
        shortDescr: 'Разработка заданий по стандартам WS в компетенции "Инженерный дизайн CAD"',
        longDescr: `В настоящее время все большую популярность приобретают соревнования профессионального мастерства по стандартам WorldSkills (далее WS). База конкурсных заданий мала и требует актуализации ввиду постоянного развития компетенции. Кроме того, для каждой возрастной группы конкурсантов, существуют свои особенности в заданиях. Поэтому, для поддержания конкурентной среды в компетенции "Инженерный дизайн CAD", необходимо отрабатывать как можно больше различных задач, а, следовательно, и создавать их.
    
    И перед нами была поставлена задача - разработать задание для чемпиона по стандартам WS.
    
    Чтобы разработать полный комплект файлов для проведения чемпионата по стандартам WS “Инженерный дизайн CAD”. Необходимо выбрать подходящую модель, разбить ее на подсборки и обозначить какие детали буду моделироваться участником, а какие он будет получать готовыми. Выбрать детали и подсборки для создания чертежей, а также придумать сценарий для анимации и фотореалистичного изображения. Составить текстовую часть задания и создать сбалансированные критерии проверки в соответствии с WSSS (WorldSkills Standard Specification) `,
        frontImgLink: 'imgs/WS.jpg',
        innerImgLink: 'imgs/ws_task.png'
    },
    {
        name: 'Робот-манимпулятор',
        shortDescr: 'Создание видео-инструкций по сборке "Робота-манипулятора" и анимация его работы в Autodesk Inventor',
        longDescr: `Создание видео-инструкций по сборке "Робота-манипулятора" и анимация его работы в Autodesk Inventor
        
        Цель проекта - Разработка анимации робота манипулятора и видео-инструкций по сборке.
        Задачи:
        
     
        Собрать робота манипулятора в Autodesk Inventor.
        Записать видео-инструкции по сборке робота.
        Сделать анимацию робота.
        
        Этапы работы над проектом:
        
        Сборка робота манипулятора.
        Запись видео-инструкций по сборке
        Запись анимации работы робота.
        Монтаж видеороликов
        
        Результат: Созданы виде-инструкции по сборке робота манипулятора, записаны анимация работы робота и разлет деталей. `,
        frontImgLink: 'imgs/robot-manipulator.png',
        innerImgLink: 'imgs/robot-manipulator.png'
    },
    {
        name: 'Разработка рамы БПЛА',
        shortDescr: 'Разработка рамы для уже существующего беспилотного летательного аппарата компании «Полдень 21-й век» по схеме квадрокоптер.',
        longDescr: `ЗАДАНИЕ

        Разработка рамы для уже существующего беспилотного летательного аппарата компании «Полдень 21-й век» по схеме квадрокоптер. 
        При этом необходимо создать раму, обеспечивающую
        высокую ремонтоспособность, а
        также имеющую меньший вес, по
        сравнению с прошлой моделью.
         
        ХОД РАБОТЫ
        
        1. Анализ существующей рамы
        
        2. Составление технического задания
        3. Изучение учебных материалов по теме
        
        4. Создание эскизных моделей двух типов
        
        5. Создание схем созданных эскизных моделей
        
        6. Выбор основной модели
        
        7. Создание детализированной модели
        
        8. Создание спецификации и чертежей
        
        9. Создание отчетов`,
        frontImgLink: 'imgs/BPLA.png',
        innerImgLink: 'imgs/BPLA.png'
    }
]
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.opacity = 1;
        scrollUpBtn.lastChild.style.cursor = "pointer";
        scrollUpBtn.disabled = false
    } else {
        scrollUpBtn.style.opacity = 0;
        scrollUpBtn.lastChild.style.cursor = "default";
        scrollUpBtn.disabled = true
    }
};

function createProjElem(data, list) {
    let projectElem = document.createElement("div")
    projectElem.classList.add('splide__slide', 'projectList')
    list.appendChild(projectElem)

    let frontImg = document.createElement("img")
    frontImg.src = data.frontImgLink

    let info = document.createElement("div")
    info.classList.add("projectInfo")

    let container = document.createElement("div")
    container.classList.add("container")

    projectElem.appendChild(frontImg)
    projectElem.appendChild(info)

    info.appendChild(container)

    let header = document.createElement("h2")
    header.innerHTML = data.name

    container.appendChild(header)

    let shortText = document.createElement("div")
    shortText.classList.add("projectText")
    shortText.innerHTML = data.shortDescr

    container.appendChild(shortText)

    let readBut = document.createElement("button")
    readBut.classList.add("readMoreBut")
    readBut.innerHTML = 'Подробнее'
    readBut.data = data
    container.appendChild(readBut)

    projectElem.header = header
    projectElem.shortText = shortText
    projectElem.frontImg = frontImg
    projectElem.data = data
    
    return projectElem
}
function createUserElem(data,list){
    let userElem = document.createElement("div")
    userElem.classList.add('splide__slide')
    list.appendChild(userElem)
    let photo = document.createElement("img")
    photo.src = data.imgLink

    let card = document.createElement("div")
    card.classList.add("userCard")
    let Name = document.createElement("h4")
    Name.innerHTML = data.name + ' ' + data.surname
    let project = document.createElement("p")
    project.innerHTML = data.project
    project.style.textAlign = 'center'
    
    let container = document.createElement("div")
    container.classList.add("container","container-l")
    userElem.appendChild(card)
    card.appendChild(container)
    container.appendChild(photo)
    container.appendChild(Name)
    container.appendChild(project)
    return userElem
}

let projectList = document.getElementById("projectSlider")
let usersList = document.getElementById("usersSlider")
let projectSlides = []
let userSlides = []

function loadProjects(data, list) {
    data.forEach(proj => {
        let projectElem = createProjElem(proj, list)
        projectSlides.push(projectElem)
    })
}
function loadUsers(data,list){
    data.forEach(user => {
        let userElem = createUserElem(user, list)
        userSlides.push(userElem)
    })
}

function loadModuleWindow(data) {
    module.container.innerHTML = ''
    let dataContainer = document.createElement('div')
    dataContainer.classList.add('container','dataContainer')
    let header = document.createElement("h2")
    header.innerHTML = data.name
    let innerImg = document.createElement("img")
    innerImg.src = data.innerImgLink
    innerImg.style.maxHeight = aHeight / 2 + "px"
    innerImg.style.maxWidth = 50 + "%"
    innerImg.style.alignSelf = 'center'
    let longDescr = document.createElement("p")
    longDescr.style.fontSize = 0.7 + 'em'
    longDescr.innerHTML = data.longDescr
    longDescr.style.whiteSpace = 'pre-wrap'
    longDescr.style.marginBottom = "15px"
    module.container.appendChild(dataContainer)
    dataContainer.appendChild(header)
    dataContainer.appendChild(innerImg)
    dataContainer.appendChild(longDescr)
}
loadProjects(projects, projectList)
loadUsers(users,usersList)
let readButtons = Array.from(document.querySelectorAll(".readMoreBut"))
readButtons.forEach(but => {
    but.onclick = () => {
        loadModuleWindow(but.data)
        module.velocity({
            display: "flex"
        }).velocity({
            opacity: [1, 0],

        }, {
            duration: 300
        })
    }
})

//Arrayfrom(document.querySelectorAll(".projectList"))
let prjSpl = new Splide('#projectsSplide', {
    type: 'loop',
    cover: true,
    heightRatio: 0.45,
    rewind: true
});
let usrSpl = new Splide('#usersSplide', {
    type: 'loop',
    perPage :5,
    perMove:1,
    autoplay:true, 
    interval: 4000,
    rewind: true
});
prjSpl.mount()
usrSpl.mount()