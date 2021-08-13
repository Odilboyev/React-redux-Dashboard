const axios = require('axios');

export const getTodos = async (api) => {
    console.log('apidan salom', api);
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${api.toLowerCase()}?_limit=12`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}