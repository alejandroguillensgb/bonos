/*
 * You may define your screens here.
 * Please refer to the documentation on the details of screen settings.
 */
export var screens : Megazord.ContainerScreenList = {
    "header": {
        type: "@sgb-bonos-parent-header"
    },
    "header.list": {
        type: "@sgb-bonos-screen-list",
        default: true,
        params: {
            title: "Renta Fija Internacional de Venezuela",
            url: "https://api.import.io/store/connector/02157342-8a7b-40a6-a5ab-6fd5a152d468/_query?input=webpage/url:http%3A%2F%2Fboungy.com%2Frfi&&_apikey=afc1d1ee59a94a028a9ecc6396f90f1bb5759a1d35ef4bfe1ad996702848e916c0d5d024bf66decf447e182e1746c5e42eda8ae818b7661a541f756a782bc57f6c41ecd0c38f0c438a0492c8b0308a48"
        },
        dataSource: {
            type: "sgb-datasource-json#1.0",
            params: {
                path: "https://api.import.io/store/connector/02157342-8a7b-40a6-a5ab-6fd5a152d468/_query?input=webpage/url:http%3A%2F%2Fboungy.com%2Frfi&&_apikey=afc1d1ee59a94a028a9ecc6396f90f1bb5759a1d35ef4bfe1ad996702848e916c0d5d024bf66decf447e182e1746c5e42eda8ae818b7661a541f756a782bc57f6c41ecd0c38f0c438a0492c8b0308a48"
            }
        }
    },
    "header.detail": {
        type: "@sgb-bonos-screen-detail",
        params: {
            title: "Detalle"
        },
        dataSource:{
            type: "sgb-datasource-param"
        }
    }
};