const db = require('../db/connection');
const Product = require('../models/product');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// The majority of the descriptions, prices, and photos used for the seed file are from www.heatonist.com, so all credit to those awesome guys.
const main = async () => {
  const products =
    [
      {
        "name": "Exhorresco",
        "brand": "Burns & McCoy",
        "imgURL": "https://i.imgur.com/vC8Xy7s.jpg",
        "scoville": "625,000",
        "description": "Your hair will stand on end with one taste of this scorcher! Packed with loads of 7 Pot Primo peppers and aided by the citrus notes of yuzu and lemon, this hot sauce will leave your taste buds tingling. Try it on a steak or chicken from the grill - just not too much.",
        "price": "12",
      },
      {
        "name": "Hot Pepper Sauce",
        "brand": "Dirty Dick's",
        "imgURL": "https://i.imgur.com/3OdSQKd.jpg",
        "scoville": "21,000",
        "description": "Dirty Dick’s Hot Sauce blends habanero peppers with tropical fruits for a sweet and spicy sauce. Let the sweetness of bananas, raisins, and pineapples linger on your palate and wait for the heat to kick in. Great for beef stir-fry, chicken wraps, and as a stand-alone dipping sauce for the daring.",
        "price": "10",
      },
      {
        "name": "Los Calientes",
        "brand": "Hot Ones",
        "imgURL": "https://i.imgur.com/v0BMMBe.jpg",
        "scoville": "36,000",
        "description": "Hot Ones is the show where celebrities divulge their deepest secrets while eating progressively hotter wings. The middle of the lineup is where hot sauce magic happens—the perfect sweet spot between maximum flavor and pleasing heat. Inspired by our favorite Cali-Mex flavors, Los Calientes surfs over the palate with a punchy, smoky blend of serrano and habanero chiles, sweet fruit, and tart tomatillo. Slather it on wings, tacos, pizza, or just about anything that needs an extra kick.",
        "price": "12",
      },
      {
        "name": "The Last Dab APOLLO",
        "brand": "Hot Ones",
        "imgURL": "https://i.imgur.com/OCFgZgi.jpg",
        "scoville": "2,000,000+",
        "description": "The Apollo Pepper has been carefully bred and nurtured by Guinness World Record holding chili breeder Smokin’ Ed Currie of Puckerbutt Pepper Co from prized strains of his famed Carolina Reaper and Pepper X. The Apollo brings this heritage to new heights of capsaicin, packing a more concentrated punch than any of its forebears. The flavor of The Apollo comes from the sweetness of Carolina Reaper, tinged with the earthiness of Pepper X - it’s a culinary powerhouse. The heat profile of The Apollo Pepper is akin to having your head slowly lit aflame. You feel the fire consume your entire skull, your tongue smolders, burning tears pour from your eyes. And then, five minutes later, the ride is over, your heart rate returns to normal, the panic subsides. This pepper is like no other.",
        "price": "22",
      },
      {
        "name": "The Classic Hot Sauce",
        "brand": "Hot Ones",
        "imgURL": "https://i.imgur.com/Q2iBS33.jpg",
        "scoville": "1,800",
        "description": "The #1 sauce on Hot Ones! When it came time to craft the perfect kick-off to Sean's spicy conversations, we knew we wanted a hot sauce that was as timeless as the chicken wing. After sampling many of the world's best peppers we decided to go with Chile de Arbol, prized for its complex, fresh flavors. The chiles and sauce are grown/made by our great friend Smokin' Ed Currie of Puckerbutt Pepper Co, who says it may be the tastiest hot sauce he's ever crafted. For lots of flavor and a healthy tang, try it on everything, and use liberally.",
        "price": "10",
      },
      {
        "name": "Fire Water",
        "brand": "Cully's",
        "imgURL": "https://i.imgur.com/VE3Fpk7.jpg",
        "scoville": "112,000",
        "description": "Born from a wicked combo of both Carolina Reaper and Trinidad Scorpion Chiles, Fire Water is not for the faint of heart. But if you’re brave enough to try it, along with its slow burning heat, this sauce brings incredible flavor. The Reaper pepper itself adds a nice sweetness, which is amplified by hints of lime and Mexican tequila. Try it with wings, pizza or a spicy Bloody Mary.",
        "price": "14",
      },
      {
        "name": "Sauce Bae",
        "brand": "Skinny Habanero",
        "imgURL": "https://i.imgur.com/GDj6Ar2.jpg",
        "scoville": "2500",
        "description": "Rounding out the earthy turmeric with a smack of sweet from the pineapple and the tang of white vinegar, this sauce will jump start your heat addiction! Though it is low-sodium, vegan, and gluten-free, there's much more to love about this hot sauce than its health benefits. Use it for a spicy zesting up of avocado toast, a chicken wrap, or try it as a salad dressing. ",
        "price": "10",
      },
      {
        "name": "Garlic Reaper Sauce",
        "brand": "Torchbearer",
        "imgURL": "https://i.imgur.com/kQ4tslB.jpg",
        "scoville": "116,000",
        "description": "The first ingredient is this hot sauce is Carolina Reaper, and the second ingredient is garlic. Need we say more? This sauce is unlike any other we’ve had on Hot Ones, with a rich oil base that gives it a creamy texture with just enough savory spices to round out that garlic. Try using it as a marinade for chicken or salmon, or add to a roast beef sandwich for an amazing lunchtime treat. Oh and be sure to have this bottle handy the next time you order a pizza...",
        "price": "16",
      },
      {
        "name": "Red Habanero & Black Coffee",
        "brand": "Queen Majesty",
        "imgURL": "https://i.imgur.com/rht2W8b.jpg",
        "scoville": "14,000",
        "description": "Queen Majesty debuted this flavor at our tasting room last summer to rave reviews. Cold-brewing coffee with vinegar instead of water to use with her habanero mash geniusly infuses this sauce with the earthy flavors of coffee without overpowering. Pairs perfectly with roast potatoes in the morning and pulled pork. This is her hottest sauce to date but keep your eyes peeled for more...",
        "price": "10",
      },
      {
        "name": "Chipotle eXpress",
        "brand": "Puckerbutt Pepper Co",
        "imgURL": "https://i.imgur.com/axuLXWn.jpg",
        "scoville": "669,000",
        "description": "Bred by the famous (infamous?) mad scientist Smokin’ Ed Currie, Pepper X has a heat profile that’s akin to a knockout punch from a heavyweight champ, making this a scorcher of a #9 sauce in the Hot Ones Season 13 lineup. Smokin’ Ed brought new flavors to Pepper X with a smoky blend of chipotle peppers, lemon and honey, adding a friendly face to the monster. The earthy notes of the Pepper X are bolstered by the chipotles and the sweet and citrus notes help bring the whole thing to life. Amazing for short ribs and other stews, this flavor-packed powerhouse will keep you warm all winter long.",
        "price": "18",
      }
    ]
  await Product.insertMany(products);
  console.log("It's going to get hot in here!");
};

const run = async () => {
  await main();
  db.close();
};

run();