const { WebApp } = require('../models')

module.exports = app => {
  
  // GET all stickers
  app.get('/stickers', (req, res) => {
    Sticker.find({})
      .then((data)=>{res.json(data)})
      .catch(e=>console.error(e))
  })
}