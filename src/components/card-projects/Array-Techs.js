import imgHtml from "../../images/html5.svg";
import imgCss from "../../images/css.svg";
import imgJs from "../../images/js.svg";
// import imgSass from "../../images/sass.svg";
import imgPhp from "../../images/php.svg";
import imgBotstrap from "../../images/bootstrap.svg";
// // import imgGit from "../../images/github.svg";
// import imgMysql from "../../images/mysql.svg";
// import imgReact from "../../images/react.svg";
//Imagenes webp
import lipwebp from '../../images/lip.webp';
import alchilewebp from '../../images/alchile.webp';
import cgeotecwebp from '../../images/cgeotect.webp';
import blackwolfwebp from '../../images/blackwolf.webp';
import balamwebp from '../../images/bicisbalam.webp';
import rocklagwebp from '../../images/rocklag.webp';
//Imagenes jpg
import lipjpg from '../../images/lip.jpg';
import alchilejpg from '../../images/alchile.jpg';
import cgeotecjpg from '../../images/cgeotect.jpg';
import blackwolfjpg from '../../images/blackwolf.jpg';
import balamjpg from '../../images/bicisbalam.jpg';
import rocklagjpg from '../../images/rocklag.jpg';

export const projects = [{
        id: 1,
        img_jpg: lipjpg,
        img_webp: lipwebp,
        title: "Laguna insdustrial Park",
        repository: "https://github.com/ArcoDev/LIP",
        webSite: "https://lagunaindustrialpark.com/",
        category: 'web',
        technologies: [{
                id: 1,
                img: imgJs,
                text: 'javascript'
            },
            {
                id: 2,
                img: imgHtml,
                text: 'html'
            },
            {
                id: 3,
                img: imgCss,
                text: 'css'
            },
            {
                id: 4,
                img: imgBotstrap,
                text: 'bootstrap 5'
            },
            {
                id: 5,
                img: imgPhp,
                text: 'php'
            }
        ]
    },
    {
        id: 2,
        img_jpg: alchilejpg,
        img_webp: alchilewebp,
        title: "Alchile Studio",
        repository: "https://github.com/ArcoDev/new_alchile",
        webSite: "https://alchilestudio.com/",
        category: 'design',
        technologies: [{
                id: 1,
                img: imgJs,
                text: 'javascript'
            },
            {
                id: 2,
                img: imgHtml,
                text: 'html'
            },
            {
                id: 3,
                img: imgCss,
                text: 'css'
            }
        ]
    },
    {
        id: 3,
        img_jpg: cgeotecjpg,
        img_webp: cgeotecwebp,
        title: "Cgeotect",
        repository: "https://github.com/ArcoDev/cge",
        webSite: "https://cgeotec.com/",
        category: 'web',
        technologies: [{
                id: 1,
                img: imgJs,
                text: 'javascript'
            },
            {
                id: 2,
                img: imgHtml,
                text: 'html'
            },
            {
                id: 3,
                img: imgCss,
                text: 'css'
            }
        ]
    },
    {
        id: 4,
        img_jpg: blackwolfjpg,
        img_webp: blackwolfwebp,
        title: "Black Wolf",
        repository: "https://github.com/ArcoDev/blackwolf",
        webSite: "https://blackwolftrc.com/",
        category: 'ecommerce',
        technologies: [{
                id: 1,
                img: imgJs,
                text: 'javascript'
            },
            {
                id: 2,
                img: imgHtml,
                text: 'html'
            },
            {
                id: 3,
                img: imgCss,
                text: 'css'
            }
        ]
    },
    {
        id: 5,
        img_jpg: balamjpg,
        img_webp: balamwebp,
        title: "Bicicletas Balam",
        repository: "https://github.com/ArcoDev/balam",
        webSite: "https://bicicletasbalam.com/",
        category: 'web',
        technologies: [{
                id: 1,
                img: imgJs,
                text: 'javascript'
            },
            {
                id: 2,
                img: imgHtml,
                text: 'html'
            },
            {
                id: 3,
                img: imgCss,
                text: 'css'
            }
        ]
    },
    {
        id: 6,
        img_jpg: rocklagjpg,
        img_webp: rocklagwebp,
        title: "Rock Lag",
        repository: "https://github.com/ArcoDev/rocklag",
        webSite: "https://rocklag.com/",
        category: 'erp',
        technologies: [{
                id: 1,
                img: imgJs,
                text: 'javascript'
            },
            {
                id: 2,
                img: imgHtml,
                text: 'html'
            },
            {
                id: 3,
                img: imgCss,
                text: 'css'
            }
        ]
    },
];
export const categories = ['todos', 'web', 'erp', 'ecommerce', 'design'];
export default {projects, categories};