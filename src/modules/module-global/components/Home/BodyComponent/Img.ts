import a1 from '../../../imgs/1.png';
import a2 from '../../../imgs/12.png';
import a3 from '../../../imgs/3.png';
import a4 from '../../../imgs/6.png';
import a5 from '../../../imgs/624faac11d109.png';
import a6 from '../../../imgs/62f13d2424a47.png';
import a7 from '../../../imgs/63e1bcbaed1dd.png';
import a8 from '../../../imgs/64e184ee5d7a2.png';

type Img = {
    img: string;
    name: string;
    price: string;
    link: string;
};

const imgs: Img[] = [
    {
        img: a1,
        name: 'JavaScript cơ bản',
        price: '1.299.000đ',
        link: '/courses/basic-javascipt',
    },
    {
        img: a2,
        name: 'JavaScript nâng cao',
        price: '1.299.000đ',
        link: '/courses/advanced-javascript',
    },
    {
        img: a3,
        name: 'Responsive Với Grid System',
        price: '1.299.000đ',
        link: '/courses/responsive',
    },
    {
        img: a4,
        name: 'NodeJs & ExpressJS',
        price: '1.299.000đ',
        link: '/courses/node-expressjs',
    },
    {
        img: a5,
        name: 'WSL Ubuntu',
        price: '1.299.000đ',
        link: '/courses/wls-ubuntu',
    },
    {
        img: a6,
        name: 'HTML,CSS Pro',
        price: '1.299.000đ',
        link: '/courses/html-css-pro',
    },
    {
        img: a7,
        name: 'Lập trình C++ cơ bản, nâng cao',
        price: '1.299.000đ',
        link: '/courses/c',
    },
    {
        img: a8,
        name: 'Ngôn ngữ Sass',
        price: '1.299.000đ',
        link: '/courses/sass',
    },
];

export { imgs };