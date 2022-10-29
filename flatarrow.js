class Student {
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(eligiblePlacementAge){
        return (eligibleMarks)=> {
            if(this.age>eligiblePlacementAge && this.marks>eligibleMarks){
                console.log(`${this.name} is eligible for placements`);
            }
            else
            console.log(`${this.name} is not eligible for placements`);
        }
    }

}
const Ambika=new Student('Ambika',22,46);
const Devi=new Student('devi',12,80);
Ambika.setPlacementAge(18)(40);
Devi.setPlacementAge(18)(40);