/**
 * Takes a deeply nested object, `source`, and returns an object with
 * dot-separated paths pointing to all primitive values from `source`.
 *
 * Examples:
 *
 *   flatten({ foo: { bar: 1 } })
 *     //=> { 'foo.bar': 1 }
 *
 *   flatten({ foo: [{ bar: 1 }, { bar: 2 }] })
 *     //=> { 'foo.0.bar': 1, 'foo.1.bar': 2 }
 */


function flatten(source) {
  // TODO: Implement this function

let flatObj = {};
let newKey = "";

for (const [key, value] of Object.entries(source)) {

  //flatten object with nested array
  if(Array.isArray(value)){
    value.forEach(element => {
      if(typeof element === "object")
        for (const [key3, value3] of Object.entries(element)) {
        
          newKey = key+"."+ value.indexOf(element) +"."+ key3;
          flatObj[newKey] = value3;
          }
    
      else{
          newKey = key + "." + value.indexOf(element);
          flatObj[newKey] = element;
      }    
    }); 
  }

 //flatten simple object
  else if(typeof value === "object"){
    for (const [key2, value2] of Object.entries(value)) {
      //flatten an object with null values
      if(value2 === null || value === null){
        newKey = key + "." + key2;
           flatObj[newKey] = null;
      }
      //flatten complex nested object
      else if(typeof value2 === "object"){
        for (const [key4, value4] of Object.entries(value2)) {
           newKey = key + "." + key2 + "." + key4;
           flatObj[newKey] = value4;
        }
        }
      else{
        newKey = key + "." + key2;
        flatObj[newKey] = value2;
      }
    }
   }
   //simple object
  else{
    newKey =  key;
    flatObj[newKey] = value;
  }
   

}
return flatObj;

}



let src = {
  a: 1,
	b: {
		c: true,
		d: {
			e: 'foo'
		}
	},
	f: false,
	g: ['red', 'green', 'blue'],
	h: [{
		i: 2,
		j: 3
	}]
};
const src2 = {
	foo: {
		bar: null
	}
};


console.log(flatten({ foo: { bar: 1 } }));
console.log(flatten({ foo: [{ bar: 1 }, { bar: 2 }] }));
console.log(flatten(src));
console.log(flatten(src2));
