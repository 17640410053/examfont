import {selectById} from '@/api/user'
import {Message} from 'element-ui'

const user = {
  actions: {
    SelectById ({commit}, value) {
      return new Promise((resolve, reject) => {
        selectById(value).then(response => {
          const data = response
          if (data.code !== 0) {
            Message.error(data.message)
          } else {
            resolve(data)
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default user
