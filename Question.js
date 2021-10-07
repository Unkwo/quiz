class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
  this.input = createInput("Enter the number");

    this.button = createButton('Submit');
    
    //Create elements for One question (h3) and 4 options (h4)
this.title2 = createElement('h3');
this.option1 = createButton('h4');
this.option2= createButton('h4');
this.option3 = createButton('h4');
this.option4 = createButton('h4');
this.wrong = createElement('h3');
this.right = createElement('h3');
this.important = createElement('h3');

    this.message = createElement('h2');
  }

  hide(){
    this.title.hide();
   this.input1.hide();
   this.button.hide();
   this.message.hide();




 }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
this.input.html();
this.input.position(200,160);
this.title2.html("Who gave the value of 'g'?");
this.title2.position(200,200);
this.option1.html("Isaac Newton");
this.option1.position(180,250);
this.option2.html('Albert Einstein');
this.option2.position(280,250);
this.option3.html('J.J. Thomson');
this.option3.position(380,250);
this.option4.html('Henry Cavendish');
this.option4.position(480,250);



this.option1.mousePressed(()=>{
  this.wrong.html("WRONG ONE CHOSEN. RIGHT ONE IS HENRY CAVENDISH");
  this.wrong.position(140,300);
})

this.option2.mousePressed(()=>{
  this.wrong.html("WRONG ONE CHOSEN. RIGHT ONE IS HENRY CAVENDISH");
  this.wrong.position(140,300);
})

this.option3.mousePressed(()=>{
  this.wrong.html("WRONG ONE CHOSEN. RIGHT ONE IS HENRY CAVENDISH");
  this.wrong.position(140,300);
})

this.option4.mousePressed(()=>{
  this.right.html("CHOSEN THE RIGHT ONE, YOU ARE A GENIUS");
  this.right.position(140,300);
})


this.input1.position(10, 160);
    this.button.position(400, 160);


  // Add a mousepressed action when the button is clicked Display the this.message
  this.button.mousePressed(()=>{
    this.message.html("Welcome, let's start the quiz");
    this.message.position()
    
    
  })
    
  


    
    
  }

    
}