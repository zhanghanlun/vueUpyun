<template>
  <div class="home">
    <div class="upload_box">
      <el-upload
        class="upload-file"
        action="http://localhost:8080/upload/"
        list-type="picture"
        :on-success="handleSuccess"
      >
        <el-button size="small" type="primary" class="upload_button">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传文件</div>
      </el-upload>
      <div>{{url}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  methods: {
    handlePreview() {
      this.url = 'ceshi'
    },
    handleRemove() {},
    handleSuccess(response) {
      console.log(response)
      this.url = response.msg
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #0000e6;
  height: 100%;
}
.upload_box {
  width: 700px;
  height: 500px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.upload_file {
  margin: 3px;
}
.upload_button {
  margin: 5px;
}
</style>