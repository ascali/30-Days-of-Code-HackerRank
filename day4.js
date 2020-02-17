/* Day 4: Class vs. Instance */

// JS 
function Person(initialAge){
    // Add some more code to run some checks on initialAge
    var age;
    if (initialAge < 0){
        console.log("Age is not valid, setting age to 0.");
        age = 0;
    } else {
        age = initialAge;
    }
     
    this.amIOld=function(){
        // Do some computations in here and print out the correct statement to the console
        if  (age < 13){
            console.log("You are young.");
        } else if (age >= 13 && age < 18){
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    };
    this.yearPasses=function(){
        // Increment the age of the person in here
        age = age + 1;
    };
}


// PHP
class Person{
    public $age;
   public function __construct($initialAge){
          // Add some more code to run some checks on initialAge
          if ($initialAge < 0){
              echo "Age is not valid, setting age to 0. \n";
              $this->age = 0; //;"Age is not valid, setting age to 0.";
          } else {
              $this->age = $initialAge;
          }

    }
   public  function amIOld(){
            // Do some computations in here and print out the correct statement to the console 
            if  ($this->age < 13){
                echo "You are young. \n";
            } else if ($this->age >= 13 && $this->age < 18){
                echo "You are a teenager. \n";
            } else {
                echo "You are old. \n";
            }
    }
   public  function yearPasses(){
          // Increment the age of the person in here
          $this->age = $this->age+1;
    }
      
}