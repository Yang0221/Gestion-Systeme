import Mock from 'mockjs'

//拦截接口
Mock.mock(/home\/getData/, function(){
    console.log('被拦截的getdata接口')
})