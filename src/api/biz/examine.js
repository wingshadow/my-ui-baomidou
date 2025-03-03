import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listExamine(query) {
  return request({
    url: '/biz/examine/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getExamine(exameeId) {
  return request({
    url: '/biz/examine/' + exameeId,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addExamine(data) {
  return request({
    url: '/biz/examine',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateExamine(data) {
  return request({
    url: '/biz/examine',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delExamine(exameeId) {
  return request({
    url: '/biz/examine' + exameeId,
    method: 'delete'
  })
}
