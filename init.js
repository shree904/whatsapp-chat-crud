const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(()=> {
    console.log("connection is successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1/whatsapp');
}


let allChats=[
    {
    from: "shree",
    to: "chetna",
    msg: "send me your resume template",
    created_at: new Date()
    },
    {
    from: "ram",
    to: "sanjana",
    msg: "bring the pratical pages while coming in college",
    created_at: new Date()
    },
    {
    from: "nikhil",
    to: "shubham",
    msg: "dont follow shree's account on instagram",
    created_at: new Date()
    },

       {
    from: "pawan",
    to: "shreya",
    msg: "let participate in smart india hachakthon",
    created_at: new Date()
    },
];

Chat.insertMany(allChats);

Chat.findByIdAndDelete("68c9130c1ae43ecbe7ff2e6b").then((res)=> {
    console.log(res);
});


