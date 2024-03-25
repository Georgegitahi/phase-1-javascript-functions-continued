function saturdayFun(){
console.log("This Sturday, I want to roller-skate!")
}

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(){
    console.log("This Monday, I will go to the office")
}
function mondayWork(activity='go to the office'){
return 'This Monday, I will go to the office.'
}
function mondayWork(activity="work from home"){
    return "This Monday, I will work from home."
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(string="*") {
    return function(parameter="special") {
        return `You are ${string}${parameter}${string}!`
    }


}
