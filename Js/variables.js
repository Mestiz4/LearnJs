/* 
!VARIABLES 
    Las variables son espacios de memoria que alojan datos
    *hoy en día las variables se declaran o con const o con let  
    
    */

    //let message = "Hi" -->esto es una variable

    function foo(){
        let age =22; //*siempre hay que declarar las variables antes porque si se declaran después de ejecutarlas hay error
        console.log(age);
        }

    foo(); //22

    /* function foo(){
        
        console.log(age);
        let age =22; //!ejemplo con la variable declarada luego
        }

    foo(); //*undifined 
    
    !SCOPE
    *las variables pueden ser globales o locales, una variable declarada dentro de {} es una variable que es solo válida allí (local)
    *y una variable declarada fuera es global
    */

    if (true){
        let age = 26;
        console.log(age); //*26
    }

    console.log (age) //!Reference error: age is not defined

    //aquí se entiende que la variable age solo existe dentro del if y no fuera
    //*cuando se declara una variable con let no es posible nombrar dos variables de la misma manera a menos que se hagan en diferende scope

    let age;
    let age; //!Syntax error; identifier 'age' has already been declared

