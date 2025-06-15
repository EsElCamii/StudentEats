// items.js
const items = [
  // --- COMIDA (Completed) ---
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1676106623583-e68dd66683e3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D}",
    name: "Avocado Toast",
    description:
      "Pan integral tostado con aguacate fresco, semillas y un toque de limón.",
    price: "$999",
    slide: "slide-comida",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1633104060731-32143505bacc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Yogurt con Frutas",
    description:
      "Yogur griego bajo en grasa con fresas, plátano y granola natural.",
    price: "$32",
    slide: "slide-comida",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1734468330969-93c69106993f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Wrap De Pollo",
    description:
      "Tortilla integral con Pollo, espinacas, tomate, zanahoria y aguacate.",
    price: "$40",
    slide: "slide-comida",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1716034353309-c6066ae24c67?q=80&w=3195&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ensalada de Salmón",
    description:
      "Mezcla de lechugas, salmón a la plancha, pepino, tomate cherry y vinagreta de limón.",
    price: "$52",
    slide: "slide-comida",
  },
  {
    photo:
      "https://www.grillmagazine.com.mx/wp-content/uploads/2023/07/Receta-de-tacos-de-pescado-a-la-parrilla-con-salsa-de-mango-y-aguacate.jpg",
    name: "Tacos de Pescado al Grill",
    description:
      "Tortillas de maíz con filete de pescado, col morada, guacamole y crema de yogurt.",
    price: "$46",
    slide: "slide-comida",
  },
  {
    photo:
      "https://www.mexicoenmicocina.com/wp-content/uploads/2017/05/1-imag.jpg",
    name: "Huevos a la Mexicana",
    description:
      "Huevos revueltos con jitomate, cebolla y chile, acompañados de frijoles negros y tortillas de maíz.",
    price: "$38",
    slide: "slide-comida",
  },
  {
    photo:
      "https://www.wholesomeyum.com/wp-content/uploads/2019/11/wholesomeyum-Chicken-Caesar-Salad-22.jpg",
    name: "Ensalada César con Pollo",
    description:
      "Lechuga romana, pollo a la parrilla, crutones integrales y aderezo César bajo en grasa.",
    price: "$45",
    slide: "slide-comida",
  },
  {
    photo:
      "https://storage.googleapis.com/avena-recipes-v2/agtzfmF2ZW5hLWJvdHIZCxIMSW50ZXJjb21Vc2VyGICAkKyViMwKDA/26-04-2022/1651004667244.jpeg",
    name: "Omelette de Claras",
    description:
      "Omelette de claras con espinaca, champiñones y pechuga de pavo, acompañado de pan integral.",
    price: "$40",
    slide: "slide-comida",
  },
  {
    photo:
      "https://cdn7.kiwilimon.com/recetaimagen/26245/960x640/38984.jpg.jpg",
    name: "Enchiladas Suizas",
    description:
      "Tortillas rellenas de pollo en salsa verde con crema y queso gratinado.",
    price: "$46",
    slide: "slide-comida",
  },
  {
    photo:
      "https://www.cocinadelirante.com/sites/default/files/images/2024/09/deliciosos-chilaquiles-con-adobo-y-carne-llevan-huevo-estrellado.jpg",
    name: "Chilaquiles Rojos",
    description:
      "Totopos bañados en salsa roja, acompañados de crema, queso y pollo deshebrado.",
    price: "$42",
    slide: "slide-comida",
  },
  {
    photo: "https://i.blogs.es/aaa7e4/molletes-con-longaniza-1-/1366_2000.jpg",
    name: "Molletes",
    description:
      "Pan bolillo con frijoles refritos, queso gratinado y pico de gallo.",
    price: "$38",
    slide: "slide-comida",
  },
  {
    photo:
      "https://editorialtelevisa.brightspotcdn.com/dims4/default/0c6d2b0/2147483647/strip/true/crop/600x338+0+31/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2021%2F07%2Fpambazo-veracruzano.jpg",
    name: "Pambazos",
    description:
      "Bollo bañado en salsa de chile guajillo, relleno de papa y chorizo, con crema y queso.",
    price: "$44",
    slide: "slide-comida",
  },

  // --- BEBIDAS ---
  {
    photo:
      "https://antorico.com/wp-content/uploads/2023/03/agua_natural_ciel_antorico.jpg",
    name: "Agua",
    description:
      "Refresca como debe ser: fría, pura y lista para acompañar todo.",
    price: "$20",
    slide: "slide-bebidas",
  },
  {
    photo: "https://healthysimpleyum.com/wp-content/uploads/2024/04/agua-de-jamaica-recipe-scaled.jpg",
    name: "Agua de Jamaica",
    description:
      "Dulce, fresquita y con ese toque ácido que enamora desde el primer trago.",
    price: "$20",
    slide: "slide-bebidas",
  },
  {
    photo: "https://brokebankvegan.com/wp-content/uploads/2021/07/Chia-Fresca-Feature.jpg",
    name: "Agua de Limón con Chía",
    description: "Limonada natural con semillas de chía.",
    price: "$22",
    slide: "slide-bebidas",
  },
  {
    photo: "https://media.glamour.mx/photos/653836ba50e780930c5400e8/4:3/w_2664,h_1998,c_limit/tomar-jugo-de-naranja-beneficios.jpg",
    name: "Jugo de Naranja Natural",
    description: "Jugo recién exprimido, sin conservadores.",
    price: "$28",
    slide: "slide-bebidas",
  },
  {
    photo: "https://cdn.shopify.com/s/files/1/0449/8099/4205/files/Te_frio_con_menta_480x480.jpg?v=1679773196",
    name: "Té Verde Helado",
    description: "Té verde orgánico con hielo y limón.",
    price: "$25",
    slide: "slide-bebidas",
  },
  {
    photo: "https://i.blogs.es/139e0f/cafe-americano2/840_560.jpeg",
    name: "Café Americano",
    description: "Café negro de grano orgánico.",
    price: "$26",
    slide: "slide-bebidas",
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88oHuN-vGFJX4H5b7eTF7xBZy4sznre0dCbLe1dWYR8SlRQUs8JX1kNEYhQDNk8k70-Y&usqp=CAU",
    name: "Café con Leche",
    description: "Café suave con leche deslactosada.",
    price: "$28",
    slide: "slide-bebidas",
  },
  {
    photo: "https://allthehealthythings.com/wp-content/uploads/2021/07/homemade-matcha-latte-4-768x1152.jpg",
    name: "Matcha Latte",
    description: "Matcha japonés con leche de almendras.",
    price: "$35",
    slide: "slide-bebidas",
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc65Ris6ozb8j7eUZg5RbpdYdVyEcS0hu5Kw&s",
    name: "Smoothie Verde",
    description: "Mezcla de espinaca, plátano, manzana y menta.",
    price: "$38",
    slide: "slide-bebidas",
  },
  {
    photo: "https://storage.googleapis.com/avena-recipes-v2/2019/10/1571780876761.jpeg",
    name: "Smoothie de Mango",
    description: "Batido natural de mango con yogurt.",
    price: "$36",
    slide: "slide-bebidas",
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4-CtCbPsEWMl3jGuPwXkSaNc0TadMMYiTw&s",
    name: "Chocolate Caliente",
    description: "Chocolate oscuro caliente con leche vegetal.",
    price: "$30",
    slide: "slide-bebidas",
  },
  {
    photo: "https://images.aws.nestle.recipes/original/8eaf50148ed521383df5d9793cba995f_whatsapp_image_2022-04-28_at_1.00.26_pm_(2).jpeg",
    name: "Agua de Horchata",
    description: "Vaso de leche vegetal sin azúcar añadida.",
    price: "$22",
    slide: "slide-bebidas",
  },

  // --- SNACKS ---
  {
    photo: "https://www.splenda.com/wp-content/uploads/2021/10/chewy-peanut-butter-chocolate-chip-granola-bars-2000x1000.jpg",
    name: "Barra de Granola",
    description: "Granola natural con frutos secos.",
    price: "$18",
    slide: "slide-snacks",
  },
  {
    photo: "https://storage.googleapis.com/avena-recipes-v2/2019/10/1571779873269.jpeg",
    name: "Manzana Rebanada con Crema de Cacahuate",
    description: "Rodajas de manzana con un toque de crema natural.",
    price: "$25",
    slide: "slide-snacks",
  },
  {
    photo: "https://saposyprincesas.elmundo.es/assets/2012/05/crudites-con-guacamole.jpg",
    name: "Palitos de Verdura",
    description: "Zanahoria, apio y pepino con dip ligero.",
    price: "$20",
    slide: "slide-snacks",
  },
  {
    photo: "https://magogourmet.com/cdn/shop/products/mix-nueces-premium_1000x1000.jpg?v=1618070638",
    name: "Mix de Nueces",
    description: "Almendras, nueces y arándanos.",
    price: "$28",
    slide: "slide-snacks",
  },
  {
    photo: "https://cdn0.uncomo.com/es/posts/5/5/4/como_hacer_galletas_integrales_50455_orig.jpg",
    name: "Galletas Integrales",
    description: "Galletas caseras de avena y miel.",
    price: "$22",
    slide: "slide-snacks",
  },
  {
    photo: "https://media.glamour.mx/photos/6523ab64e97e63a3d8fef2dc/16:9/w_2560%2Cc_limit/yogur-para-blanquear-la-piel.jpg",
    name: "Yogur Griego Individual",
    description: "Yogur natural sin azúcar.",
    price: "$24",
    slide: "slide-snacks",
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHdG6VOLGzav-jrVLLhb1Ceb1YDIQaHTbGxlo8aTb1iKdDVaS0EX9zCRglZVwqkInGzw&usqp=CAU",
    name: "Tostadas de Arroz",
    description: "Crujientes tostadas con aguacate o crema de almendra.",
    price: "$26",
    slide: "slide-snacks",
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BXsq0SOHyEaNQB-1o7pXAUvWpMCxQI78HdD0tusDUbO3tIUNg1IfP7kgBJBW6NLM8dU&usqp=CAU",
    name: "Hummus con Pan Pita",
    description: "Hummus natural con pan pita integral.",
    price: "$30",
    slide: "slide-snacks",
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfd5r8iD0tWPAcq7KJBtPXsHmdRBcfGuptJg&s",
    name: "Barras de Proteína",
    description: "Barritas con alto contenido de proteína.",
    price: "$32",
    slide: "slide-snacks",
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-AMHGKleF4OOqssSHwbLQvg1hvh6uzOlZtg&s",
    name: "Gelatina Light",
    description: "Gelatina baja en azúcar con frutas.",
    price: "$18",
    slide: "slide-snacks",
  },
  {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhx7hpS5pGYlGH_7KjnozDh3TC5ByUBeXwn-ArBt1rzaPkFCva0QcxNz0Cb5cKisUgANQ&usqp=CAU",
    name: "Brownie Saludable",
    description: "Nuestro famoso Brownie Saludable bajo en grasa",
    price: "$28",
    slide: "slide-snacks",
  },
  {
    photo: "https://i.blogs.es/76517f/platano-frito/1366_2000.jpeg",
    name: "Chips de Plátano",
    description: "Plátano deshidratado crujiente, sin azúcar.",
    price: "$20",
    slide: "slide-snacks",
  },
];

export default items;
