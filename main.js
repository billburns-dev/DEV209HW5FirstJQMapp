let EnergyInArray = [];

// let EnergyInObject = function (pDate, pCategory, pName, pCalories) {
let EnergyInObject = function (pDate, pCategory, pName) {
    this.date = pDate;
    this.category = pCategory;
    this.name = pName;
    // this.calories = pCalories;
}

// EnergyInArray.push (new EnergyInObject("02/01/2024", "Fruit",  "Apple", 220));
// EnergyInArray.push (new EnergyInObject("02/01/2024", "Protein", "Steak", 560));
// EnergyInArray.push (new EnergyInObject("02/02/2024", "Vegetable", "Carrot", 150));

EnergyInArray.push (new EnergyInObject("02/01/2024", "Fruit",  "Apple"));
EnergyInArray.push (new EnergyInObject("02/01/2024", "Protein", "Steak"));
EnergyInArray.push (new EnergyInObject("02/02/2024", "Vegetable", "Carrot"));

let selectedCategory = "";

// code runs immediately
//================================================================

// runs  when DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {
        EnergyInArray.push ( new EnergyInObject(document.getElementById("dateInput").value, selectedCategory, document.getElementById("nameInput").value ) );
        
        document.getElementById("dateInput").value = "";
        document.getElementById("nameInput").value = "";

        createList();
    });

    $(document).bind("change", "#select-category", function (event, ui) {
        selectedCategory = document.getElementById("select-category").value;
    });

});


//======================================
// function defintions
function createList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    EnergyInArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
          // added data-role="listview" to the ul in the html
        li.innerHTML = element.date + ":  " + element.category + "   " + element.name;
        myul.appendChild(li);
    });
};