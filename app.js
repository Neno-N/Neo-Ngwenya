/*======= Projects Array =======*/
const projects = [
    {
        id: '1',
        title: 'Random Recipe Generator',
        src: './vids/Random Recipe (edited).mp4',
        description: 'This website generates a random recipe from a javascript object, everytime one clicks the button. Also the recipes under the \'Breakfast\', \'Lunch\', \'Dinner\' and \'Dessert\' section, were all loaded onto from Javascript. there is no hard coded html text or images in the html. This is also a responsive page - so it can be viewed on any device and at any screen width',
        href: 'https://random-rg.netlify.app/'
    },
    {
        id: '2',
        title: 'Service Landing Page',
        src: './vids/Service Landing Page(edited).mp4',
        description: 'This is a generic, simple landing page example. It is also responsive on all devices.',
        href: 'https://service-lp.netlify.app/'
    },
    {
        id: '3',
        title: 'Portfolio Example',
        src: './vids/HTML & CSS Portfolio (edited).mp4',
        description: 'An animated portfolio example project. This website can also be viewed in dark mode and that was done without using any javascript. The only images used were the ones for the projects and the image in the \'ABout Me \' section, otherwise all shapes and animations were made using CSS.',
        href: 'https://html-neo.netlify.app/'
    },
    {
        id: '4',
        title: 'Kitten Calculator',
        src: './vids/Kitty Calculator(edited).mp4',
        description: 'This was more so a javascript challenge than a webpage one. This basic calculator is completely functional. It displays everything you type/click and you can also delete a number or clear the whole screen. The roaming cat was made using CSS. A keyboard can be used too.',
        href: 'https://kitten-calculator.netlify.app/'
    },
    {
        id: '5',
        title: 'Random Colour Generator',
        src: './vids/Colour Panda 2.0.mp4',
        description: 'This web app generates a random colour onto the panda\'s body. By clicking the button, the panda changes colour and also the (hex) colour of the pand is also shown in the nav-bar. The panda was made using css.',
        href: 'https://colour-panda.netlify.app/'
    },
    {
        id: '6',
        title: 'Survery Form',
        src: './vids/Form (edited).mp4',
        description: 'This is a generic, simple and responsive form. Websit Is not published',
        href: '#'
    },
    {
        id: '7',
        title: 'Email Template',
        src: './vids/Email Template (edited).mp4',
        description: 'This is an email template example. Just showcasing basic HTML and CSS skills. Website is not published.',
        href: '#'
    },
    {
        id: '8',
        title: 'Product Landing Page',
        src: './vids/Product Landing Page(edited).mp4',
        description: 'This is a simple and generic product landing page for a t-shirt store. This was to just showcase basic HTML and CSS skills. Website is not published',
        href: '#'
    }
    // {
    //     id: '',
    //     title: '',
    //     src: '',
    //     description: '',
    //     href: ''
    // },
]

/*======= Select Elements =======*/
const navBar = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.toggle-btn');
const navLink = document.querySelectorAll('.nav-link');

const modeBtn = document.querySelector('.mode-btn');
const body = document.querySelector('body');

const allProjects = document.querySelectorAll('.project-card')
const jsBtn = document.querySelector('.javascript');
const htmlBtn = document.querySelector('.html');
const allBtn = document.querySelector('.all');

const viewProjectBtn = document.querySelectorAll('.view-project');
const projectPage = document.querySelector('.project-view-page');
const exitProjectBtn = document.getElementById('close-btn');
const projectTitle = document.querySelector('.project-view-tittle');
const projectVideo = document.querySelector('.project-view-video');
const projectDescription = document.querySelector('.project-view-description');
const projectSite = document.querySelector('.project-view-site');

const submitBtn = document.querySelector('.submit-btn');
const thankYouMessage = document.querySelector('.thank-you');

/*======= Query Selectors =======*/

//Menu Bar
menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('show-nav-bar')
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('show-nav-bar')
    })
});

//Light/Dark Mode
modeBtn.addEventListener('click', ()=>{
    modeBtn.classList.toggle('light-visible');
    body.classList.toggle('light');
});

//Project Selection
jsBtn.addEventListener('click', ()=>{
     allProjects.forEach(project=>{
        if(project.classList.contains('project-card')){
            project.style.display = 'unset'
        }
    })
    allProjects.forEach(project => {
        if(!project.classList.contains('js-skill')){
            project.style.display = 'none'
        }
    })
})

htmlBtn.addEventListener('click', ()=>{
     allProjects.forEach(project=>{
        if(project.classList.contains('project-card')){
            project.style.display = 'unset'
        }
    })
    allProjects.forEach(project => {
        if(!project.classList.contains('html-skill')){
            project.style.display = 'none'
        }
    })
})

allBtn.addEventListener('click', ()=>{
    allProjects.forEach(project=>{
        if(project.classList.contains('project-card')){
            project.style.display = 'unset'
        }
    })
})

//View Project 
viewProjectBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        let id = btn.id;
        

        for (let i=0; i<projects.length; i++){
            if(projects[i].id === id){
    
                let project = projects[i];

                projectTitle.innerText = project.title;
                projectVideo.src = project.src;
                projectSite.href = project.href;
                projectDescription.innerText = project.description;
            }
        }

        projectPage.classList.add('show-project-view');
        
    })
})

exitProjectBtn.addEventListener('click', ()=>{
    projectPage.classList.remove('show-project-view');
    setTimeout(() => {
        projectPage.classList.remove('show-thank-you')
    }, 5000);
})

//pop-up message
submitBtn.addEventListener('click', ()=> {
    thankYouMessage.classList.add('show-thank-you');
})