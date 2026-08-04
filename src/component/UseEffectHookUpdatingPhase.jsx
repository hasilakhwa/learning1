import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHookUpdatingPhase = () => {
    const [counter,setCount] = useState(1)
    const [score,setScore] = useState(10)
    // useEffect(()=>{
    //     alert("Count is updaing")
    // }, [counter])
    // useEffect(()=>{
    //     alert("score is updaing")
    // }, [score])
    // useEffect(()=>{
    //     alert("both are updaing")
    // }, [score,counter])


  return (
    <View>
      <Text style={{ color: 'white', fontSize: 30, marginBottom:10 }}>UseEffectHookUpdatingPhase</Text>
      <Text style={{ color: 'white', fontSize: 30, marginBottom:10 }}>Count: {counter}</Text>
      <Text style={{ color: 'white', fontSize: 30, marginBottom:10 }}>Score: {score}</Text>
      <Button title='Counter' onPress={()=> {setCount(counter+1)}} />
      <Button title='Score' onPress={()=> {setScore(score+10)}} />
        {/* Now updatecycle with props */}
        <Propsinfo count={counter} points={score} />
    </View>
  )
}

const Propsinfo = ({count, points}) => {
//   useEffect(()=>{
//       alert("Count is updaing")
//   }, [count])
//   useEffect(()=>{
//       alert("score is updaing")
//   }, [points])
  useEffect(()=>{
      alert("both are updaing")
  }, [points,count])
  return (
    <View>
      <Text style={{ color: 'white', fontSize: 30, marginBottom: 10 }}>
        Counter
      </Text>
      <Text style={{ color: 'white', fontSize: 30, marginBottom: 10 }}>
        counter: {count}
      </Text>
      <Text style={{ color: 'white', fontSize: 30, marginBottom: 10 }}>
        score: {points}
      </Text>
    </View>
  );
}
export default UseEffectHookUpdatingPhase