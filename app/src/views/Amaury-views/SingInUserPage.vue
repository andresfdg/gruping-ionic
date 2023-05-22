<template>
    <ion-page>
      <ion-content class="block1">
        <div class="principal">
          <div class="jointd">
            <span class="h1">¡Bienvenido!</span>
            <span class="h2">Crea tu cuenta y disfruta de las promociones disponibles para ti</span>
          </div>
          <div class="joint">
            <span class="h1">Registra tu cuenta</span>
  
            <div class="second">
              <input type="text" class="log" v-model="data.name" placeholder="nombres completos" />
              <input type="text" class="log" v-model="data.email" placeholder="email"/>
              <input type="password" class="log" v-model="data.password" placeholder="contraseña"/>
              <input type="password" class="log" v-model="data.password2" placeholder="confirma contraseña"/>
              <input type="text" class="log" v-model="data.phone" placeholder="celular"/>
              <input type="date" class="logf" placeholder="mm/dd/yy" v-model="data.birthdate" v-if='route.params.typeuser == "Person"'/>

              <div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-columns: 1fr 1fr;">
              <input style="width: 99%; margin: 1%; height: 95%;" type="text" class="log" placeholder="pais" v-model="data.country"/>
              <input style="width: 99%; margin: 1%; height: 95%;" type="text" class="log" placeholder="departamento" v-model="data.state"/>
              <input style="width: 99%; margin: 1%; height: 95%;" type="text" class="log" placeholder="ciuidad" v-model="data.city"/>
              <input style="width: 99%; margin: 1%; height: 95%;" type="text" class="log" placeholder="direccion: Carrera xxx # xxx-xxx" v-model="data.adress"/>
              </div>

            </div>
            <br>
            
            <ion-item>
                <ion-label style="font-size: 13px" ><TC></TC></ion-label>
                <ion-toggle slot="end" @click="terminos"></ion-toggle>
            </ion-item>

            <span v-if="validations.error1" style="color: blueviolet; margin: 1px;"> Las contraseñas no coinciden </span>
            <span v-if="validations.error2" style="color: blueviolet;margin: 1px;"> Digite un correo valído</span>
            <span v-if="validations.error3" style="color: blueviolet;margin: 1px;">La contraseña debe tener al menos 8 caracteres</span>
            <span v-if="validations.error4" style="color: blueviolet;margin: 1px;">este correo o celular ya tienen cuenta asociada</span>
            <span v-if="validations.cargando" style="color: green;margin: 1px;">Cargando...</span>
            <span v-if="validations.exito && route.params.typeuser=='Person'" style="color: green;margin: 1px;">Usuario creado, revisa tu correo para activarlo</span>
            <span v-if="validations.exito && route.params.typeuser=='Store'" style="color: green;margin: 1px;">Usuario de tienda creado, Felicidades</span>
            
        
            <button class="button" v-if="validations.aceptar && validations.cargando==false" @click="signupuser">Continuar</button>
            
            <div>
              <p class="textblue">
                ¿Ya tienes una cuenta? <strong @click="login" style="text-decoration: underline;">Ingresa aquí</strong>
              </p>
            </div>
            
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script setup>
import { reactive } from "@vue/reactivity";
import { IonPage, IonContent, IonToggle, IonLabel, IonItem } from "@ionic/vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import TC from "../../components/T&C.vue";
  
const router = useRouter();
const route = useRoute();
  
const login = () =>{
    router.push(`/login/${route.params.typeuser}`);
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
});

const validations = reactive({
  aceptar:false,
  error1:false,
  error2:false,
  error3:false,
  error4:false,
  exito: false,
  cargando:false,
});
/*  */
const terminos = () =>{
  validations.aceptar = !validations.aceptar
  console.log(route.params.typeuser)
}

const signupuser = async () => {
  const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const expReg2 = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z a-z]{2,}$/

  let error2 = expReg.test(data.email)

  if (error2==false){
    error2 = expReg2.test(data.email)
  }

  try{
    if(data.password != data.password2){
    validations.error1 = true
    validations.error2 = false
    validations.error3 = false
  } else if (error2 != true){
    validations.error2 = true
    validations.error3 = false
    validations.error1 = false
  } else if (data.password.length < 8){
    validations.error3 = true
    validations.error2 = false
    validations.error1 = false
  }
  else{
    validations.error1 = false
    validations.error2 = false
    validations.error3 = false
    validations.cargando = true

    if( (route.params.typeuser).toString() == "Person"){

      const res = await fetch(`https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/user/create`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8"},
      });
    
      const resp = await res.json()

      if (resp !== "Este_usuario_ya_esta_registrado-code:4556787651983640386377635"){
        validations.exito=true
        validations.cargando = false
        validations.error1 = false
        validations.error2 = false
        validations.error3 = false
        validations.error4 = false
        console.log(resp)
        setTimeout(() => {
        validations.exito=false
        router.push("/login/Person");
      }, 5000);

      } else{
        console.log(resp)
        validations.cargando = false
        validations.error4 = true

        setTimeout(() => {
        validations.exito=false
        validations.cargando = false
        validations.error1 = false
        validations.error2 = false
        validations.error3 = false
        validations.error4 = false
      }, 5000);}

    }else{
      const res = await fetch(`https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/storeuser/create`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
    
      const resp = await res.json()

      if (resp !== "Este_usuario_ya_esta_registrado-code:4556787651983640386377635"){
        validations.exito=true
        validations.cargando = false
        validations.error1 = false
        validations.error2 = false
        validations.error3 = false
        validations.error4 = false
        console.log(resp)
        setTimeout(() => {
        validations.exito=false
        router.push("/login/Store");
      }, 5000);

      } else{
        console.log(resp)
        validations.cargando = false
        validations.error4 = true
        setTimeout(() => {
        validations.exito=false
        validations.cargando = false
        validations.error1 = false
        validations.error2 = false
        validations.error3 = false
        validations.error4 = false
      }, 5000);}
    /* hola */     

    }
  }
  } catch(err){
    console.log(err)
  }
};

</script>
  
<style scoped lang="scss">
.block1 {
  --background: linear-gradient(0deg, var(--primary-linear2) 0%, var(--second-linear2) 100%);
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
  background-color: var(--gray-background);
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  justify-content: start;
  text-align: center;
  font-family: var(--main-font), sans-serif;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
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
  background-color: var(--gray-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45%;
}
.log {
  border: none;
  background-color: var(--gray-background);
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
input:focus {
  border: 2px solid var(--violete-text);
  font-family: var(--main-font);
  outline: none; 
}
.logf {
  background-color: var(--gray-background);
  color: rgb(94, 94, 94);
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.textblue{
  font-size: 13px;
  color: var(--violete-text);
  font-family: var(--main-font);
}

ion-item{
  --background: var(--gray-background);
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
    color: var(--primary-color);
    margin-bottom: 10px;
}
  
.h2 {
    width: 100%;
    padding: 1px;
    margin-left: 1px;
    font-family: sans-serif;
    font-size: 110%;
    color: var(--primary-color);
}
.button {
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  font-size: 100%;
  font-weight: 550;
  color: rgb(94, 94, 94);
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
  font-family: var(--main-font), sans-serif;
}
.button:active {
  transform: translateY(-2px);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>