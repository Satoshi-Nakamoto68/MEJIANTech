export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  hoverImage: string;
  imageGallery: string[];
  shortDescription: string;
  fullDescription: string;
  rating: number;
  isNew?: boolean;
  price: number;
  onSale?: boolean;
  salePrice?: number;
  subcategory: string;
  // Legacy field for backward compatibility
  description?: string;
}

export const computerProducts: Product[] = [
  {
    id: "computer-001",
    name: "Wireless Mechanical Keyboard",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/H53f7412f0f0145ca8de6b2fc85aeb7ada.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H005a48030a9a444eb4361722d4d26d81L.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H6904cd7c4122443fab4c98c0b3274174K.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hba554ac800b349a8a011985c3e87482eo.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H6e7d4aacf7a44b4ea8e5d10e087c78b9r.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H1d74266b80484d08b20ffd3c5dacb5333.jpg?avif=close&webp=close"
    ],
    shortDescription: "Premium wireless mechanical keyboard with RGB backlighting for professional gaming and typing.",
    fullDescription: "Experience the perfect blend of performance and aesthetics with our Wireless Mechanical Keyboard. Featuring premium mechanical switches that deliver tactile feedback and satisfying keystrokes, this keyboard is designed for both gaming enthusiasts and professional typists. The RGB backlighting system offers 16.8 million color options with customizable lighting effects. Built with durable aluminum frame and PBT keycaps, it ensures longevity and premium feel. Wireless connectivity with 2.4GHz technology provides lag-free performance, while the rechargeable battery offers up to 200 hours of use.",
    rating: 4.8,
    isNew: true,
    price: 89.99,
    onSale: false,
    subcategory: "Keyboards",
  },
  {
    id: "computer-002",
    name: "ErgoLite Vertical Wireless Mouse",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/H4ee8c7801103421eb0618948aef0b0a5a.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hd76f8c5d4b454fbea98be4aea32cb04bU.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H7823ee5e7a98429bb7b28452c077ccf3C.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H2274d4e28faf403cbaee992d6aa9addbT.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H78c9817b5dc6471098bed01f8aa36239Z.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H00c1e179b1ba4254b87960b7b110aa45i.jpg?avif=close&webp=close"
    ],
    shortDescription: "Ergonomic vertical mouse designed to reduce wrist strain.",
    fullDescription:
      "ErgoLite mouse enhances comfort with a natural handshake design, adjustable DPI settings, and smooth wireless tracking ideal for long work sessions.",
    rating: 4.7,
    isNew: true,
    price: 29.99,
    onSale: false,
    subcategory: "Mice"
  },
  {
    id: "computer-003",
    name: "ProGlide XL Gaming Mouse Pad",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/H2129ea77fe654b5c830ef2175413cbbbE.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H7022fad7f71549a8b72d0997abd1595eq.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H87ed6d7f01ee4b53b0bc837ecb189fcca.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd35f00382488416488e115af856436774.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/He03223d080e9496c80365b782639c7c8X.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H83fdd2c8bc5848429acfca9288c272bbP.jpg?avif=close&webp=close"
    ],
    shortDescription: "Oversized mouse pad with anti-slip rubber base.",
    fullDescription:
      "The ProGlide XL offers a smooth microfiber surface for precise tracking, stitched edges for durability, and large coverage for keyboards and mice.",
    rating: 4.8,
    isNew: true,
    price: 18.99,
    onSale: true,
    salePrice: 15.99,
    subcategory: "Mouse Pads"
  },
  {
    id: "computer-004",
    name: "NeoCharge 7-Port USB Hub",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/Hc119f8f3fc564d6db4bbeb10639012edr.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hc1bf69ff3d1b4343b762b21989a6b069z.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hfff3a4cbbbb14ab2bc86e981ddda1fb9j.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hbe62389ad78e404194bfbd58d6462295O.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H5e96285de46842f39e328ae1af7a5b0ea.jpg?avif=close&webp=close"
    ],
    shortDescription: "High-speed USB hub for multi-device connectivity.",
    fullDescription:
      "NeoCharge expands your workspace with 7 USB 3.0 ports supporting fast data transfer, plug-and-play compatibility, and overload protection.",
    rating: 4.6,
    isNew: true,
    price: 24.99,
    onSale: false,
    subcategory: "USB Hubs"
  },
  {
    id: "computer-005",
    name: "SilentFlow Laptop Cooling Pad",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/H53d4636b265f4fd48b648b9803cbe4831.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hed53899760c14699acf727180640e01bI.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H79676da7eb404676bd69508d4c057436v.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hb8165e60bcdf452599c2407d8801ee45M.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H07b28299fa884b5cbf77f24a1a69e376t.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H11617338a3804e47b0f1b74e6d79e0bbm.jpg?avif=close&webp=close"
    ],
    shortDescription: "Cooling pad with dual silent fans for laptops up to 17 inches.",
    fullDescription:
      "SilentFlow enhances airflow with whisper-quiet fans, adjustable tilt angles, and metal mesh for better heat dissipation.",
    rating: 4.7,
    isNew: true,
    price: 27.99,
    onSale: false,
    subcategory: "Cooling Pads"
  },
  {
    id: "computer-006",
    name: "FlexStand Adjustable Laptop Stand",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/Hc1825180860344ba865473f13e200c49u.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hd7cf7d5ee63946db96b46f9626c8c709M.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hb4c916b87c78495d82716c3b61081979t.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H50117a2daa964f6ca5d848d4c0bcab1bg.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd39f180347584b728afc1a2c51ccf143c.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Ha9580494a611423299f459750aadbba4Z.jpg?avif=close&webp=close"
    ],
    shortDescription: "Aluminum laptop stand with ergonomic height adjustment.",
    fullDescription:
      "FlexStand lifts your laptop for better posture, improved cooling, and a cleaner workspace. Compatible with 11–17 inch laptops.",
    rating: 4.8,
    isNew: true,
    price: 34.99,
    onSale: false,
    subcategory: "Stands"
  },
  {
    id: "computer-007",
    name: "QuantumType PBT Keycap Set",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/H4b84194e480d495e814f152669c8cf37y.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H24a50a3ac436488082b014bf0873e321t.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H2faf1f6ebef44b538b72dad34f944aad3.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H567928439b094442a891ec51a866a4670.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hfe10dcfdfc2b4e3782335086d712a41bM.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H9206fc21f08b4b229c1987796a6f09da7.jpg?avif=close&webp=close"
    ],
    shortDescription: "Durable PBT keycap set with dye-sub legends.",
    fullDescription:
      "QuantumType offers long-lasting, fade-resistant keycaps compatible with most mechanical keyboards, providing a premium typing feel.",
    rating: 4.7,
    isNew: true,
    price: 22.99,
    onSale: false,
    subcategory: "Keycaps"
  },
  {
    id: "computer-008",
    name: "EchoWave Desktop Speakers",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/Hdb173ce519f044a19c05f9deceda5e4fJ.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H49651e8ace3a4872b63f92ce17565c270.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H7ef4d1a70c334b44aca06bbfc4210e19c.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H2a1c1456312b4e2b9691b9faf4d655c5d.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd2a64cce235c4dcb9b8b023b4654e76es.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H4ecc0d22ed7741c2b4a2a1758dd64d4dX.jpg?avif=close&webp=close"
    ],
    shortDescription: "Compact speakers for clear and immersive audio.",
    fullDescription:
      "EchoWave delivers stereo clarity with enhanced bass response in a compact design ideal for desktops.",
    rating: 4.5,
    isNew: true,
    price: 19.99,
    onSale: true,
    salePrice: 16.99,
    subcategory: "Speakers"
  },
  {
    id: "computer-009",
    name: "NanoLink USB-C Docking Station",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/Hd53bb55b1c754cd7a1c085b8ade3a943o.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hb99aafe48ee142cc8e7e03b339af3fb9w.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hbab63d4ac0414761bdd016e3c03d117a9.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hfcb4a851c5ec4fca88751475897121f9W.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H32490798d56d4d9a9adcc20be42a4eb3Q.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd88220b4d718490baabc7fe95495f841p.jpg?avif=close&webp=close"
    ],
    shortDescription: "USB-C docking station with HDMI, USB, and card reader ports.",
    fullDescription:
      "NanoLink expands your laptop's connectivity with 4K HDMI output, dual USB 3.0 ports, and SD/microSD support—all in a portable form.",
    rating: 4.7,
    isNew: true,
    price: 39.99,
    onSale: false,
    subcategory: "Docking Stations"
  },
  {
    id: "computer-010",
    name: "SilentKeys Membrane Keyboard",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/H9498b20132624b59bf693e1a7adb33b6r.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H1f66291cefff4069864ceb6ff736e83ca.jpeg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H9cb8556202bc474daebd63da12222773j.jpeg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc67e5e2df1a147428056fbb89a5f3874r.jpeg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/He982a932cae04bfaa827d067ac216c10V.jpeg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H5ca3898786f84e68976fcafee675cb037.jpg?avif=close&webp=close"
    ],
    shortDescription: "Quiet membrane keyboard designed for office productivity.",
    fullDescription:
      "SilentKeys offers low-travel keys, quiet operation, spill resistance, and a comfortable full-size layout for daily use.",
    rating: 4.6,
    isNew: true,
    price: 17.99,
    onSale: false,
    subcategory: "Keyboards"
  },
  {
    id: "computer-011",
    name: "GlidePro Wireless Trackpad",
    category: "Computer",
    image: "https://s.alicdn.com/@sc04/kf/Hdf4bc50e5da2478ca8065fd238bc856bM.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H9afc150497fe47c58b22459185565d37v.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H4cc473c810854741ad9d0fb27981dc5cx.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc02bfd3602684d5c94da8698e572fa8ew.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H0121d5e3418f4fd2a9c7fecc12769e70h.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H7b177e37f83a4f7f9e2096a5c95c1caci.jpg?avif=close&webp=close"
    ],
    shortDescription: "Wireless multi-gesture trackpad for smooth navigation.",
    fullDescription:
      "GlidePro features a large glass surface, multi-gesture support, and responsive wireless performance for an efficient workflow.",
    rating: 4.6,
    isNew: true,
    price: 49.99,
    onSale: false,
    subcategory: "Trackpads"
  }

];

export const phoneProducts: Product[] = [
  {
    id: "phone-001",
    name: "Silicone Phone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/Hcfa75acc09074a97b39f4824bbb269eb6.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Ha75d9e2b964b40219fd940905fb35323O.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H0e776c0bd2c34046a2a63ad51c0ea542W.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H09ddce6e6ab649cbbe2f49326de02b1dj.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Ha3dca8289ac74294a6858629395a8bbfK.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H9b34e717acd6409e9c5d4281a848d1682.jpg?avif=close&webp=close"
    ],
    shortDescription: "Premium silicone case with microfiber lining for superior protection and grip.",
    fullDescription: "Protect your device with this premium silicone phone case that combines style with functionality. The soft-touch silicone material provides excellent grip, preventing accidental drops while maintaining a sleek appearance. The microfiber interior lining adds an extra layer of protection against scratches and scuffs. Precision-cut openings ensure full access to all ports, buttons, and cameras. The case features raised edges around the screen and camera to protect against surface scratches. Available in multiple colors to match your personal style, this case offers reliable protection without adding bulk to your device.",
    rating: 4.6,
    isNew: true,
    price: 24.99,
    onSale: false,
    subcategory: "Cases",
  },
  {
    id: "phone-002",
    name: "SoftTouch Matte Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/Heaa9eb1b74a74d72bd69491c856009c3H.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Ha64dfe1359594241bfeb8edf706ece9dM.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H0c21b8594fe849aaaecee8abc9af674bf.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H1bd1ced73f394a2eb7805a36c16488ca2.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H1d1ed8c2ecba4adca48ce2c36072568b5.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hfe93d85be4f34a7fb8e49f877356901bC.jpg?avif=close&webp=close"
    ],
    shortDescription: "Matte silicone case with smooth anti-slip texture.",
    fullDescription:
      "SoftTouch Case offers premium matte silicone with fingerprint resistance, reinforced corners, and microfiber lining for scratch protection. Provides excellent grip and daily durability for all phone models.",
    rating: 4.7,
    isNew: true,
    price: 19.99,
    onSale: false,
    subcategory: "Cases"
  },
  {
    id: "phone-003",
    name: "UltraFlex Slim Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/Hcae4b7baf230497095da19f7d1d0627c1.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H12bc65956d9340b3b23c20e7b15708f4t.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H6abfce56135e4cdcbd607cc2eab74538h.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hbe033c8782194a7c94b261b8a8db4a54a.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H5a0cee6d9e164031a063ccd102d24c28M.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hce37d87fd1c54ea9a36b1bac53942434P.jpg?avif=close&webp=close"
    ],
    shortDescription: "Lightweight silicone case with flexible shock absorption.",
    fullDescription:
      "UltraFlex features thin yet durable silicone that wraps securely around the device. Raised bezels protect the camera and screen while maintaining a slim profile.",
    rating: 4.6,
    isNew: true,
    price: 17.99,
    onSale: false,
    subcategory: "Cases"
  },
  {
    id: "phone-004",
    name: "ColorGrip Anti-Slip Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/H26414202571d4ffaa9b8c8fca06f3867w.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hfd91a5e3c00d41abbbc56f1cea784059J.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Habcced96932f492dbc4d181e81238e433.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H631c8c96e1aa41bd9778c4495b4f2eccF.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H6e13d08cc88b4268b4d2777aaae6e494l.jpg?avif=close&webp=close"
    ],
    shortDescription: "Vibrant silicone case with enhanced side-grip texture.",
    fullDescription:
      "ColorGrip Case combines durable silicone with textured side panels for anti-slip handling. Microfiber lining protects the phone from internal scratches.",
    rating: 4.5,
    isNew: true,
    price: 16.99,
    onSale: true,
    salePrice: 13.99,
    subcategory: "Cases"
  },
  {
    id: "phone-005",
    name: "PureShield Transparent Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/H4b87958bac164f0fad8183f5d40e0803w.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hc8d43f46865e40ae9a95e60d47d06cf08.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H008a37c308b34d97b97d6fc49de5e236q.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hff1b18b6350f478ea6041b67a1b186baU.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd589c45ede014c4d921a7da5f57ac937F.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H64e77a058eba47de9ee0827a4f1990a1d.jpg?avif=close&webp=close"
    ],
    shortDescription: "Clear silicone case that preserves phone aesthetics.",
    fullDescription:
      "PureShield is crafted from anti-yellowing silicone hybrid material, offering strong shock absorption while keeping the phone's original look visible.",
    rating: 4.6,
    isNew: true,
    price: 15.99,
    onSale: false,
    subcategory: "Cases"
  },
  {
    id: "phone-006",
    name: "SoftGuard Thick Impact Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/H9f24a037db0d4c00b15a8919b340069d8.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hbf0b6b70dc844f0eb9d3a33504af7e1db.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H5c56c187e208496d98a2f43d347a7abdq.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hcea0930a21394880aa3c23a10533ffcbW.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H244f62f9849c4978b3e514036a8710acI.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hf7226d4069f34b1ca6d10effef940be6L.jpg?avif=close&webp=close"
    ],
    shortDescription: "Thick silicone case designed for extra drop protection.",
    fullDescription:
      "SoftGuard uses reinforced silicone layers and air-cushion corners to reduce impact damage. Perfect for users who need extra protection.",
    rating: 4.7,
    isNew: true,
    price: 21.99,
    onSale: false,
    subcategory: "Cases"
  },
  {
    id: "phone-007",
    name: "VelvetSkin Smooth Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/H8c02abc0bd8246b489cbbd1c4cc3e8a8E.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Had56b6bb020a4246b180102935cb3cc9Q.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H77b00caa4b1a4a35945c637bf34509a4e.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H1ada3353b7d54b5e9bdb2d6750274ebaX.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hffd666787901442eb8f4b3164b2e14bem.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H7d1f64e28edd4f81b7aff9896f1bf5ebW.jpg?avif=close&webp=close"
    ],
    shortDescription: "Ultra-smooth silicone case with velvet-like texture.",
    fullDescription:
      "VelvetSkin features dense soft-touch silicone that feels smooth while resisting dust and lint. Shock-absorbent yet stylish for daily use.",
    rating: 4.8,
    isNew: true,
    price: 22.99,
    onSale: true,
    salePrice: 18.99,
    subcategory: "Cases"
  },
  {
    id: "phone-008",
    name: "GripMax Rugged Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/Hf37efda445d64995b143b120b56ae0e7f.png?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H45302cde16044e1c8736cf90759289ee5.png?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H9af49bee01f343f4aeac96834a37b6beo.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/He8085d070a2f42f9a0cfbd7e17eb135es.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H9daaeb1b848e4819b32430aa5fc51410O.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H3286d0762ddb41d09c61b54596bd532fr.png?avif=close&webp=close"
    ],
    shortDescription: "Rugged silicone case designed for outdoor protection.",
    fullDescription:
      "GripMax provides reinforced impact zones, textured grip lines, and raised protective lips around the camera and screen.",
    rating: 4.6,
    isNew: true,
    price: 23.99,
    onSale: false,
    subcategory: "Cases"
  },
  {
    id: "phone-009",
    name: "ColorBlend Dual-Tone Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/Hf7426d841e1a4bb38017ffd2fded1968D.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H498956f7b685424c92f3cf43d26fa8c4E.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H78ff2b2c8e2b4ee08e381f86ccbe8fdf8.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hf6ff0b4a24214b89a15170c5a63066f6y.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H4c6a3ecaa7324ddebf45c13fc81ebd7cB.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H8984ae4baf1446aebcd86d00b531ac3cb.jpg?avif=close&webp=close"
    ],
    shortDescription: "Dual-tone silicone case with a modern, stylish look.",
    fullDescription:
      "ColorBlend combines two soft silicone layers for a unique color transition effect and improved hand grip.",
    rating: 4.7,
    isNew: true,
    price: 20.99,
    onSale: false,
    subcategory: "Cases"
  },
  {
    id: "phone-010",
    name: "EcoFlex Biodegradable Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/Hc77b8273d6474805837bb4874752ecf9n.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H4279447f05814e2c907dc3c88a143268z.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H9da4fda1aee041baad806022cad09c3fp.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H62375915f74245048966b898c3110f6cD.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H92ceff2bc52b4ba6892bd11da2a109a7k.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H7467d8661e6d4d908f485a8e6d1cd1824.jpg?avif=close&webp=close"
    ],
    shortDescription: "Eco-friendly silicone case made from biodegradable materials.",
    fullDescription:
      "EcoFlex reduces plastic waste with its plant-based silicone blend. Soft to the touch, shock-resistant, and environmentally responsible.",
    rating: 4.8,
    isNew: true,
    price: 24.99,
    onSale: true,
    salePrice: 20.99,
    subcategory: "Cases"
  },
  {
    id: "phone-011",
    name: "FrostShield Matte Silicone Case",
    category: "Phone",
    image: "https://s.alicdn.com/@sc04/kf/H4cc389f9993947539d3893222fef83e7Y.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H53d9d0d0250942498d1e9e81de9dc441N.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H3f31acf28b4f4ca1a811e4f03eb1da4e1.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd4f549b6a453432dae59214aaaeacf0bk.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hce25a68fa98e4ef082416f0b8bc5289cg.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H3a0509fbd93a4cce9cd0d90b3f51e194r.jpg?avif=close&webp=close"
    ],
    shortDescription: "Matte silicone case with frosted anti-fingerprint finish.",
    fullDescription:
      "FrostShield offers soft silicone protection with a frosted matte layer that reduces fingerprints while maintaining premium aesthetics.",
    rating: 4.7,
    isNew: true,
    price: 19.99,
    onSale: false,
    subcategory: "Cases"
  }

];

export const homeProducts: Product[] = [
  {
    id: "home-001",
    name: "SmartLED RGB Color Bulb",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/H9057c0460cc2454da3143f17f6c7cd43z.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H20691cfcfd4e4389861b4fc113cc3488X.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H8075c987bfaf460d8ed563e8c4d3ce7dF.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H995af0fd9faa4f86a8063490c9b126d6v.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H4e16d902c7cc45af841ae3e6c8a2cd00X.jpg?avif=close&webp=close",
    ],
    shortDescription: "WiFi-enabled RGB color smart bulb with voice control and app scheduling.",
    fullDescription:
      "Control your lighting from anywhere with this WiFi smart bulb. Features 16 million colors, adjustable brightness, scheduling, and compatibility with voice assistants. Energy-efficient LED technology with a lifespan of up to 25,000 hours. Perfect for creating ambiance, setting routines, and enhancing home automation.",
    rating: 4.7,
    isNew: true,
    price: 18.99,
    onSale: false,
    subcategory: "Smart Lighting"
  },
  {
    id: "home-002",
    name: "PowerPlug Mini Smart Outlet",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/H81dd041f650a4f618fb8386c07a038bcd.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H84d2f4687e71417f9614e985294d0297E.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H77fb927d0f6d4dc18262db01f7af5a5eN.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H04fbdef9ec6c44bcb421c4bbdd71f2811.jpg?avif=close&webp=close",
    ],
    shortDescription: "Compact smart plug for remote control and energy monitoring.",
    fullDescription:
      "Transform any device into a smart device with this WiFi-enabled smart plug. Control appliances remotely via smartphone app, set schedules, and monitor energy usage. Features overload protection and works with voice assistants for hands-free control.",
    rating: 4.6,
    isNew: true,
    price: 14.99,
    onSale: true,
    salePrice: 12.99,
    subcategory: "Smart Plugs"
  },
  {
    id: "home-003",
    name: "DoorSense Wireless Door Sensor",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/A25acb899494b4bc2942626f9f3de16962.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/A237402aa442e4c26b224c07cb0b0edc6A.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Ae6400ef4959342da80812246b13f9203F.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Adccbbfa3a62643cda3654856dd1084d9m.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Ae165f2ffb7d34b64b50aa74bf8f5ff51x.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/A93868e94f22941bba09bfbb0289466c4L.jpg?avif=close&webp=close"
    ],
    shortDescription: "Magnetic door/window sensor with instant alerts and automation triggers.",
    fullDescription:
      "Monitor door and window openings with this wireless sensor. Sends instant push notifications to your phone when doors or windows open or close. Battery-powered with long-lasting battery life, easy installation with adhesive mounting, and integrates with smart home systems for automated responses.",
    rating: 4.8,
    isNew: true,
    price: 19.99,
    onSale: false,
    subcategory: "Security Sensors"
  },
  {
    id: "home-004",
    name: "MotionGuard PIR Motion Detector",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/A54d4e98053034f34b2b66466a08eddb1x.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H7ca10bc40b344cb698002d36ebb4df67V.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H365b81a38d5947feac8cd2f4eada9fe2x.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H772a90bcb3f744d1ab07af95572938f7o.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H7a635535b52d42549911c76193a11c119.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H3be3e260bc7a4091addcb94aace5910eR.jpg?avif=close&webp=close"
    ],
    shortDescription: "Wireless motion sensor with adjustable sensitivity and detection range.",
    fullDescription:
      "Detect movement in your home with this PIR motion sensor. Features adjustable sensitivity, 120-degree detection angle, and up to 7-meter range. Battery-powered with low power consumption, sends instant alerts, and can trigger other smart devices automatically.",
    rating: 4.7,
    isNew: true,
    price: 16.99,
    onSale: false,
    subcategory: "Security Sensors"
  },
  {
    id: "home-005",
    name: "SwitchPro WiFi Smart Switch",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/H165daf41116045eb9a444b5da530d0e0S.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H9137db633f3d45f7b1f3fec3ff9da045Z.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H21716ab590ea44ea92ee2085991c6aeeg.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H525738b460984e7481301e4a8f0ce563w.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H5b06f99d268d40eb821e33d16834a15fV.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H89d519021b584e5b943e1b4cdf3cd01cF.jpg?avif=close&webp=close"
    ],
    shortDescription: "Single-pole smart wall switch with remote control and scheduling.",
    fullDescription:
      "Replace your standard wall switch with this WiFi smart switch. Control lights remotely via app, set schedules and timers, and use voice commands. Works with existing wiring, features LED indicator, and supports single-pole installations.",
    rating: 4.6,
    isNew: true,
    price: 24.99,
    onSale: true,
    salePrice: 21.99,
    subcategory: "Smart Switches"
  },
  {
    id: "home-006",
    name: "CamView 1080p Security Camera",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/H6f18a2f1a12a4149b0b8de43431ea16c6.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H0745111eddbc4f7886709246b6f25437k.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H0e0ef07d25c446ceb2d1e1128c3e6be1u.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H8ae72e8e0fc741fc8a53de8a95c3bc7fA.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H17b77b870e82488980b51679822573baO.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H3adc35515bd046e2aa780a4484005399B.jpg?avif=close&webp=close"
    ],
    shortDescription: "Indoor WiFi security camera with night vision and motion detection.",
    fullDescription:
      "Monitor your home 24/7 with this 1080p HD security camera. Features infrared night vision up to 10 meters, motion detection with push alerts, two-way audio, and cloud/local storage options. Works with smartphone app for live viewing and playback.",
    rating: 4.8,
    isNew: true,
    price: 39.99,
    onSale: false,
    subcategory: "Security Cameras"
  },
  {
    id: "home-007",
    name: "RingBell WiFi Video Doorbell",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/Hfb953fa5be7c4c58b614f62fb8e57846c.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hec586c9a36fa42fe92c532d0b05cc4a7C.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hd9a462e87f73468e808b9460b71f6a6e5.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H0ebc5887f9284a3e99cc028e596847a5G.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H9592daf4bf044961bd69b5ce41cea945G.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H856ef085ab2b4890b82cbec8badbaf9a5.jpg?avif=close&webp=close"
    ],
    shortDescription: "Smart video doorbell with 720p camera and two-way communication.",
    fullDescription:
      "See and speak to visitors from anywhere with this WiFi video doorbell. Features 720p HD video, motion detection alerts, two-way audio, night vision, and works with existing doorbell wiring or battery-powered operation.",
    rating: 4.7,
    isNew: true,
    price: 49.99,
    onSale: true,
    salePrice: 44.99,
    subcategory: "Video Doorbells"
  },
  {
    id: "home-008",
    name: "LockSecure Smart Deadbolt Lock",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/Hc0e59b34cdaa46bd9174c4089eaa7f777.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H0d3dafa39552482fa60c1f08a2210e04S.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H83d455f3b3b949c29fa255c2b42848b8Z.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hd2f7bb1fcec143549b7ffe7aa6e075ac4.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H4b2cfaff8a8f48bb9acfc662518d1053m.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hee9846c7fcb54bff8305af29bfc7c016t.jpg?avif=close&webp=close"
    ],
    shortDescription: "WiFi smart deadbolt with keypad, fingerprint, and app control.",
    fullDescription:
      "Upgrade your door security with this smart deadbolt lock. Features keypad entry, fingerprint recognition, smartphone app control, auto-lock function, and guest access codes. Works with standard door preparations and includes backup mechanical key.",
    rating: 4.8,
    isNew: true,
    price: 89.99,
    onSale: false,
    subcategory: "Smart Locks"
  },
  {
    id: "home-009",
    name: "TempControl Smart Thermostat",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/A04acd02e37c640e3accd84004cebd1114.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Adb2fb90ca4a94d29bbc2476364665834l.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Ab136f9c990c4477682cfea81528aa820V.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/A3d33d811e8d84ca69a5b49132267fc93B.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/A113775c224264a33a28a53d31c9044a9O.jpg?avif=close&webp=close",
    ],
    shortDescription: "Programmable WiFi thermostat with energy-saving scheduling.",
    fullDescription:
      "Control your home's temperature remotely with this smart thermostat. Features WiFi connectivity, programmable schedules, energy usage reports, and compatibility with voice assistants. Easy installation with standard wiring, touchscreen display, and geofencing support.",
    rating: 4.7,
    isNew: true,
    price: 69.99,
    onSale: true,
    salePrice: 59.99,
    subcategory: "Climate Control"
  },
  {
    id: "home-010",
    name: "HubConnect Smart Home Gateway",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/H1a6edca234ee4a4394df04377ccceae05.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/H94f6fcde72f2439d8538f777f07adb997.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hf72e4bac09fe447eba881d2e92efbd23l.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/He94fd030952d419282ccd0d070b651ebk.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H3209b58d78b74c23a2b00cc418688d73Z.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H32a600e08e9c49a1a505f54f704f6579O.jpg?avif=close&webp=close"
    ],
    shortDescription: "Central hub for connecting and controlling all smart home devices.",
    fullDescription:
      "Create a unified smart home ecosystem with this WiFi gateway hub. Supports multiple protocols, connects up to 200 devices, enables automation and scenes, and provides a single app to control all your smart devices. Features local processing for faster response times.",
    rating: 4.6,
    isNew: true,
    price: 54.99,
    onSale: false,
    subcategory: "Smart Hubs"
  },
  {
    id: "home-011",
    name: "VoiceBox Smart Speaker",
    category: "Smart Home",
    image: "https://s.alicdn.com/@sc04/kf/Hc3b46396f53047da905d60ed0da0c3ccK.jpg?avif=close&webp=close",
    hoverImage: "https://s.alicdn.com/@sc04/kf/Hd20d5d0fc0cf4b028d593d2a0e447862S.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hd2f7c663abd445c38717c57d4cf3c5e3D.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hdf9721fadec449d5b528c300b71c6f15P.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc817ae9858da40dbba467549154f8898D.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H28e4ef19d089426088c0116e3f5e67b7G.jpg?avif=close&webp=close"
    ],
    shortDescription: "WiFi smart speaker with voice assistant and smart home control.",
    fullDescription:
      "Enjoy high-quality audio and voice control with this smart speaker. Features 360-degree sound, voice assistant integration, smart home device control, Bluetooth connectivity, and multi-room audio support. Perfect for music, news, and controlling your smart home.",
    rating: 4.7,
    isNew: true,
    price: 44.99,
    onSale: true,
    salePrice: 39.99,
    subcategory: "Smart Speakers"
  }

];

export const allProducts = [...computerProducts, ...phoneProducts, ...homeProducts];
