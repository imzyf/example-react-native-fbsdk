# React Native FBSDK Demo

自己在使用 [GitHub - facebook/react-native-fbsdk](https://github.com/facebook/react-native-fbsdk) 时，写了一个 iOS 版 Login Demo，可以看 [commit 记录](https://github.com/imzyf/react-native-fbsdk-demo/commits/master) 看步骤。

## 一些经验
- 官方文档很棒 [Getting Started with the Facebook SDK for iOS](https://developers.facebook.com/docs/ios/getting-started/)。
- `0.6.1` 版本 `react-native install react-native-fbsdk` 会有报错，可以使用 `yarn add react-native-fbsdk@0.6.0` 代替。
- 官方文档 [React Native iOS Project Configuration](https://developers.facebook.com/docs/react-native/configure-ios) 中提到的 `ios_setup.js` 就是一个自动修改配置的脚本，不太好用，非必须。
- `Framework Search Paths` 在 Xcode `Build Settings -> Search Paths` 中，如果没有点击左上角的 `All` 选择卡。
- FaceBook 切换账号的问题 Login Faild：[ios - FB SDK Error: Login Failed react-native) - Stack Overflow](https://stackoverflow.com/questions/40935824/fb-sdk-error-login-failed-react-native)。