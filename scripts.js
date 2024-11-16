const quotes = [
    "“Let yourself be silently drawn by the strange pull of what you really love.”",
    "“Wherever you are, and whatever you do, be in love.”",
    "“What you seek is seeking you.”",
    "“Raise your words, not voice. It is rain that grows flowers, not thunder.”",
    "“The wound is the place where the Light enters you.”",
    "“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.”",
    "“Stop acting so small. You are the universe in ecstatic motion.”",
    "“Don’t grieve. Anything you lose comes round in another form.”",
    "“Ignore those that make you fearful and sad, that degrade you back towards disease and death.”",
    "“Be like a tree and let the dead leaves drop.”",
    "“Do not be satisfied with the stories that come before you. Unfold your own myth.”",
    "“Set your life on fire. Seek those who fan your flames.”",
    "“Why are you so busy with this or that or good or bad, pay attention to how things blend.”",
    "“I want to sing like the birds sing, not worrying about who hears or what they think.”",
    "“Where there is ruin, there is hope for a treasure.”",
    "“You were born with wings, why prefer to crawl through life?”",
    "“When the soul lies down in that grass, the world is too full to talk about.”",
    "“Don’t you know yet? It is your light that lights the worlds.”",
    "“Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no separation.”",
    "“These pains you feel are messengers. Listen to them.”",
    "“Your heart is the size of an ocean. Go find yourself in its hidden depths.”",
    "“You are not a drop in the ocean. You are the entire ocean in a drop.”",
    "“I have lived on the lip of insanity, wanting to know reasons, knocking on a door. It opens. I’ve been knocking from the inside.”",
    "“Let the waters settle and you will see the moon and the stars mirrored in your own being.”",
    "“Respond to every call that excites your spirit.”",
    "“Travel brings power and love back into your life.”",
    "“Sell your cleverness and buy bewilderment. Cleverness is mere opinion. Bewilderment brings intuitive knowledge.”",
    "“Suffering is a gift. In it is hidden mercy.”",
    "“There is a candle in your heart, ready to be kindled. There is a void in your soul, ready to be filled. You feel it, don’t you?”",
    "“You have to keep breaking your heart until it opens.”",
];

const backgrounds = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
    "background4.jpg",
    "background5.jpg",
    "background6.jpg",
    "background7.jpg",
    "background8.jpg",
    "background9.jpg",
    "background10.jpg",
    "background11.jpg",
    "background12.jpg",
    "background13.jpg",
    "background14.jpg",
    "background15.jpg",
    "background16.jpg",
    "background17.jpg",
    "background18.jpg",
    "background19.jpg",
    "background20.jpg",
    "background21.jpg",
    "background22.jpg",
    "background23.jpg",
    "background24.jpg",
    "background25.jpg",
    "background26.jpg",
    "background27.jpg",
    "background28.jpg",
    "background29.jpg",
    "background30.jpg",
];

let quoteIndex = 0;
const quoteElement = document.getElementById("quote-text");

// Display the initial quote
displayQuote();

// Function to display quotes and change background images
function displayQuote() {
    quoteElement.textContent = quotes[quoteIndex]; // Set quote text
    
    // Change the background image of the quote container
    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.style.backgroundImage = `url('${backgrounds[quoteIndex]}')`; // Change background for quote container
    
    quoteIndex = (quoteIndex + 1) % backgrounds.length; // Move to the next image
}

// Change quote and background image every 5 seconds
setInterval(displayQuote, 5000);