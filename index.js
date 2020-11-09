(function() {
  function $(id) {
    console.log(id);
    console.log(document.getElementById(id));
    return document.getElementById(id);
  }

//getting the element by Id
  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);

  if(card){
    //when open button is clicked, open-half class is added
    //open half and then after 1 second, open the left side of the card to add animation
    openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000); //delay of 1 second
  });

//close one flap first and then the other after a delay
  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });
}

}());
