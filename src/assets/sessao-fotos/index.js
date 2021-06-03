function importAll(r) {
  let images = {};
  let src = [];
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    src.push(r(item));
  });
  return {images, src};
}

const {media, src} = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

export default {media, src};

