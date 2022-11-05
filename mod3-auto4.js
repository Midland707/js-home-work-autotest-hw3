//MODUL3 AUTOTEST4

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];
console.log("apartment = ", apartment);
console.log("ownerName = ", ownerName);
console.log("ownerPhone = ", ownerPhone);
console.log("ownerEmail = ", ownerEmail);
console.log("numberOfTags = ", numberOfTags);
console.log("firstTag = ", firstTag);
console.log("lastTag = ", lastTag);
// Change code above this line
