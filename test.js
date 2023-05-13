const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const model = mongoose.model;
const assert = require('assert');

const schema = new Schema({
    name: {
      type: String,
      required: true
    }
  });

const Cat = model('Cat', schema);

// This cat has no name :(
const cat = new Cat();

const saveFun = async()=>{
    let error;
  try {
    await cat.save();
    
  } catch (err) {
    error = err;
  }

  assert.equal(error.errors['name'].message,
    'Path `name` is required.');
  
  error = cat.validateSync();
  assert.equal(error.errors['name'].message,
    'Path `name` is required.');
}
  
saveFun();

//   assert.equal(error.errors['name'].message,
//     'Path `name` is required.');
  
//   error = cat.validateSync();
//   assert.equal(error.errors['name'].message,
//     'Path `name` is required.');