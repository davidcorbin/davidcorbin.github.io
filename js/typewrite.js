(function () {
    "use strict";
    var current = 0;
    var tips = [
        "Engineer, Programmer, Musician",
        "\u2764\uFE0F Sublime Text",
        "\u2764\uFE0F Vim",
        "\u2764\uFE0F Github",
        "\u2764\uFE0F Cloudflare",
        "\u2764\uFE0F LaTeX",
        "\u2764\uFE0F Computer Science",
        "\u2764\uFE0F Dribbble",
        "\u2764\uFE0F Slack",
        "\u2764\uFE0F Travis CI",
        "\u2764\uFE0F Jenkins CI",
        "\u2764\uFE0F Vim",
        "\u2764\uFE0F Project Euler",
        "\u2764\uFE0F Stack Overflow"
    ];

    function updateText () {
        var i = Math.floor(Math.random() * tips.length);
        if (current !== i) {
            $(".intro-text").removeClass("vis");
            setTimeout(function () {
                $(".intro-text").html(tips[i]);
                $(".intro-text").addClass("vis");
            }, 1000);
            current = i;
        }
    }

    setInterval(updateText, 5000);
}());
