export const dummyDB = [
    {
        "name": "product_1",
        "tag": "toy",
        "category": "reptile",
        "price": "9438",
        "inStock": "in stock",
        "description": "Perfect for your pet's daily care.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_2",
        "tag": "medicine",
        "category": "fish",
        "price": "2075",
        "inStock": "out of stock",
        "description": "High-quality product for your beloved pet.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_3",
        "tag": "grooming",
        "category": "dog",
        "price": "9653",
        "inStock": "in stock",
        "description": "A fun toy to keep your pet entertained.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_4",
        "tag": "food",
        "category": "reptile",
        "price": "1169",
        "inStock": "in stock",
        "description": "Perfect for your pet's daily care.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_5",
        "tag": "food",
        "category": "fish",
        "price": "647",
        "inStock": "in stock",
        "description": "Perfect for your pet's daily care.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_6",
        "tag": "toy",
        "category": "reptile",
        "price": "5432",
        "inStock": "in stock",
        "description": "High-quality product for your beloved pet.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_7",
        "tag": "animal",
        "category": "cat",
        "price": "8033",
        "inStock": "out of stock",
        "description": "Essential item for pet grooming needs.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_8",
        "tag": "medicine",
        "category": "cat",
        "price": "3831",
        "inStock": "in stock",
        "description": "Perfect for your pet's daily care.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_9",
        "tag": "animal",
        "category": "rabbit",
        "price": "7956",
        "inStock": "out of stock",
        "description": "A fun toy to keep your pet entertained.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_10",
        "tag": "accessory",
        "category": "reptile",
        "price": "8538",
        "inStock": "out of stock",
        "description": "A fun toy to keep your pet entertained.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_11",
        "tag": "toy",
        "category": "reptile",
        "price": "2437",
        "inStock": "in stock",
        "description": "Nutritious and delicious for your pet.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_12",
        "tag": "grooming",
        "category": "rabbit",
        "price": "4829",
        "inStock": "in stock",
        "description": "Nutritious and delicious for your pet.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_13",
        "tag": "toy",
        "category": "dog",
        "price": "5339",
        "inStock": "out of stock",
        "description": "Nutritious and delicious for your pet.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_14",
        "tag": "grooming",
        "category": "rabbit",
        "price": "527",
        "inStock": "in stock",
        "description": "Perfect for your pet's daily care.",
        "productImage": "",
        "review": []
    },
    {
        "name": "product_15",
        "tag": "toy",
        "category": "fish",
        "price": "6338",
        "inStock": "out of stock",
        "description": "Essential item for pet grooming needs.",
        "productImage": "",
        "review": []
    }
]

export const contactus = {
    shopName : `Sun Shine Pets and Aquaruim`,
    openStatus : {
        openingHour: 8, // 8 AM
        closingHour: 21, // 9 PM
        isShopOpen: function () {
            const now = new Date();
            const currentHour = now.getHours();
            // console.log(currentHour >= this.openingHour && currentHour < this.closingHour)
            return currentHour >= this.openingHour && currentHour < this.closingHour;
        }
    },
    address : `Krishnapuram,\nOpposite IOB Bank,\nSomanur Road`,
    email : `rahulrajesh2777@gmail.com`,
    instagram :`sunshine_pets_and_aquarium`,
    whatsApp : `+919790543561`,
    
}
export const aboutUs = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
