/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')

// Web API
// Server Conect
window
  .fetch(`${url}/api/avo`)
  // process responce, convert it to JSON
  .then((response) => response.json())
  // JSON -> Data -> Render info browser
  .then((respJson) => {
    
    const allItems = [];
    
    respJson.data.forEach((item) => {
      
      // create image
      const image = document.createElement('img');
      image.src = `${url}${item.image}`;
      image.className = "w-72"

      // create title
      const title = document.createElement('h2');
      title.textContent = item.name;
      title.className = "text-3xl";

      // create price
      const price = document.createElement('div');
      price.textContent = item.price;
      price.className = "text-2xl";

      const container = document.createElement("div");
      container.append(image, title, price);

      allItems.push(container);
    });
    appNode.append(...allItems);
  })
