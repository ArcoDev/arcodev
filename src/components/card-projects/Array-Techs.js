import imgHtml from "../../images/html5.svg";
import imgCss from "../../images/css.svg";
import imgJs from "../../images/js.svg";
import imgSass from "../../images/sass.svg";
import imgPhp from "../../images/php.svg";
import imgBotstrap from "../../images/bootstrap.svg";
import imgGit from "../../images/github.svg";
import imgMysql from "../../images/mysql.svg";
import imgReact from "../../images/react.svg";
import imgDevExtreme from "../../images/devExtreme.svg";
//Imagenes webp
import lipwebp from '../../images/lip.webp';
import alchilewebp from '../../images/alchile.webp';
import cgeotecwebp from '../../images/cgeotect.webp';
import blackwolfwebp from '../../images/blackwolf.webp';
import balamwebp from '../../images/bicisbalam.webp';
import rocklagwebp from '../../images/rocklag.webp';
import transmontesWebp from '../../images/transmontes.webp'
import jumacoWebp from '../../images/jumaco.webp'
import luigiWebp from '../../images/lugiBosca.webp';
//Imagenes jpg
import lipjpg from '../../images/lip.jpg';
import alchilejpg from '../../images/alchile.jpg';
import cgeotecjpg from '../../images/cgeotect.jpg';
import blackwolfjpg from '../../images/blackwolf.jpg';
import balamjpg from '../../images/bicisbalam.jpg';
import rocklagjpg from '../../images/rocklag.jpg';
import transmontes from '../../images/transmontes.png'
import jumaco from '../../images/jumaco.png'
import luigi from '../../images/lugiBosca.png';

export const projects = [{
        id: 1,
        img_jpg: lipjpg,
        img_webp: lipwebp,
        title: "Laguna insdustrial Park",
        description: "Pagina web para la empresa Laguna Industrial Park, en la cual se muestra la oferta de terrenos industriales en venta y renta.",
        repository: "https://github.com/ArcoDev/LIP",
        webSite: "https://lagunaindustrialpark.com/",
        category: 'web',
        links: true,
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
        description: "Es una empresa dedicada al marketing, así como a la creación de contenido audiovisual. Su sitio web presenta su portafolio y servicios.",
        repository: "https://github.com/ArcoDev/new_alchile",
        webSite: "https://alchilestudio.com/",
        category: 'web',
        links: true,
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
        description: "Empresa dedicada a los mejores estándares en calidad, servicio y experiencia en Proyectos de Ingeniería Civil, especialistas en Geotécnica, Cimentaciones, Obra Civil y Estructura..",
        repository: "https://github.com/ArcoDev/cge",
        webSite: "https://cgeotec.com/",
        category: 'web',
        links: true,
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
        description: "Venta de productos de la marca Black Wolf, en la cual se pueden encontrar productos como ropa, accesorios y calzado.",
        repository: "https://github.com/ArcoDev/blackwolf",
        webSite: "https://blackwolftrc.com/",
        category: 'ecommerce',
        links: true,
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
        description: "Venta de bicicletas y accesorios deportivos.",
        repository: "https://github.com/ArcoDev/balam",
        webSite: "https://bicicletasbalam.com/",
        category: 'web',
        links: false,
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
        description: "Empresa dedicada al ramo de los agregados, los cuales pueden ser utilizados para revestimientos de terrazo, mezcladas con granulometrias y colores diversos que pueden aplicarse en cualquier tipo de superficie horizontal o vertical.",
        repository: "https://github.com/ArcoDev/rocklag",
        webSite: "https://rocklag.com/",
        category: 'web',
        links: true,
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
        id: 7,
        img_jpg: transmontes,
        img_webp: transmontesWebp,
        title: "Transmontes",
        description: "ERP para las operaciones de la empresa, del giro de transporte y logística, en el cual se pueden administrar las operaciones de la empresa, como la administración de unidades, rutas, clientes y proveedores.",
        repository: "",
        webSite: "",
        category: 'erp',
        links: false,
        technologies: [{
                id: 1,
                img: imgJs,
                text: 'javascript'
            },{
                id: 2,
                img: imgHtml,
                text: 'html'
            }, {
                id: 3,
                img: imgDevExtreme,
                text: 'css'
            }, {
                id: 4,
                img: imgCss,
                text: 'css'
            }, {
                id: 5,
                img: imgPhp,
                text: 'php'
            }, {
                id: 6,
                img: imgMysql,
                text: 'mysql'
            }, {
                id: 7,
                img: imgGit,
                text: 'git'
            }
        ]
    },
    {
        id: 8,
        img_jpg: jumaco,
        img_webp: jumacoWebp,
        title: "Jumaco",
        description: "Erp para las operaciones y control de corte de telas y costura, en el cual se pueden administrar las operaciones de la empresa, como la administración de unidades, rutas, clientes y proveedores.",
        repository: "",
        webSite: "",
        category: 'erp',
        links: false,
        technologies: [{
                id: 1,
                img: imgJs,
                text: 'javascript'
            },{
                id: 2,
                img: imgHtml,
                text: 'html'
            }, {
                id: 3,
                img: imgDevExtreme,
                text: 'css'
            }, {
                id: 4,
                img: imgCss,
                text: 'css'
            }, {
                id: 5,
                img: imgPhp,
                text: 'php'
            }, {
                id: 6,
                img: imgMysql,
                text: 'mysql'
            }, {
                id: 7,
                img: imgGit,
                text: 'git'
            }, {
                id: 8,
                img: imgSass,
                text: 'sass'
            }, {
                id: 9,
                img: imgBotstrap,
                text: 'bootstrap 5'
            }
        ]
    },
    {
        id: 9,
        img_jpg: luigi,
        img_webp: luigiWebp,
        title: "Black Wolf",
        description: "Paginna web para venta de vinos y productos gourmet.",
        repository: "#",
        webSite: "",
        category: 'ecommerce',
        links: false,
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
            }, {
                id: 4,
                img: imgSass,
                text: 'sass'
            }, {
                id: 5,
                img: imgPhp,
                text: 'sass'
            }
        ]
    },
];
export const categories = ['todos', 'web', 'erp', 'ecommerce'];
export default {projects, categories};