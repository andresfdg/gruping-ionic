<template>
    <ion-page>
      <ion-content class="block1">
        <div class="principal">
          <div class="jointd">
            <span class="h1">¡Bienvenido!</span>
            <span class="h2">Crea tu cuenta</span>
          </div>
          <div class="joint">
            <span class="h1">Registra tu cuenta</span>
  
            <div class="second">
              <input type="text" class="log" v-model="data.name" placeholder="nombres completos" />
              <input type="text" class="log" v-model="data.email" placeholder="email"/>
              <input type="password" class="log" v-model="data.password" placeholder="contraseña"/>
              <input type="password" class="log" v-model="data.password2" placeholder="confirma contraseña"/>
              <input type="text" class="log" v-model="data.phone" placeholder="celular"/>
              <input type="date" class="logf" placeholder="mm/dd/yy" v-model="data.birthdate"/>

              <div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-columns: 1fr 1fr;">
              <input style="width: 99%; margin: 1%; height: 95%;" type="text" class="log" placeholder="pais" v-model="data.country"/>
              <input style="width: 99%; margin: 1%; height: 95%;" type="text" class="log" placeholder="departamento" v-model="data.state"/>
              <input style="width: 99%; margin: 1%; height: 95%;" type="text" class="log" placeholder="ciuidad" v-model="data.city"/>
              <input style="width: 99%; margin: 1%; height: 95%;" type="text" class="log" placeholder="direccion: Carrera xxx # xxx-xxx" v-model="data.adress"/>
              </div>

            </div>
            <br>
            
            <ion-item>
                <ion-label style="font-size: 13px" >Aceptar terminos de uso</ion-label>
                <ion-toggle slot="end"></ion-toggle>
            </ion-item>
            <span v-if="data.error1" style="color: blueviolet; margin: 1px;"> Las contraseñas no coinciden </span>
            <span v-if="data.error2" style="color: blueviolet;margin: 1px;"> Digite un correo valído</span>
            <span v-if="data.error3" style="color: blueviolet;margin: 1px;">La contraseña debe tener al menos 8 caracteres</span>
            <span v-if="data.exito" style="color: blueviolet;margin: 1px;">Usuario creado, revisa tu correo para activarlo</span>
            <div class="cbutton" @click="signupuser">
              <button class="button">Continuar</button>
            </div>
            <div>
              <p style="font-size: 10px">
                ¿Ya tienes una cuenta? <strong @click="login">Ingresa aquí</strong>
              </p>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script setup>
import { labeledStatement } from '@babel/types';
import { reactive } from "@vue/reactivity";
import { IonPage, IonContent, IonToggle, IonLabel, IonItem } from "@ionic/vue";
import { useRouter } from "vue-router";
  
const router = useRouter();
  
const login = () =>{
    router.push("/login/Person");
}

const data = reactive({
  name: "",
  email: "",
  password: "",
  password2: "",
  phone: "",
  birthdate: "",
  country:"",
  state: "",
  city: "",
  adress: "",
  error1:false,
  error2:false,
  error3:false,
});

const signupuser = async () => {
  const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const error2 = expReg.test(data.email)

  try{
    if(data.password != data.password2){
    data.error1 = true
    data.error2 = false
    data.error3 = false
  } else if (error2 != true){
    data.error2 = true
    data.error3 = false
    data.error1 = false
  } else if (data.password.length < 8){
    data.error3 = true
    data.error2 = false
    data.error1 = false
  }
  else{
    data.error1 = false
    data.error2 = false
    data.error3 = false
    const res = await fetch(`http://127.0.0.1:8000/user/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const resp = await res.json()
  console.log(resp.name)
  /* setTimeout(() => {
    router.push("/login/Person");
  }, 3000); */
  }
  } catch(err){
    console.log(err)
  }

};

</script>
  
<style scoped lang="scss">
.block1 {
    --background: rgb(184, 250, 219);
    --background: linear-gradient(
      0deg,
      rgba(184, 250, 219, 1) 0%,
      rgba(222, 216, 252, 1) 100%
    );
  }
  
.principal {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
  
  
.jointd {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 15px;
    justify-content: end;
    text-align: center;
    position: relative;
}
  
.joint {
    margin-top: 20px;
    background-color: white;
    width: 90%;
    height: 40%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 15px;
    justify-content: start;
    text-align: center;
  
    .h1 {
      padding: 1px;
      margin-left: 1px;
      font-family: sans-serif;
      font-weight: 1000;
      font-size: 150%;
      color: rgb(94, 94, 94);
      margin-bottom: 10px;
    }
}
  
.second {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45%;
}
  
.log {
  border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.logf {
    color: rgb(94, 94, 94);
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
  
.blank1 {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: start;
}

ion-toggle{
    height: 10px;
    width: 55px;

    padding: 12px;

    --background: #ddd;
    --background-checked: #ddd;

    --handle-background: rgba(222, 216, 252, 1);
    --handle-background-checked: rgba(184, 250, 219, 1);

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    --handle-border-radius: 4px;
    --handle-box-shadow: none;

    /* Required for iOS handle to overflow the height of the track */
    overflow: visible;
    contain: none;
}

.h1 {
    padding: 1px;
    margin-left: 1px;
    font-family: sans-serif;
    font-weight: 1000;
    font-size: 200%;
    color: rgb(130, 0, 255);
    margin-bottom: 10px;
}
  
.h2 {
    width: 100%;
    padding: 1px;
    margin-left: 1px;
    font-family: sans-serif;
    font-size: 110%;
    color: rgb(130, 0, 255);
}
  
.cbutton {
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.cbutton:active {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.button {
  font-size: 100%;
  font-weight: 550;
  color: rgb(94, 94, 94);
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
}

.button:active {
  transform: translateY(-2px);
}
</style>