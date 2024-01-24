function showContent(category) {
    var contentContainer = document.getElementById("content");
    contentContainer.innerHTML = ""; // İçerikleri temizle

    var menuItems = getMenuItems(category);

    if (menuItems) {
        menuItems.forEach(function (item) {
            var menuItem = document.createElement("div");
            menuItem.className = "menu-item";

            var image = document.createElement("img");
            image.src = item.image;
            image.alt = item.name;
            image.className = "menu-image";

            var itemName = document.createElement("h4");
            itemName.textContent = item.name;

            var itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;

            menuItem.appendChild(image);
            menuItem.appendChild(itemName);
            menuItem.appendChild(itemDescription);
            contentContainer.appendChild(menuItem);
        });
    } else {
        contentContainer.innerHTML = "<p>İçerik bulunamadı.</p>";
    }
}

function getMenuItems(category) {
    // Bu kısmı kendi menü öğelerinize göre güncelleyin
    var menuItems = {
        coldDrinks: [
            { name: "Soğuk İçecek 1", image: "path-to-image-1.jpg", description: "Soğuk içecek açıklama 1" },
            { name: "Soğuk İçecek 2", image: "path-to-image-2.jpg", description: "Soğuk içecek açıklama 2" },
        ],
        tropicalDrinks: [
            { name: "Tropical İçecek 1", image: "path-to-image-3.jpg", description: "Tropical içecek açıklama 1" },
            { name: "Tropical İçecek 2", image: "path-to-image-4.jpg", description: "Tropical içecek açıklama 2" },
        ],
        // Diğer kategoriler için benzer şekilde devam edebilirsiniz
    };

    return menuItems[category];
}
