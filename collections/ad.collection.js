const Ad = require('../modles/ad.model');

exports.getAllAds = async (req, res) => {
  try {
    res.json(await Ad.find());
  } catch {
    res.status(500).json({ message: err });
  }
};

exports.getOneAd = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) res.status(404).json({ message: 'Not found' });
    else res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.addAd = async (req, res) => {
  const fileType = await getImageFileType(req.file);

  try {
    if (
      req.file &&
      ['image/png', 'image/jpeg', 'image/gif'].includes(fileType)
    ) {
      const { title, content, publishDate, price, reqDestination, sellerInfo } =
        req.body;
      const newAd = new Ad({
        title: title,
        content: content,
        publishDate: publishDate,
        img: req.file,
        price: price,
        reqDestination: reqDestination,
        sellerInfo: sellerInfo,
      });
      await newAd.save();
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (ad) {
      await Ad.deleteOne({ _id: req.params.id });
      res.json(await Ad.find());
    } else res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.editAd = async (req, res) => {
  const { title, content, publishDate, price, reqDestination, sellerInfo } =
    req.body;
  try {
    const ad = await Ad.findById(req.params.id);
    if (ad) {
      await Ad.updateOne(
        { _id: req.params.id },
        {
          $ser: {
            title: title,
            content: content,
            publishDate: publishDate,
            img: req.file,
            price: price,
            reqDestination: reqDestination,
            sellerInfo: sellerInfo,
          },
        }
      );
    }
  } catch (err) {
    req.status(500).json({ message: err });
  }
};

exports.getPhraseAd = async (req, res) => {
  const phrase = req.params.searchPhrase;
  try {
    const ad = await Ad.find({ publishDate: { $regex: phrase } });
    if (!ad) res.status(404).json({ message: 'Not found' });
    else res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
