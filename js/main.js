function validateAge(){
    year = document.getElementById("year").value;
    month = document.getElementById("month").value;
    day = document.getElementById("day").value;
    dob = new Date(year+" "+month+" "+day);

    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if(age >= 18){
        window.location.href="home.html"
    }else{
        result = document.getElementById("result");
        if (result.classList.contains('hidden')) {
            setTimeout(function () {
                result.classList.remove('hidden');
            }, 20);
        }

    }

    return false;
}

function displayFAQ() {
    const answers = document.getElementByClass('abswers')
    alert("asdasdasd");
    answers.classList.toggle("show")
}

function displayLabel(element){
    target = element.id;
    document.getElementById(target+"-label").classList.add("opacity-1");
}

function changeImage(element){
    target = element.dataset.target;
    document.getElementById("cap").src="assets/sliced-images/"+target+"/section-01.png";
    document.getElementById("bottle").src="assets/sliced-images/"+target+"/section-02.png";
    document.getElementById("beer").src="assets/sliced-images/"+target+"/section-03.png";
}


function showDesc(e){
    var elems = document.querySelectorAll(".carousel-content-item"); //remove for all
    [].forEach.call(elems, function(el) {
        el.classList.remove("active");
    });

    document.getElementById(e).classList.add("active"); //add on clicked
}


function displayNavMobile() {
    var x = document.getElementById("main-nav");
    if (x.style.opacity === "1") {
      x.style.opacity = "0";
    } else {
      x.style.opacity = "1";
    }
}

function scrollNextFold(){
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('load', function(){

    /* About Us Slider*/
    new Glider(document.querySelector('.glider'), {
        slidesToScroll: 1,
        slidesToShow: 4.5,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        dots: '.dots'
    });


    /* About Us Accordion*/
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(faqItem =>{
        let btn = faqItem.querySelector('.question button');
        let icon = faqItem.querySelector('.question button i');
        var answer = faqItem.lastElementChild;
        var answers = document.querySelectorAll('.faq-item .answer');
        
        btn.addEventListener('click', ()=>{
            answers.forEach(ans =>{
                let ansIcon = ans.parentElement.querySelector('button i');
                if(answer !== ans){
                    ans.classList.add('hidden');
                    ansIcon.className = 'arrow down';
                }
            });
            
            answer.classList.toggle('hidden');
            icon.className === 'arrow down' ? icon.className = 'arrow up' 
            : icon.className ='arrow down';
        });
    });
    
});


