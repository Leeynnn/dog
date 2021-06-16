import {
  Toast as vantToast,
  Dialog,
  Loading as vantLoading,
  Button as vantButton,
  ImagePreview as vantImagePreview,
  Swipe as vantSwipe,
  SwipeItem as vantSwipeItem,
  CountDown as vantCountDown,
  DatetimePicker as vantDatetimePicker,
  Picker as vantPicker,
  Popup as vantPopup,
  Cell as vantCell,
  Stepper as vantStepper,
  List as vantList,
  Image as VantImage,
  Radio as vantRadio,
  RadioGroup as vantRadioGroup,
  Step as vantStep,
  Steps as vantSteps,
  Sticky as vantSticky,
  Tab as vantTab,
  Tabs as vantTabs,
} from 'vant'

// 参考文档 https://youzan.github.io/vant/#/zh-CN/toast
export const Toast = vantToast

// 参考文档 https://youzan.github.io/vant/#/zh-CN/toast
export const Loading = {
  show: () => {
    Toast.loading({
      message: "正在加载中...",
      duration: 0,
      forbidClick: true
    })
  },
  hide: () => {
    Toast.clear();
  }
}

// 参考文档 https://youzan.github.io/vant/#/zh-CN/dialog
export const Alert = (opts) => {
  return Dialog.alert({
    title: opts.title,
    message: opts.message,
    confirmButtonText: opts.confirmButtonText,
    confirmButtonColor: '#fcbc00',
    overlay: true
  })
}

// 参考文档 https://youzan.github.io/vant/#/zh-CN/dialog
export const Confirm = (opts) => {
  return Dialog.confirm({
    title: opts.title,
    message: opts.message,
    confirmButtonText: opts.confirmButtonText,
    confirmButtonColor: '#fcbc00',
    cancelButtonText: opts.cancelButtonText,
    messageAlign: opts.messageAlign || 'center',
    overlay: true
  })
}

// 参考文档 https://youzan.github.io/vant/#/zh-CN/loading
vantLoading.props.type.default = 'spinner'
export const InlineLoading = vantLoading

// 参考文档 https://youzan.github.io/vant/#/zh-CN/button
export const Button = vantButton

// 参考文档 https://youzan.github.io/vant/#/zh-CN/image-preview
export const ImagePreview = vantImagePreview

// 参考文档 https://youzan.github.io/vant/#/zh-CN/swipe
export const Swipe = vantSwipe
export const SwipeItem = vantSwipeItem

// 参考文档 https://youzan.github.io/vant/#/zh-CN/count-down
export const CountDown = vantCountDown

// 参考文档 https://youzan.github.io/vant/#/zh-CN/datetime-picker
export const DatetimePicker = vantDatetimePicker

// 参考文档 https://youzan.github.io/vant/#/zh-CN/picker
export const Picker = vantPicker

// 参考文档 https://youzan.github.io/vant/#/zh-CN/popup
export const Popup = vantPopup

// 参考文档 https://youzan.github.io/vant/#/zh-CN/cell
export const Cell = vantCell
// 参考文档 https://youzan.github.io/vant/#/zh-CN/stepper
export const Stepper = vantStepper

// 参考文档 https://youzan.github.io/vant/#/zh-CN/stepper
export const List = vantList

// 参考文档 https://youzan.github.io/vant/#/zh-CN/stepper
export const Vimage = VantImage

// 参考文档 https://youzan.github.io/vant/#/zh-CN/radio
export const Radio = vantRadio

// 参考文档 https://youzan.github.io/vant/#/zh-CN/radio
export const RadioGroup = vantRadioGroup

// 参考文档 https://youzan.github.io/vant/#/zh-CN/steps
export const Step = vantStep

// 参考文档 https://youzan.github.io/vant/#/zh-CN/steps
export const Steps = vantSteps
// 参考文档 https://youzan.github.io/vant/#/zh-CN/Sticky
export const Sticky = vantSticky
// 参考文档 https://youzan.github.io/vant/#/zh-CN/Tab
export const Tab = vantTab

// 参考文档 https://youzan.github.io/vant/#/zh-CN/Tab
export const Tabs = vantTabs