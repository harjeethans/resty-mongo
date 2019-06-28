// External Dependancies
const boom = require('boom');

// Get Data Models
const Contact = require('../models/Contact');

// Get all cars
exports.getContacts = async (req, reply) => {
  try {
    const contacts = await Contact.find();
    return contacts;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single car by ID
exports.getSingleContact = async (req, reply) => {
  try {
    const id = req.params.id;
    console.log('xxx ' + id);
    const contact = await Contact.findById(id);
    console.log('xxx ' + JSON.stringify(contact));
    return contact;
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addContact = async (req, reply) => {
  try {
    const contact = new Contact(req.body);
    return contact.save();
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Update an existing car
exports.updateContact = async (req, reply) => {
  try {
    const id = req.params.id;
    const contact = req.body;
    const { ...updateData } = contact;
    const update = await Contact.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Delete a car
exports.deleteContact = async (req, reply) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findByIdAndRemove(id);
    return contact;
  } catch (err) {
    throw boom.boomify(err);
  }
}