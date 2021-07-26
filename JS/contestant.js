class Contestant
{
    constructor(){
     this.index=null;
     this.answer=0;
     this.name=null;
    }
    getCount(){
        db.ref("contestantCount").on("value", (data)=>{
        contestantCount=data.val();
        })
    }
    updateCount(count){
        db.ref("/").update({contestantCount:count})
    }
    update(){
        var contestantIndex="contestants/contestant"+this.index
        db.ref(contestantIndex).update({
            name:this.name, answer:this.answer
        })
    }
    
    static getContestantInfo(){
       var contestantInfoRef=db.ref("contestants");
       contestantInfoRef.on("value", (data)=>{
           allcontestants=data.val();
       })
    }
}