const mongoose = require('mongoose'); //chamando o mongoose

const reviewSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
      },
    rating: {
        type: Number,
        require: true,
        
      },
      comment: {
        type: String,
        require: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:"User"
      },

})


//colecao que irar ser guardada dentro do banco de dados com as inforaçoes que irao ser necessárias no front-end
const productSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
    
  },
  description: {
    type: String,
    require: true,
    
   
  },
  reviews:[
    reviewSchema

  ],
  rating: {
    type: Number,
    require: true,
    default:0
  },
  nunReview: {
    type: Number,
    require: true,
    default:0
  },
  unReview: {
    type: Number,
    require: true,
    default:0
  },
 price: {
    type: Number,
    require: true,
    default:0
  },
  countInStock: {
    type: Number,
    require: true,
    default:0
  },

  createrdAt: {
    type: Date,
    default: Date.now,
  },


});

const Product = mongoose.model('Product', UserSchema) //schema de usuario

export default Product;