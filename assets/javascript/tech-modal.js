// Modal , Button and Span selections

// 1st Project
let modal_1 = document.querySelector('#myModal-1');
let btn_1 = document.querySelector('#btn-1');
let close_1 = document.querySelector('#close-1');

// 2nd Project
let modal_2 = document.querySelector('#myModal-2');
let btn_2 = document.querySelector('#btn-2');
let close_2 = document.querySelector('#close-2');

// 3rd Project
// let modal_3 = document.querySelector('#myModal-3');
// let btn_3 = document.querySelector('#btn-3');
// let close_3 = document.querySelector('#close-3');

// 4th Project
// let modal_4 = document.querySelector('#myModal-4');
// let btn_4 = document.querySelector('#btn-4');
// let close_4 = document.querySelector('#close-4');

// 5th Project
let modal_5 = document.querySelector('#myModal-5');
let btn_5 = document.querySelector('#btn-5');
let close_5 = document.querySelector('#close-5');

// 6th Project
let modal_6 = document.querySelector('#myModal-6');
let btn_6 = document.querySelector('#btn-6');
let close_6 = document.querySelector('#close-6');

// 7th Project
let modal_7 = document.querySelector('#myModal-7');
let btn_7 = document.querySelector('#btn-7');
let close_7 = document.querySelector('#close-7');

// Onclick functions

btn_1.onclick = () => {
    console.log('Im btn 1');
    modal_1.style.display = "block";

    close_1.onclick = () => {
        modal_1.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target == modal_1) {
          modal_1.style.display = "none";
        }
    }
}

btn_2.onclick = () => {
    console.log('Im btn 2');
    modal_2.style.display = "block";

    close_2.onclick = () => {
        modal_2.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target == modal_2) {
          modal_2.style.display = "none";
        }
    }
}

// btn_3.onclick = () => {
//     console.log('Im btn 3');
//     modal_3.style.display = "block";

//     close_3.onclick = () => {
//         modal_3.style.display = "none";
//     }

//     window.onclick = (e) => {
//         if (e.target == modal_3) {
//           modal_3.style.display = "none";
//         }
//     }
// }

// btn_4.onclick = () => {
//     console.log('Im btn 4');
//     modal_4.style.display = "block";

//     close_4.onclick = () => {
//         modal_4.style.display = "none";
//     }

//     window.onclick = (e) => {
//         if (e.target == modal_4) {
//           modal_4.style.display = "none";
//         }
//     }
// }

btn_5.onclick = () => {
    console.log('Im btn 5');
    modal_5.style.display = "block";

    close_5.onclick = () => {
        modal_5.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target == modal_5) {
          modal_5.style.display = "none";
        }
    }
}

btn_6.onclick = () => {
    console.log('Im btn 6');
    modal_6.style.display = "block";

    close_6.onclick = () => {
        modal_6.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target == modal_6) {
          modal_6.style.display = "none";
        }
    }
}

btn_7.onclick = () => {
    console.log('Im btn 7');
    modal_7.style.display = "block";

    close_7.onclick = () => {
        modal_7.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target == modal_7) {
          modal_7.style.display = "none";
        }
    }
}