const mongoose = require('mongoose');
const express = require('express');
const userSchema = mongoose.Schema({
    text:{
        type:"String",
        required:true
    }
});
module.exports = mongoose.model("todo",userSchema);