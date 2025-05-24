export type DateCategory = 'Indoor' | 'Outdoor' | 'Creative' | 'Quick' | 'Free' | 'Budget' | 'Premium' | 'Romantic' | 'Food' | 'Adventure' | 'Entertainment' | 'Cultural' | 'Active' | 'Medium';
export type CostLevel = 'Low' | 'Medium' | 'High';

export interface DateIdea {
  id: string;
  title: string;
  categories: DateCategory[];
  description: string;
  estimated_cost: CostLevel;
  location: string;
}

export const dateIdeas: DateIdea[] = [
  {
    id: '1',
    title: 'Backyard Camping',
    categories: ['Outdoor', 'Budget', 'Creative'],
    description: 'Set up a tent in the backyard, bring snacks, and stargaze under the open sky.',
    estimated_cost: 'Low',
    location: 'Backyard'
  },
  {
    id: '2',
    title: 'DIY Pizza Night',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Make your own pizzas from scratch with fun toppings and enjoy a cozy night in.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '3',
    title: 'Free Museum Day',
    categories: ['Indoor', 'Free', 'Creative'],
    description: 'Visit a local museum on their free admission day and explore art or history together.',
    estimated_cost: 'Low',
    location: 'Museum'
  },
  {
    id: '4',
    title: 'Sunset Beach Walk',
    categories: ['Outdoor', 'Free', 'Quick'],
    description: 'Take a romantic stroll along the beach during sunset, collecting seashells and enjoying the view.',
    estimated_cost: 'Low',
    location: 'Beach'
  },
  {
    id: '5',
    title: 'Art Painting Challenge',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Set up a painting station and challenge each other to create art based on a theme.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '6',
    title: 'Board Game Night',
    categories: ['Indoor', 'Budget', 'Quick'],
    description: 'Break out your favorite board games and enjoy some friendly competition with snacks.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '7',
    title: 'Surprise Picnic',
    categories: ['Outdoor', 'Budget', 'Creative'],
    description: 'Pack a picnic basket with favorite foods and find a hidden spot in a local park.',
    estimated_cost: 'Low',
    location: 'Park'
  },
  {
    id: '8',
    title: 'Hot Chocolate Movie Marathon',
    categories: ['Indoor', 'Budget', 'Quick'],
    description: 'Make delicious hot chocolate and watch your favorite movie series together.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '9',
    title: 'City Bike Ride',
    categories: ['Outdoor', 'Budget', 'Quick'],
    description: 'Rent bikes and explore different neighborhoods in your city.',
    estimated_cost: 'Medium',
    location: 'City'
  },
  {
    id: '10',
    title: 'Farmer\'s Market Visit',
    categories: ['Outdoor', 'Budget', 'Quick'],
    description: 'Browse local produce and artisanal goods at your neighborhood farmer\'s market.',
    estimated_cost: 'Low',
    location: 'Market'
  },
  {
    id: '11',
    title: 'Bookstore Scavenger Hunt',
    categories: ['Indoor', 'Free', 'Creative'],
    description: 'Create a list of books to find in a local bookstore and race to complete the challenge.',
    estimated_cost: 'Low',
    location: 'Bookstore'
  },
  {
    id: '12',
    title: 'Home Spa Day',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Create a spa atmosphere with candles, music, and DIY face masks.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '13',
    title: 'Dog Park Adventure',
    categories: ['Outdoor', 'Free', 'Quick'],
    description: 'Borrow a friend\'s dog and enjoy a fun day at the dog park.',
    estimated_cost: 'Low',
    location: 'Park'
  },
  {
    id: '14',
    title: 'Vintage Photo Shoot',
    categories: ['Outdoor', 'Free', 'Creative'],
    description: 'Dress up in vintage clothes and take photos using your phone cameras.',
    estimated_cost: 'Low',
    location: 'Various'
  },
  {
    id: '15',
    title: 'Home Karaoke Night',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Set up a karaoke station at home and sing your favorite songs together.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '16',
    title: 'Cooking Class at Home',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Choose a new cuisine to learn and cook together using online tutorials.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '17',
    title: 'Stargazing Night',
    categories: ['Outdoor', 'Free', 'Creative'],
    description: 'Find a dark spot away from city lights and identify constellations together.',
    estimated_cost: 'Low',
    location: 'Outdoors'
  },
  {
    id: '18',
    title: 'Escape Room Challenge',
    categories: ['Indoor', 'Premium', 'Creative'],
    description: 'Test your problem-solving skills by working together to escape a themed room.',
    estimated_cost: 'High',
    location: 'Escape Room'
  },
  {
    id: '19',
    title: 'Sunrise Hike',
    categories: ['Outdoor', 'Free', 'Quick'],
    description: 'Wake up early and hike to a scenic viewpoint to watch the sunrise together.',
    estimated_cost: 'Low',
    location: 'Hiking Trail'
  },
  {
    id: '20',
    title: 'Wine Tasting at Home',
    categories: ['Indoor', 'Premium', 'Creative'],
    description: 'Purchase a few different wines and learn about wine tasting together.',
    estimated_cost: 'Medium',
    location: 'Home'
  },
  {
    id: '21',
    title: 'DIY Terrarium Workshop',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Create miniature gardens in glass containers with succulents and decorative elements.',
    estimated_cost: 'Medium',
    location: 'Home'
  },
  {
    id: '22',
    title: 'Local Food Tour',
    categories: ['Outdoor', 'Premium', 'Creative'],
    description: 'Explore different restaurants in your neighborhood, sharing small plates at each stop.',
    estimated_cost: 'High',
    location: 'City'
  },
  {
    id: '23',
    title: 'Indoor Rock Climbing',
    categories: ['Indoor', 'Premium', 'Creative'],
    description: 'Challenge yourselves with indoor rock climbing at a local gym.',
    estimated_cost: 'Medium',
    location: 'Climbing Gym'
  },
  {
    id: '24',
    title: 'Sunset Kayaking',
    categories: ['Outdoor', 'Premium', 'Creative'],
    description: 'Rent kayaks and paddle through calm waters while watching the sunset.',
    estimated_cost: 'Medium',
    location: 'Lake/River'
  },
  {
    id: '25',
    title: 'DIY Photo Booth',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Set up a fun photo booth with props and take silly pictures together.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '26',
    title: 'Pottery Making Class',
    categories: ['Indoor', 'Creative', 'Premium'],
    description: 'Learn to create beautiful pottery pieces together in a guided workshop.',
    estimated_cost: 'Medium',
    location: 'Art Studio'
  },
  {
    id: '27',
    title: 'Sunset Sailing',
    categories: ['Outdoor', 'Premium', 'Creative'],
    description: 'Rent a small sailboat and enjoy a romantic sunset on the water.',
    estimated_cost: 'High',
    location: 'Lake/Sea'
  },
  {
    id: '28',
    title: 'DIY Candle Making',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Create scented candles together with different colors and fragrances.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '29',
    title: 'Botanical Garden Visit',
    categories: ['Outdoor', 'Budget', 'Creative'],
    description: 'Explore beautiful plants and flowers in a local botanical garden.',
    estimated_cost: 'Low',
    location: 'Botanical Garden'
  },
  {
    id: '30',
    title: 'Virtual Reality Gaming',
    categories: ['Indoor', 'Premium', 'Creative'],
    description: 'Try out exciting VR games together at a gaming center.',
    estimated_cost: 'Medium',
    location: 'Gaming Center'
  },
  {
    id: '31',
    title: 'Farm Animal Visit',
    categories: ['Outdoor', 'Free', 'Creative'],
    description: 'Visit a local farm and interact with friendly animals.',
    estimated_cost: 'Low',
    location: 'Farm'
  },
  {
    id: '32',
    title: 'DIY Cocktail Night',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Learn to make fancy cocktails together with fresh ingredients.',
    estimated_cost: 'Medium',
    location: 'Home'
  },
  {
    id: '33',
    title: 'Ice Skating',
    categories: ['Indoor', 'Budget', 'Quick'],
    description: 'Enjoy a fun ice skating session at a local rink.',
    estimated_cost: 'Low',
    location: 'Ice Rink'
  },
  {
    id: '34',
    title: 'Sunset Horseback Riding',
    categories: ['Outdoor', 'Premium', 'Creative'],
    description: 'Take a romantic horseback ride during sunset.',
    estimated_cost: 'High',
    location: 'Ranch'
  },
  {
    id: '35',
    title: 'DIY Soap Making',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Create personalized soaps with different colors and scents.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '36',
    title: 'Local Theater Show',
    categories: ['Indoor', 'Premium', 'Creative'],
    description: 'Watch a play or musical at a local theater.',
    estimated_cost: 'Medium',
    location: 'Theater'
  },
  {
    id: '37',
    title: 'Beach Volleyball',
    categories: ['Outdoor', 'Free', 'Quick'],
    description: 'Play a friendly game of beach volleyball.',
    estimated_cost: 'Low',
    location: 'Beach'
  },
  {
    id: '38',
    title: 'DIY Plant Workshop',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Learn to care for and propagate different types of plants.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '39',
    title: 'Hot Air Balloon Ride',
    categories: ['Outdoor', 'Premium', 'Creative'],
    description: 'Experience a romantic hot air balloon ride at sunrise.',
    estimated_cost: 'High',
    location: 'Various'
  },
  {
    id: '40',
    title: 'DIY Jewelry Making',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Create matching jewelry pieces for each other.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '41',
    title: 'Local Food Festival',
    categories: ['Outdoor', 'Budget', 'Quick'],
    description: 'Explore different cuisines at a local food festival.',
    estimated_cost: 'Medium',
    location: 'City'
  },
  {
    id: '42',
    title: 'DIY Tie-Dye Session',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Create unique tie-dye designs on t-shirts or other items.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '43',
    title: 'Sunset Yoga Class',
    categories: ['Outdoor', 'Budget', 'Quick'],
    description: 'Take a relaxing yoga class together during sunset.',
    estimated_cost: 'Low',
    location: 'Beach/Park'
  },
  {
    id: '44',
    title: 'DIY Chocolate Making',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Learn to make delicious chocolates with different flavors.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '45',
    title: 'Local Art Gallery Tour',
    categories: ['Indoor', 'Free', 'Creative'],
    description: 'Explore local art galleries and discuss your favorite pieces.',
    estimated_cost: 'Low',
    location: 'Art District'
  },
  {
    id: '46',
    title: 'DIY Sushi Making',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Learn to make sushi rolls together with fresh ingredients.',
    estimated_cost: 'Medium',
    location: 'Home'
  },
  {
    id: '47',
    title: 'Sunset Photography Walk',
    categories: ['Outdoor', 'Free', 'Creative'],
    description: 'Take a walk and capture beautiful sunset photos together.',
    estimated_cost: 'Low',
    location: 'Various'
  },
  {
    id: '48',
    title: 'DIY Bath Bomb Making',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Create colorful and fragrant bath bombs together.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '49',
    title: 'Local Music Festival',
    categories: ['Outdoor', 'Premium', 'Creative'],
    description: 'Enjoy live music and performances at a local festival.',
    estimated_cost: 'Medium',
    location: 'City'
  },
  {
    id: '50',
    title: 'DIY Pizza Making Competition',
    categories: ['Indoor', 'Budget', 'Creative'],
    description: 'Have a fun competition to create the best pizza.',
    estimated_cost: 'Low',
    location: 'Home'
  },
  {
    id: '51',
    title: "Aerial Yoga Class",
    categories: ['Indoor', 'Creative', 'Premium'],
    description: "Try a unique yoga experience using silk hammocks suspended from the ceiling.",
    estimated_cost: 'Medium',
    location: 'Indoor'
  },
  {
    id: '52',
    title: "DIY Perfume Making",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Create your own signature scents by blending different essential oils and fragrances.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '53',
    title: "Sunset Horse Carriage Ride",
    categories: ['Outdoor', 'Romantic', 'Premium'],
    description: "Enjoy a romantic carriage ride through the city during sunset.",
    estimated_cost: 'High',
    location: 'Outdoor'
  },
  {
    id: '54',
    title: "DIY Book Binding",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn the art of book binding and create a custom journal together.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '55',
    title: "Local Beer Tasting",
    categories: ['Indoor', 'Food', 'Medium'],
    description: "Visit a local brewery and sample different craft beers.",
    estimated_cost: 'Medium',
    location: 'Indoor'
  },
  {
    id: '56',
    title: "DIY Mosaic Art",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Create beautiful mosaic artwork using tiles and glass pieces.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '57',
    title: "Sunset Paddleboarding",
    categories: ['Outdoor', 'Adventure', 'Medium'],
    description: "Try paddleboarding on calm waters while watching the sunset.",
    estimated_cost: 'Medium',
    location: 'Outdoor'
  },
  {
    id: '58',
    title: "DIY Leather Crafting",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to make leather accessories like keychains or bracelets.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '59',
    title: "Local Comedy Night",
    categories: ['Indoor', 'Entertainment', 'Medium'],
    description: "Enjoy a night of laughter at a local comedy club.",
    estimated_cost: 'Medium',
    location: 'Indoor'
  },
  {
    id: '60',
    title: "DIY Macrame Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to create beautiful macrame wall hangings or plant hangers.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '61',
    title: "Sunset Helicopter Tour",
    categories: ['Outdoor', 'Adventure', 'Premium'],
    description: "Take a scenic helicopter ride during sunset for breathtaking views.",
    estimated_cost: 'High',
    location: 'Outdoor'
  },
  {
    id: '62',
    title: "DIY Natural Skincare",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Create homemade skincare products using natural ingredients.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '63',
    title: "Local Food Truck Tour",
    categories: ['Outdoor', 'Food', 'Medium'],
    description: "Explore different food trucks and share various dishes.",
    estimated_cost: 'Medium',
    location: 'Outdoor'
  },
  {
    id: '64',
    title: "DIY Woodworking",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn basic woodworking skills and create a small project together.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '65',
    title: "Sunset Hot Tub",
    categories: ['Indoor', 'Romantic', 'Premium'],
    description: "Relax in a hot tub while enjoying the sunset view.",
    estimated_cost: 'High',
    location: 'Indoor'
  },
  {
    id: '66',
    title: "DIY Calligraphy Class",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn the art of beautiful handwriting together.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '67',
    title: "Local Jazz Night",
    categories: ['Indoor', 'Entertainment', 'Medium'],
    description: "Enjoy live jazz music at a local venue.",
    estimated_cost: 'Medium',
    location: 'Indoor'
  },
  {
    id: '68',
    title: "DIY Pottery Painting",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Paint pre-made pottery pieces with your own designs.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '69',
    title: "Sunset Segway Tour",
    categories: ['Outdoor', 'Adventure', 'Medium'],
    description: "Explore the city on segways during sunset.",
    estimated_cost: 'Medium',
    location: 'Outdoor'
  },
  {
    id: '70',
    title: "DIY Essential Oil Making",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to extract and blend essential oils from plants.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '71',
    title: "Local Dance Class",
    categories: ['Indoor', 'Active', 'Medium'],
    description: "Take a dance class together, like salsa or ballroom.",
    estimated_cost: 'Medium',
    location: 'Indoor'
  },
  {
    id: '72',
    title: "DIY Glass Blowing",
    categories: ['Indoor', 'Creative', 'Medium'],
    description: "Learn the art of glass blowing and create unique pieces.",
    estimated_cost: 'Medium',
    location: 'Indoor'
  },
  {
    id: '73',
    title: "Sunset Catamaran Cruise",
    categories: ['Outdoor', 'Romantic', 'Premium'],
    description: "Enjoy a romantic cruise on a catamaran during sunset.",
    estimated_cost: 'High',
    location: 'Outdoor'
  },
  {
    id: '74',
    title: "DIY Natural Dyeing",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to dye fabrics using natural materials and plants.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '75',
    title: "Local Poetry Reading",
    categories: ['Indoor', 'Cultural', 'Budget'],
    description: "Attend a poetry reading event at a local café.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '76',
    title: "DIY Paper Making",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to make handmade paper with different textures and colors.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '77',
    title: "Sunset Paragliding",
    categories: ['Outdoor', 'Adventure', 'Premium'],
    description: "Experience the thrill of paragliding during sunset.",
    estimated_cost: 'High',
    location: 'Outdoor'
  },
  {
    id: '78',
    title: "DIY Natural Soap Making",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Create handmade soaps using natural ingredients and essential oils.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '79',
    title: "Local Opera Night",
    categories: ['Indoor', 'Cultural', 'Premium'],
    description: "Dress up and enjoy an evening at the opera.",
    estimated_cost: 'High',
    location: 'Indoor'
  },
  {
    id: '80',
    title: "DIY Candle Making Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn advanced candle making techniques and create unique designs.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '81',
    title: "Sunset Zip Lining",
    categories: ['Outdoor', 'Adventure', 'Medium'],
    description: "Experience an adrenaline rush while zip lining during sunset.",
    estimated_cost: 'Medium',
    location: 'Outdoor'
  },
  {
    id: '82',
    title: "DIY Natural Perfume Making",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Create custom perfumes using natural essential oils and alcohol.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '83',
    title: "Local Ballet Performance",
    categories: ['Indoor', 'Cultural', 'Premium'],
    description: "Enjoy a beautiful ballet performance at a local theater.",
    estimated_cost: 'High',
    location: 'Indoor'
  },
  {
    id: '84',
    title: "DIY Natural Cosmetics",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to make natural makeup and skincare products.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '85',
    title: "Sunset Hot Air Balloon Ride",
    categories: ['Outdoor', 'Romantic', 'Premium'],
    description: "Experience a romantic hot air balloon ride during sunset.",
    estimated_cost: 'High',
    location: 'Outdoor'
  },
  {
    id: '86',
    title: "DIY Natural Dye Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to create natural dyes from plants and dye fabrics.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '87',
    title: "Local Symphony Orchestra",
    categories: ['Indoor', 'Cultural', 'Premium'],
    description: "Enjoy a classical music performance by a local orchestra.",
    estimated_cost: 'High',
    location: 'Indoor'
  },
  {
    id: '88',
    title: "DIY Natural Candle Making",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Create candles using natural waxes and essential oils.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '89',
    title: "Sunset Rock Climbing",
    categories: ['Outdoor', 'Adventure', 'Medium'],
    description: "Try outdoor rock climbing during sunset.",
    estimated_cost: 'Medium',
    location: 'Outdoor'
  },
  {
    id: '90',
    title: "DIY Natural Skincare Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to make natural face masks and scrubs.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '91',
    title: "Local Art Exhibition",
    categories: ['Indoor', 'Cultural', 'Medium'],
    description: "Visit a local art gallery and discuss your favorite pieces.",
    estimated_cost: 'Medium',
    location: 'Indoor'
  },
  {
    id: '92',
    title: "DIY Natural Soap Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to make natural soaps with different ingredients.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '93',
    title: "Sunset Mountain Biking",
    categories: ['Outdoor', 'Adventure', 'Medium'],
    description: "Enjoy a mountain biking adventure during sunset.",
    estimated_cost: 'Medium',
    location: 'Outdoor'
  },
  {
    id: '94',
    title: "DIY Natural Perfume Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Create custom perfumes using natural ingredients.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '95',
    title: "Local Film Festival",
    categories: ['Indoor', 'Cultural', 'Medium'],
    description: "Attend a local film festival and watch independent movies.",
    estimated_cost: 'Medium',
    location: 'Indoor'
  },
  {
    id: '96',
    title: "DIY Natural Cosmetics Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to make natural makeup and skincare products.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '97',
    title: "Sunset Surfing",
    categories: ['Outdoor', 'Adventure', 'Medium'],
    description: "Try surfing during sunset for a unique experience.",
    estimated_cost: 'Medium',
    location: 'Outdoor'
  },
  {
    id: '98',
    title: "DIY Natural Dye Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Learn to create natural dyes and dye fabrics.",
    estimated_cost: 'Low',
    location: 'Indoor'
  },
  {
    id: '99',
    title: "Local Music Festival",
    categories: ['Outdoor', 'Entertainment', 'Medium'],
    description: "Enjoy live music and performances at a local festival.",
    estimated_cost: 'Medium',
    location: 'Outdoor'
  },
  {
    id: '100',
    title: "DIY Natural Candle Workshop",
    categories: ['Indoor', 'Creative', 'Budget'],
    description: "Create unique candles using natural materials.",
    estimated_cost: 'Low',
    location: 'Indoor'
  }
]; 