


///The Given Function to work with
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  /* Write an ES2015 Version */

const fileterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//It was challenging but this was much smaller than I thought it would be

console.log(fileterOutOdds(1, 2, 3, 4, 5, 6, 7, 8))
//I did a personal check for this and it worked


//find Min
// originally was writing this longer as well. 
const findMin = (...args) => Math.min(...args)

//Had to play around and work out the syntax errors here:
const mergeObjects = (object1, object2) => ({...object1, ...object2})


//doubleAndReturnArgs
//didn't realize I didn't need the ... with array with the first input. Feeling more comfortable with the map array method
const doubleAndReturnArgs = (array, ...numbers) => [...array, ...numbers.map(v => v * 2)]







//Slice and Dice
//Had to really look over everything and go through this slowly

const removeRandom = items => {
    //It makes sense that items.length is used here if you can't know how long it it will be
    let idx = Math.floor(Math.random() * items.length);
    //Not sure why ...items is used until here:
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  /** Return a new array with every item in array1 and array2. */
  //I believe there is a python function for this in the python langauge
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  /** Return a new object with all the keys and values
  from obj and a new key/value pair */
  
  const addKeyVal = (obj, key, val) => {
  
    //I think it is good to use let here because it will be changed later I believe
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

  }
  
  /** Return a new object with a key removed. */
  
  const removeKey = (obj, key) => {
  
    //I haven't run across the 'delete' like this before. very interesting
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  }
  
  /** Combine two objects and return a new object. */
  
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  
  /** Return a new object with a modified key and value. */
  
  const update = (obj, key, val) => {
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

  }