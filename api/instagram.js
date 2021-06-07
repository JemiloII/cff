import axios from 'axios';

const account = 'conventionfoamfighting';

const filterPhotos = (mediaArray) => {
  console.log('mediaArray:', mediaArray);
  const photos = [];

  let id = 0;
  for (let media of mediaArray) {
    const { node } = media;
    const {
      accessibility_caption: title,
      shortcode,
      thumbnail_src: photo,
      edge_media_to_caption: { edges }
    } = node;
    const alt = (edges[0] || edges).node.text;
    const url = `https://www.instagram.com/p/${shortcode}/`;

    id += 1;
    photos.push({alt, id, photo, title, url});
  }

  return photos;
};

const getMediaArray = (payload) => {
  // Only returns the 12 most recent posts
  return payload.graphql.user.edge_owner_to_timeline_media.edges;
};

const getPhotos = async () => {
  let photos = [];
  try {
    const payload = await axios.get(`https://www.instagram.com/${account}/?__a=1`, {
      headers: {
        accepts: 'application/json',
        origin: 'https://www.instagram.com'
      }
    });
    const mediaArray = getMediaArray(payload);

    photos = filterPhotos(mediaArray);
  } catch (error) {
    console.error('Unable to retrieve photos. Reason:', error);
  }
  return photos;
};

export default async function (req, res) {
  const photos = await getPhotos();
  const json = JSON.stringify({photos});

  res.setHeader('Content-Type', 'application/json');
  return res.end(json);
};
