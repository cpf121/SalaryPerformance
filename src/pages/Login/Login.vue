<template>
  <div class="login flex">
    <div class="container">
      <el-form ref="formRef" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <div style="width: 100%; display: flex; justify-content: right">
            <el-button type="primary" @click="login">登 录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  username: '',
  password: ''
})

const login = (form) => {
  console.log(form)
}
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
  ]
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    background-color: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 0 auto;
    padding: 100px 60px 20px 20px;
  }
}
</style>
