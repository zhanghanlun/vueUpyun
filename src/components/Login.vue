<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/wuliuqi.jpg" />
      </div>
      <el-form ref="LoginFromRef" :model="LoginForm" label-width="0px" class="login_form">
        <el-form-item>
          <el-input v-model="LoginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="LoginForm.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item class="login_button">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="ResetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LoginForm: {
        username: '123',
        password: '123'
      }
    }
  },
  methods: {
    ResetLoginForm() {
      console.log(this)
      console.log('cehsi')
      this.$refs.LoginFromRef.resetFields()
    },
    login() {
      this.$http
        .post('login', this.LoginForm)
        .then(response => {
          let res = response.data
          if (res.loginFlag) {
            this.$message.success('登陆成功')
            this.$router.push('/home')
          } else {
            this.$message.error('用户名或密码错误')
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avater_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_button {
  display: flex;
  justify-content: center;
}
.login_form {
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 10px;
}
</style>