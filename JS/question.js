class Question{
    constructor(){
        this.title=createElement("h1","myQuizGame");
        this.input1=createInput("Enter your name");
        this.input2=createInput("Enter Correct option number here");
        this.submit= createButton("submit");
        
        this.question=createElement("h3");
        this.option1=createElement("h4");
        this.option2=createElement("h4");
        this.option3=createElement("h4");
        this.option4=createElement("h4");
    
    }
    hide(){
        this.title.hide();
        this.question.hide();
        this.input1.hide();
        this.input2.hide();

    }
    display()
    {
        this.title.position(width/2,10);
        this.question.html("What starts and ends with the letter ‘E’, but has only one letter?");
        this.question.position(width/3,80);
        this.option1.html("everyone");
        this.option1.position(width/3,100);
        this.option2.html("envelope");
        this.option2.position(width/3,150);
        this.option3.html("estimate");
        this.option3.position(width/3,200);
        this.option4.html("example");
        this.option4.position(width/3,250);
        
        this.input1.position(width/3,300);
        this.input2.position(width/3,330);
        this.submit.position(width/3,360);
        this.button.mousePressed(()=>{
            this.title.hide();
        this.question.hide();
        this.input1.hide();
        this.input2.hide();
        })

    }
}