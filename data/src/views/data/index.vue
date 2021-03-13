<template>
  <div>
    而那过去了的，就会成为亲切的怀恋。
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="ID" width="180">
        <template slot="header" slot-scope="scope">
          <test-render title="ID"/>
        </template>
        <template slot-scope="scope">
          <test-render/>
          <test-render/>
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="checkedColumns.includes('date')" prop="date" label="日期" width="180">
        <template slot="header" slot-scope="scope">
          <test-render title="日期"/>
        </template>
        <template slot-scope="scope">
          <test-render/>
          <test-render/>
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="checkedColumns.includes('name')" prop="name"  label="姓名" width="180">
        <template slot="header" slot-scope="scope">
          <test-render title="姓名"/>
        </template>
        <template slot-scope="scope">
          <test-render/>
          <test-render/>
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="checkedColumns.includes('address')" prop="address" label="地址">
        <template slot="header" slot-scope="scope">
          <test-render title="地址"/>
        </template>
        <template slot-scope="scope">
          <test-render/>
          <test-render/>
          <span>{{scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" class-name="test">
        <template slot="header" slot-scope="scope">
          <test-columns :columns="columns" @changeColumns="changeColumns"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import TestColumns from '@/components/TestColumns.vue';
import TestRender from '@/components/TestRender.vue';
export default {
    data() {
        return {
            checkedColumns: [],
            columns: [
                {
                    name: 'date',
                    label: '日期'
                },
                {
                    name: 'name',
                    label: '姓名'
                },
                {
                    name: 'address',
                    label: '地址'
                },
            ],
            tableData: []
        }
    },
    components: {
        TestColumns,
        TestRender
    },
    created() {
        this.tableData = [
            { id: 1, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 2, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 3, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 4, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 5, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 6, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 7, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 8, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 9, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 10, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 11, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 12, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 13, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 14, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 15, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 16, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 17, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 18, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 19, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
            { id: 20, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        ]
    },
    methods: {
        changeColumns(val) {
            this.checkedColumns = val;
        }
    }
}
  </script>

  <style>
.test {
    cursor: pointer;
}
</style>