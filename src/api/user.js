import request from '@/utils/request'

export function selectById (workflowVo) {
  return request({
    url: '/user/get',
    method: 'post',
    data: workflowVo
  })
}
