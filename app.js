const express = require("express");
const path = require("path");
const app = express();

const port = process.env.port || 5000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.send("Welcome to the homepage, good sir! This is a test");
});

app.get("/api/skills", (req, res) => {
  const skills = [
    { id: 101, skillName: "Python", skillLevel: 4, section: 1 },
    { id: 102, skillName: "VB.NET", skillLevel: 4, section: 1 },
    { id: 103, skillName: "Java", skillLevel: 4, section: 1 },
    { id: 104, skillName: "HTML 5", skillLevel: 3.5, section: 1 },
    { id: 105, skillName: "CSS 3", skillLevel: 3.5, section: 1 },
    { id: 106, skillName: "JavaScript", skillLevel: 3, section: 1 },
    { id: 107, skillName: "React", skillLevel: 3, section: 1 },
    { id: 108, skillName: "SQL", skillLevel: 3, section: 1 },
    { id: 109, skillName: "C#", skillLevel: 3, section: 1 },
    { id: 110, skillName: "C Programming", skillLevel: 3, section: 1 },
    { id: 111, skillName: "Design Patterns", skillLevel: 3, section: 1 },
    { id: 112, skillName: "Node.js", skillLevel: 2, section: 1 },
    { id: 113, skillName: "WPF", skillLevel: 2, section: 1 },
    { id: 114, skillName: "AWS", skillLevel: 2, section: 1 },

    { id: 200, skillName: "Git/GitHub", skillLevel: 3.5, section: 2 },
    { id: 201, skillName: "Linux", skillLevel: 2.5, section: 2 },
    { id: 202, skillName: "VS Code", skillLevel: 4, section: 2 },
    { id: 203, skillName: "Visual Studio", skillLevel: 4, section: 2 },
    { id: 204, skillName: "SSMS", skillLevel: 3, section: 2 },
    { id: 207, skillName: "ES5: Skyrim", skillLevel: 5, section: 2 },
  ];

  res.json(skills);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
