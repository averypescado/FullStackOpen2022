const calculateExercises = (exercise: number[], target: number) => {
  const length = exercise.length
  const training_days = 7-exercise.filter(day=> day==0).length
  const av = exercise.reduce((a, b) => a + b,0) / exercise.length;

  const outcome = av > target

  var message= 'sdfsfd';

  if (av > target){
    var message= 'Great';
  }

  else if (av > .9*target){
    var message= 'Good';
  }

  else if (av > .7*target){
    var message= 'Ok';
  }

  else {
    var message= 'Needs better';
  }
  
  console.log(av > 1)


  var info = {
    periodLength: length,
    trainingDays: training_days,
    target: target,
    success: outcome,
    average: av,
    message: message
  }
  
  return info;
}

console.log(calculateExercises([3,0,2,4.5,0,3,1],2))