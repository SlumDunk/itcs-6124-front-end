import axios from 'axios'

// 增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:8880'
// 增加拦截器
axios.interceptors.response.use((response) => {
  return response.data.data// 在这里统一拦截结果，把结果处理成response.data
})

// 获取轮播图数据 返回一个promise对象
export let getSliders = () => {
  let sliders = new Array()
  sliders.push('http://127.0.0.1:8000/image/?module=task7&file_name=word_count_na.png')
  sliders.push('http://127.0.0.1:8000/image/?module=task2&file_name=video_feedback_country.png')
  sliders.push('http://127.0.0.1:8000/image/?module=task8&file_name=GB.png')
  return sliders
}
