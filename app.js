// CREATE AN ACTIVITY CARD

async function fetchAndGenerateCards() {
    try {
        const response = await fetch('cards.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier JSON');
        }
        const activities = await response.json();

-        generateActivityCards(activities);
    } catch (error) {
        console.error('Erreur :', error);
    }
}

function generateActivityCards(data) {
    const container = document.getElementById("main");

    data.forEach(activity => {
        const card = document.createElement("activity-card");
        card.classList.add("activity-card");

        const title = document.createElement("h1");
        title.classList.add("activity-title");
        title.textContent = activity.title;

        const image = document.createElement("img");
        image.classList.add("activity-img");
        image.src = activity.image;
        image.alt = activity.alt;

        const underImg = document.createElement("div");
        underImg.classList.add("activity-under-img");

        const tagsDiv = document.createElement("div");
        tagsDiv.classList.add("product-tag");
        activity.tags.forEach(tag => {
            const tagSpan = document.createElement("span");
            tagSpan.classList.add("one-product-tag", `tag-${tag.toLowerCase()}`);

            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("activity-price");
        for (let i = 0; i < 3; i++) {
            const priceRound = document.createElement("span");
            priceRound.classList.add("price-round");
            const priceIcon = document.createElement("img");
            priceIcon.classList.add("activity-price-icon");
            priceIcon.src = "/images/dollar.png";
            priceIcon.alt = "icone d'un dollar";
            if (i < activity.price) {
                priceIcon.classList.add("filled");
            }
            priceRound.appendChild(priceIcon);
            priceDiv.appendChild(priceRound);
        }

        underImg.appendChild(tagsDiv);
        underImg.appendChild(priceDiv);

        const city = document.createElement("h2");
        city.classList.add("activity-city");
        city.textContent = activity.city;


        const button = document.createElement("button");
        button.classList.add("button-more");
        button.textContent = "See more";

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(underImg);
        card.appendChild(city);
        card.appendChild(button);

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", fetchAndGenerateCards);

//DYNAMISM ON CARD

