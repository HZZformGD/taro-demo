import request from '../utils/request'
const login = async () => {
    try{
        const res = await request({
            url: 'index.php?r=web/getEnvelopeList&v=5.1.0',
            method: 'POST',
            data:{
                page:1,
                type:1
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
        })
        return res
    } catch(err) {
        console.info(err)
    }
}

export {
    login
}