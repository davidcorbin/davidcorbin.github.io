/**
 * Created by David Corbin
 */

var photos = [
    {
        "title": "Welcome",
        "desc": "Day 019",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22554&authkey=!AMHDQ4NANz_-mUo&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22554&authkey=!AMHDQ4NANz_-mUo&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Rocky",
        "desc": "Day 018",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22541&authkey=!AOp1alP_A0sG3Bg&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22541&authkey=!AOp1alP_A0sG3Bg&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Serenity",
        "desc": "Day 017",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22535&authkey=!AMGce45DILWwVNY&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22535&authkey=!AMGce45DILWwVNY&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Percent",
        "desc": "Day 016",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22532&authkey=!AMoY59RsFyReScc&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22532&authkey=!AMoY59RsFyReScc&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Covenant",
        "desc": "Day 015",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22534&authkey=!AK9kkDDG67IZTFk&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22534&authkey=!AK9kkDDG67IZTFk&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Mist",
        "desc": "Day 014",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22533&authkey=!ADqo4_MeO0MqU7w&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22533&authkey=!ADqo4_MeO0MqU7w&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Destiny",
        "desc": "Day 013",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22530&authkey=!AH2O3EAZQBbmIzA&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22530&authkey=!AH2O3EAZQBbmIzA&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Star Falcon",
        "desc": "Day 012",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22521&authkey=!AOfoSndEMbuk4as&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22521&authkey=!AOfoSndEMbuk4as&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "AT-AT",
        "desc": "Day 011",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22528&authkey=!APOCLkZNB6THLVw&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22528&authkey=!APOCLkZNB6THLVw&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Vadar",
        "desc": "Day 010",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22529&authkey=!AO0GEeHgH2NBrFg&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22529&authkey=!AO0GEeHgH2NBrFg&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "R2",
        "desc": "Day 009",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22531&authkey=!AKI8F5t7ZWnzm74&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22531&authkey=!AKI8F5t7ZWnzm74&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Death Moon",
        "desc": "Day 008",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22523&authkey=!AHOqx6iw3DD1IsQ&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22523&authkey=!AHOqx6iw3DD1IsQ&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Recycle",
        "desc": "Day 007",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22524&authkey=!AB5x1_2mNyR4Zbk&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22524&authkey=!AB5x1_2mNyR4Zbk&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Trumpet",
        "desc": "Day 006",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22522&authkey=!AGITEW96_CuOt-g&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22522&authkey=!AGITEW96_CuOt-g&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Reload",
        "desc": "Day 005",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22525&authkey=!AALnFWxPi3_-Hc8&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22525&authkey=!AALnFWxPi3_-Hc8&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Incredible",
        "desc": "Day 004",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22526&authkey=!AMzPah2b4w4wkmU&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22526&authkey=!AMzPah2b4w4wkmU&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "United Light",
        "desc": "Day 003",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22527&authkey=!AId8m_p8LCSD7HE&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22527&authkey=!AId8m_p8LCSD7HE&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Glass Campfire",
        "desc": "Day 002",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22519&authkey=!ABqkFYnGpTJ7OKI&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22519&authkey=!ABqkFYnGpTJ7OKI&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Frozen Fire",
        "desc": "Day 001",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22520&authkey=!ACQOjOAXj8r2YU0&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22520&authkey=!ACQOjOAXj8r2YU0&v=3&ithint=photo%2cjpg"
    }

];
