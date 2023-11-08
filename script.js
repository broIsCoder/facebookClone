let defaultTheme = 1;
window.addEventListener('click',(e)=>{
    //SEARCH BAR
    const searchBtn1 = document.querySelector('.searchBtn1');
    const searchBoard = document.querySelector('.searchBoard');
    const backBtn = document.querySelector('.backBtn');
    //show
    if(searchBtn1.contains(e.target) || searchBoard.contains(e.target) ){
        searchBoard.classList.add('showSearchBoard');
    }
    //hide
    else{
        searchBoard.classList.remove('showSearchBoard')
    }
    //hide
    if(backBtn.contains(e.target)){
        searchBoard.classList.remove('showSearchBoard')
    }

    //NAVMIDDLE
    const navMiddleWindow = document.querySelector('.navMiddleWindow');
    const navMiddlePhone = document.querySelector('.navMiddlePhone');
    if(navMiddlePhone.contains(e.target)){
        if(navMiddleWindow.style.height === '70px'){
            navMiddleWindow.style.height = '0';
            console.log('fd')
        }
        else{
            navMiddleWindow.style.height = '70px';
        }
    }
    else{
        navMiddleWindow.style.height = '0';
    }

    //MYDROPDOWNINFOMENU
    const myDropDownInfoMenuBtn = document.querySelector('.myDropDownInfoMenuBtn');
    const myDropDownInfoMenu = document.querySelector('.myDropDownInfoMenu');
    if(myDropDownInfoMenuBtn.contains(e.target)){
        myDropDownInfoMenu.classList.toggle('showMyDropDownInfoMenu')
    }
    else{
        myDropDownInfoMenu.classList.remove('showMyDropDownInfoMenu')
    }
    if(myDropDownInfoMenu.contains(e.target)){
        myDropDownInfoMenu.classList.add('showMyDropDownInfoMenu')
    }

    // THEME
    const themeToggleBtn = document.querySelector('.themeToggleBtn');
    const theme = document.querySelector('.default')
    if(themeToggleBtn.contains(e.target)){
        themeToggleBtn.classList.toggle('switch');
        if(defaultTheme === 1){
            
            document.documentElement.style.setProperty('--mainTheme','rgb(185, 185, 185)');
            document.documentElement.style.setProperty('--main2Theme','white');
            document.documentElement.style.setProperty('--secondTheme','white');
            document.documentElement.style.setProperty('--postTheme','white');
            document.documentElement.style.setProperty('--socialTheme','rgb(201, 201, 201)');
            document.documentElement.style.setProperty('--interactiveTheme','rgb(171, 171, 171)');
            document.documentElement.style.setProperty('--otherTheme','gray');
            document.documentElement.style.setProperty('--hoverTheme','rgb(143, 143, 143)');
            
            const allElements = document.querySelectorAll('*');
            allElements.forEach(element => {
                element.style.color = 'black';
            });

            document.querySelector('.liveVideo').style.setProperty('color','red');
            document.querySelector('.photo').style.setProperty('color',' rgb(85, 128, 0)');
            document.querySelector('.feeling').style.setProperty('color','black');
  
            const loves = document.querySelectorAll('.love');
            loves.forEach(element => {
                element.style.setProperty('color','#ff4a4a')
            });
            const likes = document.querySelectorAll('.like');
            likes.forEach(element => {
                element.style.setProperty('color','#0080ff')
            });
            const laughs = document.querySelectorAll('.laugh');
            laughs.forEach(element => {
                element.style.setProperty('color','#ffff00')
            });
            const hates = document.querySelectorAll('.hate');
            hates.forEach(element => {
                element.style.setProperty('color','#ff0202');
            });
            
            defaultTheme = 0 ;
        }
        else{
            document.documentElement.style.setProperty('--mainTheme','rgb(30, 29, 29)');
            document.documentElement.style.setProperty('--main2Theme','rgb(30, 29, 29)');
            document.documentElement.style.setProperty('--secondTheme','rgb(34, 34, 34)');
            document.documentElement.style.setProperty('--postTheme','rgb(52, 52, 52)');
            document.documentElement.style.setProperty('--socialTheme','rgb(54, 54, 54)');
            document.documentElement.style.setProperty('--interactiveTheme','rgb(52, 52, 52)');
            document.documentElement.style.setProperty('--otherTheme','rgba(59, 57, 57)');
            document.documentElement.style.setProperty('--hoverTheme','rgb(78, 78, 78)');

            const allElements = document.querySelectorAll('*');
            allElements.forEach(element => {
                element.style.color = 'white';
            });

            document.querySelector('.liveVideo').style.setProperty('color','red');
            document.querySelector('.photo').style.setProperty('color','yellowgreen');
            document.querySelector('.feeling').style.setProperty('color','yellow');

            const loves = document.querySelectorAll('.love');
            loves.forEach(element => {
                element.style.setProperty('color','#ff4a4a')
            });
            const likes = document.querySelectorAll('.like');
            likes.forEach(element => {
                element.style.setProperty('color','#0080ff')
            });
            const laughs = document.querySelectorAll('.laugh');
            laughs.forEach(element => {
                element.style.setProperty('color','#ffff00')
            });
            const hates = document.querySelectorAll('.hate');
            hates.forEach(element => {
                element.style.setProperty('color','#ff0202');
            });
            
            defaultTheme = 1;
        }
    }

    // SEE MORE / SEE LESS
    const seeMoreBtn = document.querySelector('.seeMore');
    const seeLessBtn = document.querySelector('.seeLess');
    const seeOthers = document.querySelector('.see');
    if(seeMoreBtn.contains(e.target)){
        seeOthers.style.display = 'flex'
        seeMoreBtn.style.display = 'none'
    }
    if(seeLessBtn.contains(e.target)){
        seeOthers.style.display = 'none'
        seeMoreBtn.style.display = 'flex'
    }

    //SCROLL REEL
    const reelBox = document.querySelector('.reelBox');
    const reels = document.querySelectorAll('.reel');
    const previousBtn = document.querySelector('.previousBtn');
    const nextBtn = document.querySelector('.nextBtn');

    if(nextBtn.contains(e.target)){
        console.log('right');
        reelBox.scrollLeft +=reelBox.clientWidth; 
    }
    if(previousBtn.contains(e.target)){
        console.log('left')
        reelBox.scrollLeft -=reelBox.clientWidth; 
    }
})
