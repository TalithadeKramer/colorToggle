console.log("hello")

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector("nav-sidebar");
    let getSidebarUl = document.querySelector("nav-ul");
    let getSidebarTitle = document.querySelector("span");
    let getSidebarLinks = document.querySelectorAll("button");
    console.log(getSidebar);
    console.log(getSidebarUl);
    console.log(getSidebarTitle);
    console.log(getSidebarLinks);

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "300px";
        getSidebarTitle.style.opacity = "0.5";

        let arraylength = getSidebarLinks.length;
        for (let i = 0; i < arraylength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus === true;
    }


}








































/*let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar ul span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar ul button");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visability = "visable";
        getSidebar.style.width = "200px";
        getSidebarTitle.style.opacity = "1";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visability = "hidden";


        toggleNavStatus = false;
    }
}

const backgroundRood = () => {
    document.body.style.backgroundColor = '#f65d5d';
};
button1.addEventListener("click", backgroundRood);


const backgroundGroen = () => {
    document.body.style.backgroundColor = '#50a42e';
};
button2.addEventListener("click", backgroundGroen);


const backgroundBlauw = () => {
    document.body.style.backgroundColor = '#2195e1';
};
button3.addEventListener("click", backgroundBlauw);

const backgroundPaars = () => {
    document.body.style.backgroundColor = '#905b95';
};
button4.addEventListener("click", backgroundPaars);

const backgroundReset = () => {
    document.body.style.backgroundColor = '#fff';
};
button5.addEventListener("click", backgroundReset);*/