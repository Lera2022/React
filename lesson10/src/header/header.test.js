import { render, screen } from '@testing-library/react'
import Header, { ListHeader, UiForSnapShot, User } from './header'


describe("Header Tests", ()=>{
    //Пропсы отрабатывают
    test('Header render name',()=>{
        render(<Header name={Alex}/>)
        expect(screen.getByText(`Hello, Alex`)).toBeInTheDocument()
    })
    //Значение по умолчанию и создается ли h1
    test('Header render default',()=>{
        render(<Header/>)
        expect(screen.getByRole("heading")).toBeInTheDocument()
        expect(screen.getByText(`Hello,`)).toBeInTheDocument()
    })
})
//Тест списка на отсутствие
test('List is null',()=>{
    render(<ListHeader/>)
    expect(screen.queryByRole('list')).toBeNull()
})

//Снэпшот тестирование
// test('User card ui',()=>{
//     const card = render(<UiForSnapShot userName={"Sam"}/>)
//     expect(card).toMatchSnapshot()
// })

//Действия до тестов и после
describe('Check user', ()=>{
    beforeEach(()=>{
        const data = JSON.stringify({name:'Виктор', age:28})
        localStorage.setItem('user', data)
        console.log(localStorage.getItem('user'));
    })

    // beforeAll
    test("Render user-name",()=>{
        render(<User/>)
        expect(screen.getByText('Виктор')).toBeInTheDocument()
    })
    test
    // afterAll
    afterEach(()=>{
        localStorage.clear()
        console.log(localStorage.getItem('user'));
    })
})