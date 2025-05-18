import express from 'express';
// import pgclient  from '../db';
import pgclient from '../db.js';

const router = express.Router();


// Read >>> get 
// insert create >> post 
// update >> put post 
// delete >> delete post 


// User Endpoints

// localhost:3001/api/users/
router.get("/", async (req, res) => {
    try {
        const users = await pgclient.query("SELECT * FROM users;");
        res.json(users.rows);
    } catch (error) {

    }
});



// localhost:3001/api/users/1
router.get("/:id", async (req, res) => {
    try {
        const result = await pgclient.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});


// localhost:3001/api/users/
// body {name:sherry, age:7}
router.post("/", async (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    const newUser2 = await pgclient.query(
        "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *", [name, age]
    );
    res.json(newUser2.rows[0]);
})


export default router;