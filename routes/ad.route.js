const express = require('express');
const Control = require('../collections/ad.collection');
const router = express.Router();
const {isLoggedIn} = require('../middleware.js/middleware');

router.get('/ads', isLoggedIn, Control.getAllAds);

router.get('/ads/:id', isLoggedIn, Control.getOneAd);

router.post('/ads', isLoggedIn, Control.addAd);

router.delete('/ads/:id', isLoggedIn, Control.deleteAd);

router.put('/ads/:id', isLoggedIn, Control.editAd); //dodać tylko jeżeli jesteś autorem!!!

router.get('/ads/search/:searchPhrase', isLoggedIn, Control.getPhraseAd);

module.exports = router;
