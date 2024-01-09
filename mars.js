alert('Huston we Have a problem')

alert('Not all engines are firing!!')

alert('False alarm all systems go!!!')

const username = prompt('Hello Commander. What is your Title?')

alert (`Hi there Commander ${username}`)

alert('Welcome to The Mars Adventure Game')

alert(`Yesterday, you received a call from your good friend at NASA”, and “They need someone to go to Mars this weekend, and YOU’VE been chosen!!`)

let excited = prompt('Are you Amped? Type Y or N')

excited = excited.toUpperCase();

if (excited === 'Y') {
    alert(`I knew you’d say that. It’s so cool that you’re going to Mars!`)
} else {
    alert (`Well, that sucks for you. To late buddy!`)
}

alert("It's time to pack for your trip to Mars.")

let numSuitcases = prompt('How many suitcases do you plan to bring?')

numSuitcases = Number(numSuitcases)

if (numSuitcases > 2) {
    alert(`This isn't first class, it's economy. You will have to pack less.`)
    alert(`Please try to only bring 2 suitcases.`)
} else {
    alert(`Perfect. You’ll certainly fit in the spaceship!`)
}

alert("You're allowed to bring one companion animal with you.")

const companionType = prompt('What kind of companion animal would you like to bring?')

let companionName = prompt("What is your companion's name?")

let firstLetter = companionName[0]
let otherLetter = companionName.slice(1)

firstLetter = firstLetter.toUpperCase()
otherLetter = otherLetter.toLowerCase()


companionName = firstLetter + otherLetter;


alert(`Cool, so you're bringing ${companionName} the ${companionType}.`)

alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);


let shipDecor = prompt(`Do you choose A, B, or C?`)

shipDecor = shipDecor.toUpperCase()

let decor
if (shipDecor === 'A') {
    decor = 'modern minimalist';
}
else if (shipDecor === 'B') {
    decor = 'Retro';
}
else if (shipDecor === 'C') {
    decor = 'steampunk';
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`)

let timer = 5
while (timer > 0) {
    alert(`${timer}`)
    timer -= 1
}
alert ('*** LIFTOFF ***')


