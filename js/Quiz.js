class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide()
    background("Teal")
    fill("white")
    textSize(30)
    text("The Result Of The Quiz Is!", 240, 50);

    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined ){
      var ypos = 280

      textSize(24)
    text("The Contestant Highlighted Green is Right!", 130, 250);

      for( var plr in allContestants){

          var correctA = "2"

          if(correctA === allContestants[plr].answer){
            fill("lime")
          }
          else {
            fill("red")
          }

          ypos += 35

          textSize(28)
          text(allContestants[plr].name + "  :  " + allContestants[plr].answer, 130, ypos);


      }

    }
    
    
    
    
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
