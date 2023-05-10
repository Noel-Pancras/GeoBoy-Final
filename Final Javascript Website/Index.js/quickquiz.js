const Questions = [{
    id: 0,
    q: "Which country has more ancient pyramids than Egypt??",
    a: [{ text: "Japan", isCorrect: false },
        { text: "Sudan", isCorrect: true },
        { text: "Zambia", isCorrect: false },
        { text: "Mozambique", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which mountain has the biggest sheer drop on Earth?",
    a: [{ text: "Mt. Everest", isCorrect: false, isSelected: false },
        { text: "Mt. Kilimanjaro", isCorrect: false },
        { text: "Mt. Fuji", isCorrect: false },
        { text: "Mt. Thor", isCorrect: true }
    ]

},
{
    id: 2,
    q: "How fast do continents shift?",
    a: [{ text: "About as fast as a car", isCorrect: false },
        { text: "Around as fast as the average man", isCorrect: false },
        { text: "The speed at which your fingernails grow", isCorrect: true },
        { text: "Almost as fast as the Earth rotates", isCorrect: false }
    ]

},

{
    id: 3,
    q: "Which of these countries is wider than The Moon?",
    a: [{ text: "Luxembourg", isCorrect: false },
        { text: "The Maldives", isCorrect: false },
        { text: "Indonesia", isCorrect: false },
        { text: "Australia", isCorrect: true }
    ]
    },

    {
        id: 4,
        q: "In which country is there an island that’s within a lake, on an island that's within a lake, on an island.",
        a: [{ text: "The Philippines", isCorrect: true},
            { text: "Malaysia", isCorrect: false },
            { text: "The Andaman Islands", isCorrect: false},
            { text: "The USA", isCorrect: false }
        ]
        },

{
id: 5,
q: "How many timezones does Russia go across?",
a: [{ text: "17", isCorrect: false },
{ text: "11", isCorrect: true },
{ text: "14", isCorrect: false },
{ text: "9", isCorrect: false }
]
},

{
    id: 6,
    q: "Which is the tallest mountain on Earth?",
    a: [{ text: "Mt. Rushmore", isCorrect: false },
        { text: "Mt. Everest", isCorrect: false },
        { text: "Mt. Fuji", isCorrect: false },
        { text: "Mt. Kea", isCorrect: true}
    ]
    },
    {
        id: 7,
        q: "Which city sinks close to 3 and a half feet a year?",
        a: [{ text: "Mexico City", isCorrect: true },
            { text: "New York City", isCorrect: false },
            { text: "Guadalajara", isCorrect: false },
            { text: "Warsaw", isCorrect: false }
        ]
        },
        {
            id: 8,
            q: "How many islands are there in the Philippines?",
            a: [{ text: "8,000", isCorrect: false },
                { text: "7,000", isCorrect: false },
                { text: "7,500", isCorrect: true },
                { text: "6,500", isCorrect: false }
            ]
            },
            {
            id: 9,
            q: "How many countries do Russia and China share borders with?",
            a: [{ text: "14 each", isCorrect: true },
            { text: "14 in total", isCorrect: false },
            { text: "13 each", isCorrect: false},
            { text: "13 in total", isCorrect: false }
                ]
                }
]
    
    // Set start
    var start = true;
    
    // Iterate
    function iterate(id) {
    
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    
    // Getting the question
    const question = document.getElementById("question");
    
    
    // Setting the question text
    question.innerText = Questions[id].q;
    
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    
    
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
    
    var selected = "";
    
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "red";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
    
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "red";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
    
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "red";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
    
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "red";
        selected = op4.value;
    })
    
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
    
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Correct";
            result[0].style.color = "blue";
        } else {
            result[0].innerHTML = "Incorrect";
            result[0].style.color = "red";
        }
    })
    }
    
    if (start) {
    iterate("0");
    }
    
    // Next button and method
    const next = document.getElementsByClassName('next')[0];
    var id = 0;
    
    next.addEventListener("click", () => {
    start = false;
    if (id < 10) {
        id++;
        iterate(id);
        console.log(id);
    }
    
    })
    