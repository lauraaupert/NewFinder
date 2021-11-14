const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Game = require("./Game");
// const passportLocalMongoose = require('passport-local-mongoose');

// const bcrypt = require("bcryptjs");
const UserSchema = new Schema({
  name: {
    type: String,
    // required: [true, "Please provide a name"]
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    // unique: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please provide a valid email"
    ]
  },
  password: {
    type: String,
  },
  maps: {
    
      mapStyle: {
        type:String
      },
      mapName: {
        type: String
      }
      
    },
  // }
  maps: {
    type: Array
  },
  hasMaps: 
    {
      type: Boolean
    }
  
  //   {
  //   mapStyle: {
  //       type: String,
  //       // required: "Exercise type required",
  //   },
  //   mapName: {
  //        type: String,
  //       //  required: "Exercise name required",
  //   }
  // }
  // ]
    // {
    //   mapStyle: {
    //     type: String,
    //   },
    //   mapName: {
    //     type: String,
    //   },
    //   mapDescription: {
    //     type: String,
    //   },
      // markers: [
      //   {
      //     lat: {
      //       type: Number,
      //       // required: [true, "Please enter your address. It will not be displayed."]
      //     },
      //     lng: {
      //     type: Number,
      //     // required: [true, "Please enter your address. It will not be displayed."]
      //     }, 
      //     name: {
      //       type: String,
      //     },
      //     description: {
      //       type: String,
      //     },
      //     notes: [
      //       {
      //         comment: {
      //           type: String,
      //         }
      //       }
      //     ]
      //   }
      // ]
  //  }
  // ]
})
// 
// UserSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// }
//   UserSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
//     next();
//   })
  
  
  
  // const User = mongoose.model("User", UserSchema);

// });

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema)
