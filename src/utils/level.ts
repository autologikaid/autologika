export interface LevelStyle {

    icon:string;

    color:string;

}

const LEVEL_STYLES: Record<string, LevelStyle> = {

    "Pemula":{

        icon:"",

        color:"#22c55e",

    },

    "Menengah":{

        icon:"",

        color:"#f59e0b",

    },

    "Lanjutan":{

        icon:"",

        color:"#ef4444",

    },

};

export function getLevelStyle(level:string):LevelStyle{

    return LEVEL_STYLES[level]??{

        icon:"⚪",

        color:"#64748b",

    };

}