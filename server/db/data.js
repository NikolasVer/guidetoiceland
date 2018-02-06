import faker from "faker";

const initialPhotoTemplate = id => ({
  id,
  // link: "https://picsum.photos/350/200?random?v=" + Date.now() + Math.random()
  // link: "http://lorempixel.com/350/200",
  link: `https://fakeimg.pl/350x200/282828/eae0d0?text=${faker.finance.amount()}&font=lobster`,
  name: faker.finance.accountName(),
  description: faker.company.catchPhrase()
});

/**
 * Return photos array
 * @param {Number} count
 * @returns {Array} photos;
 */
function getPhotosByCount(args) {
  if (!args.count || ~~args.count === 0) {
    console.log("Error: count invalid");
    return;
  }

  const count = Number(args.count);
  const resultArray = [];

  for (let i = 0; i < count; i++) {
    resultArray.push(initialPhotoTemplate(i.toString()));
  }

  return resultArray;
}

export default getPhotosByCount;
