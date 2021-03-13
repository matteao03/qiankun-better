<template>
    <el-popover trigger="click">
      <el-checkbox-group v-model="checkedColumns" @change="checkColumns">
        <el-checkbox  v-for="item in columns" :label="item.name">{{item.label}}</el-checkbox>
      </el-checkbox-group>
      <span slot="reference" class="blue">
        操作
        <i class="el-icon-s-operation"></i>
        </span>
    </el-popover>
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
            checkedColumns: []
        }
    },
    methods: {
        checkColumns(val) {
            this.$emit('changeColumns', val)
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
.blue {
    color: blue;
}
</style>
