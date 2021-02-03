
import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://jsonplaceholder.typicode.com/posts'
    })
}


