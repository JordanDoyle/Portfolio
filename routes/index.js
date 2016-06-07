var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    image: Math.round(Math.random()) + 1,
    title: "Jordan Doyle: Merseyside-based backend developer",
    name: "Jordan Doyle",
    bio: "Bio",
    bio_text: "Hey, I'm Jordan. I'm a backend developer from <a href=\"https://www.google.co.uk/maps/place/Merseyside/@53.4992596,-2.9028355,10z/data=!4m2!3m1!1s0x487ad7837ed56773:0x8661d5fa1dce9202?hl=en\" target=\"_blank\">Merseyside, England</a> hoping one day to travel the world. I make cool things for the internet for the general public to use. If you're interested in seeing some of my previous work, you can pop over to my <a href=\"https://github.com/w4\" target=\"_blank\">GitHub profile</a> where I have a few open-source projects I've made.",
    skills: "Skills",
    skills_text: "My skill set is extremely diverse, although I mainly work on the backend of things. My toolkit typically consists of <a href=\"https://www.python.org/\">Python</a>, <a href=\"http://php.net/\" target=\"_blank\">PHP</a>, <a href=\"http://laravel.com/\" target=\"_blank\">Laravel</a>, <a href=\"http://nodejs.org/\" target=\"_blank\">Node.js</a> &amp; <a href=\"https://www.oracle.com/java/index.html\" target=\"_blank\">Java</a> however I do often find myself working with <a href=\"https://www.perl.org/\" target=\"_blank\">Perl</a> and sometimes frontend technologies such as <a href=\"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5\" target=\"_blank\">HTML5</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3\" target=\"_blank\">CSS3</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript\" target=\"_blank\">JavaScript</a> and <a href=\"https://jquery.com/\" target=\"_blank\">jQuery</a>. My experience also expands to Linux system administration and server stack tuning.",
    "previous_work": "Previous Work",
    "previous_work_list": [
      [
        {
          link: "images/previous_work/zlitz.png",
          alt: "ZlitzCheats developed in 2014"
        },
        {
          link: "images/previous_work/hk.png",
          alt: "HabboKingdom forum skin developed in 2015 using vBulletin 4."
        }
      ],
      [
        {
          link: "images/previous_work/animus.png",
          alt: "Animus Framework developed in 2015"
        },
        {
          link: "images/previous_work/fshost.png",
          alt: "FSHost developed in 2013"
        },
        {
          link: "images/previous_work/xcite.png",
          alt: "XCITE Esports developed in 2016"
        }
      ]
    ]
  });
});

module.exports = router;
