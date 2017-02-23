/**
 * Change the page title when a other browser tab active.
 * For more attraction, we play a emoji scene with the page title.
 * emojis: http://emojipedia.org
 *
 * Created by Mario C. Bee on 23.02.2017.
 */
$(document).ready(function () {

        var scene = [
            "🤔 Hallo?",
            "🤔 Bist Du noch da?",
            "😊 Wir vermissen Dich!",
            "😘 Kommst Du wieder?"
        ];

        var inMillisecond = 2666;
        var backupTitle = document.title;
        var position = 0;
        var sceneChanger;

        function sceneInterval() {
            document.title = scene[position];
            position++;
            if (position == scene.length) {
                position = 0;
            }
        }


        function stopSceneInterval() {
            clearInterval(sceneChanger);
            document.title = backupTitle;
            position = 0;
        }

        $(window).blur(function () {
            sceneChanger = setInterval(function () {
                sceneInterval()
            }, inMillisecond);
        });

        $(window).focus(function () {
            stopSceneInterval();
        });

    }
);

