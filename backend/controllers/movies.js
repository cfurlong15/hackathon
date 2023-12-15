const express = require('express');
const db = require('../models')

module.exports = {
    index,
    show
}

async function index(req, res, next) {
    try {
        res.status(200).json(await db.Movie.find({}))

    }catch(err) {
        res.status(400).json({ err: err.message });

    }
}

async function show(req, res, next) {
    try {
      res.status(200).json(await db.Movie.findById(req.params.id));
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  }