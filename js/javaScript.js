function sleep(tijd) {
  return new timeHold(
    function resolve(){
      setTimeout(resolve, tijd)
    });
}
const beginQ = document.querySelectorAll('.change');
const beginScherm = document.querySelectorAll('#beginScherm');
const registreer = document.getElementsByTagName('b');
const menu = document.querySelectorAll('#menu');;

//menu veranderen
let menuVeranderId = document.getElementById('menu');

  function beginScherm1()
  {
      for (let i=0; i < beginQ.length; i++)
      {
    //    document.querySelector('.change').style.display = "flex";
        setTimeout(() => {  beginQ[0].style.display = "inline-block";}, 300);


        setTimeout(() => {  beginQ[1].style.display = "inline-block";}, 1300);
        setTimeout(() => {  beginQ[2].style.display = "block";}, 2300);

        //delete rekst: registreer en pak leven weer op
    //  setTimeout(() => {  registreer[0].style.display = "none";}, 6000);
      setTimeout(() => {  luve[0].style.display = "block";}, 6000);
      setTimeout(() => {  menu[0].style.display = "grid";}, 6000);


      }
  }
