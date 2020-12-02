var gameState, button, input, time, val, play1, title, img;

function preload() {
  play1=loadSound("lol.mp3");
}

function setup() {
  createCanvas(600, 750);
  gameState ="HomeScreen";
  input = createInput();
  button = createButton('SUBMIT');
  title = createElement('h4');
  title1 = createElement('h1');
  content = createElement('h2');
  content1 = createElement('h2');
  button1 = createButton('Set your timer');
  morecontent = createElement('h2');
  content2 = createElement('h2');
  content3 = createElement('h2');
  button2 = createButton('Tips');
  button3 = createButton('Home Screen');
  content4 = createElement('h4');
  content5 = createElement('h4');
  content6 = createElement('h4');
  content7 = createElement('h4');
  content8 = createElement('h4');
  content9 = createElement('h4');
  content10 = createElement('h4');
  content11 = createElement('h4');
  content12 = createElement('h4');
  morecontent1 = createElement('h2');
  morecontent2 = createElement('h2');
  morecontent3 = createElement('h2');
  morecontent4 = createElement('h2');
  morecontent5 = createElement('h2');
  morecontent7 = createElement('h2');
  content13 = createElement('h4');
  content14 = createElement('h4');
  content15 = createElement('h4');
  content16 = createElement('h4');
  content17 = createElement('h4');
  content18 = createElement('h4');
  content19 = createElement('h4');
  content20 = createElement('h4');
  content21 = createElement('h4');
  morecontentchrome = createElement('h4');
  button.hide();
  input.hide();
  button1.hide();
  morecontent6 = createElement('h2');
}

function draw() {
  if(gameState === "HomeScreen") {
    morecontent.show();
    morecontent1.show();
    morecontent2.show();
    morecontent3.show();
    morecontent4.show();
    morecontent5.show();
    morecontent6.show();
    morecontent7.show();
    button3.hide();
    button1.show();
    background(0, 220 ,120);
    title1.html("Overwork Control App");
    morecontent.html("Overwork Control App is an app to control overworking. ");
    morecontent1.html("If you don't know what that means, it means that ");
    morecontent2.html("somebody is working beyond their strength or capacity, ");
    morecontent3.html("and not giving enough time for themselves. This app ");
    morecontent4.html("has just the things to help you with that. You can ");
    morecontent5.html("set a timer so that you work in limit, and also check");
    morecontent6.html("some exercise/meditation tips when you want to have some");
    morecontent7.html(" 'me-time'!");
    morecontent7.position(displayWidth/2 - 305, displayHeight/2 - 20);
    morecontent6.position(displayWidth/2 - 305, displayHeight/2 - 50);
    morecontent5.position(displayWidth/2 - 305, displayHeight/2 - 80);
    morecontent4.position(displayWidth/2 - 305, displayHeight/2 - 110);
    morecontent3.position(displayWidth/2 - 305, displayHeight/2 - 140);
    morecontent2.position(displayWidth/2 - 305, displayHeight/2 - 170);
    morecontent1.position(displayWidth/2 - 305, displayHeight/2 - 200);
    morecontent.position(displayWidth/2 - 305, displayHeight/2 - 230);
    
    title1.position(displayWidth/2 - 180, displayHeight/2 - 300);
    button1.position(displayWidth/2 -75, displayHeight/2 + 90);
    button2.position(displayWidth/2 - 80, displayHeight/2 + 40);
    button1.mousePressed(() => {
      gameState = "SecondScreen";
      button1.hide();
      button.show();
      input.show();
      morecontent.hide();
      morecontent1.hide();
      morecontent2.hide();
      morecontent3.hide();
      morecontent4.hide();
      morecontent5.hide();
      morecontent6.hide();
      morecontent7.hide();
    })
    button2.mousePressed(() => {
      gameState = "TipScreen";
      button3.position(displayWidth/2 -305, displayHeight/2 - 320);
      button2.hide();
      title1.hide();
      button1.hide();
      morecontent.hide();
      morecontent1.hide();
      morecontent2.hide();
      morecontent3.hide();
      morecontent4.hide();
      morecontent5.hide();
      morecontent6.hide();
      morecontent7.hide();
    })
  }

  else if(gameState === "SecondScreen") {
    button3.position(displayWidth/2 - 305, displayHeight/2 - 320);
    title.show();
    button3.show();
    button3.mousePressed(() => {
      gameState = "HomeScreen";
      content.hide();
      content1.hide();
      content2.hide();
      content3.hide();
      input.hide();
      button.hide();
      button3.hide();
      title.hide();
      button2.show();
      title1.show();
    })
    
    button2.hide();
    title1.hide();
    background("cyan");
    title.html("Enter a period of time in mins here, and an alarm will ring at the end of that period.");
    title.position(displayWidth/2 - 280, displayHeight/2 - 150);
   
    input.position(displayWidth/2- 110, displayHeight/2 - 80);
    button.position(displayWidth/2 - 110, displayHeight/2 - 40);
    button.mousePressed(() => {
      gameState = "buttonPressed";
      button2.hide();
      val = input.value() * 60000;
      setTimeout(() => {
        play1.play();
      }, val);
    }
    )
  }
  else if(gameState === "buttonPressed") {
    button3.position(displayWidth/2 - 305, displayHeight/2 - 320);
    background("cyan");
    content.show();
    content1.show();
    content2.show();
    content3.show();
    button2.hide();
    title.hide();
    input.hide();
    button.hide();
    content.html("THANKS! You have set your timer and now, an ");
    content.position(displayWidth/2 - 265, displayHeight/2 - 150);
    content1.html("alarm will ring after the specified time is over. ");
    content1.position(displayWidth/2 - 265, displayHeight/2 - 90);
   
  }
  else if(gameState === "TipScreen") {
    button3.show();
    button3.mousePressed(() => {
      
      gameState = "HomeScreen";
      content4.hide();
      content5.hide();
      content6.hide();
      content7.hide();
      content8.hide();
      content9.hide();
      content10.hide();
      content11.hide();
      content12.hide();
      content13.hide();
      content14.hide();
      content15.hide();
      content16.hide();
      content17.hide();
      content18.hide();
      content19.hide();
      content20.hide();
      content21.hide();
      morecontentchrome.hide();
      title1.show();
      button2.show();
    })
    content4.show();
    content5.show();
    content6.show();
    content7.show();
    content8.show();
    content9.show();
    content10.show();
    content11.show();
    content12.show();
    content13.show();
    content14.show();
    content15.show();
    content16.show();
    content17.show();
    content18.show();
    content19.show();
    content20.show();
    content21.show();
    morecontentchrome.show();
    morecontentchrome.html("Meditation tips");
    morecontentchrome.position(displayWidth/2 - 130, displayHeight/2 - 330);
    content4.html("1. Same time, same place. If you can’t meditate in the morning, try to make a ");
    content4.position(displayWidth/2 - 310, displayHeight/2-300);
    content5.html("commitment to meditating at the same time and in the same place every day.");
    content5.position(displayWidth/2 - 310, displayHeight/2 - 275);
    content6.html("2. Breathe naturally. Meditation does involve focusing on the breath and using it as ");
    content6.position(displayWidth/2 - 310, displayHeight/2 - 225);
    content7.html("an anchor for the mind, but try not to think about the breath or alter it in any way");
    content7.position(displayWidth/2 - 310, displayHeight/2 - 200);
    content8.html("3. Take a moment and check in with yourself. After each session, try to take a moment ");
    content9.html("to notice how you feel physically, emotionally, and mentally.");
    content8.position(displayWidth/2 - 310, displayHeight/2 - 150);
    content9.position(displayWidth/2 - 310, displayHeight/2 - 125);
    content10.html("4. Buddy up. Try to get a friend to start meditating, too. You don’t have to meditate at ");
    content10.position(displayWidth/2 - 310, displayHeight/2 - 75);
    content11.html("the same time, but having someone who’s also looking to meditating regularly can help ");
    content11.position(displayWidth/2 - 310, displayHeight/2 - 50);
    content12.html("motivate you toward establishing a consistent practice.");
    content12.position(displayWidth/2 - 310, displayHeight/2 - 25);
    content13.html("Exercise tips");
    content13.position(displayWidth/2 - 130, displayHeight/2 + 25);
    content14.html("Be aware of your body. Think about how the particular exercise is making you feel. ");
    content14.position(displayWidth/2 - 310, displayHeight/2 + 75);
    content15.html("If something doesn’t feel right, stop immediately and seek medical advice");
    content15.position(displayWidth/2 - 310, displayHeight/2 + 100);
    content16.html("Warm up and cool down. Try slow stretches and go through the motions of your sport ");
    content16.position(displayWidth/2 - 310, displayHeight/2 + 150);
    content17.html("or activity before starting. Cool down with slow stretching.");
    content17.position(displayWidth/2 - 310, displayHeight/2 + 175);
    content18.html("Stay hydrated. You can lose around one and a half litres of fluid for every hour of ");
    content18.position(displayWidth/2 - 310, displayHeight/2 + 225);
    content19.html("exercise; so drink water before, during and after a session.");
    content19.position(displayWidth/2 - 310, displayHeight/2 + 250);
  }
  
}
