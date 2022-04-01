import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "Grocery",
    categoryName: "grocery",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  },
  {
    _id: uuid(),
    name: "Mobiles",
    categoryName: "mobiles",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    _id: uuid(),
    name: "Fashion",
    categoryName: "fashion",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
  },
  {
    _id: uuid(),
    name: "Electronics",
    categoryName: "electronics",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
  },
  {
    _id: uuid(),
    name: "Appliances",
    categoryName: "appliances",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
  },
  {
    _id: uuid(),
    name: "Toys",
    categoryName: "toys",
    img: "https://th.bing.com/th/id/R.64638fbcf303574d8fca12bff9a25a56?rik=raVAMEGKmaXXmQ&riu=http%3a%2f%2fclipart-library.com%2fdata_images%2f176035.jpg&ehk=hb1RF14HHwJJ57SVGnis81GQ2GO3UICINXQ96nLFLF4%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    _id: uuid(),
    name: "Masks",
    categoryName: "masks",
    img: "https://m.media-amazon.com/images/I/61meh94pj0L._AC_SY400_.jpg",
  },
  {
    _id: uuid(),
    name: "Snacks",
    categoryName: "snacks",
    img: "https://m.media-amazon.com/images/I/81K2J-pPECL._AC_SY400_.jpg",
  },
];
