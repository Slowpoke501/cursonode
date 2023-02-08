

const argv = require(`yargs`)
            .option(`b`,{
                alias:`base`,
                type:`number`,
                demandOption:true,
                description:`multiplier base number`
            })
            .option(`l`,{
                alias:`lista`,
                type:`boolean`,
                description:'mostrar la cuenta',
                default:'false'
            })
            .option(`h`,{
                alias:`hasta`,
                type:`number`,
                description:`hasta donde va la tabla`,
                default:`10`
            })
            .check((argv,option)=>{
                if(isNaN(argv.b)){
                    throw`la base tiene que ser un numero`
                }
                return true
            })
            .argv;

module.exports=argv;