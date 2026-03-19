// ============================================================
//  BAR SHEET — INVENTORY DATA
//  To add an item:  { name: 'Item Name', priority: 1 }
//  Priority: 1 = Low, 2 = Medium, 3 = High
//  To add a category, add a new object to the array below.
// ============================================================

const categories = [
  {
    name: 'Vodka',
    emoji: '🥃',
    color: 'col-red',
    items: [
      { name: 'Smirnoff',   priority: 1 },
      { name: "Tito's",     priority: 3 },
      { name: 'Ketel One',  priority: 1 },
      { name: 'Grey Goose', priority: 1 },
      { name: 'Neft Vodka', priority: 1 },
    ]
  },
  {
    name: 'Gin',
    emoji: '🌿',
    color: 'col-blue',
    items: [
      { name: 'Beefeater / Bombay', priority: 2 },
      { name: 'Tanqueray',          priority: 1 },
      { name: 'Bombay Sapphire',    priority: 1 },
      { name: "Hendrick's",         priority: 1 },
    ]
  },
  {
    name: 'Tequila',
    emoji: '🌵',
    color: 'col-teal',
    items: [
      { name: 'Sauza Blanco (well)',          priority: 3 },
      { name: 'Casamigos Blanco',             priority: 2 },
      // { name: 'Casamigos Repo',               priority: 1 },
      { name: 'Casamigos Jalapeño/Cucumber',  priority: 2 },
      { name: 'Don Julio Añejo',              priority: 1 },
      { name: 'Clase Azul',                   priority: 1 },
      { name: 'Patrón Silver',                priority: 2 },
    ]
  },
  {
    name: 'Whiskey & Bourbon',
    emoji: '🥃',
    color: 'col-orange',
    items: [
      { name: 'Jim Beam',         priority: 1 },
      { name: 'Buffalo Trace',    priority: 3 },
      { name: "Maker's Mark",     priority: 3 },
      { name: 'Woodford Reserve', priority: 2 },
      { name: 'Knob Creek',       priority: 1 },
      { name: 'Bulleit Rye',      priority: 1 },
    ]
  },
  {
    name: 'Scotch',
    emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    color: 'col-yellow',
    items: [
      { name: 'Johnnie Walker Black', priority: 1 },
      { name: 'Macallan 12',          priority: 2 },
    ]
  },
  {
    name: 'Other Spirits',
    emoji: '✨',
    color: 'col-pink',
    items: [
      { name: 'Jameson',             priority: 1 },
      { name: 'Hennessy VS',         priority: 1 },
      { name: 'Lagoon Bay Apertivo', priority: 1 },
    ]
  },
  {
    name: 'Cordials & Liqueurs',
    emoji: '🍬',
    color: 'col-purple',
    items: [
      { name: 'Triple Sec',        priority: 2 },
      { name: 'Kahlúa',            priority: 1 },
      { name: "Bailey's",          priority: 1 },
      { name: 'Amaretto',          priority: 1 },
      { name: 'Aperol',            priority: 1 },
      { name: 'Campari',           priority: 1 },
      { name: 'Sweet Vermouth',    priority: 1 },
      { name: 'Dry Vermouth',      priority: 1 },
      { name: 'Grand Marnier',     priority: 1 },
      { name: 'Ancho Reyes Green', priority: 1 },
    ]
  },
  {
    name: 'Red Wine',
    emoji: '🍷',
    color: 'col-red',
    items: [
      { name: 'Cabernet Sauvignon',          priority: 3 },
      { name: 'Pinot Noir',                  priority: 2 },
      { name: 'Red Blend',                   priority: 2 },
      { name: 'Kenwood Vineyards (Pinot Noir)', priority: 2 },
      { name: 'Clous du Bois (Merlot)',      priority: 1 },
      { name: '19 Crimes (Red Blend)',       priority: 2 },
      { name: 'Columbia Crest (Cabernet)',   priority: 2 },
      { name: 'House Red (Cabernet)',        priority: 3 },
    ]
  },
  {
    name: 'White Wine',
    emoji: '🥂',
    color: 'col-green',
    items: [
      { name: 'Chardonnay',                        priority: 3 },
      { name: 'Pinot Grigio',                      priority: 2 },
      { name: 'Sauvignon Blanc',                   priority: 1 },
      { name: 'Santa Cristina (Pinot Grigio)',     priority: 2 },
      { name: 'Yealands (Sauvignon Blanc)',        priority: 2 },
      { name: 'Simi (Chardonnay)',                 priority: 1 },
      { name: 'House White (Chardonnay)',          priority: 3 },
    ]
  },
  {
    name: 'Sparkling',
    emoji: '🍾',
    color: 'col-yellow',
    items: [
      { name: 'Prosecco (splits)',      priority: 2 },
      { name: 'Charles & Charles (Rosé)', priority: 1 },
      { name: 'Mionetto Prosecco',      priority: 1 },
    ]
  },
  {
    name: 'Beer',
    emoji: '🍺',
    color: 'col-orange',
    items: [
      { name: 'Corona',                    priority: 2 },
      { name: 'Modelo',                    priority: 3 },
      { name: 'Heineken',                  priority: 1 },
      { name: 'Stella Artois',             priority: 3 },
      { name: 'Samuel Adams',              priority: 2 },
      { name: 'Michelob Ultra',            priority: 2 },
      { name: 'Bud Light',                 priority: 1 },
      { name: 'Miller Lite',               priority: 2 },
      { name: 'Coors Light',               priority: 2 },
      { name: 'Heineken 0.0 (N/A)',        priority: 1 },
      { name: 'Truly (Hard Seltzer)',      priority: 1 },
    ]
  },
  {
    name: 'Juices',
    emoji: '🍊',
    color: 'col-orange',
    items: [
      { name: 'Lime Juice',       priority: 3 },
      { name: 'Lemon Juice',      priority: 2 },
      { name: 'Grapefruit Juice', priority: 1 },
      { name: 'Orange Juice',     priority: 1 },
      { name: 'Pineapple Juice',  priority: 1 },
      { name: 'Cranberry Juice',  priority: 2 },
    ]
  },
  {
    name: 'Syrups & Bitters',
    emoji: '🧪',
    color: 'col-teal',
    items: [
      { name: 'Simple Syrup',      priority: 3 },
      { name: 'Grenadine',         priority: 1 },
      { name: 'Angostura Bitters', priority: 3 },
    ]
  },
  {
    name: 'Monin Syrups',
    emoji: '🍯',
    color: 'col-pink',
    items: [
      { name: 'Toasted Almond',    priority: 1 },
      { name: 'Mocha',             priority: 1 },
      { name: 'Chipotle',          priority: 1 },
      { name: 'Pineapple Passion Fruit', priority: 1 },
      { name: 'Hibiscus',          priority: 1 },
      { name: 'Desert Pear',       priority: 1 },
    ]
  },
  {
    name: 'Sodas & Mixers',
    emoji: '🫧',
    color: 'col-blue',
    items: [
      { name: 'CO2 / Club Soda',      priority: 3 },
      { name: 'Ginger Ale',           priority: 1 },
      { name: 'Tonic Water',          priority: 2 },
      { name: 'Pepsi',                priority: 2 },
      { name: 'Diet Pepsi',           priority: 2 },
      { name: 'Starry',               priority: 2 },
      { name: 'Ginger Beer',          priority: 2 },
      { name: 'Pink Grapefruit Soda', priority: 2 },
    ]
  },
];