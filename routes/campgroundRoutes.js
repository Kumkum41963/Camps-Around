const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const validateCampground = require('../middleware/campgroundValidation')
const { isLoggedIn } = require('../middleware/isLoggedIn')
const { showAllCampgrounds, newCampgroundForm, saveNewCampground, showSingleCampground, showEditForm, updateEditForm, deleteCampground } = require('../controller/campgroundController')

router.get('/', catchAsync(showAllCampgrounds));

router.get('/new',  newCampgroundForm);

router.post('/', isLoggedIn,validateCampground, catchAsync(saveNewCampground));

router.get('/:id', catchAsync(showSingleCampground));

router.get('/:id/edit', isLoggedIn, catchAsync(showEditForm));

router.put('/:id', validateCampground, catchAsync(updateEditForm));

router.delete('/:id', isLoggedIn, catchAsync(deleteCampground));

module.exports = router;

// joi
// The most powerful schema description language and data validator for JavaScript syntaxes.

