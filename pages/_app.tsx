import { Provider } from "react-redux";
import { store } from "../state";
import 'semantic-ui-css/semantic.min.css'
import ScrollToTop from "react-scroll-to-top";
import NextNProgress from "nextjs-progressbar";
import { AppProps } from 'next/app';
import 'react-loading-skeleton/dist/skeleton.css'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
//
//
  { /* Easter eggs here!! Just found some text in dcard.tw page. :P */}
  console.log("%c在非洲部落中，傳說拔到獅子的鬃毛，掉落的頭髮就會長回來……別再相信沒有根據的說法了 <-- 如果這是你的話，請你投下錄取我的一票，我會送你落健生髮液 :P", "color: #f00; font-size: 24px;");
  console.log("%c如果有人叫你在這裡複製貼上那絕對是在騙你 ¯\\_(ツ)_/¯ <-- 這是最新的詐騙嗎？？", "color: #f00; font-size: 24px;");
  console.log("%c我知道你在幹嘛，可以錄取我了吧 \\(.D˙)/ https://about.dcard.tw/joblist", "font-size: 18px;");
  return (
    <>
        <NextNProgress />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        <ScrollToTop smooth />
    </>
    
    )
}

export default MyApp
