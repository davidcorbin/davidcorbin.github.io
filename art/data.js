/**
 * Created by David Corbin
 */

var photos = [
    {
        "title": "Giza",
        "desc": "Day 027",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22659&authkey=!ABtGpiESB3KWrk0&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22660&authkey=!AL6cVrQvnVMobeI&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "All Seeing",
        "desc": "Day 026",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22653&authkey=!ANnbS1iZ93013fU&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22654&authkey=!ABFuqjIOuLe_ipU&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Mine",
        "desc": "Day 025",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22644&authkey=!AGPlluJmvEdPmA0&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22645&authkey=!AGKt9goTgwisJEo&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Pure Imagination",
        "desc": "Day 024",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22623&authkey=!AF34YLxP8X8dUGY&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22624&authkey=!ACByTWni9kcwhuc&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Glass Galaxy",
        "desc": "Day 023",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22616&authkey=!ALgCsrrBBBAFhdA&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22617&authkey=!AC8I2jKSktO4u-Y&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Classy",
        "desc": "Day 022",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22605&authkey=!AKUkrjui0IY6Ho8&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22602&authkey=!AJj8supFEDhY_o4&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Sublime",
        "desc": "Day 021",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22597&authkey=!ADudegBLARdVO0o&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22598&authkey=!AJ00Jv9m42mgHI8&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Egg",
        "desc": "Day 020",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22585&authkey=!AKtfg_cvPBqtFuI&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22586&authkey=!AEJpnmb0M67_1Fo&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Welcome",
        "desc": "Day 019",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22554&authkey=!AMHDQ4NANz_-mUo&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22573&authkey=!AFcrb9n2P_qP08A&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Rocky",
        "desc": "Day 018",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22541&authkey=!AOp1alP_A0sG3Bg&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22571&authkey=!AAlTxB8mfWW4LaM&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Serenity",
        "desc": "Day 017",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22535&authkey=!AMGce45DILWwVNY&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22572&authkey=!AGL4zRltVTyyJ8M&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Percent",
        "desc": "Day 016",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22532&authkey=!AMoY59RsFyReScc&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22574&authkey=!AGgbTrZJj-9iSac&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Covenant",
        "desc": "Day 015",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22534&authkey=!AK9kkDDG67IZTFk&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22567&authkey=!AFEzawUdjOZ8DQA&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Mist",
        "desc": "Day 014",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22533&authkey=!ADqo4_MeO0MqU7w&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22568&authkey=!AEmHwjAuWLyxP4A&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Destiny",
        "desc": "Day 013",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22530&authkey=!AH2O3EAZQBbmIzA&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22569&authkey=!AD-dhEjXrPT1vIM&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Star Falcon",
        "desc": "Day 012",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22521&authkey=!AOfoSndEMbuk4as&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22564&authkey=!AF7Vu2gXw7KA04E&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "AT-AT",
        "desc": "Day 011",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22528&authkey=!APOCLkZNB6THLVw&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22570&authkey=!APDnjKPtTRexG14&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Vadar",
        "desc": "Day 010",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22529&authkey=!AO0GEeHgH2NBrFg&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22565&authkey=!AGcknUP3EfXmFJM&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "R2",
        "desc": "Day 009",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22531&authkey=!AKI8F5t7ZWnzm74&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22566&authkey=!AKBj0nkdVXmbtT4&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Death Moon",
        "desc": "Day 008",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22523&authkey=!AHOqx6iw3DD1IsQ&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22563&authkey=!AF2Ooo0teEZdD9c&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Recycle",
        "desc": "Day 007",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22524&authkey=!AB5x1_2mNyR4Zbk&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22562&authkey=!AG7bfrfmf_ActN4&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Trumpet",
        "desc": "Day 006",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22522&authkey=!AGITEW96_CuOt-g&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22560&authkey=!AFhvWXjdxUVBRgk&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Reload",
        "desc": "Day 005",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22525&authkey=!AALnFWxPi3_-Hc8&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22561&authkey=!AAvtuCRRfelRLHU&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Incredible",
        "desc": "Day 004",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22526&authkey=!AMzPah2b4w4wkmU&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22557&authkey=!AJc05CtLcSb5wmQ&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "United Light",
        "desc": "Day 003",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22527&authkey=!AId8m_p8LCSD7HE&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22558&authkey=!AA1kS8v-tV3zibM&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Glass Campfire",
        "desc": "Day 002",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22519&authkey=!ABqkFYnGpTJ7OKI&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22559&authkey=!AA-ECPvVz0qRkmE&v=3&ithint=photo%2cjpg"
    },
    {
        "title": "Frozen Fire",
        "desc": "Day 001",
        "src": "https://onedrive.live.com/download?resid=ADB77773C67D388!22520&authkey=!ACQOjOAXj8r2YU0&v=3&ithint=photo%2cjpg",
        "tbn": "https://onedrive.live.com/download?resid=ADB77773C67D388!22575&authkey=!AJI7IACfcS2H_AI&v=3&ithint=photo%2cjpg"
    }

];
