<template>
  <el-table
    ref="multipleTable"
    :data="
      tableTable.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column label="ID" prop="id"> </el-table-column>
    <el-table-column label="工号" prop="empNo"> </el-table-column>
    <el-table-column label="名字" prop="name"> </el-table-column>
    <el-table-column label="地址" prop="address"> </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <!-- <el-button size="mini" @click="handleInfo(scope.$index, scope.row)"
          >详情</el-button
        > -->

        <el-button size="mini" type="primary" @click="dialogTableVisible = true"
          >详情</el-button
        >
        <el-dialog
          title="员工详细资料"
          :visible.sync="dialogTableVisible"
          center
        >
          <el-table :data="gridData">
            <el-table-column label="ID" prop="id"> </el-table-column>
            <el-table-column label="工号" prop="empNo"> </el-table-column>
            <el-table-column label="名字" prop="name"> </el-table-column>
            <el-table-column label="地址" prop="address"> </el-table-column>
          </el-table>
        </el-dialog>
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      tableTable: [],
      size: "",
      total: "",
      search: "",
      dialogTableVisible: false,
      gridData: [],
      multipleSelection: [],
      selectEmpNo:'',
    };
  },
  // 页面初始话的时候调用
  created() {
    this.getTable();
  },
  methods: {
    handleInfo(index, row) {
      console.log(index, row);
    },
    handleEdit(index, row) {
      console.log(index, row);
      // console.log(row.data);
      console.log(row.date);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getTable() {
      api
        .getTable()
        .then((res) => {
          //数据处理
          this.tableTable = res.data.data.records;
          this.gridData = res.data.data.records;
        })
        .catch((err) => console.log(err));
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      let arrNew=new Array();
      for(var i = 0 ; i<this.multipleSelection.length;i++){
        // this.selectEmpNo =
    
        arrNew.push(this.multipleSelection[i].empNo)
      };
      this.selectEmpNo = arrNew.join(",");
      console.log(this.selectEmpNo)
    },
    //    mounted() { 
    //      this.getTable()
    // },
  },
};
</script>
