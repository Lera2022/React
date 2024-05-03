







export const signUpThunk = createAsyncThunk(
    'userParams/signUpAuth',
    async ({email,password},{getState,dispatch}) => {
        try {
            let userCredit = await createUserWithEmailAndPassword(auth,email,password)  
            // создаём поле settings в базе при регистрации пользователя

            setUserSettings(userCredit.user.uid, {
                gender: "male",
                height: 180,
                weight: 80,
                activity: "low",
                climat: "normal",
                premium: false,
                purposeHydration: 2650,
            })
            dispatch(unsetAppLoading())
            return {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken,
                loading: false
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

        }

    }
)

export const signInThunk = createAsyncThunk(
    'userParams/signInAuth',
    async ({email,password},{dispatch}) => {
        try {
            // let persistance = await setPersistence(auth, browserLocalPersistence)
            let userCredit = await signInWithEmailAndPassword(auth, email, password)
            // ответ от firebase при успешно выполнение запроса
            return {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.accessToken,
                loading: false
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
            return rejectWithValue({errorCode, errorMessage})
        }

    }
)


export const userParamsSlice = createSlice({
    name: 'userParams',
    // all state can be null if user doesnt chooce some
    initialState: {
        
    }
})