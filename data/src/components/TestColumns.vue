<template>
  <div>
    <span>操作</span>
    <el-popover trigger="click">
      <el-checkbox-group v-model="checkedColumns" @change="checkColumns">
        <el-checkbox  v-for="item in columns" :label="item.name">{{item.label}}</el-checkbox>
      </el-checkbox-group>
      <i class="el-icon-s-operation" slot="reference"></i>
    </el-popover>
  </div>
</template>

<script>
export default {
    name: 'TestColumns',
    props: {
        columns: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            checkedColumns: [],
            timer: null
        }
    },
    methods: {
        checkColumns(val) {
            this.timer = null;
            this.timer = setTimeout(() => {
                this.$emit('changeColumns', val)
            }, 300)
        }
    }
}
</script>

<style>
.el-checkbox {
    display: block;
}
</style>

<style scoped lang="scss">
</style>
