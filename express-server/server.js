const express = require("express");
const app = express();
const port = 5000;

app.get("/api/customers", (req, res) => {
  const skills = [
    { id: 1, skillName: "HTML 5", skillLevel: 3.5, section: 1 },
    { id: 2, skillName: "CSS 3", skillLevel: 3.5, section: 1 },
    { id: 3, skillName: "JavaScript", skillLevel: 3, section: 1 },
    { id: 4, skillName: "React", skillLevel: 3, section: 1 },
    { id: 5, skillName: "Node.js", skillLevel: 2.5, section: 1 },
    { id: 6, skillName: "Python", skillLevel: 4, section: 1 },
    { id: 7, skillName: "Java", skillLevel: 4, section: 1 },
    { id: 8, skillName: "VB.NET", skillLevel: 4, section: 1 },
    { id: 9, skillName: "C Programming", skillLevel: 3, section: 1 },
    { id: 10, skillName: "SQL", skillLevel: 3, section: 1 },
    { id: 11, skillName: "Git/GitHub", skillLevel: 3.5, section: 2 },
    { id: 12, skillName: "VS Code", skillLevel: 4, section: 2 },
    { id: 13, skillName: "Visual Studio", skillLevel: 4, section: 2 },
    { id: 14, skillName: "SSMS", skillLevel: 3, section: 2 },
    { id: 15, skillName: "Microsoft Office", skillLevel: 5, section: 2 },
    { id: 16, skillName: "XAMPP", skillLevel: 2.5, section: 2 },
    { id: 17, skillName: "Figma", skillLevel: 2.5, section: 2 },
    { id: 18, skillName: "ES5: Skyrim", skillLevel: 5, section: 2 },
  ];

  res.json(skills);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
