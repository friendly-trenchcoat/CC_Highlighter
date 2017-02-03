// ==UserScript==
// @name         Charity Corner Highlighter
// @author       friendly-trenchcoat
// @description  Highlights very rare items, hides others
// @match        http://www.neopets.com/safetydeposit.phtml*
// @match        http://www.neopets.com/market.phtml?*type=your*
// @match        http://www.neopets.com/browseshop.phtml?owner=*
// @match        http://www.neopets.com/market_your.phtml*
// @match        http://www.neopets.com/inventory.phtml*
// @match        http://www.neopets.com/closet.phtml*
// @match        http://www.neopets.com/objects.phtml?type=shop*
// @match        http://www.neopets.com/market.phtml?type=wizard&string=*
// @match        http://www.neopets.com/auctions.phtml?*auction_id=*
// @match        http://www.neopets.com/island/tradingpost.phtml*
// @match        http://battlepedia.jellyneo.net/?go=battle_prizes&dome=*
// @match        http://www.neopets.com/gallery/index.phtml?*
// @match        http://www.neopets.com/haggle*
// @grant        none
// ==/UserScript==

var itemName, itemWorth, regex;
jQuery.fn.justtext = function() {
    return $(this).clone().children().remove().end().text();
};
function isVRare(name, element){
    regex = new RegExp(" \. " + name + " \. ");
    if(regex.test(items)) element.css("background-color", "#9fc");
    else element.hide();
}
function main() {
    // Inventory
    if(document.URL.indexOf("inventory") != -1) {
        $("img[src*='/items/']").parent().parent().each(function(k,v) {
            itemName = $(v).justtext();
            isVRare(itemName, $(v));
        });
    }
    // Main Shops
    if(document.URL.indexOf("objects.phtml?type=shop") != -1) {
        $("img[src*='/items/']").parent().parent().each(function(k,v) {
            itemName = $(v).find("b").first().text();
            isVRare(itemName, $(v));
        });
    }
    // Auto-enter aksing price
    if(document.URL.indexOf("haggle") != -1) {
        var asking = document.body.innerHTML.match(/The Shopkeeper says.* ([0-9,\,]+)/)[1].replace(/,/g, '');
        $('[name="current_offer"]').val(asking);
    }
    // User Shops
    if(document.URL.indexOf("browseshop") != -1) {
        $("img[src*='/items/']").parent().parent().each(function(k,v) {
            itemName = $(v).find("b").first().text();
            isVRare(itemName, $(v));
            //$(v).css("background-color", "#9fc");
        });
    }
    // SDB & Closet
    if(document.URL.indexOf("safetydeposit") != -1 || document.URL.indexOf("closet") != -1) {
        $("img[src*='/items/']").parent().parent().each(function(k,v) {
            itemName = $(v).find("td").eq(1).find("b").eq(0).justtext();
            isVRare(itemName, $(v));
        });
    }
}
var items = " . Galaxy Energy Drink . Triple Tier Space Faerie Cake . Water Pizza . Whole Chilli Deluxe Pizza . Jelly Bean Pirate Chest . Space Faerie Cereal . Whole Anchovy Pizza . Strawberry Fondant Surprise . Moon Crunch Cereal . Orange Gummy Stamp . Walking Carpet Cotton Candy . Deluxe Water Pizza . Organic Peanut . Hasee Puff Cereal . Candy Pirate Earrings . Evil Blancmange . Ghost Marshmallows . Omelette Turkey . Completely Non-lethal Sandwich . Mint Chocolate Kacheek . Faerie Hot Dog . Pineapple Breeze . Fright Pop . Sandy Geb Cakes . Thornata . Hidden Treasure Pasta . Dark Chocolate Scorchio . Zonutuk Fruit . Natural Springabee Honey . Soup Faerie Soup . Red Octopepper . Pink Spooky Floss . Garlicy Mushrooms . Refreshing Oasis Water . Cucumber Salad . Deviled Eggs . Blumaroo Cotton Candy . Fruity Faerie Lolly . Wicker Fruit Cornucopia . Mummified Ettaphant Loaf . Dark Chocolate Covered Toffee . Pyramid Potato Skins . Raspberry Chocolate Tuskaninny . Bat Kebab . Dark Chocolate Lutari . Desert Kiko Dried Fruit Bowl . Lemon Faerie Mousse . Hot Fudge Sundae . Crypt Crisps . Egg Salad Packed Lunch . Dipping Apples . Corn Pyramid . Korbat Wing Soup . Loaf of Sand . Intestines and Marinara . Gooseberry Jam Packed Lunch . Organic Pecan . Gooey Green Shake . Snow Broccoli . Braku Berry Juice . Candy Fyora Staff . Chilled Eyes with Clam Sauce . Chocolate Stuffed Orange . Fyora Day Fizz . Sakhmet Palace Cake . Desert Blumaroo Honey . Fyora Day Muffin . Jhudoras Toffee Rolls . Sushi Hot Dog . Cybunny Carrot Burger . Seafarers Hot Dog . Taco Hot Dog . Faerieland Gourmet Burger . Cube-Shaped Orange . Four Dirt Pizza Block . Frozen Prawn Delight . Mozzarella Basil Hot Dog . Cracked Keno Egg . Cube-Shaped Strawberry . Desert Lupe Honey . Megachilli Hot Dog . Millipede Lollypop . Smiley Pizza . Frozen Cybunny Treat . Rainbow Hot Dog . White Chocolate Asparagus Souffle . Grundos House Special . Toffee Dubloon . Polka Dot Hot Dog . Mango Crab Salad . Chocolate Kyrii Ice Cream . Fruit Juice Sack . Faerie Kale . Grape Jelly Brucicle . Moehog Lollypop . Acara Cabbage Cake . Blueberry Krawksicle . Bullseye Pizza . Congratulations Negg . Fancy Rack of Lamb . Fruit Wings Candy . Honey Blossom . Intergalactic Orange Sorbet . Roast Lizard Eggs . Tomato Basil Salad . Grobleen Salad . Gummy Fyora Wings . Kreludan Ice Cream Sundae . Frog Leg Pizza . Fruity Brucicle . Turkey Monster . Jelly Covered Greycorn . Organic Walnut . Cosmic Stars Sandwich . Crystal Burger . Maractite Hot Dog . Spaghetti and Brains . Faerie Apple Pie . Parsnip Pie . Snow Bagel . Jelly Bean Pizza . Toxic Sloth Slushie . Cheese and Pickle Packed Lunch . Ultra Deluxe Faeriepop . Strawberry Chia Pop . Tchea Fruit Bowl . Blue Rambus . Edible Tar Pizza . Double Chocolate Surprise . Meriberry Dressing . Organic Spinach Salad . Baby Cabbage with Gravy . Glowing Asparagus . Spotted Pudding with Custard . Cloned Corn . Protein on the Go . Green Scorchipepper . Whole Yummy Cloud Pizza . Apple Rigamaroll . Faerie Festival Cake . Orange and Grape Cone . Weeping Broccoli . Crystal Cookies . Raptraphant Leg . Grape Juice Sippy Cup . Desert Kau Honey . Grundo Space Grub Platter . Deluxe Burger Dog . Caramel Chia Parfait . Faerie Orange . Ham and Mustard Packed Lunch . Orange Chocolate Scorchio . Spicy Purblare Juice . Blueberry Nova Pop . Whole Garden Fresh Pizza . Chocolate Covered Toffee . Sloth Spaghetti . Large White Chocolate Cybunny . Veggie Deluxe Stuffed Pepper . Cursed Qasalan Pancakes . Harffel Fruit Oatmeal . Honey Yurble . Cryogenically Frozen Negg . Lemon Nova Pop . Mynci Fruit Kebab . Continuous Meat . Hot Tyrannian Pepper . Quadruple Scoop of Sorbet . Snowberry Ice Lolly . Sobbing Onion . Freeze Dried Fruit Platter . Mouldy Gruncheese . Purple Grundo Lunar Plum . Earth Faerie Breath Mints . Extra Cheesy Cheddar Crisps . Lemon Bumbluz Lolly . Lentil Cake . Meat and fruit Kebab . Cannibalistic Pumpkin . Lime Nova Pop . Lunch Hot Dog . Snow Burrito . Galaxy Cupcake . Haunted Milk . Cabbage Cupcake . Snotty Vira Onion . Space Fungus Sundae . Sparkling Ice Lolly . Gargaraptor Arm . Glowing Pre-Sliced Mushrooms . Sporkle Leg . Blue Moon Sundae . Charcoal Jelly Beans . Cube-Shaped Cherry . Cube-Shaped Lemon . Figcorn . Frozen Fruit Popsicle . Leaf Wraps . Moehog Rice Cakes . Spicy Kau Burger . Seasoned Curly Chips . Grundo Orange . Lemon Sherbert Jelly Beans . Buzz Dung Cone . Peophin Chocolate Medallion . Goparokko Island Fruit . Shell Lollypop . Orange Chocolate Pyramid . Frozen Strawberries and Cream . Hotdog with Embellish . Asparagus Wrap . Pickled Onion . Festive Faerie Fizz . Horror Doeuvres . Meat Pastry . Prime Beef and Chicken Meatballs . Raspberry Sundae . Scoop of Meteor Ice Cream . Strawberry and Orange Blend . Tigerfruit Toffee Apple . Zero Gravity Cheese Poofs . Cheesy Kois . Whole White Pizza . Cole Slaughter . Starfish Pizza . Frozen Blackberries and Cream . Mosaic Negg . Cone-Shaped Watermelon . Dried Ummagine . Healthy Grass Hot Dog . Tigerbuggle Pizza . Whole Pepperoni and Mushroom Pesto Pizza . Galactic Protein Shake . Peas and Corn Pizza . Whole Cauliflower and Lentil Pizza . Baby Cabbage Jelly Beans . Blazing Edible Snowflakes . Cheese Rigamaroll . Dark Faerie Plums . Galactic Water . Grundo Goo Sundae . Kau Ice Lolly . Peachpa Stuffed Potato . Space Floss . Tall Stack of Mutant Pancakes . Dark Chocolate Poogle . Stuffed Olive Salad . Sweet Necklace . Whole Cheesesteak Pizza . Blue Pepper Pizza . Buzz Chocolate Bar . Dark Chocolate Shoyru . Fluff N Stuff Grarrl Gobstopper . Frootafruit . Depressed Potato . Eerie Eggs . Hair Stuffed Maggot . Sentient Stew . Sesame Pistachio Cake . Hut of Mashed Potatoes . Destruct-O Chocolate Squares . Honey Basted Turkey Leg . Intesteen Casserole . Lizarkagna . Grobleen Sandwich . Orange Grundo Sherbet . Space Quesadilla . Water Faerie Cupcake . Apple Hot Dog . Mild Burnumup . Raspberry and Vanilla Nova . Slorg Potatoes . Squid Delight Pizza . Swirly Chocolate Milk . Tetraberry Chia Pop . Banango Toffee Apple . Fluffy Faerie Hot Cakes . Guacamole Injected Hot Dog . Rest in Pea Soup . Chocolate Balthazar . Giant Shish Kabob . Reject Marshmallow Grundo . Thornberry Candy Gavel . BBQ Onion Hot Dog . Beans and Tuna Jacket Potato . Chocolate King Skarl . Crying Corn . Crystal Crunch . Disgruntled Candy Corn . Juppiemint Bar . Mint Chocolate Lupe . Red Buzz Lolly . Tyrannian Rock Salad . Veggie Faerie Burger . Spyven Leg Soup . Blue Toobers . Candy Whistle . Cheops Soup . Chocolate Achyfi Lollypop . Cinnamon Oatmeal . Dehydrated Spaghetti . Deluxe Jacket Potato . Faerie Flotsam Fricassee . Franks and Cheesy Pasta . Gnome Shroom . Honey Vandagyre . Mint Chocolate Blumaroo . Mint Chocolate Tuskaninny . Perimontwist . Pumpcorn . Radish Pie . Spyder Muffins . Star Shaped Cheeseburger . Dark Chocolate Tuskaninny . Strawberry Milk Packet . Butter with Roll . Clam Chowder Ice Lolly . Meatier Asparagus Dish . Pluburb Pie . Super Frosty Ice Shake . Fyora Day Cupcakes . Skeith Ice Cream Cake . Slorg Meatloaf . Sloth Cone . Whole Sushi Pizza . Barbed Wire Black Licorice . Clam and Meatball Pizza . Sloth Pudding Cup . Snow Kabob . Gorgroggle Soup . Loaf of Tablet Bread . Chocolate Kau Milk . Planetary Pizza Ring . Plate of Unidentifiable Meat . Chilled Borovan with Frozen Asparagus . Fern Salad . Slorg Biscuits . Freeze Dried Ice Cream Sandwich . Agueena . Buzz Bread Salad . Caviar Hot Dog . Codestone Truffle . Electric Nachos . Grape Slurpship . Ham and Turkey Feast . Pine Needle Ice Lolly . Twice-Baked Spiked Potato . Veggie Burger . Whole Mushroom Pizza . Aubergine Casserole . Aubergine Salad . Peanut Butter Gormball Truffle . Jhudoras Swirling Cocktail . Pteri Soup . Lemon Pinchit Lollypop . Tentacle Burger . Cybunny Carrot Stew . Ixi-like Potato Pile . Rest in Peace of Chicken . Lava Latte . Qasalan Falafel . Cramjar . Pineapple Rice Bowl . Blooppop . Deep Fried Ghosts . Hutcakes . Wertholoupe . Army of Undead Cupcakes . Breakfast Hot Dog . Cookie Negg . Dark Chocolate Zafara . Earth Faerie Cupcake . Honey Bearog . Huberts Special Hot Dog . Snot Dog . Steamed Gorgroggles . Strawberry JubJub Sundae . Turkey Dinner . Whole Chilli Cheese Pizza . Blueberry Gummy Stamp . Pumpkin Bread . Apple Tree Broccoli . Beef Wellington . Lime Skidget Lolly . Tuskaninny Sundae . Angry Marshmallows . Green Apple Aisha Lollypop . Spooky Ghostbeef . Lost City Lanes Lime Gobstopper . Simple Fyora Cake . Squid Sauce . Air Faerie Munparaberries . Grundos Luxury Kebab . Spyder Eggs . The Stuff . Jhudora Jelly . Chocolate Orange Volcano . Roast Chestnut Neggnog . Greengage Breeze . Lunar Grunpop . Mint Chocolate Chia . Fried Suwek . Appriberry Brucicle . Electric Taco . Queela Torte . White Chocolate Covered Toffee . Dark Chocolate Skeith . Hanging Fruit Basket . Prickapome . Mustard and Tofu Hot Dog . Vanilla Neocola . Coconut Fruit Cup . Deep-Fried Galactic... Food Mass . Zeenana Crepe . Spooky Handwich . Mud Lollipop . Stuffed Penupe . Ummagine Candy Cane . Turtum Shell Salad . Chokato Crepe . Meatloathe . Mint Kyrii Ice Cream . Orange Chocolate Tuskaninny . Snowberry Crepe . Tigersquash Crepe . White Chocolate Nova . Cheddar Kacheek Cheese . Fruit Tart . Jolly Green Jiggling Jelly . Raspberry Ghostkerchief Jelly . Waffle Burger . Water Faerie Blueberries . Hieroglyphic Cake . Deceptive Soup . Golden Juppie . Orange Gummy Slorg . Puntec Fruit . Coconut Juice Bowl . Blueberry Gummy Slorg . Grapeade . Rambus Hot Dog . Gnorbu Lollipop . Oppressor Onions . Techo Jelly Surprise . Honey Pastry . Uni Sugar Skull . Blumaroo Tail Salad Extravaganza . Blurf . Snot Fries . Blue Cocofizz . Asteroid Zeenana Split . White Chocolate Lutari . Vinarok . Banana Achyfi . Flotato . Grey Eggs and Bacon . Jug of Fresh Lemoranade . Myncibean Punch . Thistleberry Sandwich . Tyrannian Goulash . Lobster Berry Surprise . Twin Salad . Seafood Pasta Salad . Space Kabob . Bullseyes . Rainbow Melt Pizza . Leftover Shortcrust Pastry . Nimmo Day Fruit Cake . Terry Berry . Tyrannian Everything Omelette . Droolik Surprise . Pyramid Pear . Happiness Faerie Dog . Seven Layer Mousse . Goparokko Fish Surprise . Peppered Kersla Bug . Stuffed Chokatos . Grape Blobcicle . Pink Peachpa Cooler . Chocolate Coated Eye . Mint Chocolate Peophin . Qanfire Fruit . Dried Blusops . Asparagus Pie . Spotkato . Miniature Chocolate Chocolate Factory . Shebberries . Watermelon Roll . Cherry Aboogala Lolly . Exotic Plant . Ice Ice Cream . Fried Something Something . Flotsam Fin Soup . Apple and Custard Drops . Grape Gummy Slorg . Patrapiller and Honey . Shrimp Salad Hot Dog . Turkey Drumstick Dinner . Pink Spooky Popcorn . Odorra Pod . Minty Choccywhip . Chocolate Maractite Coins . Meerca Bolognese . Large Swirly Chocolate Cybunny . Sparkleberry and Cream . Banana Jelly Flotsam . Maple Syrup Negg . Space Rock Soup . Gwontek Melon . Cone-Shaped Strawberry . Dessert Hot Dog . Unripe Puntec Wrap . Kougra Sugar Skull . Strawberry Flavoured Hot Dog . 14 Karat Baked Potato . Rock Negg . Fruity Swirl Souffle . Flied Rice . Stone Hot Dog . Broccoli Kebab . Gnorbu Gum . Arnapple . Honey Coated Hot Dog . Whole Steak and Egg Pizza . Sugar Moehog Skull . Ultimate Icy Negg . Breakfast Cake . Baked Apple with Snowberries . Crystal Taco . Kau Sundae . Buzz Sandwich . Battle Duck Negg . Radish Meringue . Chocolate Shoyru Meatball . Whole Cheeseburger Pizza . Mynci Surprise Ice Cream . Neverending Jar of Jellybeans . Air Faerie Mushroom . Sloth Dog . Scroll of the Sea . Buried Scroll . Brightvale Castle . Neovian Darkfall . The Happy Valley Report . Deserted Desert Scroll . Realm of the Water Faeries . King Hagan . Scroll of Supernova . Tropical Flora and Fauna . Skies Above Tyrannia . Zombie Handbook . Cartography For Beginners . Moon Dust Scroll . Keeping The Peace . Brightvale Maps . The Missing Koi . The Scary Truth . Lesser Defence Scroll . Scroll of Dark Nova . Minor Defence Scroll . Scroll of Ultranova . Scroll of Sadness . Carrot Sculpture . Tablet of the Zombie . Scroll of Trickery . Greater Defence Scroll . Caring For Shoyrus . Fiery Sun Scroll . Hypnotic Scroll . Joy of Fruit . Repairing Your Petpets . Scroll of Flame Strike . Scroll of Moon Light . Scroll of The Dark Star . Scroll of Benevolence . Easy Origami Flowers . Scroll of Despair . Scroll of The Clouds . Defence in the Battledome . Moehog Decorating Tips . Scroll of Radiance . Faerie Architecture . Scroll of the Earth . Scroll of the Battlefield . Scroll of the Depths . Scroll of the Western Winds . Scroll of Virtue . Faeries of Spring . Stained Glass Repair Guide . Hunting The Meerca Way . Fire Faerie Magic . King Hagans Biography . Wings of Steel . Krawk Island Chronicles . Advanced Learning . Lightning Scroll . Defenders Of Neopia Battle Log . The Mote Encyclopedia . Rainy Day Activities for Koi . The Armoury . Maractite Scroll . The Grand Usul Adventure . Viras Revenge . History of the Strength Potion . Scroll of Forgotten Promises . The Water Mote . Bound Darkness Scroll . Lava Art Projects . Mr X . All About Glass . Sinsis Puzzle Book . Mummy Bone Scroll . Cotton Candy Adventure . The History Of Meridell . Water Faerie Wishes . Scroll of Three Wishes . Kreludan Crosswords . Tales of Bravery . Mage Spells . Brightvale Books Catalogue . Job Coupon Handbook . Spring Soiree . I HATE Carrots! . Learned Royalty . Scroll of the Wise . Wheel of Knowledge Book . Brightvale Potion Manual . Volcano Diagrams . Tablet of The Mummy . The Marriage of Prince Jazan . Scroll of Three Curses . Spying The Dark Faerie Way . Royal Qasalan Scroll . The Rainbow Pool . A Snowbunny Tail . Leafy Scroll . Light of Day . When All Else Fails... . Fighting Fire with Fire . Lost Desert Map Scroll . The Lost Desert Expose . Keeping Your Krawk Happy . A Neopians Guide to Immaculate Grooming . Evil Plots For Beginners . How To Escape . Zarex Diary . Chia Ghost Stories . Scents Of The Skeith . Laser Energy . Scroll of the More Ancient Ancients . Jhudoras Quests . My Sweet Scorchio . Sweetheart Scroll . How to make Origami Creatures . Attack Of The Meercabots . Do The Moon Bounce . JubJub Day Ideas . The Spotted Flotsam . Beginners Curses . History of Wise Neopians . Wraith Scroll . Secrets of the Desert Paint Brush . What Me Cheat . Altador Cup Rule Book . Brightvales Brightest . Just Rolling Along . Footsteps in the Night . History of Unwise Neopians . Korbats Lab Secrets . Happy Feet . Advanced Magic . Kiko: Emperor of the Desert . Obsidian Tablet . Secrets of Sloth . The Cogmire . Faerie Usukis . The Plushie Skeith . Concert Hall Pictures . Mining for Fish . Fearless Finnigans Guide to Haunted Theatres . Dark Alleys of Neovia . Moltara Travel Brochure . On Tour with Chomby and the Fungus Balls . Double Tuskaninny Tales . Rocky Relationships . Diplomat Guest Scroll . Scroll of Broken Seals . The Royal Treasure Collection . Get Organised Stay Organised . Nimmo Explorations . Something Pretentious . Twisted Tales Of The Mutant Ruki . Escape From Meridell Castle . Spooky Stories About the Beyond . Crypt Days . Disturbing Disturbances . Neovian Carols . Scroll of Friendship . Poogle Performers . Tracking Desert Petpets . Water Faeries of Neopia . Sophies Leave Me Alone Notice . Tablet of Kings . The Lost Grundo . Altador Altador Cup Media Book . Cave Kacheek . Life Among the Dunes . Sunny Faerie Days . The Shoy . Neopian Times Issue 81 . Shenkuu Bulletin . Adventures in Writing . Scroll of Desert Winds . King Skarl the I . Steam of Life . The Age of Knowledge . Krawk Island Travel Brochure . Dark Tales of Neovia . Maraqua Travel Brochure . Bridges of Brightvale . Grundo Cafe Recipes . Ancient Hissi Legend Tablet . Snow Almanac Y12-Y15 . Tablet of Tablets . Trade Route Guide Map . Desert Days . How to Build a Pyramid . Brunos Musings . The Red Paw . Tonu Tails . Unleashed - The Great Lupe Escape . Functional Goggle Design . Harris Tales . Darigan Citadel Travel Brochure . Dark Tales of Bogshot . Gym Membership Advert . A Summer of Borovan . Flotsam Wok Recipes . Legendary Skeiths . Light Faerie Spells . Love Hurts . Mynci Book of World Records . Old Geartooth . Roo Island Travel Brochure . Secret Bruce Journal . Songs of the Faeries . The JubJubs Secret . Ultimate Sand Castle Guide . Uses of Obsidian . Wings Over the World . Faerie Glitter Crafts . Grundos Guide to Brain Washing . Scroll of the Fool . The Happiest Air Faerie . Elegant Desert Scroll . Scarab Tablet . To Beak or Not to Beak . Steam for Fun and Profit . Beyond the Locked Door . Ask Igneot Anything . Amazing Mesas of the Lost Desert . Interesting Dungeons . Wisdom of the Wise . Advanced Poetry . Faerie Tales of Escape . Fearless Finnigans Guide to Haunted Lodgings . Eye of the Scarab . Roo Island Altador Cup Media Book . Field Guide to Sand Dunes . Neopian Times Issue 37 . Shenkuu Travel Brochure . Secret of the Hidden Oasis . Brynn A Biography . Faerie Gardens . Fearless Finnigans Guide to Haunted Graveyards . Modern Spells . Shenkuu Export Manifest . Meerca Paint Guide . 1001 Recipes for Sand Cake . Lost Desert Travel Brochure . Rare and Retired Items . Virtupets Space Station Travel Brochure . Lost in the Dark . When Faeries Attack . The Pineapple Chia . Controlling Your Fire . Spooky Stories From the Beyond . Steam Containment Manual . Last Years Resolutions . Grand Master . How to Wrap Oddly Shaped Gifts . Crumbling Tablet . Desert Feasts . Gear Box Book Box . Space Station Holidays . Ghosts of the Desert . Deep Homes . Situational Gravity Pranks . Chocolate Chia Cookbook . Krawk Pot Recipes . Fearless Finnigans Guide to Haunted Eateries . Under the Surface Part I . Guide to Orange Furniture . Discovery of the Magma Pool . Famous Aisha Magicians . The 12th Chime . The Midnight Moehog . Sediment Striped Tablet . The Golden Journal Vol. 1 . The Story of the Acara Acrobat . Patter Feet . 4 Billion Pie Recipes . 1001 Kabob Recipes . The Haunted Cave . Treelurkers . Air Faeries of Neopia . Eye Of The Grarrl . Fall Destinations . Life In the Citadel . Terror Mountain Altador Cup Media Book . Neopian Autumns . Virtupets Altador Cup Media Book . Altador Cup Magazine . Better Than You . Now You Can Fry Anything . Acara Algebra . Rare Stamps . Wise Quotations . Cybunny Secrets . In the Dark . Book of Pretentious Quotes . Talk Like A Pirate . The Chomby Champion . Wocky Magic . Zap the Robot Aisha . Faerie Spelunking Tips . Popular Destinations . Zenor Kevix: A Biography . Faerieland Clouds . Nimmos Pond Guide Book . Nutty The Turdle . I Love Moo-cee . Rainbow Scroll . The Happy Buzz . Advert Attack Guide Book . Bumper Cars Guide Book . Tales of the Desert Draik . Tablet of Jazan . Shadow Usul Stories . Under the Surface Part II . Maraqua Altador Cup Media Book . Made of Stars . Usul Health . Legend of the Alabriss . Angelic Usukis . Lesser Healing Scroll . Catalogue of Secret Paint Brushes . Krawk Island Altador Cup Media Book . The Final Sunset . 101 Beverage Recipes . Scroll of the Scholar . Moehug Visits Altador . Crude Map of Haunted Houses . Glowing Book . Potions of Brightvale . Steam Engineering . Tis Be Harvesting Time . Building Igloos with Taelia . How to Build an Abominable Snowball . Dont Call Me Cute . The Korbat Researcher . Volcano Run Game Guide . Tyrannia Altador Cup Media Book . Hiding Valuables . JubJub Journal . My Hobby Book . Sculpting with Molten Rock . Scorchio Defence . Uni and the Uniocto . Meteorite Craft Book . Myths and Legends of Alien Aishas . Tales of Autumn . Intermediate Curses . Noodles for ALL . Pteri Poetry . Infamous Xweetok Guide . Terrific Tales of Terror . Haunted Woods Altador Cup Media Book . Tablet of the Vampire . Calendar Scroll . Iced Soy Chai Latte . Space Slushie . Rose Slushie . Voidberry Slushie . Blue Bomberry Slushie . Neocola Slushie . Cheese Slushie . Flatfruit Bubble Tea . Ginger Green Tea . Pink Negg Tea . Blue Tongue Slushie . Jasmine Tea . Iced Illusen Tea . Faerieland Borovan . Iced Clover Cream Coffee . Raspberry Iced Tea . Clover Cream Coffee . Cake Batter Slushie . Holiday Flowering Tea Pot . Strawberry Kiwi Tea . Ultra Strong Coffee . Iced Caramel Coffee . Strawberry Slushie . Elegant Cup of Tea . Earth Faerie Mug . Exquisite Cup of Tea . Nettle Tea . Lenny Tea Set . Hibiscus Tea . Kreludan Borovan . Wormy Slushie . Tar Slushie . Holiday Borovan Service . Air Faerie Mug . Pumpkin Spice Coffee . Dung Slushie . Grilled Ummagine Slushie . Autumn Herbal Tea . Candy Corn Latte . Cheese Plate Slushie . Lavender Mint Tea . Secret Sloth Slushie . Dark Tea . Pirate Flag . Furry Toilet . Tyrannian Fur Bed . Mushroom Soup Lamp . Biscuit Table Lamp . Dr Sloth Poster . Esophagor Bed . Glowing Bridge . Gothic Lamp . Holiday Tiki Palm . Jeran Rocks Bean Bag . Split Zafara Table Lamp . Spooky Patio Table . Workout Bench . Beware of Squid Sign . Leaf Covered Pit . Pull-up Bar . Spooky Bone Candle . Darigan Mirror . Spooky Umbrella . Bad Seed . Bone Shelves . Casket Table . Eyeball Cauldron . Petpetpet Eating Plant . Casket Bookcase . Pirate Compass Table . Jelly Trampoline . Woolypapith Bean Bag . Fire Barbecue . Grundo Inspired Dresser . Slorg Wardrobe . Deserted Carnival Chair . Mirror of Nova . Autumn Planter . Halloween Blumaroo Gnome . Heart Toast Sculpture . Light Faerie Toilet . Medium Sized Bonfire . Pink Camouflage Patio Table . Pumpkin Sink . Round Rainbow Rug . Solitary Rock Garden . Usuki Curtains . Disco Picnic Table . Meepit Bean Bag . Chia Warrior Statue . Fancy Bath Tub . Halloween Bruce Gnome . Purple Peophin Gnome . Spooky Tree Candle . Tropical Delight Pond . Bean Bag of Nova . Captain Scarblade Rug . Deserted Carnival Bed . Black Skull Candle . Halloween Cybunny Gnome . Corrupted Pond . Blue Boween Lamp . Green Camouflage Rug . Purple Coral Sculpture . Kau Tree Sculpture . Snowager Bed . Spooky Speaker . Snow Chomby . Negg Muncher . Blue Boween Rug . Rude Daffodil . Spooky Skull Candle . Copper Trellis . Dead Bonfire . Turdle Paddling Pool . Blue Skeith Bed . Clay Chimney . Evil Fuzzle Gnome . Red JubJub Table . Jeran Pillow . Moon Paving Stone . Sandcastle . Snow Kacheek . Wrought Iron Bed . Digging Kiko Gnome . Light Faerie Lamp . Biscuit Bed . Indoor Pirate Cannon . Judge Hog Rug . King Altador Rug . Zafara Guardian Statue . Symol Table . Mini Waterfall Pond . Glowing Trampoline . Titanium Garden Catapult . Chocolate Pond . Court Dancer Pillow . Esophagor Shelf Unit . Iced Ceiling Fan . Orange Kougra Print Rug . Captain Scarblade Bean Bag . Spooky Patio Chair . Fire Sofa . Snorkle Bed . Snow Bean Bag . Mutant Rocking Chair . Pineflower . Bone Fireplace . Green Camouflage Table . Meerca-Shaped Topiary . Tyrannian Trampoline . Zombom Poster . Tar Pit . Hungry Skeith Bean Bag . Kelp Window Blinds . Robot Barbecue . Checked Green Elephante Bed . Red JubJub Poster . Esophagor Lamp . Mystery Island Kacheekers . Air Faerie Canopy Bed . Fire Bean Bag . Flower Picking Bori Gnome . Sand Boat . Esophagor Bean Bag . Green Hissi Gnome . Toadstool Lamp . Apple Lantern Lantern . Blue Fuzzle Sofa Bed . Esophagor Table . Furry Sink . Fyora Rules Poster . Gardening Lenny Gnome . Minigolf Hole . Shaved Ice Machine . Snakebush . Solid Stone Fireplace . Dragonbud Wreath . Chocolate Bean Bag . Face Pulling Kiko Gnome . Fire Faerie Canopy Bed . Golden Grundo Bath Tub . Purple Coral Table . Purple Frillix . Sillie Daisy . Wooden Techo Table . Mutant Sofa . Cabbage Garden . Wooden Ceiling Fan . Pyrmat . Blue Camouflage Chair . Halloween Tonu Gnome . Pink Tile Umbrella . Intricate Snowflake Paving Stone . Toadstool Stool . Jhuidah Chair . Lord Kass Motif Rug . Spooky Bench . Red Yurble Wardrobe . Pebble Patio Table . Slorg Paddling Pool . Snowflake Table . Virtupets Paving Stones . Pink Aisha Bookshelf . Mr Chuckles Gnome . Niptor Sofa . Scareblu . Snow Grarrl . Plushie Trampoline . Gummy Dice Lamp . Illusen Canopy Bed . Techo Fountain Pond . Sparkling Snowflake Paving Stone . King Skarl Gnome . Morguss Gnome . Purple Coral Chair . Snow Shoyru Gnome . Gruslen Rug . Corn Tree . Decorative Pirates Net . Spyder Lights . Golden Dubloon Paving Stone . Green Grundo Fountain . Sketch Lamp . Barrel Cactus . Blue Techo Sofa . Faellie Play Pen . Yellow Aisha Stool . Blugthak Gnome . Delicate Snowflake Paving Stone . Mutant Yooyu Flower . Tomato Soup Fountain . Tyrannian Rocking Chair . Yellow Shell Table . Bent Tree . Blue Spardel Painting . Dark Faerie Canopy Bed . Halloween Ruki Gnome . Red JubJub Bean Bag . Sand Fort . Toadstool Coffee Table . Rainbow Table . Snow Meuka Sculpture . Tiki Skate Pond . White Lulu Wreath . Bleeding Heart . Colour Changing Tulips . Colourlily Wreath . Eliv Thade Rug . Grey Toilet . Gruslen Poster . Nimmo Topiary . Rainbow Elephante Bean Bag . Red Skull Lamp . Snow Gazebo . Whimsical Faerie Trapdoor . Cloud Garden Swing . Jumbo Cell Block Board . Mazzew Bean Bag . Orange Jelly Fridge . Snow Fireplace . Chocolate Bush . Island Lamp . Pink Bonsai Tree . Rainbow Turnip . Silver Disco Ball . Eliv Thade Chair . Smoking Tree . Tyrannian Hammock . Flaming Rubbish Bin . Green Poogle Gnome . Cloud Umbrella . Esophagor Chair . Illusen Chair . Judge Hog Bean Bag . Maraquan Trapdoor . Purple Hydrangea . Tinsel Garland . Christmas Spardel Painting . Blue Skeith Sofa . Cherry Red Slide . Covered Slide . Sketch Bean Bag . Checkered Desk . Lovepetal . Luxury Cloud Cot . Snow Bruce Gnome . Biscuit Chair . Blue Boween Bean Bag . Blue Coffee Table . Snow Dresser . Fiery Ceiling Fan . Day Dreaming Xweetok Gnome . Electric Daffodil . Fancy Rug . Gummy Dice Table . Carrot Garden . Coral Patio Table . Illusen Wardrobe . Red Grundo Biscuit Jar . Meridell Motif Rug . Neopian Philharmonic Speaker . Spyder Web Hammock . Treble Bench . Fyora Toilet . Grundo Inspired Chair . Poogle Tree Sculpture . Queen Fyora Poster . Chocolate Drawers . Earth Faerie Sink . Snowager Gnome . Checkered Drawers . Court Dancer Gnome . Iron Rug . Marrow Garden . Song Flowers . Iron Mirror . Pink Pteri Fountain . Chilli Bath Mat . Grey Bath Tub . Hand Painted Divider . Iron Drawers . Mud Pit . Rainbow Toilet . Red Wooden Trellis . Rock Garden . Smelly Cheese Bean Bag . Spooky Korbat Candle . Spotted Daffodil . Sunset Coral Wardrobe . Carnival of Terror Clown Gnome . Checkered Sofa . Queen Fyora Rocking Chair . Rainbow Sink . Orange Kougra Print Chair . Savage Daffodil . Blue Usuki Display Case . Mazzew Pillow . Rainbow Sofa . Halloween Moehog Gnome . Plushie Sofa . Creaky Mutant Bed . Curved Jelly Drawers . Modern Christmas Tree . Sakhmet Solitaire Game Table . Meepit Drawers . Smelly Cheese Chair . Wocky Glove . Bilge Dice Game Table . Gothic Chair . Green Usuki Lamp . Orange Camouflage Sofa . Snow Bath Tub . Snow Blumaroo . Crystal Chocolate Fountain . Gold Disco Ball . Smelly Cheese Table . Ice Snowflake Sculpture . Joyous Ogrin Gnome . Simple Tree House . Island Kacheek Fountain . Sunny Yellow Sofa . Goldy Picnic Bench . Neopian Times Bean Bag . Rainbow Stairs . Sunny Yellow Bed . Water Faerie Table . Candy Vampire Candle . Crystal Eyrie Sculpture . Icy Decorated Tree . King Skarl Garden Statue . Red JubJub Chair . Speckled Canopy Bed . Valentines Bean Bag . Ixi Skull . Pink Flower Welcome Mat . Darigan Chair . Snorkle Toaster . Snow Von Roo Sculpture . Starry Paving Stone . Gummy Dice Chair . Shell Fountain . Squid Sprinklers . Pant Devil Gnome . Pink Lily . Disco Print L-Shaped Sofa . Pink Lenny Bed . Bubble Toilet . Curious Bori Gnome . Desk Candelabra . Exotic Wall Art . Steel Bridge . Tigersquash Bean Bag . Traphnoid Palm . Darigan Wardrobe . Vegetable Soup Pot . Bonfire Barrel . Chocolate Chia Statue . Holly Patterned Bed . Small Jelly Drawers . Ultranova Table . Cloud Play Pen . Icy Dinner Table . Grey Wardrobe . Gummy Dice Bed . Negg Tree . Pink L-Shaped Sofa . Chocolate Table . Illusen Orb Ornament . Snow Yooyu Flower . Furry Bath Tub . Jumbo Shapeshifter Board . Tropical Fern . Walking Carpet Dresser . Water Faerie Chair . Wooden Sandbox . Hand Painted Chimney . Faerie Fridge . Mutant Claw Chair . Mutant Table . Rainbow Shed . Scarab 21 Game Table . Screaming Jack-O-Lantern . Tyrannian Nimmo Gnome . Woolypapith Chair . Zombom Pillow . Mika Gnome . Dr Sloth Pumpkin . Garden Pavilion . Test Your Strength Outdoor Play Set . Fire Wardrobe . Golden Lamp . Jazzmosis Speaker . Orange Yurble Gnome . Icy Floral Center Piece . Green Jazzmosis Framed Poster . Chilli Table . Cloud Print L-Shaped Sofa . Symol Sofa . Pink Faellie Bean Bag . Covered Isca Themed Bed . Clay Bridge . Surprised JubJub Gnome . Weak Bonfire . Chokato Lamp . Grand Staircase . Ornate Chocolate Fountain . Plushie Yurble Chair . Bone Legged Table . Blue Wooden Arbor . Exploded Barrel . Faerie Bridge . Fire Bridge . Gothic Patio Table . Iron Bed . Jelly Desk . Mootix Poster . Orange Kougra Print Sofa . Fire Shed . Snowager Pattern Sofa . Maraquan Parasol . Purple Camouflage Dresser . Blue Boween Wardrobe . Harris Rug . Bone Chandelier . Gruslen Chair . Cloud Shed . Comfy Chocolate Sofa . Flower Picking Kiko Gnome . Framed Neopian Times . Furry Autumn Bushes . Gothic Christmas Tree . 2 Gallon Hatz Speaker . Fire Yooyu Flower . Bonsai Rock Garden . Igloo . Morris Gnome . Pirates Chest . Slorg Play Pen . Bagatelle Outdoor Play Set . Dark Faerie Rug . Sketch Table . Deluxe Gold Trellis . Elegant Air Faerie Basin . Mutant Chimney . Carassa Gnome . Carnival of Terror Clown Sprinkler . Coral Arbor . Disco Print Rug . Faerie Barbecue . Inflatable Bouncy Pirate Ship . Jhudora Swing . Mutant Mirror . Old Wooden Barrel . Outdoor Pirate Flag . Plushie Yurble Sofa . Rainbow Morning Flower . Red Koi Toaster . Snowager Ornament . Spooky Meowclops Candle . Tropical Ceiling Fan . Water Faerie Vanity . Water Rock Garden . Rainbow Brick Pond . Sand Pit . Fyoras Birdhouse . Pink Garden Swing . Red Jazzmosis Framed Poster . Acrobatic Mynci Gnome . Bottomless Pit . Dark Faerie Tub . Red Usuki Display Case . Bell Garland . Rainbow Anthurium . Iron Desk . Kissing Stem . Niptor Bed . Sunset Coral Bed . Wock Til You Drop Speaker . Yellow Jazzmosis Framed Poster . Blue Koi Curtains . Mootix Rug . Harris Bean Bag . Padded White Shell Chair . Snow Covered Decorated Tree . Fyora Motif Vase . Gigantic Bonfire . Lemon Jelly Bed . Potted Jungle Plant . Bonfire Dummy . Nimmo Garden Lounge . Chocolate Play Pen . Emerald Eyrie Sculpture . Gilded Flow Chocolate Fountain . The Hikalakas Lamp . Bone Detail Sofa . Jhuidah Table . Blue Jazzmosis Framed Poster . Earth Faerie Canopy Bed . Fyora Inspired Bedroom Desk . Phonograph . Spyder Web Rug . Grundo Inspired Bed . Double Coffin Wardrobe . Pink Disco Ball . Pirate Cannon . Icy Stove . Jumbo Ultimate Bullseye Target . Deluxe Tree House . Elegant Air Faerie Bathtub . Exotic Dresser . Fizzy Drink Fountain Bar . Guess the Card Game Table . Plushie Yurble Table . Deluxe Garden Catapult . Blue Ruki Gnome . Disco Coffee Table . Gothic Bed . Halloween Aisha Gnome . Walking Carpet Wardrobe . Disco Print Pillow . Deluxe Pirate Ships Wheel . Spiral Staircase . Captain Scarblade Painting . Kau Toast Sculpture . Sitting Elephante Gnome . Enchanting Round Table . Pink Fountain . Inflatable Squid . Techo Says Game Table . Blue Yurble Sofa . Dark Faerie Dresser . Iron Table . Dark Red Spooky Candle . Gravestone Bath Tub . Large Purple Poppies . Tigersquash Dresser . Faerie Koi Mobile . Goldy Sun Lounger . Royal Umbrella . Jhudora Throne . Exotic Lamp . Iron Small Drawer . Fyora Print Bed . Plushie Play Pen . Twirly Plant . Wheel of Misfortune Outdoor Play Set . Woolypapith Sofa . Light Faerie Table . Halloween Acara Gnome . Sketch Sofa . Wreathy Bed . Ships Anchor . Blue Jetsam Bed . Faerie Yooyu Flower . Fluffy Gruslen Rug . Brave Jeran Poster . Red Eyrie Painting . Tropical Flower Plant . Curved Pond . Kauvara Print Play Pen . Iron Large Drawer . Mazzew Rug . Tiered Pond . Iron Sofa . Regal Bridge . Sticks N Stones . Mootix Sofa . Deluxe Fyora Print Rug . Roped Bridge . Yellow Roundabout . Stone Sink . Faerieland Tree House . Bone Detail Dresser . Burnt Dummy . Goldy Garden Umbrella . Tigersquash Bed . Light Faerie Chair . Mutant Tongue Table . Tiger Seat . Mootix Wardrobe . Mootix Bed . Disco Print Stool . Jhuidah Cabinet . Kayla Bean Bag . Robo Sloth On Wheels . Monumental Bench . Plushie Yurble Bed . Halloween Meerca Gnome . Noble Lord Kass Poster . Disco Bean Bag Chair . Rainbow Bridge . Mootix Lamp . Meridell Emblem Flag . Mystery Island Tree House . Goldy Swinging Chair . Violet Velvet Chair . Sugar Bridge . Water Faerie Sofa . Chokato Table . Miso Soup Bath . Checkered Bed . CATFB Speaker . Icy Bridge . Dark Faerie Wardrobe . Faerie Koi Play Pen . Robo Sloth Fist of Power . Exotic Rug . Blue Velvet Chair . Judge Hog Bed . Meepit Chair . Gruslen Bean Bag . Cloud Bath Tub . Disco Print Lamp . Rainbow Fruit Tree . The Hikalakas Pillow . Disco Print Chair . Bone Detail Bed . Water Faerie Bed . Fyora Inspired Bookcase . Zafara Double Agent Poster . Robo Poogle . Dark Faerie Sofa . Jeran Bed . Ships Wheel . Robo Sloth Butler . Meepit Painted Rock . Faerie Pteri Feather Coaster . Valentines Day T-Shirt . Kateil Wooden Box . Meepit Wooden Box . Dandan Wooden Box . Vandagyre Bookmark . Meepit Caution Sign . Silver Skeith Souvenir Spoon . Cirrus Wooden Box . Garden Gnome Gift Set . Silver Hissi Souvenir Spoon . Torn Homemade Valentine . Simple Wooden Love Spoon . Simple Ivory Love Spoon . Star Map . Silver Kiko Souvenir Spoon . Valentines Day Basket of Hearts . Baby Chia Picture Frame . Chomby Collectable Spoon . Gold Gem Negg . Woven Palm Basket . Silver Chia Souvenir Spoon . Mystery Island Fruit Pillars . Return of Dr. Sloth Valentine Card Set . Neopian Serving Cart . Pretty Heart Balloons . Deluxe Pewter Figurine . Tale of Woe Valentine Card Set . Jewellery Box . Pretty Fyora Potted Flowers . Magical Sparkling Happiness Faerie Flower . Tower Warning Sign . Wraith Staff . Ornate Wooden Love Spoon . ";
main();
