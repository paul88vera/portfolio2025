const express = require("express");
const router = express.Router();

const db = require("../../config/connection");

// All projects - PUBLIC
router.get("/", (req, res) => {
  const query = "SELECT * FROM Project";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Project");
    } else {
      res.json(results);
    }
  });
});

// Get One Project - PUBLIC
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM Project WHERE ProjectID = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on ProjectID");
    } else {
      res.json(results);
    }
  });
});

// Add A Project - PRIVATE
router.post("/", (req, res) => {
  const { name, desc, git, link, type, good } = req.body;
  const query =
    "INSERT INTO Project (ProjectName, ProjectDesc, ProjectGit, ProjectLink, ProjectType, ProjectGood) VALUES (?,?,?,?,?,?)";
  db.query(query, [name, desc, git, link, type, good], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Project insert");
    } else {
      res.status(201).send(`Project ${name} Added`);
    }
  });
});

// Update A Project - PRIVATE
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, desc, git, link, type, good } = req.body;
  const query =
    "UPDATE Project SET ProjectName = ?, ProjectDesc = ?, ProjectGit = ?, ProjectLink = ?, ProjectType = ?, ProjectGood = ? WHERE ProjectID = ?";
  db.query(query, [name, desc, git, link, type, good], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on Project insert");
    } else {
      res.status(201).send(`Project ${name} Updated`);
    }
  });
});

// Delete a project - PRIVATE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM Project WHERE ProjectID = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error on delete");
    } else {
      res.status(201).send("Project Deleted");
    }
  });
});

module.exports = router;
