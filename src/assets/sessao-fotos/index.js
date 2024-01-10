function importAll(r) {
  let media = {};
  let src = [];
  r.keys().map((item) => {
    media[item.replace("./", "")] = r(item);
    src.push(r(item));
  });
  return { media, src };
}

const { media, src } = importAll(
  require.context("./", false, /\.(png|jpe?g|svg)$/)
);

export default { media, src };
