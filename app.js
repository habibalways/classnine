const studentinfo = [
    {
        name: "Habib",
        roll: 1,
        age: 10,
        location: "Mirpur",
            bangla: 60,
            english: 75,
            islam: 80,
            science: 90,
            mathematics: 96,
            hostori:85
        
    },
    {
        name: "Rakib",
        roll: 2,
        age: 11,
        location: "Uttara",
            bangla: 07,
            english: 77,
            islam: 84,
            science: 96,
            mathematics: 93,
            hostori:83
    },
    {
        name: "Robin",
        roll: 3,
        age: 12,
        location: "Badda",
            bangla: 70,
            english: 80,
            islam: 79,
            science: 90,
            mathematics: 96,
            hostori:85
    },
    {
        name: "Alamin",
        roll: 4,
        age: 13,
        location: "Bonani",
            bangla: 40,
            english: 64,
            islam: 50,
            science: 90,
            mathematics: 96,
            hostori:85
    },
    {
        name: "Faruk",
        roll: 5,
        age: 11,
        location: "Mirpur",
            bangla: 37,
            english: 69,
            islam: 79,
            science: 90,
            mathematics: 86,
            hostori:45
    },
    {
        name: "Shamim",
        roll: 6,
        age: 12,
        location: "Badda",
            bangla: 87,
            english: 75,
            islam: 70,
            science: 65,
            mathematics: 49,
            hostori:69
    },
    {
        name: "Jahidul",
        roll: 7,
        age: 13,
        location: "Uttara",
            bangla: 59,
            english: 89,
            islam: 55,
            science: 69,
            mathematics: 89,
            hostori:90
    },
    {
        name: "Hridoy",
        roll: 8,
        age: 10,
        location: "Bonani",
            bangla: 80,
            english: 84,
            islam: 86,
            science: 93,
            mathematics: 96,
            hostori:85
    },
    {
        name: "Ashik",
        roll: 9,
        age: 13,
        location: "Mirpur",
            bangla: 59,
            english: 85,
            islam: 70,
            science: 60,
            mathematics: 76,
            hostori:85
    },
    {
        name: "Jorina",
        roll: 10,
        age: 12,
        location: "Badda",
            bangla: 87,
            english: 95,
            islam: 80,
            science: 90,
            mathematics: 96,
            hostori:85
    },
    {
        name: "Morjina",
        roll: 11,
        age: 11,
        location: "Uttara",
            bangla: 64,
            english: 80,
            islam: 78,
            science: 70,
            mathematics: 56,
            hostori:75
    },
    {
        name: "Usman",
        roll: 12,
        age: 13,
        location: "Mirpur",
            bangla: 50,
            english: 85,
            islam: 70,
            science: 80,
            mathematics: 66,
            hostori:95
    },
    {
        name: "Robiul",
        roll: 13,
        age: 10,
        location: "Bonani",
            bangla: 90,
            english: 75,
            islam: 50,
            science: 40,
            mathematics: 96,
            hostori:65
    },
    {
        name: "Shahadat",
        roll: 14,
        age: 12,
        location: "Badda",
            bangla: 70,
            english: 75,
            islam: 60,
            science: 90,
            mathematics: 76,
            hostori:85
    },
    {
        name: "Abdulllah",
        roll: 15,
        age: 10,
        location: "Mirpur",
            bangla: 90,
            english: 85,
            islam: 80,
            science: 96,
            mathematics: 85,
            hostori:95
    },
]


let data = JSON.stringify(studentinfo);
console.log(data);
localStorage.setItem('result', data);