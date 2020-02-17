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

//python
class Person:
    def __init__(self,initialAge):
        # Add some more code to run some checks on initialAge
        if (initialAge < 0):
            print("Age is not valid, setting age to 0.")
            self.age = 0
        else:
            self.age = initialAge

    def amIOld(self):
        # Do some computations in here and print out the correct statement to the console
        if (self.age < 13):
            print("You are young.");
        elif (self.age >= 13 and self.age < 18):
            print("You are a teenager.");
        else:
            print("You are old.");

    def yearPasses(self):
        # Increment the age of the person in here
        self.age = self.age + 1

t = int(input())
for i in range(0, t):
    age = int(input())         
    p = Person(age)  
    p.amIOld()
    for j in range(0, 3):
        p.yearPasses()       
    p.amIOld()
    print("")


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