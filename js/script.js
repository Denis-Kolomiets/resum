
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const owl = $('.owl-carousel');
owl.owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        item: 4,
        responsive : {
            
            0 : {  
                item: 1,
                margin: 20
            },
            480 : {    
                item: 1,
                margin: 10
            },
            1000 : {
                margin: 15
            },
            1200 : {
                margin: 30
            }
        }
});

