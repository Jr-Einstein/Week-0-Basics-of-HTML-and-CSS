//sum from 1 to 100

function sumAll(startIndex, endIndex) {
  var sum = 0;
  for (var i = startIndex; i < endIndex; i++) {
    sum = sum + i;
  }
  return sum
}

sumAll(0, 100)

//sum from 1 to unlimited

function sumFull(startIndex,endIndex){
  var sum=0;
  for(var i=1; i<endIndex;i++){
    sum=sum+i;
  }
  console.log(sum)
}

sumFull(1,100)