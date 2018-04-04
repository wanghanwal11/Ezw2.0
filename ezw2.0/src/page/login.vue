<template>
    <div style="height: 100%;background: white">
        <div style="display: -webkit-box;height: 230px; -webkit-box-align: center;-webkit-box-pack: center;">
              <div style="width: 80px;height: 80px;border-radius: 50%;border: 1px solid white;" class="ezw"></div>
        </div>
      <div class="input">
          <div style="display: -webkit-box;padding:0 40px;position: relative">
            <div class="iconfont icon-zhanghao" style="font-size: 24px;color: #0e88eb;line-height: 43px;padding-left: 3px"></div>
            <div style="position:relative;width: 100%">
              <x-input   placeholder="请输入您的账号" v-model="zhanghao"  :show-clear="false"></x-input>
            </div>
          </div>
          <div style="display: -webkit-box;padding:0 40px;margin-top: 10px">
            <div class="iconfont icon-mima" style="font-size: 31px;color: #0e88eb;line-height: 43px"></div>
            <x-input   placeholder="请输入您的密码" :type="password?'password':'text'" :show-clear="false" style="-webkit-box-flex: 1" v-model="mima"></x-input>
            <div  class="iconfont" :class="password?'icon-yanjing-bi':'icon-chakanyanjingshishifenxi'" style="width: 40px;line-height: 44px;color: #999;text-align:center;font-size: 20px" @click="yan"></div>
          </div>
      </div>
      <div style="padding: 50px 40px">
        <x-button type="default" :show-loading="false" style="background: #3399ff;color: white;border-radius: 25px" @click.native="login">登录</x-button>
      </div>
    </div>
</template>

<script>
  import { XInput,XButton} from 'vux'
  var vm;
    export default {
        mounted(){
           vm=this;
           let person=vm.$browser.getParameter('person');
           if(person){
               this.zhanghao=person.username
               this.mima=person.password
               //this.login()
           }
        },
        data () {
            return {
              zhanghao: '',
              mima:'',
              password:true
            }
        },
        components: {
          XInput,XButton
        },
        methods: {
          login(){
            this.$ajax("login",{
              username: this.zhanghao,
              password: this.mima
            }).then(function(res){
              var rows=res.rows;
              vm.$browser.setParameter('person',rows)
              vm.$router.replace({
                path:'/admin'
              })
            })
          },
          yan(){
              this.password=!this.password
          }
        }
    }
</script>

<style>
  .input .weui-cell:before{
    border: none;
  }
  .ezw{
    background: url("../assets/ezw.png");
    background-size: cover;
  }
</style>
