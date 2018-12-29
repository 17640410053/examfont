<template>
  <div id="main">
    <el-row>
      <el-col :offset="16" class="card-col">
        <el-card :hidden="loginShow">
          <el-form ref="loginForm" :model="loginForm" :rules="ruleValidate">
            <el-form-item prop="username" label="用户名">
              <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="medium" style="width: 100%;" @click="login">登录</el-button>
            </el-form-item>
            <el-form-item>
              <el-button size="medium" style="width: 100%;" @click="goRegister" plain>去注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
        <el-card :hidden="!loginShow">
          <el-form ref="registerForm" :model="registerForm" :rules="ruleValidate">
            <el-form-item prop="username" label="用户名">
              <el-input type="text" placeholder="请输入用户名" v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input type="password" placeholder="请输入密码" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="telephone" label="手机号">
              <el-input type="text" placeholder="请输入手机号" v-model="registerForm.telephone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="medium" style="width: 100%;" @click="register">注册</el-button>
            </el-form-item>
            <el-form-item>
              <el-button size="medium" style="width: 100%;" @click="goRegister" plain>立即登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {},
      registerForm: {},
      loginShow: false,
      ruleValidate: {
        username: [
          {required: true, message: '用户名必须', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码必须', trigger: 'blur'}
        ],
        telephone: [
          {required: true, message: '手机号必须', trigger: 'blur'},
          {pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '手机号码格式不正确', trigger: 'blur'}
        ]
      }
    }
  },
  created: function () {
    this.$store.dispatch('SelectById', {id: 1})
      .then(response => {
        this.loginForm = response.data
      })
      .catch(() => {
        console.log('no')
      })
  },
  methods: {
    goRegister () {
      this.loginShow = !this.loginShow
    },
    register () {
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          console.log(this.registerForm)
        }
      })
    },
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          console.log(this.loginForm)
        }
      })
    }
  }
}
</script>

<style scoped>
  #main {
    height: 800px;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546028616482&di=45aaa33ffef77970f1fb971b4c37890f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017d285a3652cda80121db808249ad.gif");
  }

  .card-col {
    width: 350px;
    margin-top: 200px;
  }
</style>
