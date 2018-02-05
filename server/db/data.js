
const initialPhotoTemplate = id => ({
    id,
    link: "http://via.placeholder.com/350x150",
    name: "Test image",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean porta tortor a diam maximus, ultrices fringilla dui
            varius. Sed egestas tortor quis mi laoreet pretium. I`
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
