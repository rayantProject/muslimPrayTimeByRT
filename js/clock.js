    function initLocalClocks() {
        // Get the local time using JS
        var date = new Date;
        var seconds = date.getSeconds();
        var minutes = date.getMinutes();
        var hours = date.getHours();
    
        // Create an object with each hand and it's angle in degrees
        var hands = [
        {
            hand: 'hours',
            angle: (hours * 30) + (minutes / 2)
        },
        {
            hand: 'minutes',
            angle: (minutes * 6)
        },
        {
            hand: 'seconds',
            angle: (seconds * 6)
        }
        ];
        // Loop through each of these hands to set their angle
        for (var j = 0; j < hands.length; j++) {
        var elements = document.querySelectorAll('.' + hands[j].hand);
        for (var k = 0; k < elements.length; k++) {
            elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
            elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
            // If this is a minute hand, note the seconds position (to calculate minute position later)
            if (hands[j].hand === 'minutes') {
                elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
            }
        }
        }
    }


    function moveSecondHands() {
        var containers = document.querySelectorAll('.seconds-container');
        setInterval(function() {
          for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
              containers[i].angle = 6;
            } else {
              containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
            containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
          }
        }, 1000);
      }
    initLocalClocks()
    moveSecondHands()




// let prayComponent = (name, time) => 
// {

   
    
//     let li = document.createElement("li")
//     li.classList.add("list-group-item", "px-3", "d-flex", "justify-content-between")
    
//     let prayName = document.createElement("div")
//     prayName.append(n)
    
//     let praytime = document.createElement("div")
//     prayName.append(t)
//     praytime.textContent = time
//     praytime.classList.add("text-success")
//     return li.append(prayName, praytime)
    
    
// }



// let prayDayComponent = (date, prayTimes) => {
    
//     let 
//     divCard = document.createElement("div"), 
//     praysDate = document.createTextNode(date),
//     cardHeader = document.createElement("div"), 
//     cardBody = document.createElement("div"),
//     ul = document.createElement("ul"),
//     span = document.createElement("span"),
//     span2 = document.createElement("span")
    
    
//     divCard.classList.add('card', 'text-center', 'mt-5', 'mx-auto')
//     cardHeader.classList.add("card-header", "px-3")
//     cardBody.classList.add("card-body")
//     ul.classList.add('list-group', 'list-group-light', 'list-group-small')
//     span.classList.add("text-success")
    
    
//     divCard.append(cardHeader, cardBody)
//     cardBody.append(ul)
//     console.log(date);
//     span.appendChild(praysDate)
//     span2.append("For ")
//     cardHeader.append(span2, span)


   
//     let li = document.createElement("li")
//     li.classList.add("list-group-item", "d-flex", "justify-content-between")
    
//     // let prayName = document.createElement("div")
//     // prayName.append(document.createTextNode(prayTimes.name))
    
//     // let prayTime = document.createElement("div")
//     // prayTime.append(document.createTextNode(prayTimes.time))
//     // // praytime.textContent = time
//     // prayTime.classList.add("text-success")

//     // li.append(prayName, prayTime)
//     // // let b = document.createElement("b").append("Prayer times in",span)
//     // ul.append(li)
//     testUl.append(divCard)
    
// }





// function praysDayComponent(itemElement) {
//     itemElement = itemElement



//     let card, cardHeader, cardBody, ul, 
//     Fadjr, Shurooq, Dhuhr, Asr, Magrib, Isha, dateDay
    
//     // HTML VISUAL ELEMENT 
//     card = document.createElement("div")
//     cardHeader = document.createElement("div")
//     cardBody = document.createElement("div")
//     ul = document.createElement("ul")


//     // TEXT ELEMENT
//     Fadjr = document.createTextNode(itemElement.fadjr)
//     Shurooq = document.createTextNode(itemElement.shurooq)
//     Dhuhr = document.createTextNode(itemElement.dhuhr)
//     Asr = document.createTextNode(itemElement.asr)
//     Magrib = document.createTextNode(itemElement.magrib)
//     Isha = document.createTextNode(itemElement.isha)
//     dateDay = document.createTextNode(itemElement.date_for)




    





// }

// praysDayComponent()