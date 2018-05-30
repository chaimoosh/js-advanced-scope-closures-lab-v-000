function produceDrivingRange(blockRange) {
  return function(start, end){
    endNum = parseInt(end)
    startNum = parseInt(start)
    if (endNum - startNum > blockRange) {
      return `${(endNum - startNum) - blockRange} blocks out of range`
    }
    else if (endNum - startNum < blockRange) {
      return `within range by ${endNum - startNum}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(bill){
    return bill * percentage
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name){
      this.id = ++DriverId
      this.name = name
    }
  }
}
