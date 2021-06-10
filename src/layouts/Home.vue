<template>
  <div class="main-container">
      <form @submit.prevent>
          <div>
              <label for="email"><small>Email:</small></label>
              <input name="email" type="text" v-model="email" class="form-input" :class="{'invalid-input': v$.email.$error}" placeholder="example@exmaple.com">
              <span class="error-msg" v-if="v$.email.$error">Invalid email</span>
          </div>
          <div>
              <label for="password"><small>Password:</small></label>
              <input type="password" name="password" v-model="password" class="form-input" :class="{'invalid-input': v$.password.$error}" placeholder="Password">
              <span class="error-msg" v-if="v$.password.$error">Invalid password</span>
          </div>
          <div>
              <button @click="login">Login</button>
          </div>
      </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios'

const apiKey="2BAAFD2BE944AAA5B21BCBDF99F6E"
const apiSecret="CA41A12EA2828DBC49CDBDA88D521"
const headers = {
    'x-api-key': apiKey,
    'x-api-secret': apiSecret,
    'Content-type': 'application/json; charset=UTF-8'
}

export default {
    data() {
        return {
            v$: useVuelidate(),
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.v$.$validate()
            if (this.v$.$error) {
                return
            }
            //console.log(this.v$)
            axios.post(
                "http://pb-backend-lb-30e3b7a2fe04ab9c.elb.eu-west-3.amazonaws.com/v1/authenticate/login",
                {
                    email: this.email,
                    password: this.password
                },
                {
                    headers
                }
            ).then((res) => {
                //console.log(res)
                if (!res.data || !res.data.success) return
                localStorage.setItem("accessToken", res.data.data.accessToken)
                localStorage.setItem("refreshToken", res.data.data.refreshToken)
                //console.log(localStorage.getItem("accessToken"))
                this.$router.push({name: "Search"})
            }).catch(rej => {
                console.log(rej)
            })
        }
    },
    validations() {
        return {
            email: { required, email },
            password: { required }
        }
    }
}
</script>

<style scoped>
form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem;
}

form > div {
    display: flex;
    flex-direction: column;
    gap: .3rem;
    position: relative;
}

.form-input {
    padding: .7rem;
    border-radius: .2rem;
    border: none;
    box-shadow: 0 0 .3rem .05rem rgba(30, 30, 30, .2);
}

form > div > button {
    background: green;
    padding: .5rem .7rem;
    outline: none;
    border: none;
    box-shadow: 0 0 .3rem .05rem rgba(0, 100, 0, .5);
    border-radius: .3rem;
    align-self: center;
    color: white;
}

.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
}

.error-msg {
    position: absolute;
    bottom: -1.5em;
    right: 0;
    font-size: 8pt;
    color: red;
    font-weight: 100;
}

.invalid-input {
    box-shadow: 0 0 .3rem .05rem rgba(200, 0, 0, .8);
}

</style>
