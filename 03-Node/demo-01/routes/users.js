import express, { application } from 'express';

const router = express.Router();

let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];

// User Endpoints

// localhost:3001/api/users/
router.get("/", (req, res) => {
    res.json(users);
});

// localhost:3001/api/users/1
router.get("/:id", (req, res) => {
    const user = users.find((user) => {
        if (user.id == req.params.id) {
            return user;
        }
    })
    if (user) {
        res.json(user);
    } else {
        res.status(404).send({ message: "user not found" });
    }
});


// localhost:3001/api/users/
// body {name:sherry, age:7}
router.post("/", (req, res) => {
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    }
    users.push(newUser);
    res.json(newUser);
})


export default router;