<template>
  <div class="Dog__Start">
    <div class="Dog__Start__box">
      <div class="Dog__Start__box__bg">
        <div v-for="i in 12" :key="i"></div>
      </div>
      <div class="Dog__Start__box__logo"></div>
      <div class="Dog__Start__box__process">
        <div class="Dog__Start__box__male"></div>
        <div class="Dog__Start__box__female"></div>
      </div>
    </div>
    <div class="Dog__Start__answer">
      <i></i>
      <span>虐狗级别考试<br />看看你是不是一个真的舔狗</span>
      <div @click="$router.replace('/dog/game')">开始答题</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.Dog__Start {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .Dog__Start__box {
    position: relative;
    width: 100%;
    height: 7.85rem;
    background: #6926ff;
    .Dog__Start__box__bg {
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
    .Dog__Start__box__logo {
      position: absolute;
      left: 1.52rem;
      top: 0.44rem;
      width: 4.46rem;
      height: 2.37rem;
      background: url("../images/img3.png") center center no-repeat;
      background-size: cover;
      z-index: 20;
    }
    .Dog__Start__box__process {
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
      .Dog__Start__box__male {
        position: relative;
        width: 1.86rem;
        height: 1.54rem;
        background: url("../images/img6.png") center center no-repeat;
        background-size: cover;
      }
      .Dog__Start__box__female {
        width: 2.54rem;
        height: 2.12rem;
        background: url("../images/img1.png") center center no-repeat;
        background-size: cover;
      }
    }
  }
  .Dog__Start__answer {
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
    i {
      margin-top: 0.51rem;
      width: 1.93rem;
      height: 1.66rem;
      background: url("../images/img9.png") center center no-repeat;
      background-size: cover;
    }
    span {
      margin-top: 0.25rem;
      line-height: 0.59rem;
      text-align: center;
      font-size: 0.42rem;
      color: #333;
    }
    div {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.8rem;
      width: 6.5rem;
      height: 1.2rem;
      font-size: 0.42rem;
      color: #333;
      border: 0.04rem solid #000;
      border-radius: 0.16rem;
      box-sizing: border-box;
      background: #ffd33c;
      &::after {
        content: "";
        position: absolute;
        right: -0.15rem;
        top: 0.2rem;
        width: 100%;
        height: 100%;
        border: 0.04rem solid #000;
        border-radius: 0.16rem;
        box-sizing: border-box;
        background: #fff;
        z-index: -1;
      }
    }
  }
}
</style>