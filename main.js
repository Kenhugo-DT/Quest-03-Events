//! ARRAYS

let heroInventory = ["Rusty Sword", "Leather Armor", "Health Potion"];
console.log(heroInventory)

heroInventory.push("Magic Ring")
console.log(heroInventory)

heroInventory = heroInventory.filter(item => item !== "Leather Armor");
console.log(heroInventory)



//! LOOPS



let mysteriousLocations = ["Whispering Forest", "Echoing Caves", "Shimmering Riverside", "Crumbling Tower"];

for (let i = 0; i < mysteriousLocations.length; i++) {
    let location = mysteriousLocations[i];
    console.log("Exploring: " + location);
    
    if (location === "Echoing Caves") {
        console.log("Found the Ancient Tome in " + location + "!");
        heroInventory.push("Mysterious Tome");
    }
}

console.log("Updated Inventory:", heroInventory);



//! EVENTS


document.addEventListener('DOMContentLoaded', function() {
    let ghoulHealth = 100;
    let button = document.getElementById('myButton');

    const ghoulShriek = new Audio('./shriek-sound.mp3');

    if (button) {
        button.addEventListener('click', function() {
            if (ghoulHealth > 0) {
                
                const weapon = "Rusty Sword";
                
                
                ghoulHealth = Math.max(0, ghoulHealth - 10);
                
                
                console.log(`You attack the ghoul with your ${weapon}, dealing 10 damage!`);
                console.log(`Ghoul's remaining health: ${ghoulHealth}`);
                
                
                if (ghoulHealth <= 0) {
                    console.log("Victory! You have defeated the ghoul!");
                    button.disabled = true;
                }
            }
        });

        button.addEventListener('mouseenter', function() {
            ghoulShriek.play();
        });

        
        const healthDisplay = document.createElement('p');
        document.body.appendChild(healthDisplay);

        function updateHealthDisplay() {
            healthDisplay.textContent = `Ghoul's Health: ${ghoulHealth}`;
        }

        updateHealthDisplay();

        
        button.addEventListener('click', updateHealthDisplay);
        } else {
        console.error("Button with id 'myButton' not found in the DOM");
        }
});

