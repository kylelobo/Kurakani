var mongoose = require('mongoose');

//MongoDB schema for users
module.exports = mongoose.model("User",{
  name: String,
  empid: String,
  emailid: String,
  mobile_no: String,
  location: String,
  department: String,
  sessions :[{
    type:String
  }],
  events :[{
    type:String
  }],
  dname:String,
  aadhar: String,
  designation: String,
  hashedPassword:String,
  salt:String,
  verified: { type: Boolean, default: false }
});
