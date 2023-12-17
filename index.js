// code your solution here
function saturdayFun(activity= "roller-skate"){
    
    return `This Saturday, I want to ${activity}!`
}
// would be able to override by inserting diff argument when calling
//ex. saturdayFun("study")
const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home");

function wrapAdjective(flair = "*"){
    return function(adjective= "special"){
        return `You are ${flair}${adjective}${flair}!`;
    }
}
const encouragingPromptFunction = wrapAdjective("!!!");

encouragingPromptFunction("hard worker");
encouragingPromptFunction("||")("a dedicated programer")