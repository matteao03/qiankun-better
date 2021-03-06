<template>
  <div>
    而那过去了的，就会成为亲切的怀恋。
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-if="checkedColumns.includes('date')" prop="date" label="日期" width="180">
        <template slot="header" slot-scope="scope">
          <test-render/>
        </template>
      </el-table-column>
      <el-table-column v-if="checkedColumns.includes('name')" prop="name"  label="姓名" width="180">
        <template slot="header" slot-scope="scope">
          <test-render/>
        </template>
      </el-table-column>
      <el-table-column v-if="checkedColumns.includes('address')" prop="address" label="地址">
        <template slot="header" slot-scope="scope">
          <test-render/>
        </template>
      </el-table-column>
      <el-table-column>
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
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    components: {
        TestColumns,
        TestRender
    },
    methods: {
        changeColumns(val) {
            this.checkedColumns = val;
        }
    }
}
  </script>