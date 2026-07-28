const foodData = [
  // ================= BURGERS =================

  {
    id: 1,
    name: "Classic Beef Burger",
    category: "Burger",
    price: 550,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    description:
      "Juicy grilled beef burger with cheese, lettuce, tomato and special sauce.",
  },

  {
    id: 2,
    name: "Cheese Burger",
    category: "Burger",
    price: 620,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    description:
      "Double cheese burger served with crispy lettuce and fresh vegetables.",
  },

  {
    id: 3,
    name: "Chicken Burger",
    category: "Burger",
    price: 580,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800",
    description:
      "Crunchy fried chicken burger with creamy mayo and fresh salad.",
  },

  {
    id: 4,
    name: "Zinger Burger",
    category: "Burger",
    price: 690,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800",
    description:
      "Spicy crispy zinger burger loaded with cheese and signature sauce.",
  },

  {
    id: 5,
    name: "BBQ Burger",
    category: "Burger",
    price: 720,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800",
    description:
      "BBQ beef burger topped with caramelized onions and smoky BBQ sauce.",
  },

  {
    id: 6,
    name: "Mega Burger Combo",
    category: "Burger",
    price: 950,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800",
    description:
      "Large burger served with crispy fries and chilled cold drink.",
  },

  {
    id: 7,
    name: "Double Patty Burger",
    category: "Burger",
    price: 840,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=800",
    description:
      "Double beef patties layered with cheddar cheese and fresh vegetables.",
  },

  // ================= PIZZAS =================

  {
    id: 8,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 1350,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    description:
      "Loaded with pepperoni slices, mozzarella cheese and tomato sauce.",
  },

  {
    id: 9,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 1150,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0953b?w=800",
    description:
      "Classic cheese pizza topped with premium mozzarella.",
  },

  {
    id: 10,
    name: "Chicken Fajita Pizza",
    category: "Pizza",
    price: 1450,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800",
    description:
      "Spicy fajita chicken pizza with olives and cheese.",
  },

  {
    id: 11,
    name: "Veggie Pizza",
    category: "Pizza",
    price: 1100,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800",
    description:
      "Fresh vegetables, olives, capsicum and mozzarella cheese.",
  },

  {
    id: 12,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    price: 1550,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800",
    description:
      "Smoky BBQ chicken pizza with extra cheese.",
  },

  {
    id: 13,
    name: "Supreme Pizza",
    category: "Pizza",
    price: 1650,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    description:
      "Premium pizza with chicken, beef, vegetables and olives.",
  },

  {
    id: 14,
    name: "Pizza Combo",
    category: "Pizza",
    price: 1890,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800",
    description:
      "Large pizza served with fries and cold drink.",
  },

  // ================= DRINKS =================

  {
    id: 15,
    name: "Coca Cola",
    category: "Cold Drink",
    price: 180,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800",
    description:
      "Ice cold Coca Cola bottle served chilled.",
  },

  {
    id: 16,
    name: "Pepsi",
    category: "Cold Drink",
    price: 180,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=800",
    description:
      "Refreshing Pepsi with ice cubes.",
  },

  {
    id: 17,
    name: "Sprite",
    category: "Cold Drink",
    price: 170,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=800",
    description:
      "Fresh lemon flavored Sprite served chilled.",
  },

  {
    id: 18,
    name: "Fanta",
    category: "Cold Drink",
    price: 170,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800",
    description:
      "Orange flavored chilled soft drink.",
  },

  {
    id: 19,
    name: "Mountain Dew",
    category: "Cold Drink",
    price: 190,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800",
    description:
      "Energy packed citrus flavored soft drink.",
  },

  {
    id: 20,
    name: "Burger Combo Meal",
    category: "Burger",
    price: 1100,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800",
    description:
      "Burger served with fries and a chilled drink.",
  },

  {
    id: 21,
    name: "Pizza Family Deal",
    category: "Pizza",
    price: 2490,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800",
    description:
      "Large family pizza with garlic bread and two cold drinks.",
  },
];

export default foodData;