<template>
  <div>
    {{title}}
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
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    mounted() {
        for (let a = 1; a < 10000; a++) {
            let b = a + 1
        }
    }
}
</script>

<style>
.hello {
    display: none;
}
</style>
