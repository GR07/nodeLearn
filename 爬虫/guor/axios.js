let axios = require('axios')

axios(`https://www.1905.com/vod/?fr=homepc_menu_vod`).then((res) => {
    console.log(res.data)
})