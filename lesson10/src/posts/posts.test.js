










        // вызываем юзер евент находим инпут и вводим "Name"
        userEvent.type(screen.getByRole('textbox'), "Name")
        // Смотрим, что наша фиктивная функция вызвана 4 раза
        expect(onChange).toHaveBeenCalledTimes(4)
    })
})

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