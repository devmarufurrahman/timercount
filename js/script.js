const endDate = "17 December 2022 01:02 am";
document.getElementById("endDate").innerHTML = endDate

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const difference = (end - now) / 1000;

    if(difference<0){
        window.location.replace("https://www.linkedin.com/in/md-marufur-rahman-700/");
        target = "_blank";
    };

  const days = Math.floor(difference / 3600 / 24);
  const hours = Math.floor(difference / 3600);
  const minutes = Math.floor(difference / 60);
  const seconds = Math.floor(difference);

  //Output Element
  document.getElementById("days").value = days;
  document.getElementById("hours").value = hours;
  document.getElementById("minutes").value = minutes;
  document.getElementById("seconds").value = seconds;
}
// Initial call
clock();


setInterval(
    ()=>{
        clock()
    },1000
)
