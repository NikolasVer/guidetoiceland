import faker from 'faker';

const initialPhotoTemplate = id => ({
    id,
    link: "http://via.placeholder.com/350x200",
    name: faker.finance.accountName(),
    description: faker.company.catchPhrase()
});

/**
 * Return photos array
 * @param {Number} count
 * @returns {Array} photos;
 */
function getPhotosByCount(args) {

  const count = Number(args.count);

  if(!count || typeof count !== 'number') {
    console.log('Error: count invalid');
    return;
  }

  let resultArray = [];

  for(let i =0; i < count; i++) {
    resultArray.push(initialPhotoTemplate(i.toString()));
  }

  return resultArray;
}

export default getPhotosByCount;
