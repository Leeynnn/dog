<template>
  <div class="NotFound">
    <span>404.</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.NotFound{
  width:100%;
      height: 100%;
  >span{
    font-size: .5rem;
    color:rgb(185, 189, 190);
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-family: 'Lato';
    font-weight: 100;
  }

}
</style>