import Handlebars from "handlebars";
let users=[
    {
      "name": "Dora Moen",
      "description": "description 1",
      "id": "1"
    },
    {
      "name": "Evan Prosacco II",
      "description": "description 2",
      "id": "2"
    },
    {
      "name": "Maxine Parker",
      "description": "description 3",
      "id": "3"
    },
    {
      "name": "Leona Spencer",
      "description": "description 4",
      "id": "4"
    },
    {
      "name": "Ellis Fahey",
      "description": "description 5",
      "id": "5"
    },
    {
      "name": "David Hoeger",
      "description": "description 6",
      "id": "6"
    },
    {
      "name": "Jimmie Marquardt",
      "description": "description 7",
      "id": "7"
    },
    {
      "name": "Harry Mayert",
      "description": "description 8",
      "id": "8"
    },
    {
      "name": "Jonathon Stiedemann",
      "description": "description 9",
      "id": "9"
    },
    {
      "name": "Freddie Murphy",
      "description": "description 10",
      "id": "10"
    },
    {
      "name": "Woodrow Wolff",
      "description": "description 11",
      "id": "11"
    },
    {
      "name": "Esther Bednar",
      "description": "description 12",
      "id": "12"
    },
    {
      "name": "Jacquelyn Huel",
      "description": "description 13",
      "id": "13"
    },
    {
      "name": "Patty Mayert",
      "description": "description 14",
      "id": "14"
    },
    {
      "name": "Lila Witting",
      "description": "description 15",
      "id": "15"
    },
    {
      "name": "Loren Cartwright",
      "description": "description 16",
      "id": "16"
    },
    {
      "name": "Alyssa Schultz DVM",
      "description": "description 17",
      "id": "17"
    },
    {
      "name": "Raymond Lehner",
      "description": "description 18",
      "id": "18"
    },
    {
      "name": "Ricardo Walter",
      "description": "description 19",
      "id": "19"
    },
    {
      "name": "Carrie Friesen",
      "description": "description 20",
      "id": "20"
    },
    {
      "name": "Essie Emard",
      "description": "description 21",
      "id": "21"
    },
    {
      "name": "Rex Sanford",
      "description": "description 22",
      "id": "22"
    },
    {
      "name": "Clarence Friesen",
      "description": "description 23",
      "id": "23"
    },
    {
      "name": "Terri Krajcik",
      "description": "description 24",
      "id": "24"
    },
    {
      "name": "Vernon Goldner",
      "description": "description 25",
      "id": "25"
    },
    {
      "name": "Sonia Lueilwitz",
      "description": "description 26",
      "id": "26"
    },
    {
      "name": "Lee Effertz",
      "description": "description 27",
      "id": "27"
    },
    {
      "name": "Miss Kayla Gorczany",
      "description": "description 28",
      "id": "28"
    },
    {
      "name": "Ms. Alberta Bergnaum",
      "description": "description 29",
      "id": "29"
    },
    {
      "name": "Andres Treutel",
      "description": "description 30",
      "id": "30"
    },
    {
      "name": "Linda Mueller",
      "description": "description 31",
      "id": "31"
    },
    {
      "name": "Mamie Altenwerth",
      "description": "description 32",
      "id": "32"
    },
    {
      "name": "Ruben Gerhold",
      "description": "description 33",
      "id": "33"
    },
    {
      "name": "Ed Deckow",
      "description": "description 34",
      "id": "34"
    },
    {
      "name": "Barbara Gibson",
      "description": "description 35",
      "id": "35"
    },
    {
      "name": "Norman O'Reilly",
      "description": "description 36",
      "id": "36"
    },
    {
      "name": "Lamar McCullough",
      "description": "description 37",
      "id": "37"
    },
    {
      "name": "Ryan Lubowitz",
      "description": "description 38",
      "id": "38"
    },
    {
      "name": "Miriam Keebler",
      "description": "description 39",
      "id": "39"
    },
    {
      "name": "Jana Moore",
      "description": "description 40",
      "id": "40"
    },
    {
      "name": "Rodney Ortiz",
      "description": "description 41",
      "id": "41"
    },
    {
      "name": "Rose Nicolas",
      "description": "description 42",
      "id": "42"
    },
    {
      "name": "Paul Kuvalis",
      "description": "description 43",
      "id": "43"
    },
    {
      "name": "Brandi Schmeler",
      "description": "description 44",
      "id": "44"
    },
    {
      "name": "Ernesto Crooks",
      "description": "description 45",
      "id": "45"
    },
    {
      "name": "Rickey Beahan",
      "description": "description 46",
      "id": "46"
    },
    {
      "name": "Stephen Breitenberg",
      "description": "description 47",
      "id": "47"
    },
    {
      "name": "Jennifer Abshire",
      "description": "description 48",
      "id": "48"
    },
    {
      "name": "Lucia Bayer",
      "description": "description 49",
      "id": "49"
    },
    {
      "name": "Leland Rowe",
      "description": "description 50",
      "id": "50"
    },
    {
      "name": "Donna Feil",
      "description": "description 51",
      "id": "51"
    }
  ]


const newTemplate=document.getElementById('newTemplate').innerHTML.trim();


const newShablon=Handlebars.compile(newTemplate)
document.body.insertAdjacentHTML('beforeend', newShablon({ firstname:'', lastname:'top'}));
console.log(newShablon)
console.log(newTemplate)