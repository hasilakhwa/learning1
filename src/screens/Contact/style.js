import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    heading:{
        color:'#f0f0f0',
        textAlign:'center',
        fontSize:30,
        marginVertical:10,
        fontWeight:'bold'   
    },
    list:{
        backgroundColor:'gray',
        paddingHorizontal:20,
    },
    item:{
        marginVertical:8,
        backgroundColor:'yellow',
        padding:15,
        borderRadius:8,
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
        color:'#111110',
    },
    email:{
        fontSize:16,
        fontWeight:'bold',
        color:'#292926',
    },
    phone:{
        fontSize:12,
        fontWeight:'bold',
        color:'#4d4d49',
    },
})