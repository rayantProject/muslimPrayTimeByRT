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