let score
function studentGrading(score){
    switch(true){
    case (score>=91 && score<=100) :
     console.log("Grade A1")
     break;
    case (score>=81 && score<=90) :
        console.log("Grade A2")
    break;
    case (score>=71 && score<=80) :
        console.log("Grade B1")
    break
    case (score>=61 && score<=70) :
        console.log("Grade B2")
    break
    case (score>=51 && score<=60) :
        console.log("Grade C1")
    break
    case (score>=41 && score<=50) :
        console.log("Grade C2")
    break
    default:
        console.log("Failed.")
    }
}
studentGrading(1)