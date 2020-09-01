<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="http://127.0.0.1:8081/sincere/file/upload"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="true">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
    export default {
        name: "uploadFile",
        data () {
          return {
            fileList:[],
            selectedData:[]
          }
        },
        methods:{
          handlePost(file) {
            // this.selectedData.push(file)
            // if(this.selectedData.length==0) {
            //   this.$message('请选择一条数据上传');
            //   return
            // }else if(this.selectedData.length>1) {
            //   this.$message('不支持批量上传');
            //   return
            // };
            // let fileFormData = new FormData();
            // fileFormData.append('file', file);
            // let requestConfig = {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   },
            // }
            // this.$http.post('http://127.0.0.1:8081/sincere/file/upload', fileFormData,requestConfig).then((res) => {
            //   file.onSuccess();
            //   if (res.data ) {
            //     this.$message({
            //       message: '操作成功',
            //       type: 'success',
            //     })
            //   }
            // }).catch((error) =>{
            //   this.$message.error('上传失败');
            //   file.onError();
            // })
          },

          submitUpload(){

          },


          beforeUpload(){

          },
          handlePreview(){

          },
          handleRemove(){

          },

          handleError(){

          },
          beforeRemove(){

          },
          handleSuccess(){

          }
        },
    }
</script>

<style scoped>

</style>
