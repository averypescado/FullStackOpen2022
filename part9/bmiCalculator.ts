const calculateBmi = (h: number, w:number) => {
  const index =  w / ((h/100)^2)
  if (index <16) {
    return 'Severe underweight'
  }
  if (index <16.9) {
    return 'Undrweight'
  }
  if (index <18.4) {
    return 'Undrweight'
  }
  if (index <24.9) {
    return 'Normal'
  }
  if (index <29.9) {
    return 'Overweight'
  }

}

console.log(calculateBmi(180, 74))
