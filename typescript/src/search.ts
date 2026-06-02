const foods=[
    {
        id:1,
        name:"Dosa",
        price:200
    },
    {
        id:2,
        name:"Idli",
        price:150   
    },
    {
        id:3,
        name:"Vada",
        price:100
    }
]

const search_word="Va"

const searchResults = foods.filter(food => food.name.toLowerCase().includes(search_word.toLowerCase()));

console.log(searchResults);