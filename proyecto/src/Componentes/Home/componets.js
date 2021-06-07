import './Home.css';



import logo                         from './img/UMSS_logo.png';
import suportTecnic                 from './img/suport_tecnic.png';


export const items = [
    {
        label:'Convocatorias',
        icon:'pi pi-fw pi-file',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-plus',
                items:[
                {
                    label:'Bookmark',
                    icon:'pi pi-fw pi-bookmark'
                },
                {
                    label:'Video',
                    icon:'pi pi-fw pi-video'
                }
                ]
            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-trash'
            },
            {
                label:'Export',
                icon:'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label:'Unidades Disponibles',
        icon:'pi pi-fw pi-shopping-cart',
        items:[
            {
                label:'Left',
                icon:'pi pi-fw pi-align-left'
            },
            {
                label:'Right',
                icon:'pi pi-fw pi-align-right'
            },
            {
                label:'Center',
                icon:'pi pi-fw pi-align-center'
            },
            {
                label:'Justify',
                icon:'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label:'Items',
        icon:'pi pi-fw pi-bars',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-user-plus'
            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-user-minus'
            },
            {
                label:'Search',
                icon:'pi pi-fw pi-users',
                items:[
                {
                    label:'Filter',
                    icon:'pi pi-fw pi-filter',
                    items:[
                        {
                            label:'Print',
                            icon:'pi pi-fw pi-print'
                        }
                    ]
                },
                {
                    icon:'pi pi-fw pi-bars',
                    label:'List'
                }
                ]
            }
        ]
    },
    {
        label:'Acerca de',
        icon:'pi pi-fw pi-exclamation-circle',
        items:[
            {
                label:'Edit',
                icon:'pi pi-fw pi-pencil',
                items:[
                {
                    label:'Save',
                    icon:'pi pi-fw pi-calendar-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-calendar-minus'
                }
                ]
            },
            {
                label:'Archieve',
                icon:'pi pi-fw pi-calendar-times',
                items:[
                {
                    label:'Remove',
                    icon:'pi pi-fw pi-calendar-minus'
                }
                ]
            }
        ]
    }
];



export const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;
export const end   = <h1 className="end">Sistema de Cotizaciones</h1>;

export const footer = (
    <img className="imagen-suport" alt="Card" src={suportTecnic}/>
);
