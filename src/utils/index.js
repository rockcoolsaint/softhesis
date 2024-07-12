import * as dotenv from 'dotenv';

dotenv.config();

export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "All Products",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Men",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Women",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "kids",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Products",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Add New Product",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Men",
      },
      {
        id: "women",
        label: "Women",
      },
      {
        id: "kids",
        label: "Kids",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Delivery Info",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const firebaseStroageURL =
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_URL;

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];

export const userData = [
  {
    name: 'Jan',
    "Active User": 4000,
  },
  {
    name: 'Feb',
    "Active User": 3000,
  },
  {
    name: 'Mar',
    "Active User": 2000,
  },
  {
    name: 'Apr',
    "Active User": 2780,
  },
  {
    name: 'May',
    "Active User": 1890,
  },
  {
    name: 'Jun',
    "Active User": 2390,
  },
  {
    name: 'Jul',
    "Active User": 3490,
  },
  {
    name: 'Aug',
    "Active User": 3490,
  },
  {
    name: 'Sep',
    "Active User": 3490,
  },
  {
    name: 'Oct',
    "Active User": 3490,
  },
  {
    name: 'Nov',
    "Active User": 3490,
  },
  {
    name: 'Dec',
    "Active User": 3490,
  },
];

export const productData = [
  {
    name: "Jan",
    "Sales": 4000,
  },
  {
    name: "Feb",
    "Sales": 3000,
  },
  {
    name: "Mar",
    "Sales": 5000,
  },
];

export const userRows = [
  { id: 1,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 2,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 3,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 4,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 5,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 6,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 7,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 8,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 9,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
  { id: 10,
    username: 'Jon Snow',
    avatar: 'images/lady.jpg',
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00"
  },
];

export const productRows = [
  { id: 1,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 2,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 3,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 4,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 5,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 6,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 7,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 8,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 9,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
  { id: 10,
    name: 'Apple Airpods',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    stock: 123,
    status: "active",
    price: "$120.00"
  },
];
