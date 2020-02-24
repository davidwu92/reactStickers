module.exports = (model, Schema) =>{
  const Sticker = new Schema({
    title: String,
    // description: String,
    // link: String,
    createdAt: {type: Date, default: Date.now}
  })
  // Sticker.index({title: 'text'})

  return model('Sticker', Sticker)
}