import fetch from "node-fetch";

let items = [];

fetch("https://www.tacobell.com/tacobellwebservices/v2/tacobell/products/menu/0000", {
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include"
})
    .then((res) => res.json())
    .then((data) => {
        data.menuProductCategories.forEach((productCategory) => {
            productCategory.products.forEach(
                (product) =>
                    items.push({
                        Name: product.name,
                        Price: product.price.value
                    }),
                console.log(items)
            );
        });
    });