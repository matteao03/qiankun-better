<template>
  <div>
    eee
    <div class="hello">
      <el-popover></el-popover>
      <span>
        <span></span>
      </span>
      <div>ddd</div>
    </div>
    <div class="hello">
      <el-popover></el-popover>
      <span>
        <span></span>
      </span>
      <div>ddd</div>
    </div>
    <div class="hello">
      <el-popover></el-popover>
      <span>
        <span></span>
      </span>
      <div>ddd</div>
    </div>
    <div class="hello">
      <el-popover></el-popover>
      <span>
        <span></span>
      </span>
      <div>ddd</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TestRender',
    mounted() {
        for (let a = 1; a < 10000; a++) {
            for (let b = 1; b < 10000; b++) {
                for (let c = 1; c < 20; c++) {
                    let d = a + b + c

                }
            }
        }
    }
}
</script>

<style>
.hello {
    display: none;
}
</style>
