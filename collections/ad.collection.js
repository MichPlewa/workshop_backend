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
  try {
    const { title, content, publishDate, price, reqDestination, sellerInfo } =
      req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';

    if (
      title &&
      title.length >= 10 &&
      title.length <= 50 &&
      content &&
      content.length >= 20 &&
      content.length <= 1000 &&
      publishDate &&
      req.file &&
      ['image/png', 'image/jpeg', 'image/gif'].includes(fileType) &&
      price &&
      reqDestination &&
      sellerInfo
    ) {
      const ad = Ad.create({
        title,
        content,
        publishDate,
        img: req.file.filename,
        price,
        reqDestination,
        sellerInfo,
      });

      res.status(201).send({ message: 'Add created ' });
    } else {
      if (req.file) {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      }
      res.status(400).send({ message: 'Bad request' });
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
