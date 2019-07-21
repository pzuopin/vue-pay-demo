import keyboard from './pay'
const zfcPassword = {
    install (Vue, options) {
        Vue.component('vpaypin', keyboard)
    }
}

export default zfcPassword
