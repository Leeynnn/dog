<template>
  <div class="Dog__Game">
    <div class="Dog__Game__box">
      <div class="Dog__Game__box__bg">
        <div v-for="i in 12" :key="i"></div>
      </div>
      <div class="Dog__Game__box__logo"></div>
      <div class="Dog__Game__box__process">
        <div class="Dog__Game__box__male">
          <div>我我我我我我我我我我我我我我我我我我我我</div>
        </div>
        <div class="Dog__Game__box__female">
          <div>我我我我我我我我我我我我我我我我我我我我</div>
        </div>
      </div>
    </div>
    <div class="Dog__Game__answer">
      <div class="Dog__Game__answer__timeout">60s</div>
      <div class="Dog__Game__answer__question">
        1. 你给女生发信息，女生没回你，这时你该说什么？
      </div>
      <div class="Dog__Game__answer__options">
        <div class="Dog__Game__answer__option">A：不回我很酷是吗？</div>
        <div class="Dog__Game__answer__option">B：还在嘛？</div>
        <div class="Dog__Game__answer__option">
          C：等你回一个信息等你3个小时
        </div>
        <div class="Dog__Game__answer__option">
          D：你能直接去直播，不能拿2秒回我
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.Dog__Game {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .Dog__Game__box {
    position: relative;
    width: 100%;
    height: 7.85rem;
    background: #6926ff;
    .Dog__Game__box__bg {
      position: absolute;
      left: -0.32rem;
      top: 0.22rem;
      width: 8.4rem;
      z-index: 10;
      div {
        display: inline-block;
        margin: 0 0.05rem;
        width: 1.3rem;
        height: 1.25rem;
        background: url("../images/img2.png") center center no-repeat;
        background-size: cover;
      }
    }
    .Dog__Game__box__logo {
      position: absolute;
      left: 1.52rem;
      top: 0.44rem;
      width: 4.46rem;
      height: 2.37rem;
      background: url("../images/img3.png") center center no-repeat;
      background-size: cover;
      z-index: 20;
    }
    .Dog__Game__box__process {
      position: absolute;
      left: 0.42rem;
      bottom: 1.86rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 0.2rem;
      width: 6.71rem;
      border-bottom: 0.08rem solid #000;
      z-index: 30;
      .Dog__Game__box__male {
        position: relative;
        width: 1.86rem;
        height: 1.54rem;
        background: url("../images/img6.png") center center no-repeat;
        background-size: cover;
        div {
          position: absolute;
          left: 0.27rem;
          top: -1.1rem;
          padding: 0 0.1rem;
          padding-top: 0.05rem;
          width: 2.96rem;
          height: 1.05rem;
          font-size: 0.28rem;
          color: #333;
          background: url("../images/img7.png") center center no-repeat;
          background-size: cover;
        }
      }
      .Dog__Game__box__female {
        width: 2.54rem;
        height: 2.12rem;
        background: url("../images/img4.png") center center no-repeat;
        background-size: cover;
        div {
          position: absolute;
          right: 0.08rem;
          top: -0.67rem;
          padding: 0 0.1rem;
          padding-top: 0.05rem;
          width: 2.96rem;
          height: 1.05rem;
          font-size: 0.28rem;
          color: #333;
          background: url("../images/img8.png") center center no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .Dog__Game__answer {
    position: absolute;
    left: 0.19rem;
    bottom: 0.26rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7.1rem;
    height: 7.17rem;
    border-radius: 0.16rem;
    border: 0.04rem solid #000;
    box-sizing: border-box;
    background: #00ef9b;
    z-index: 999;
    .Dog__Game__answer__timeout {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -0.49rem;
      width: 1.31rem;
      height: 1.31rem;
      font-size: 0.32rem;
      color: #333;
      border: 0.1rem solid #fff;
      box-sizing: border-box;
      border-radius: 50%;
      background: #ffd33c;
    }
    .Dog__Game__answer__question {
      margin-top: 0.44rem;
      line-height: 0.45rem;
      width: 6.58rem;
      font-size: 0.32rem;
      color: #333;
    }
    .Dog__Game__answer__options {
      margin-top: 0.42rem;
      .Dog__Game__answer__option {
        display: flex;
        align-items: center;
        margin-bottom: 0.12rem;
        padding: 0 0.33rem;
        width: 6.58rem;
        height: 0.88rem;
        font-size: 0.28rem;
        color: #333;
        box-sizing: border-box;
        border: 0.03rem solid #000;
        border-radius: 0.44rem;
      }
    }
  }
}
</style>