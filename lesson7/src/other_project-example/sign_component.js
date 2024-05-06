

import { useAuth } from "../../hooks/hooks"
import { BaseText, TitleText } from "../text_components/text-components"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { signInThunk, signUpThunk } from "./user_param-slice"
import Loader from "../loader_component/loader"
import Toast from "react-native-root-toast"
import { useCallback } from "react"

const SignComponent = () => {

    const user = useAuth()
    const {isAuth,loading,error} = user

    const nav = useNavigation()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [inputErr, setInputErr] = useState(false)

    useEffect(()=>{
        if(isAuth){
            nav.navigate('Home')
        }
        // if(error){
        //     Toast.show('Oops error of connection', {
        //         duration: Toast.durations.SHORT,
        //         position: Toast.positions.TOP
        //     });
        // }
    },[isAuth])

const validateEmail = (email) => {
return String(email)
.toLowerCase()
.match(
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
) === null ? false : true;
};

const errorHandler = useCallback(()=>{
if(error.errorCode === "auth/wrong-password"){
return (<Text style = {{
color:'#D67575',
marginBottom:30
}}>wrong-password</Text>)
}
if(error.errorCode === 'auth/invalid-email'){
return (<Text style = {{
color:'#D67575',
marginBottom:30
}}>invalid-email</Text>)
}
if(error.errorCode === 'auth/internal-error'){
return (<Text style = {{
color:'#D67575',
marginBottom:30
}}>internal-error</Text>)
}
    return null
},[error])


return !isAuth ? (
<View style = {styles.container}>
<View style = {styles.form}>
<BaseText text={"Sign"} styles = {{marginBottom:20}} align = "center"/>
<TextInput
placeholder={'email'}
style = {styles.input}
value = {email}
onChangeText = {(e)=>{
setEmail(e)
}}
/>
<TextInput
secureTextEntry = {true}
placeholder = {'password(at lesast 6 char)'}
value = {password}
style = {styles.input}
onChangeText = {(e)=>{
    setPassword(e)
}}
/>
{
inputErr ? <Text style = {{
color:'#D67575',
marginBottom:30
}}>Invalid password(less than 6 char) or email</Text> : errorHandler()
}

<Ripple style = {[styles.button,{backgroundColor:'#3B4663'}]}
onPress ={
()=>{
if(!validateEmail(email)){
setInputErr(true)
}else{
setInputErr(false)
dispatch(signInThunk({email,password}))
console.log(error);
}

}
}
>
<Text style = {{color:'#fff'}}>Sign in</Text>
</Ripple>

<Text style ={{textAlign:'center',marginTop:30, marginBottom: 10}}>Don't have account? Sign up</Text>
<Ripple style = {[styles.button,{backgroundColor:'#7671FF'}]}
onPress ={
    ()=>{

        if(password.lenght < 6 || !validateEmail(email)){
            setInputErr(true)
        }else{
            setInputErr(false)
            dispatch(signUpThunk({email,password}))
            console.log(error);
        }

    }
}
>
<Text style = {{color:'#fff'}}>Sign up</Text>
</Ripple>


<Text style = {{textAlign:'center', color:'#4282D3', marginTop:30}}
onPress={()=>{
    Linking.openURL('https://drony0610.github.io/waterapp-rm')
}}>
    Privacy Policy
</Text>
</View>
</View>
) : null
}

export default SignComponent

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    form:{
        display: 'flex',
        backgroundColor:'#fff',
        borderRadius: 20
    },
    input: {
        marginBottom: 20,
        borderBottomColor: "#909090",
        borderBottomWidth: 1,
        padding: 5,
    },
    button:{
        display:'flex',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10
    }
})