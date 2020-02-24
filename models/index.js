const { model, Schema } = require('mongoose')

const Sticker = require('./Sticker.js')(model, Schema)

module.exports = {Sticker}