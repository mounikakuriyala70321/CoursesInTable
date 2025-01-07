    let courses = [
        {
            id : 1,
            name : "HTML5",
            img : "https://thumbs.dreamstime.com/b/html-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-html-logo-editorial-illustrative-white-208329416.jpg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora possimus reiciendis. Maiores, est? Mollitia quam, dolor ad consequatur id fuga, unde natus at tenetur perspiciatis doloribus porro ipsa commodi?",
            duration : "60 min",
            fee : 10000
        },
        {   id : 2,
            name : "CSS3",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH-oIAvcVSDEN54K4XFbmUAynW9xva-dQ0g&s",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora possimus reiciendis. Maiores, est? Mollitia quam, dolor ad consequatur id fuga, unde natus at tenetur perspiciatis doloribus porro ipsa commodi?",
            duration : "30 min",
            fee : 500
        },
        {
            id : 3,
            name : "JavaScript",
            img : "https://www.freecodecamp.org/news/content/images/2020/04/jsposter.jpg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora possimus reiciendis. Maiores, est? Mollitia quam, dolor ad consequatur id fuga, unde natus at tenetur perspiciatis doloribus porro ipsa commodi?",
            duration : "70 min",
            fee : 20000
        },
        {
            id : 4,
            name : "React.JS",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZ_hbMNHn7fx2cJbeuaYMGFWN0jvIrAsPqg&s",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora possimus reiciendis. Maiores, est? Mollitia quam, dolor ad consequatur id fuga, unde natus at tenetur perspiciatis doloribus porro ipsa commodi?",
            duration : "1 hr",
            fee : 22000
        },
        {
            id : 5,
            name : "Node.JS",
            img : "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora possimus reiciendis. Maiores, est? Mollitia quam, dolor ad consequatur id fuga, unde natus at tenetur perspiciatis doloribus porro ipsa commodi?",
            duration : "90 min",
            fee : 12000
        },
        {
            id : 6,
            name : "Next.JS",
            img : "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230202143636/NEXT-js-tutorial-1.png",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora possimus reiciendis. Maiores, est? Mollitia quam, dolor ad consequatur id fuga, unde natus at tenetur perspiciatis doloribus porro ipsa commodi?",
            duration : "70 min",
            fee : 20000
        },
        {
            id : 7,
            name : "Bootstrap 5",
            img : "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/152896/images/OzA7RhDQHOlsIrnB5LqQ_file.jpg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora possimus reiciendis. Maiores, est? Mollitia quam, dolor ad consequatur id fuga, unde natus at tenetur perspiciatis doloribus porro ipsa commodi?",
            duration : "30 min",
            fee : 5000
        }
    ]
    let p = " "
    for(let i = 0;i < courses.length; i++){
        p += `<tr>
                <td>${courses[i].id}</td>
                <td>${courses[i].name}</td>
                <td><img src="${courses[i].img}" alt="" width="100px" height="100px"></td>
                <td>${courses[i].content}</td>
                <td>${courses[i].duration}</td>
                <td>${courses[i].fee}</td>
            </tr>`
    }
document.getElementById("data").innerHTML = p


//low-high fee
function ascending(){
    let asc = courses.sort((a,b)=>{return a.fee - b.fee})
    let p1 = " "
    for(let i = 0;i < asc.length; i++){
        p1 += `<tr>
                <td>${asc[i].id}</td>
                <td>${asc[i].name}</td>
                <td><img src="${asc[i].img}" alt="" width="100px" height="100px"></td>
                <td>${asc[i].content}</td>
                <td>${asc[i].duration}</td>
                <td>${asc[i].fee}</td>
            </tr>`
    }
    document.getElementById("data").innerHTML = p1
}

//high-low
function descending(){
    courses.sort((a,b)=> {return b.fee - a.fee})
    let p1 = ""
    for(let x of courses){
        p1 += `<tr>
                <td>${x.id}</td>
                <td>${x.name}</td>
                <td><img src="${x.img}" alt="" width="100px" height="100px"></td>
                <td>${x.content}</td>
                <td>${x.duration}</td>
                <td>${x.fee}</td>
            </tr>`
    }
    document.getElementById("data").innerHTML = p1
}

//new-old
function New(){
    courses.sort((a,b)=>{return b.id - a.id})
    let p1 = ""
    for(let x of courses){
        p1 += `<tr>
                <td>${x.id}</td>
                <td>${x.name}</td>
                <td><img src="${x.img}" alt="" width="100px" height="100px"></td>
                <td>${x.content}</td>
                <td>${x.duration}</td>
                <td>${x.fee}</td>
            </tr>`
    }
    document.getElementById("data").innerHTML = p1
}

//above 15000
function above(){
    let asc = courses.filter((value, index)=>{return value.fee >= 15000})
    let p1 = " "
    if (asc.length === 0) {
        p1 = `<tr><td colspan="6" class="text-center">No courses found above the fee of 22000.</td></tr>`;
    } else {
        for(let i = 0;i < asc.length; i++){
            p1 += `<tr>
                    <td>${asc[i].id}</td>
                    <td>${asc[i].name}</td>
                    <td><img src="${asc[i].img}" alt="" width="100px" height="100px"></td>
                    <td>${asc[i].content}</td>
                    <td>${asc[i].duration}</td>
                    <td>${asc[i].fee}</td>
                </tr>`
        }
    }
    document.getElementById("data").innerHTML = p1
}

//below 15000
function below(){
    let asc = courses.filter((value, index)=>{return value.fee < 15000})
    let p1 = " "
    if (asc.length === 0) {
        p1 = `<tr><td colspan="6" class="text-center">No courses found below the fee of 500.</td></tr>`;
    } else {
        for(let i = 0;i < asc.length; i++){
            p1 += `<tr>
                    <td>${asc[i].id}</td>
                    <td>${asc[i].name}</td>
                    <td><img src="${asc[i].img}" alt="" width="100px" height="100px"></td>
                    <td>${asc[i].content}</td>
                    <td>${asc[i].duration}</td>
                    <td>${asc[i].fee}</td>
                </tr>`
        }
    }
    document.getElementById("data").innerHTML = p1
}


//between 10000 - 20000
function range(){
    let asc = courses.filter((value, index)=>{return value.fee >= 10000 && value.fee <= 20000})
    let p1 = " "
    if (asc.length === 0) {
        p1 = `<tr><td colspan="6" class="text-center">No courses found between 10k-20k of the fee.</td></tr>`;
    } else {
        for(let i = 0;i < asc.length; i++){
            p1 += `<tr>
                    <td>${asc[i].id}</td>
                    <td>${asc[i].name}</td>
                    <td><img src="${asc[i].img}" alt="" width="100px" height="100px"></td>
                    <td>${asc[i].content}</td>
                    <td>${asc[i].duration}</td>
                    <td>${asc[i].fee}</td>
                </tr>`
        }
    }
    document.getElementById("data").innerHTML = p1
}
