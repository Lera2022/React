import { counterReducer, decrement, increment } from "../store/slice"
import { counterSelector } from "./counter"

//проверка селектора
describe('selector',()=>{
    test('selector return state', ()=>{
        const state = {counter:1}
        const result = counterSelector(state)
        expect(result).toEqual(1)
    })
})
//Проверка редьюсера
describe('reducer', ()=>{
    //На инишл стейт
    test('shoud reducer return initial state ', ()=>{
        const result = counterReducer(undefined, {type:''})
        expect(result).toEqual(0)
    })
    //Экшн инкремент
    test('increment value is correct', ()=>{
        const action = {type:increment.type}
        const result = counterReducer(0, action)
        expect(result).toEqual(1)
    })
    //Экшн декремент
    test('increment value is correct', ()=>{
        const action = {type:decrement.type}
        const result = counterReducer(2, action)
        expect(result).toEqual(1)
    })
})
