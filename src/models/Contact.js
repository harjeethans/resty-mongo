const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    _id: {
      type: 'ObjectId'
    },
    index: {
      type: 'Number'
    },
    guid: {
      type: 'String'
    },
    isActive: {
      type: 'Boolean'
    },
    balance: {
      type: 'String'
    },
    picture: {
      type: 'String'
    },
    age: {
      type: 'Number'
    },
    eyeColor: {
      type: 'String'
    },
    name: {
      type: 'String'
    },
    gender: {
      type: 'String'
    },
    company: {
      type: 'String'
    },
    email: {
      type: 'String'
    },
    phone: {
      type: 'String'
    },
    address: {
      type: 'String'
    },
    about: {
      type: 'String'
    },
    registered: {
      type: 'String'
    },
    latitude: {
      type: 'Number'
    },
    longitude: {
      type: 'Number'
    },
    tags: {
      type: [
        'String'
      ]
    },
    friends: {
      type: [
        'Mixed'
      ]
    },
    greeting: {
      type: 'String'
    },
    favoriteFruit: {
      type: 'String'
    }
  }
);

module.exports = mongoose.model('Contact', contactSchema);