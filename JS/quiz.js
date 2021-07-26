class Quiz
{
    constructor(){
     
    }
    async start(){
        if(gameState===0){

            contestant = new Contestant();
            var contestantCountRef=await db.ref("contestantCount").once("value");
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();

            }
            
            question=new Question();
            question.display();
        }
    }
    getState(){
        db.ref("gameState").on("value", (data)=>{
            gameState=data.val();
        })
    }
    update(state){
        db.ref("/").update({gameState:state})
    }
}