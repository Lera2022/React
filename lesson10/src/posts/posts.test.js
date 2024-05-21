import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Posts, { Button, Search } from './posts'


// Создаём фиктивную функцию
const onChange = jest.fn()

describe('Search on change works', ()=>{
    test('input on change works', () => {
        render(<Search value = {''} setValue = {onChange}/>)
        // вызываем юзер евент находим инпут и вводим "Name"
        userEvent.type(screen.getByRole('textbox'), "Name")
        // Смотрим, что наша фиктивная функция вызвана 4 раза
        expect(onChange).toHaveBeenCalledTimes(4)
    })
})

// Тестирование асинхронных запросов и взаимодействие
describe('Posts async', ()=>{
    test('got fetch data',async()=>{
        render(<Posts/>)
        //без await - ошибка
        screen.debug()
        const posts = await screen.findByText(/посты/i)
        expect(posts).toBeInTheDocument()
        //Проверка стилей
        expect(posts).toHaveStyles({color:'red'})
        screen.debug()
    })
})

//Тест кнопки через fire event
describe('Button test', () => {
    test('btn clicked and text is toggle', () => {
        render(<Button/>)
        const btn = screen.getByTestId("btn")
        // если get - ошибка
        expect(screen.queryByTestId("btn-text")).toBeNull()
        //fireEvent
        fireEvent.click(btn)
        expect(screen.queryByTestId("btn-text")).toBeInTheDocument()
    })
})