// HACK CONNECT
'use strict';

const Letters = 
[ 
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["Φ", "Χ", "Γ", "Δ", "Ε", "Θ", "Λ", "Ξ", "Π", "Σ", "Ψ", "Ω"]
];

let hackmgsayac = 1
let bruteforcesayac = 1

let randomnumberssans = 0
let bruteforcesans = 0

let showRandomNumbers = false
let showBruteForce = false
let NeedToDoEverything = false

let RandomNumberstime;
let BruteForceTime;
let bruteForceLettersTime;
let RandomNumbersHackTime;

let ilkMinigameDone = false
let ikinciMinigameDone = false

const selam = new Date();
const hours = selam.getHours();
const minutes = selam.getMinutes();
const year = selam.getFullYear();
const month = selam.getMonth() + 1;
const day = selam.getDate();

$(document).ready(function() {
  

  window.addEventListener('message' , function(e) {
    if(e.data.justopen) {
      $(".mainapp").css('display', 'flex')
    } else {
      const Locales = JSON.parse(e.data.locales)                    
      const Times = JSON.parse(e.data.times)
      const Chances = JSON.parse(e.data.chances)
      // console.log(JSON.stringify(Locales))
      // console.log(JSON.stringify(Times))
      // console.log(JSON.parse(e.data.times)  .RandomNumbersTime)
      randomnumberssans = `${Chances.RandomNumbersChance}`
      bruteforcesans = `${Chances.BruteForceChance}`
      RandomNumberstime = `${Times.RandomNumbersTime}`
      BruteForceTime = `${Times.BruteForceTime}`
      bruteForceLettersTime = `${Times.BruteForceSpeed}`
      RandomNumbersHackTime = `${Times.RandomNumbersSpeed}`
      // console.log(RandomNumbersHackTime)
      // console.log(bruteForceLettersTime)
  
      showRandomNumbers = false
      showBruteForce = false
      NeedToDoEverything = false
      hackmgsayac = 1
      bruteforcesayac = 1
      // console.log(Locales)
      // // localesText = Locales
      // // console.log(`${Locales.MyComputer}`)
  
      // cons
  
      // // console.log(`${JSON.parse(e.data.times).RandomNumbersTime}`)
  
      $("#myComputerText").html(`${Locales.MyComputer}`)
  
      $("#powerText").html(`${Locales.Power}`)
  
      $("#hackconnectyazi").html(`${Locales.HackConnextExeTitle}`)
  
      $("#localyazisecenek").html(`${Locales.LocalC}`)
  
      $("#globalnetworkyazisecenek").html(`${Locales.GlobalNetwork}`)
  
      $("#externaldeviceyazisecenek").html(`${Locales.ExternalDeviceD}`)
  
      $("#externalsecenek2minigame").html(`${Locales.ExternalDeviceTitle}`)
  
      $("#minigameBaslangiciHackConnect").html(`${Locales.HackConnectExeMinigame}`)
  
      $("#minigameBaslangiciBruteForceConnect").html(`${Locales.BruteForceConnectExeMinigame}`)
  
      $("#alttakiyaziRandomsayilar").html(`${Locales.Compromissingglobalsecurityoneslipatatime}`)
  
      $("#ipaddress").html(`${Locales.ipadress}`)
  
      $("#backDoorText").html(`${Locales.backDoorText}`)
  
      $("#hackConnectExeTitle").html(`${Locales.HackConnectExeTitle}`)
  
  
  
      // //
  
      $(".mainapp").css('display', 'flex')
  
      if(e.data.showRandomNumbers) {
        // console.log("Random Numbers minigame selected. (ONLY)")
        showRandomNumbers = true
      }
  
      if (e.data.showBruteForce) {
        showBruteForce = true
      }
  
      if (e.data.NeedToDoEverything) {
        NeedToDoEverything = true
        // düşüncem
      }
    }
  })
})

// console.log(localesText)

const 
  loadingText = document.querySelector('.loadingText'),
  bgLoading = document.querySelector('.bgLoading'),
  bgTablet = document.querySelector('.bgTablet'),
  combination = document.querySelector('.txtCombination'),
  timeLeft = document.querySelector('.timeLeft'),
  allCombinations = document.querySelector('.hackconnect_minigamearea');

let 
  loadingCount,
  timeRemaining,
  rndCombination = [],
  comb = [],
  curField,
  corrCombination,
  gType = 1;

// Timers
let
  refreshTimer,
  cdTimer,
  loadTimer,
  tempTimeout;

let hackmgstarted = false 
const init = () =>
{
    loadingCount = 0;
    timeRemaining = Number(RandomNumberstime);
    curField = 0;
    corrCombination = -1;
    hackmgstarted = true 

    rndCombination.length = 0;
    comb.length = 0;
}

let bruteforcemevcutsira = 1;

const loadTablet = () => // Pretty self explanatory
{
//   bgLoading.classList.add('hidden');
//   bgTablet.classList.remove('hidden');

  loadCombination();
  startCountDownTimer();
};

const loadCombination = () => // Creates the spans and sorts them by ID using the insertAdjacentHTML
{
    let allCombinations = document.querySelector('.hackconnect_minigamearea');
  allCombinations.innerHTML = "";
  

  let 
    calcComb = "",
    rndLet = "";
  
  createCombination();
  
  for(let i = 0; i < 60; ++i)
  {
    rndLet = rndCombination[i];
    calcComb += `<span id="S${i}">${rndLet}</span>`;
  }
  
  // console.log(calcComb)
  allCombinations.innerHTML = calcComb;
  curField = Math.round(Math.random() * (60 - 0) + 0); // Random starting field

  highlightText();
  refreshLetters();
}

const highlightText = () => // Adds color to the selected field
{
  for(let i = 0; i <= 59; ++i) {
    $("#S" + i).removeClass('selectednumber');
    $("#S" + i).removeClass('a');
    $("#S" + i).removeClass('e');
  }

  for(let x=0; x <= 3; ++x) {
    // console.log(curField, x)
    let numb = curField + x
    $("#S" + numb).addClass('selectednumber');
    if(x == 0) {
        $("#S" + numb).addClass('a');
    }
    if(x == 3) {
        $("#S" + numb).addClass('e');
    }
  }
}

const refreshLetters = () => // Shifts the array and updates the spans
{
  refreshTimer = setInterval(
  () => 
    {
      rndCombination.shift();
      if(--corrCombination < 0)
        endTask('dick');

      for(let i = 0; i < 59; ++i)
      {
        document.getElementById(`S${i}`).textContent = rndCombination[i];
      }
    },
    RandomNumbersHackTime 
  );
}

const createCombination = () => // Creates a random combination and inserts the required one that needs to be found
{
    let combination = document.querySelector('.txtCombination')
  const 
    max = Math.random() * (80 - 78) + 78,
    min = Math.random() * (25 - 16) + 16;
  
  for(let i = 0; i < 160; ++i)
    rndCombination.push(Letters[gType][Math.floor(Math.random() * Letters[gType].length)] + Letters[gType][Math.floor(Math.random() * Letters[gType].length)]);
  
  let
    insertComb = Math.round(Math.random() * (max - min) + min);
  
  for(let i = 0; i < 4; ++i)
    comb.push(Letters[gType][Math.floor(Math.random() * Letters[gType].length)] + Letters[gType][Math.floor(Math.random() * Letters[gType].length)]);

  corrCombination = insertComb;
  
  for(let x=0; x <= 3; ++x)
  {
    rndCombination[insertComb] = comb[x];
    ++insertComb;
  }
  combination.textContent = comb[0] + "." + comb[1] + "." + comb[2] + "." + comb[3];
}


const startCountDownTimer = () => // Just a simple countdown timer for the time left :)
{
  cdTimer = setInterval(
  () =>
    {
      timeRemaining -= 0.0842;
      // timeLeft.textContent = Number((timeRemaining).toFixed(2));
      $('.timeLeft').html(Number((timeRemaining).toFixed(2)))

      if(timeRemaining <= 0.1)
        endTask(false);
    },
    100
  );
}



const endTask = (state = false) => // Ends the hack (if successful then its true & if failed its false)
{
    // console.log(state)
//   bgLoading.classList.remove('hidden');
//   bgTablet.classList.add('hidden');

//   loadingText.textContent = (state ? "SEQUENCE ACCEPTED!" : "SEQUENCE FAILED!");
    $("#connectinghost").html(state ? "Connected to host!" : "Failed!")
    // sendNotify("Error", "You've failed the minigame.")

  clearInterval(refreshTimer);
  clearInterval(cdTimer);
  // console.log(state)
  hackmgstarted = false 
  hackingmg(state)
//   if(state !== 'dick') {
//     $.post(`https://0r_hackingminigame/endTask`, JSON.stringify({
//       success: state,
//     }));
//   }

}

$(document).ready(function(){
    
document.body.addEventListener("keydown", function(event)
{
  if(hackmgstarted) {
    if(timeRemaining != 15.0) // Did the tablet start up? If no ignore the input...
    {
      if(event.code === "ArrowUp" || event.code === "KeyW") 
      {
        if(curField >= 10)
          curField -= 10;
      }
      else if(event.code === "ArrowDown" || event.code === "KeyS")
      {
        if(curField < 51)
          curField += 10;
      }
      else if(event.code === "ArrowLeft" || event.code === "KeyA")
      {
        if(curField != 0)
          curField -= 1;
      }
      else if(event.code === "ArrowRight" || event.code === "KeyD")
      {
        if(curField != 56)
          curField += 1;
      }
      else if(event.code === "Enter" || event.code === "NumpadEnter")
      {
          // console.log(curField, corrCombination)
        endTask(curField == corrCombination ? true : false);
        return 1;
      }
      highlightText();
    }
  }  
});
})

// BRUTEFORCE MINIGAME

// GENERAL

// BRUTEFORCE
$(document).ready(function(){
  let bruteforceinterval;
  let bruteforceintervals;
  $(".appclick[appname=mycomputer]").click(function(){
    if($(".appinside").css('display') == 'none') {
      $(".appinside").css('display', 'block')
      $('.application').css('display', 'none')
      $('.mycomputer').css('display', 'flex')
    }
  })

    // })

  $("#extr").click(function(){
    $(".selectapp").css('display', 'block')
    $(".selectapps").css('display', 'flex')
  })

   $("#clsx").click(function(){
    $(".selectapp").css('display', 'none')
    $(".selectapps").css('display', 'none')
   })

   $("#openhackconnect").click(function(){
    if (showRandomNumbers) {
    $(".selectapp").css('display', 'none')
    $(".selectapps").css('display', 'none')
    $('.mycomputer').css('display', 'none')

    $('.hackconnect').css('display', 'flex')
    $("#connectinghost").html("Connecting to the host")
    init();
    loadCombination();
    startCountDownTimer();
    } else if (showBruteForce) {
      sendNotify("Error", "Its not your minigame. You've selected brute force minigame.")
      // console.log("Its not your minigame. You've selected brute force minigame.")
    } else if (!showRandomNumbers && !showBruteForce && NeedToDoEverything && !ilkMinigameDone) {
      $(".selectapp").css('display', 'none')
      $(".selectapps").css('display', 'none')
      $('.mycomputer').css('display', 'none')
  
      $('.hackconnect').css('display', 'flex')
      $("#connectinghost").html("Connecting to the host")
      init();
      loadCombination();
      startCountDownTimer();
    } else if (ilkMinigameDone) {
      sendNotify("Error", "You already did that minigame.")
      // console.log("You already did that minigame.)")
    }
   })

   $("#bruteforceopen").click(function(){

    if (NeedToDoEverything && !ilkMinigameDone) return sendNotify("Error", "You need to complete the first minigame. (Random Numbers)") 

    if(showBruteForce) {
    $(".selectapp").css('display', 'none')
    $(".selectapps").css('display', 'none')
    $('.mycomputer').css('display', 'none')

    $('.selectedRED').removeClass('selectedRED')
    $(".brtfrc_text[num=1]").addClass('selected');
    $('.bruteforce').css('display', 'flex')
    createbruteforcetexts()
    } else if (showRandomNumbers) {
      sendNotify("Error", "You need to complete the first minigame. (Random Numbers)")
    } else if (!showRandomNumbers && !showBruteForce && NeedToDoEverything) {
      $(".selectapp").css('display', 'none')
      $(".selectapps").css('display', 'none')
      $('.mycomputer').css('display', 'none')
  
      $('.selectedRED').removeClass('selectedRED')
      $(".brtfrc_text[num=1]").addClass('selected');
      $('.bruteforce').css('display', 'flex')
      createbruteforcetexts()
    }
  })
  // console.log(`${hours} ${minutes} ${day} ${month} ${year}`)
  $("#hourshoursandminutes").html(`${hours}:${minutes}`)
  $("#date").html(`${day}/${month}/${year}`)

  $("#powerButton").click(function(){
    $(".appinside").css('display', 'none')
    $(".mainapp").css('display', 'none')
    $.post(`https://0r_hackingminigame/close`, JSON.stringify({}));
  })

  let bruteforcemgactive = false 
  let bruteforcesirasi = []
  function rastgeleHarf() {
    const harfler = "ADGHIJKLMNPQSVWXYZ";
    return harfler.charAt(Math.floor(Math.random() * harfler.length));
  }


  function harfDizisiOlustur(gerekliharf) {
    let harfler = [];
    for (let i = 0; i < 8; i++) {
        harfler.push(rastgeleHarf()); 
    }
    harfler.push(gerekliharf); 
    harfler = harfler.sort(() => Math.random() - 0.5);
    return harfler;
  }

  function harfleriGuncelle(num, harfler, onemli) {
      harfler.unshift(harfler.pop());
      $('.brtfrc_text[num='+num+'] div').each(function(index) {
          $(this).text(harfler[index]);

          if (harfler[index] === onemli) {
              $(this).addClass('red');
          } else {
              $(this).removeClass('red');
          }
      });
  }

  let mevcutrand = 0

  function createbruteforcetexts() {
    var countdown = BruteForceTime;
    let rand = Math.floor(Math.random() * 142342340);
    mevcutrand = rand 

    bruteforceinterval = setInterval(function() {
        countdown--;
        $(".bruteforce_timeline div").css('width', calculateReversePercentage(countdown, BruteForceTime, 0) + '%')
        if (countdown <= 0) {
            clearInterval(bruteforceinterval);
            bruteforcemgactive = false 
            $('.selected').addClass('selectedRED')
            $('.selected').removeClass('selected')
            clearInterval(bruteforceintervals);
            bruteforcebitti(false)
            bruteforcemevcutsira = 1
        }
    }, 1000);
    bruteforcemgactive = true 
    bruteforcesirasi.push(bruteforcemevcutsira.toString())
    let realstrings = [
      'B',
      'R',
      'U',
      'T',
      'E',
      'F',
      'O',
      'R',
      'C',
      'E',
    ]
    let harflers = [
      harfDizisiOlustur('B'),
      harfDizisiOlustur('R'),
      harfDizisiOlustur('U'),
      harfDizisiOlustur('T'),
      harfDizisiOlustur('E'),
      harfDizisiOlustur('F'),
      harfDizisiOlustur('O'),
      harfDizisiOlustur('R'),
      harfDizisiOlustur('C'),
      harfDizisiOlustur('E'),
    ]

    harfleriGuncelle("1", harflers[0], 'B');
    harfleriGuncelle("2", harflers[1], 'R');
    harfleriGuncelle("3", harflers[2], 'U');
    harfleriGuncelle("4", harflers[3], 'T');
    harfleriGuncelle("5", harflers[4], 'E');
    harfleriGuncelle("6", harflers[5], 'F');
    harfleriGuncelle("7", harflers[6], 'O');
    harfleriGuncelle("8", harflers[7], 'R');
    harfleriGuncelle("9", harflers[8], 'C');
    harfleriGuncelle("10", harflers[9], 'E');


    bruteforceintervals = setInterval(function(){
      harfleriGuncelle(bruteforcemevcutsira.toString(), harflers[bruteforcemevcutsira-1], realstrings[bruteforcemevcutsira-1])
    }, 300)

    function tryC() {
      if(rand != mevcutrand) { return; }
      if(bruteforcemgactive) {
        let gelenharf = $('.brtfrc_text[num='+bruteforcemevcutsira+'] div').eq(4).html()
        if (gelenharf == realstrings[bruteforcemevcutsira-1]) {
          clearInterval(bruteforceintervals);
          $(".brtfrc_text").removeClass('selected');
          bruteforcemevcutsira = bruteforcemevcutsira+1
          if (bruteforcemevcutsira > 10) {
            // MİNİGAME BİTTİ.
            bruteforcebitti(true)
            clearInterval(bruteforceintervals);
            clearInterval(bruteforceinterval);
            bruteforcemgactive = false 
            bruteforcemevcutsira = 1 
          } else {
            $(".brtfrc_text[num=" + bruteforcemevcutsira + "]").addClass('selected');
            bruteforceintervals = setInterval(function(){
              harfleriGuncelle(bruteforcemevcutsira.toString(), harflers[bruteforcemevcutsira-1], realstrings[bruteforcemevcutsira-1])
            }, bruteForceLettersTime)
          }
        } else {
          // console.log("[DEBUG]: ", gelenharf, realstrings[bruteforcemevcutsira-1], JSON.stringify(realstrings), bruteforcemevcutsira)
          bruteforcemgactive = false 
          $('.selected').addClass('selectedRED')
          $('.selected').removeClass('selected')
          clearInterval(bruteforceintervals);
          clearInterval(bruteforceinterval);
          bruteforcebitti(false);
          bruteforcemevcutsira = 1
        }
      }
    }

    $(document).on('keydown', function(e) {
      if (e.key === "Enter") {
        if(bruteforcemgactive) {
          tryC()
        }
      }
    });
  }

  // $("#closeapp").click(function(){
  //   $(".appinside").css('display', 'none')
  //   if(bruteforcemgactive) {
  //     bruteforcemgactive = false
  //     clearInterval(bruteforceinterval);
  //     clearInterval(bruteforceintervals);
  //     $(".bruteforce_timeline div").css('width', '0%')
  //     // bruteforcebitti(false)
  //     bruteforcemevcutsira = 1
  //   } else {
  //     // endTask(false)
  //   }
  // })

  function calculateReversePercentage(value, min, max) {
    if (min === max) return 0; // Eğer min ve max aynıysa, sıfıra bölmeyi önler
    return ((min - value) / (min - max)) * 100;
  }

  // createbruteforcetexts()

  // createbruteforcetexts()

function bruteforcebitti(a) {
    // console.log(`Bruteforce: ${a}`)

    if (NeedToDoEverything && ilkMinigameDone && a) {
      $.post(`https://0r_hackingminigame/DidEverything`, JSON.stringify({
        success: true,
      }));
      ilkMinigameDone = false
    }

    if (a) {
      $.post(`https://0r_hackingminigame/endTaskBruteForce`, JSON.stringify({
        success: true,
      }));
      hackmgsayac = 1
      bruteforcesayac = 1
      $(".mainapp").css('display', 'none')
      $(".appinside").css('display', 'none')
      $.post(`https://0r_hackingminigame/close`, JSON.stringify({}))
      // $(".mainapp").css('display', 'none')
      // $(".appinside").css('display', 'none')
      // $.post(`https://0r_hackingminigame/close`, JSON.stringify({}))
    } else {
      if(bruteforcesayac == Number(bruteforcesans)) {
        $.post(`https://0r_hackingminigame/endTaskBruteForce`, JSON.stringify({
          success: false,
        }));
        $(".mainapp").css('display', 'none')
        $(".appinside").css('display', 'none')
        $.post(`https://0r_hackingminigame/close`, JSON.stringify({}))
        bruteforcesayac = 1
      } else {
        bruteforcesayac++;
        
      $('.selectedRED').removeClass('selectedRED')
      $(".brtfrc_text[num=1]").addClass('selected');
        createbruteforcetexts()
      }
    } 
    // console.log("a bitti" + a)

  }
});

function hackingmg(a) {
  if (NeedToDoEverything && !ilkMinigameDone && a) {
    $(".mainapp").css('display', 'none')
    $(".appinside").css('display', 'none')
    $.post(`https://0r_hackingminigame/close`, JSON.stringify({}))
    $.post(`https://0r_hackingminigame/NotifyResmon`, JSON.stringify({
      notify: "You've completed the first hack, access the menu again and finish the second hack"
    }));
    ilkMinigameDone = true
  } else {
  if (a) {
    $.post(`https://0r_hackingminigame/endTask`, JSON.stringify({
      success: true,
    }));
    $(".mainapp").css('display', 'none')
    $(".appinside").css('display', 'none')
    $.post(`https://0r_hackingminigame/close`, JSON.stringify({}))
  } else {
    if(hackmgsayac == Number(randomnumberssans)) {
      $.post(`https://0r_hackingminigame/endTask`, JSON.stringify({
        success: false,
      }));
      $.post(`https://0r_hackingminigame/close`, JSON.stringify({}))
      $(".mainapp").css('display', 'none')
      $(".appinside").css('display', 'none') 
      hackmgsayac = 1
    } else {
      hackmgsayac++;
      hackmgstarted = true 
      init();
      loadCombination();
      startCountDownTimer();
    }
    }
  }
}

let notifyvar = false

function sendNotify(header, text) {
  if(!notifyvar) {
    notifyvar = true 
    $("#notifyh").html(header)
    $("#notifyt").html(text)
    $(".notify").css('display', 'flex')
    setTimeout(function(){
      $(".notify").css('right', '2vh');
      setTimeout(function(){
        $(".notify").css('right', '-100vh')
        setTimeout(function(){
          notifyvar = false 
          $(".notify").css('display', 'none')
        }, 501)
      }, 5000)
    }, 1)
  }
}
