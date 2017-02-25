// typed welcome
$(function () {
    $("#typed-welcome").typed({
        //strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: $('#typed-strings-welcome'),
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 1000,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {

            //audioElement.pause();

            //stop blinking cursor
            $("span").siblings(".typed-cursor").css("animation", "none");
            $("span").siblings(".typed-cursor").css("opacity", "0");
        },
        // starting callback function before each string
        preStringTyped: function () {
        },
        //callback for every typed string
        onStringTyped: function () {
        },
        // callback for reset
        resetCallback: function () {
            newTyped();
        }
    });

    $(".reset").click(function () {
        $("#typed-welcome").typed('reset');
    });
});

// typed demo
$(function () {
    $("#typed").typed({
        //strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: $('#typed-strings'),
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 3000,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {

            //audioElement.pause();

            //stop blinking cursor
            $("span").siblings(".typed-cursor").css("animation", "none");
            $("span").siblings(".typed-cursor").css("opacity", "0");
        },
        // starting callback function before each string
        preStringTyped: function () {
        },
        //callback for every typed string
        onStringTyped: function () {
        },
        // callback for reset
        resetCallback: function () {
            newTyped();
        }
    });

    $(".reset").click(function () {
        $("#typed").typed('reset');
    });
});