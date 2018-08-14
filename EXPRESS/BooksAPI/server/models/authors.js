const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Please enter an author name!"], minlength:[2, "Name must be at least 2 chars!"]},
    country: {type: String, required:[true, "Please enter an author name!"], minlength:[2, "Name must be at least 2 chars!"]},
    books:[],

    // birthday: {
    //     type: Date, 
    //     required: [true, "Birthday field is required."],
    //     validate: {
    //         validator: function(date) {
    //             return date instanceof Date;
    //         },
    //         message: 'Please enter a valid date.',
    //         validator: function(date) {
    //             return date < Date.now()
    //         },
    //         message: 'Date cannot be in the future.',
    //         validator: function(birthday) {
    //             var ageDifMs = Date.now() - birthday.getTime();
    //             var ageDate = new Date(ageDifMs);
    //             var result = Math.abs(ageDate.getUTCFullYear() - 1970);
    //             if (result > 17) {
    //                 return true
    //             }
    //             return false
    //         },
    //         message: 'Must be older than 18 years old.'
    //     }
    // },

},

 {timestamps: true});

mongoose.model("Author", AuthorSchema);

const BookSchema = new mongoose.Schema({
    title: {type: String, minlength:2,required: [true, "Name field must be at least 3 characters"]},
    publicationYear: {
        type: Date, 
        required: [true, "Publication year field is required."],
        validate: {
            validator: function(date) {
                return date instanceof Date;
            },
            message: 'Please enter a valid date.',
            validator: function(date) {
                return date < Date.now()
            },
            message: 'Date cannot be in the future.',
            validator: function(birthday) {
                var ageDifMs = Date.now() - birthday.getTime();
                var ageDate = new Date(ageDifMs);
                var result = Math.abs(ageDate.getUTCFullYear() - 1970);
                if (result > 17) {
                    return true
                }
                return false
            },
            message: 'Must be older than 18 years old.'
        }
    },
   }, {timestamps: true})

mongoose.model('Book', BookSchema);




// Each author has a first name and a last name, which must each be at least two characters long
// Each author has a country of origin, which must be at least three characters long
// Each author has a birthdate, which must be in the past
// Each author can write many books
// Each book has a title, which must be at least two characters long
// Each book has a publication year, which must be in the past
