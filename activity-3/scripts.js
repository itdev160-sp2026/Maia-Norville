
console.log("Activity 3: Dynamic Greeting Card");

console.log("Part A: DOM Selection Demonstrations"
);
const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput");

console.log("Selected greeting message element:", greetingMessage);
console.log("Selected greeting image element:", greetingImage);
console.log("Selected name input element:", nameInput);

const cardContainer = document.querySelector(".card-container");
const firstButton = document.querySelector("button");

console.log("Selected card container:", cardContainer);
console.log("First button found:", firstButton);

const allButtons = document.querySelectorAll("button");
console.log(`Found ${allButtons.length} buttons:`, allButtons);

console.log("Part B: Content Modification");

console.log("Original message textContent:", greetingMessage.textContent);
console.log("Original image alt attribute:", greetingImage.getAttribute("alt"));


console.log("Part C: Attribute Modification");

console.log("Current image src:", greetingImage.getAttribute("src"));
console.log("Image has 'src' attribute:", greetingImage.hasAttribute("src"));

const greetings = {
    birthday: {
        message: "Happy Birthday!",
        image: "https://plus.unsplash.com/premium_vector-1721913862190-f402d56224d4?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        alt: "Birthday celebration greeting"
    },
    holiday: {
        message: "Happy Holidays!",
        image: "https://media.istockphoto.com/id/2227214263/photo/christmas-backgrounds-glowing-lights-decoration-fir-tree-burning-lantern-warm-tones-or-gold.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Wks0lO7DsFfLsC2lW4X6zlzE8G-sSwG6NlMISQhbII=",
        alt: "Holiday celebration greeting"
    },
    thankYou: {
        message: "Thank You!",
        image: "https://plus.unsplash.com/premium_vector-1732815733322-37f4e583a0f2?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        alt: "Thank you greeting"
    },
    welcome: {
        message: "Welcome!",
        image: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Welcome greeting"
    }
};

console.log("Part D: Greeting card functions");

function updateGreeting(type) {
    const greeting = greetings[type];
    
    if (greeting) {
        greetingMessage.textContent = greeting.message;

        greetingImage.setAttribute("src", greeting.image);
        greetingImage.setAttribute("alt", greeting.alt);
        
        console.log(`Updated greeting to: ${type}`);
        console.log(`Message: ${greeting.message}`);
        console.log(`Image: ${greeting.image}`);
    } else {
        console.error(`Greeting type "${type}" not found`);
    }
}

function setBirthdayGreeting() {
    updateGreeting("birthday");
}

function setHolidayGreeting() {
    updateGreeting("holiday");
}

function setThankYouGreeting() {
    updateGreeting("thankYou");
}

function setRandomGreeting() {
    const types = Object.keys(greetings);
    const randomType = types[Math.floor(Math.random() * types.length)];
    updateGreeting(randomType);
    console.log(`Random greeting selected: ${randomType}`);
}

console.log("Part E: Interactive features");
function personalizeGreeting() {
    const name = nameInput.value.trim();
    
    if (name === "") {
        alert("Please enter a name to personalize the greeting!");
        console.log("Personalization attempted with empty name");
        return;
    }
    

    const currentMessage = greetingMessage.textContent;
    const personalizedMessage = `${currentMessage}\n\n ${name}!`;
    
    greetingMessage.innerHTML = personalizedMessage.replace('\n\n', '<br><br>');
    
    console.log(`Personalized greeting for: ${name}`);
    console.log(`Full message: ${personalizedMessage}`);
    

    nameInput.value = "";
}


document.getElementById("output").innerHTML = `
    <h3>DOM Manipulation Demo Loaded!</h3>
    <p>Successfully selected and ready to manipulate DOM elements</p>
    <p>Check the console for detailed demonstrations of DOM operations</p>
`;

console.log("Dynamic Greeting Card application loaded successfully!");