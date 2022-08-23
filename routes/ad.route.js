const express = require('express');
const Control = require('../controllers/ad.collection');
const router = express.Router();

router.get('/ads', Control.getAllAds);

router.get('/ads/:id', Control.getOneAd);

router.post('/ads', Control.addAd);

router.delete('/ads/:id', Control.deleteAd);

router.put('/ads/:id', Control.editAd);

router.get('/ads/search/:searchPhrase', Control.getPhraseAd);
