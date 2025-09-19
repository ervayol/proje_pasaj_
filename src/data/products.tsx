/*export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 14",
    category: "Telefon",
    description: "Apple iPhone 14 akıllı telefon.",
    price: "35.000 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/1698389193419/1698389198282/1698389198282_250x188.png?1758112274000",
  },
  {
    id: "2",
    name: "iPad Pro",
    category: "Tablet",
    description: "Apple iPad Pro 11 inç tablet.",
    price: "25.000 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00CLCP/3-1667297803421/3-1667297803421_250x188.png?1758112274000",
  },
  {
    id: "3",
    name: "MacBook Air",
    category: "Laptop",
    description: "Apple M1 MacBook Air.",
    price: "45.000 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00PTYO/20249272219-00PTYO-1/20249272219-00PTYO-1_250x188.png?1758112274000",
  },
  {
    id: "sac-kurutma-makinesi",
    name: "Saç Kurutma Makinesi",
    price: "1.500 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00R844/2025141443-00R844-1/2025141443-00R844-1_600x450.png?1757850864000",
    description: "Yüksek performanslı saç kurutma makinesi.",
    category: "Elektrikli Ev Aletleri",
  },
   {
    id: "laptop",
    name: "Laptop",
    price: "46.400 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00TIU6/20256181710-00TIU6-1/20256181710-00TIU6-1_600x450.png?1757850864000",
    description: "Güçlü donanımıyla yüksek performanslı laptop.",
    category: "Bilgisayar",
  },
  {
    id: "airpods",
    name: "AirPods",
    price: "12.199 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/aksesuar/Apple/airpods-pro/cg/1/1_600x450.png?1757850864000",
    description: "Apple AirPods Pro, aktif gürültü engelleme özelliğiyle.",
    category: "Aksesuar",
  },
  {
    id: "supurge",
    name: "Dikey Süpürge",
    price: "19.999 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00QJEG/202411131621-00QJEG-1/202411131621-00QJEG-1_600x450.png?1757850864000",
    description: "Kablosuz kullanım kolaylığı sağlayan dikey süpürge.",
    category: "Ev & Yaşam",
  },
];
*/
// src/data/products.tsx
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 14",
    category: "Cep Telefonu-Aksesuar",
    description: "Apple iPhone 14 akıllı telefon.",
    price: "52.000 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1698403918712/1698403923878/1698403923878_600x450.png?1757850864000",
  },
  {
    id: "3",
    name: "iPad Pro",
    category: "Bilgisayar-Tablet",
    description: "Apple iPad Pro 11 inç tablet.",
    price: "46.948 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00CLCP/3-1667297803421/3-1667297803421_250x188.png?1758112274000",
  },
  {
    id: "4",
    name: "MacBook Air",
    category: "Bilgisayar-Tablet",
    description: "Apple M1 MacBook Air.",
    price: "64.999 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/00PTYO/20249272219-00PTYO-1/20249272219-00PTYO-1_250x188.png?1758112274000",
  },
  {
    id: "offers-3",
    name: "Saç Kurutma Makinesi",
    category: "Elektrikli Ev Aletleri",
    description: "Yüksek performanslı saç kurutma makinesi.",
    price: "1.500 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00R844/2025141443-00R844-1/2025141443-00R844-1_600x450.png?1757850864000",
  },
  {
    id: "offers-2",
    name: "Laptop",
    category: "Bilgisayar-Tablet",
    description: "Güçlü donanımıyla yüksek performanslı laptop.",
    price: "46.400 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00TIU6/20256181710-00TIU6-1/20256181710-00TIU6-1_600x450.png?1757850864000",
  },
  {
    id: "offers-1",
    name: "AirPods",
    category: "Cep Telefonu-Aksesuar",
    description: "Apple AirPods Pro, aktif gürültü engelleme özelliğiyle.",
    price: "12.199 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/aksesuar/Apple/airpods-pro/cg/1/1_600x450.png?1757850864000",
  },
  {
    id: "offers-4",
    name: "Dikey Süpürge",
    category: "Ev-Yaşam",
    description: "Kablosuz kullanım kolaylığı sağlayan dikey süpürge.",
    price: "19.999 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00QJEG/202411131621-00QJEG-1/202411131621-00QJEG-1_600x450.png?1757850864000",
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra",
    category: "Cep Telefonu-Aksesuar",
    description: "Samsung’un en yeni amiral gemisi akıllı telefonu.",
    price: "64.999 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00FIN9/4-1674912039376/4-1674912039376_600x450.png?1757850864000",
  },
  {
    id: "6",
    name: "Tıraş Makinesi",
    category: "Sağlık-Kişisel Bakım",
    description: "Konforlu kullanım için geliştirilmiş tıraş makinesi.",
    price: "998 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00HIGU/00HIGU-1/00HIGU-1_600x450.png?1757850864000",
  },
  {
    id: "7",
    name: "Şarjlı Diş Fırçası",
    category: "Sağlık-Kişisel Bakım",
    description: "Daha sağlıklı dişler için şarjlı diş fırçası.",
    price: "12.699 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/DE/1-1669637368706/1-1669637368706_600x450.png?1757850864000",
  },
  {
    id: "8",
    name: "Ateş Ölçer",
    category: "Sağlık-Kişisel Bakım",
    description: "Temassız dijital ateş ölçer.",
    price: "259 TL",
    image:
      "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/00CCZM/1-1665985984708/1-1665985984708_600x450.png?1757850864000",
  },
];
