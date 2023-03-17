function scuberGreetingForFeet(i){
  let message = 'This one is on me!'
  if (i < 400)
  return message
  else if (399 < i, i < 2000)
  return "That will be twenty bucks."
  else if (i > 2000, i < 2500)
  return "I will gladly take your thirty bucks."
  else if (i > 2500)
  return "No can do."
 
 
}

function ternaryCheckCity(city){
  return city === `NYC`? `Ok, sounds good.`: `No go.`

}


function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return "Thank you so much."
    case "not as generous":
      return 'Thank you.'
    default:
      return 'Bye.'

  }
}