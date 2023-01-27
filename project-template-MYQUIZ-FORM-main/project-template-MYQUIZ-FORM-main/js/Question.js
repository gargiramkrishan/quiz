class Question
{
    constructor()
    {
         this.input = createInput("").attribute("placeHolder","enter your name")
         this.input2 = createInput("").attribute("placeHolder","enter your option number")
         this.option = createElement("h4")
         this.option2 = createElement("h4")
         this.option3 = createElement("h4")
         this.option4 = createElement("h4")
         this.sumbit =  createButton("Sumbit")
         this.gretting = createElement("h2")
         this.answer = 1
    }

    

    setElementsPosition()
    {
         this.input.position(width/2,height/2,400,350,500)
         this.input2.position(width + -639 ,height-200,50,530)
         this.option.html("1:C++")
         this.option2.html("2:Go for google")
         this.option3.html("3:Python")
         this.option4.html("tell the pogramming language user for windows?")
         this.option4.position(200,40)
         this.gretting.position(width/2,height-23,400,460)
         this.sumbit.position(width/2,height-160,340,200)
    }

    handleMousePressed(){
       this.sumbit.mousePressed(() =>{
          if(this.input2.index = 1)
          {
               this.answer = 1
               var message = `
               </br>your answer has sumbited`
               this.gretting.html(message)
          }
       });
    }

    show(){
      this.setElementsPosition()
      this.handleMousePressed()
     }
}