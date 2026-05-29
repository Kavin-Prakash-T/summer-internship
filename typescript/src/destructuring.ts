enum VoteStatus{
    canVote="VOTE",
    notEligible="NOT_ELIGIBLE"
}

interface user{
    name:string
    age:number,
    voteStatus:VoteStatus
}

const user={
    name:"Ajay",
    age:30,
    voteStatus:VoteStatus.canVote
}

const {name, age, voteStatus} = user;

console.log(name,age,voteStatus)