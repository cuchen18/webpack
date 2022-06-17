// import '../public/index.html'
import App from './app.vue'
import './style/index.css'
import './style/index.less'
import './assets/fonts/iconfont.css'
import jpgs from './assets/1.gif'
const jpg=document.createElement('img')
jpg.src=jpgs
document.body.appendChild(jpg)
const nums=()=>{
    console.log('ok');
}
console.log(nums);
