
// 分享到微信
// export function wechatShare(opts = {}) {
//   try {
//     import("@api/modules/others/others").then(module => {
//       const httpOther = new module.default()
//       httpOther.getWxConfig().then(data => {
//         if (data.data.code === 200) {
//           wx.config(data.data.data);
//           wx.ready(function () {
//             wx.onMenuShareTimeline({
//               title: opts.title || '',
//               link: opts.url || window.location.href,
//               imgUrl: opts.imgUrl || '',
//               type: "link",
//               dataUrl: opts.url || window.location.href,
//               success: () => {
//                 if (opts.success) {
//                   opts.success()
//                 }
//               }
//             });
//             wx.onMenuShareAppMessage({
//               title: opts.title || '',
//               desc: opts.desc || '',
//               link: opts.url || window.location.href,
//               imgUrl: opts.imgUrl || '',
//               type: "link",
//               dataUrl: opts.url || window.location.href,
//               success: () => {
//                 if (opts.success) {
//                   opts.success()
//                 }
//               }
//             });
//           });
//         }
//       })
//     })
//   } catch (e) {
//     console.log(e)
//   }
// }