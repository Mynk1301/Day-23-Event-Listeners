let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');


test = () =>{
    console.log('Button was clicked.')
}

btn.addEventListener('click' , test);     //adding event listener and using fn name as reference.

btn1.addEventListener('click',()=>{        //we can pass fn directly into event listener as well.
    console.log('Follow me was clicked')
})

btn1.addEventListener('click',(e)=>{        //we can pass fn directly into event listener as well and the parameter too in that.
    console.log(e);       //passing either e or event will give us every single detail abt it and he file as well.
})

// btns.addEventListener('click',()=>{
//     console.log(btns);
// })


let btns = document.querySelectorAll('#button');
btns.forEach((btn)=>{            //fn to know which btn is exactly clicked.
    btn.addEventListener('click',(e)=>{
        let btn = e.target;
        console.log(btn.innerText + ' clicked');
        btn.innerText='Clicked!!';          //to tell user which bn is clicked.
        btn.setAttribute('disabled',true);   //to make sure that user cant click it twice.
    })
})


//Events in event listener
//onmouse in
let demo = document.querySelector('.demo3');
let alert = document.querySelector('.alert');

demo.addEventListener('mouseover',()=>{
    alert.classList.add('green');
    alert.innerText='Mouse was bring over the box';
    setTimeout(()=>{
        alert.classList.remove('green');
    },1000)
})


// onmouse out

demo.addEventListener('mouseout',()=>{
    alert.classList.add('red');
    alert.innerText='Mouse was bring out of the box !!';
    setTimeout(()=>{
        alert.classList.remove('red');
    },1000)

})

//onchange (works with input field only )

let demo4 = document.querySelectorAll('input');
demo4.forEach((input)=>{
    input.addEventListener('change',()=>{
        console.log(input.value);
    })
})

//onkeyup onkeyDown

//basic idea--> used in typing speed tests

let dd = document.getElementById('abb');
let ad = document.getElementById('preview');
dd.addEventListener('keyup',()=>{         //keyup is used mostly than keydown
    console.log(dd.value);
    ad.innerText=dd.value;
})


//scroll
let help = document.getElementById('moye');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 500 ){
        help.classList.add('hidden');
    }
    else{
        help.classList.remove('hidden');
    }


})

//load

let loader = document.getElementById('loader');
loader.classList.remove('hidden');    //removing the display:none;
loader.classList.add('page-loader');      //adding some dimensions to the loader

window.addEventListener('load',()=>{
    loader.classList.remove('page-loader');  //removing dimensions from loader
    loader.classList.add('hidden');     //hiding the loader once our page loaded
})


