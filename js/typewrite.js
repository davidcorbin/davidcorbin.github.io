(function () {
    "use strict";
    var current = 0;
    var str = [
        "<span>Engineer, Programmer, Musician</span>",
        "\u2764\uFE0F <span>Sublime Text</span>",
        "\u2764\uFE0F <span>Vim</span>",
        "\u2764\uFE0F <span>Github</span>",
        "\u2764\uFE0F <span>Cloudflare</span>",
        "\u2764\uFE0F <span>LaTeX</span>",
        "\u2764\uFE0F <span>Computer Science</span>",
        "\u2764\uFE0F <span>Dribbble</span>",
        "\u2764\uFE0F <span>Slack</span>",
        "\u2764\uFE0F <span>Travis CI</span>",
        "\u2764\uFE0F <span>Jenkins CI</span>",
        "\u2764\uFE0F <span>Vim</span>",
        "\u2764\uFE0F <span>Project Euler</span>",
        "\u2764\uFE0F <span>Stack Overflow</span>"
    ];

    function updateText () {
        var i = Math.floor(Math.random() * str.length);
        if (current !== i) {
            $(".intro-text").removeClass("vis");
            setTimeout(function () {
                $(".intro-text").html(str[i]);
                $(".intro-text").addClass("vis");
            }, 1000);
            current = i;
        }
    }

    setInterval(updateText, 6000);
}());
