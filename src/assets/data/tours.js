import tourImg01 from "../images/tourImg01.jpg";
import tourImg02 from "../images/tourImg02.jpeg";
import tourImg03 from "../images/tourImg03.jpeg";
import tourImg04 from "../images/tourImg04.jpg";
import tourImg05 from "../images/tourImg05.jpg";
import tourImg06 from "../images/tourImg06.jpg";
import tourImg07 from "../images/tourImg07.jpg";
import tourImg08 from "../images/tourImg08.jpeg";


const tours = [
  {
    id: "01",
    title: "Nine Arches Bridge",
    city: "Ella",
    distance: 180,
    price: 70,
    maxGroupSize: 10,
    desc: "This bridge is 300 feet in length, 25 feet in width and 80-100 feet in height. It is one of the best examples of colonial-era railway construction in the country. The Bridge can be reached by travelling 2km on Gotuwala road starting from Halpe Textile centre in Badulla Bandarawela road.",
    reviews: [
      {
        name: "Sadeera Samarawickrama",
        rating: 4.6,
      },
      {
        name: "Sadeera Samarawickrama",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "The Temple of the Sacred Tooth",
    city: "Kandy",
    distance: 120,
    price: 30,
    maxGroupSize: 8,
    desc: "The Temple of the Sacred Tooth Relic is a world-renowned place of worship, where the left Canine tooth of Gautama Buddha is enshrined. The temple which is venerated by thousands of local & foreign devotees and tourists daily was named as a world heritage by UNESCO in 1988.",
    reviews: [
      {
        name: "Sadeera Samarawickrama",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Galle Fort",
    city: "Galle",
    distance: 160,
    price: 45,
    maxGroupSize: 10,
    desc: "Galle Fort is a UNESCO World Heritage Site, originally built by the Portuguese in the 16th century and then further developed by the Dutch and the British over the next 350 years. It covers nearly 4sqkm and is protected by 12 bastions and connecting ramparts.",
    reviews: [
      {
        name: "Sadeera Samarawickrama",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Sigiriya",
    city: "Sigiriya",
    distance: 130,
    price: 50,
    maxGroupSize: 8,
    desc: "Sigiriya was designated as a world heritage site in 1982. Sigiriya is famous for it's palace ruins on top of a massive 200 meter high rock surrounded by the remains of an extensive network of gardens, reservoirs and other structures. The rock itself is a lava plug left over from an ancient long extinct volcano.",
    reviews: [
      {
        name: "Sadeera Samarawickrama",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nuwara Eliya",
    city: "Nuwara Eliya",
    distance: 150,
    price: 75,
    maxGroupSize: 8,
    desc: "Surrounded by hills and mountains Nuwara Eliya is a valley nestling among them. Originally there were no trees and it was a Patana. Famous for its cool English climate and rich soil which helps in the tea plantations, Nuwara Eliya has many water falls and streams and boasts of rare fauna and flora.",
    reviews: [
      {
        name: "Sadeera Samarawickrama",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Madu Ganga Boat Safari",
    city: "Balapitiya",
    distance: 80,
    price: 30,
    maxGroupSize: 8,
    desc: "Madu Ganga is a minor watercourse which originates near Uragasmanhandiya in the Galle District of Sri Lanka, before widening into the Madu Ganga Lake at Balapitiya. The river then flows for a further a 4.4 km (2.7 mi) before draining into the Indian Ocean.",
    reviews: [
      {
        name: "Sadeera Samarawickrama",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Safari Tour in Yala National Park",
    city: "South Eastern Corner ",
    distance: 160,
    price: 80,
    maxGroupSize: 8,
    desc: "Yala National Park is home to an extensive variety of 44 varieties of mammal and over 215 bird species, including at least 7 endemics. Among the residents are one of the highest densities of elusive leopards, resident herds of majestic elephants, sloth bears, sambars, jackals, spotted deer, and crocodiles.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Colombo",
    city: "Colombo",
    distance: 60,
    price: 25,
    maxGroupSize: 8,
    desc: "Situated on the west coast of the island, just south of the Kelani River, Colombo is a principal port on the Indian Ocean. It has one of the largest artificial harbours in the world and handles the majority of Sri Lanka's foreign trade.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
