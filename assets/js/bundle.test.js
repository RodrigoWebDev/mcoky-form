/* 
                  _,.,
                ,'   ,'
               /   ,'
              /   , 
             /   ,
            /   '
           /   ,'
           '.__|
            |  |
            |__|
            |  |
            |__|
            |  |
            |__|
            |  |
            |__|
            |, |
            |--|
            |__|
            |  |
            |--|
            |__|
            |__|        ,-.
            |__|'     ,'  /
       _,.-'     ',_,' o /
      /     8888        /
      |                /
       1              /
       `L   8888     /
        |           /
       /    ====    \
      /     ____     \
     /     (____)  o  \
    /             o    \
   /             o     ,'
  /               _,.'^
 /        __,.-"~^
',,..--~~^       
    
  _______        _       
 |__   __|      | |      
    | | ___  ___| |_ ___ 
    | |/ _ \/ __| __/ __|
    | |  __/\__ \ |_\__ \
    |_|\___||___/\__|___/

    OBS: Não me aprofundei muito nos testes pela falta de tempo
*/

console.log("Bundle test");

//========== selector ==========
console.assert(typeof selector === "function", "selector should be a function");

console.assert(selector() === null, "selector() should return null");

console.assert(
  typeof selector("body") === "object",
  "selector('body') should return a object DOM"
);

console.assert(
  typeof selector("p") === "object",
  "selector('body') should return a object DOM"
);

//========== create ==========

console.assert(typeof create === "function", "create should be a function");

console.assert(create() === null, "selector() should return null");

console.assert(
  typeof create("div") === "object",
  "create('div') should return a object DOM"
);

console.assert(create("p"), "create('p') should return a object DOM");

console.assert(
  typeof create("p") === "object",
  "create('p') should return a object DOM"
);

//========== form ==========
