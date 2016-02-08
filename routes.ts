/*
 * Define your routing settings here.
 * Refer to the documentation for details.
 */
export var routes : Megazord.RouterConfig = {
    "header.indicadores": {
        goToRFI: "header.rfi"
    },
    "header.rfi": {
        goToDetails: "header.rfiDetail"
    }
};