$('.settings-container').fadeOut(50);
let HudFunctions = {
    HudSimple: function (Voice, Health, VoiceMode, Radio, Armor, Eat, Water, Strees, Walk) {
        if (Voice == true) {
            $("#mic-pressent").css("background-color", `#ff6600`);
            $("#Mic-Icon").removeClass("fa-sharp fa-solid fa-microphone-lines-slash");
            $("#Mic-Icon").addClass("fa-sharp fa-solid fa-microphone");
        } else {
            $("#mic-pressent").css("background-color", `#bdbab9`);
            $("#svg-mic").css("height", `${100 + 30}%`);
            $("#Mic-Icon").removeClass("fa-sharp fa-solid fa-microphone");
            $("#Mic-Icon").addClass("fa-sharp fa-solid fa-microphone-lines-slash");
        }
        if (Radio == true) {
            $("#mic-pressent").css("background-color", `#c5151e`);
            $("#svg-mic").css("height", `${100 + 100}%`);
            $("#Mic-Icon").removeClass("fa-sharp fa-solid fa-microphone-lines-slash");
            $("#Mic-Icon").addClass("fa-sharp fa-solid fa-headphones");
        } else {
            $("#Mic-Icon").removeClass("fa-sharp fa-solid fa-headphones");
            $("#Mic-Icon").addClass("fa-sharp fa-solid fa-microphone-lines-slash");
        }
        if (Armor <= 0) {
            $("#armorhud").fadeOut(500);
        } else {
            $("#armorhud").fadeIn(500);
        }
        if (Health < 100) {
            $("#healthhud").fadeIn(500);
        } else {
            $("#healthhud").fadeOut(500);
        }
        if (VoiceMode == 1) {
            $("#svg-mic").css("height", `${100 + 15}%`);
        }else if (VoiceMode == 2) {
            $("#svg-mic").css("height", `${100 + 60}%`);
        }else if (VoiceMode == 3) {
            $("#svg-mic").css("height", `${100 + 100}%`);
        }
        if (Eat < 100) {
            $("#eathud").fadeIn(500);
        } else {
            $("#eathud").fadeOut(500);
        }
        if (Water < 100) {
            $("#waterhud").fadeIn(500);
        } else {
            $("#waterhud").fadeOut(500);
        }
        if (Walk < 100) {
            $("#walkhud").fadeIn(500);
        } else {
            $("#walkhud").fadeOut(500);
        }
        $("#svg-health").css("height", `${100 + Health}%`);
        $("#svg-armor").css("height", `${100 + Armor}%`);
        $("#svg-eat").css("height", `${100 + Eat}%`);
        $("#svg-water").css("height", `${100 + Water}%`);
        $("#svg-strees").css("height", `${100 + Strees}%`);
        $("#svg-walk").css("height", `${100 + Walk}%`);
    },
    HudCar: function (StreetName, Fuel, Engine, Speed, Gear , SeatBelt) {
        $(".hud-car").fadeIn(500);
        $(".streeat-name").html(StreetName)
        $("#svg-fuel").css("height", `${100 + Fuel}%`);
        $("#svg-engine").css("height" , `${100 +Engine / 10}%`);
        $(".gear-label").html(Gear);
        if (Gear === 0) {
            $(".gear-label").html("R");
        } else {
            $(".gear-label").html(Gear);
        }
        if (Speed == 0) {
            $(".gear-label").html("N");
        }
        $(".km").html("00" + Speed);
        if (Speed > 10) {
            $(".km").html("0" + Speed);
        }
        if (Speed > 100) {
            $(".km").html(Speed);
        }
    
        if (SeatBelt === true) {
            $(".seat-circle").fadeOut(500)
        }else{
            $(".seat-circle").fadeIn(500)
        }
},
    updateRPM : function (rpm) {
        var rpmBar = document.getElementById('rpmBar');
        if (rpmBar) {
            var items = rpmBar.getElementsByClassName('seggement');
            for (var i = 0; i < 17; i++) {
                var item;
                if (items[i]) {
                    item = items[i];
                }
                item.classList.remove('filled', 'between', 'critical');
                if (i < rpm) {
                    if (i >= 14) {
                        item.classList.add('critical');
                    } else if (i >= 11) {
                        item.classList.add('between');
                    } else {
                        item.classList.add('filled');
                    }
                }
            }
        } else {
        } 
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.settings-container').fadeOut(500);

        fetch(`https://m3-hud/closeMenu`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ close: true })
        }).then(response => response.json())
          .then(data => {
        });
    }
});

document.getElementById('minimap-toggle').addEventListener('change', function() {
    // Send event to Lua to update the minimap setting
    const isMinimapVisible = this.checked; // Get the current status of the minimap toggle
    // Send data to Lua via NUI callback
    fetch(`https://m3-hud/toggleMinimap`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ showMinimap: isMinimapVisible })
    }).then(response => response.json())
      .then(data => {
        console.log('Minimap visibility updated:', data.success);
    });
});


// document.getElementById('health-toggle').addEventListener('change', function() {
//     // const healthBox = document.querySelector('.health-box'); // Replace with actual health box element class
//     if (this.checked) {
//         $("#healthhud").fadeIn(500);
//     } else {
//         $("#healthhud").fadeOut(500);
//     }
// });

// document.getElementById('armor-toggle').addEventListener('change', function() {
//     // const armorBox = document.querySelector('.armor-box'); // Replace with actual armor box element class
//     if (this.checked) {
//         $("#armorhud").fadeIn(500);
//     } else {
//         $("#armorhud").fadeOut(500);
//     }
// });

// document.getElementById('walk-toggle').addEventListener('change', function() {
//     // const walkBox = document.querySelector('.walk-box'); // Replace with actual walk box element class
//     if (this.checked) {
//         $("#walkhud").fadeIn(500);
//     } else {
//         $("#walkhud").fadeIn(500);
//     }
// });

// document.getElementById('eat-toggle').addEventListener('change', function() {
//     // const eatBox = document.querySelector('.eat-box'); // Replace with actual eat box element class
//     if (this.checked) {
//         $("#eathud").fadeIn(500);
//     } else {
//         $("#eathud").fadeOut(500);
//     }
// });

// document.getElementById('water-toggle').addEventListener('change', function() {
//     // const waterBox = document.querySelector('.water-box'); // Replace with actual water box element class
//     if (this.checked) {
//         $("#waterhud").fadeOut(500);
//     } else {
//         $("#waterhud").fadeOut(500);
//     }
// });

window.addEventListener('message', (event) => {
    let data = event.data
    if  (data.menu == true) {
    document.getElementById('minimap-label').textContent = event.data.minimapLabel; 
    // document.getElementById('MENU-LABEL').textContent = event.data.menuLabel; 
        $('.settings-container').fadeIn(500);
    } else if (data.menu == false) {
        $('.settings-container').fadeOut(50); 
    }
    if (data.action === true) {
        switch (data.type) {
            case "SimpleHud":
                $(".hud-main").css("display", "flex");
                $(".hud-car").fadeOut(500);
                $(".hud-main").fadeIn(500);
                HudFunctions.HudSimple(data.voice, data.health, data.voicemode,data.radio, data.armor, data.food, data.thirst, data.stress, data.stamina)
                break;
            case "CarHud":
                $(".hud-car").css("display", "block");
                $(".hud-main").css("display", "flex");
                HudFunctions.HudSimple(data.voice, data.health, data.voicemode, data.radio, data.armor, data.food, data.thirst, data.stress, data.stamina)
                                HudFunctions.HudCar(data.area, data.fuel, data.enginerun, data.vehspeed, data.gear , data.seatbelt)
                HudFunctions.updateRPM((data.rpm / 1) * 18)
                break;
            default:
                break;
        }
    } else if (data.action === false) {
        switch (data.type) {
            case "SimpleHud":
                $(".hud-main").fadeOut(500);
                $(".hud-main").css("display", "none");
                break;
            case "CarHud":
                $(".hud-car").css("display", "none");
                $(".hud-car").fadeOut(500);
                $(".hud-main").fadeOut(500);
                break;
            default:
                break;
        }
    }
})