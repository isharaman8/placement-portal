import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


interface State{
  isAuth: boolean,
  isLoading: boolean,
  isError:boolean,
}
interface SingupDAta{
  name: string,
  emailID: string,
  password: string,
  role:string
}
const initialState:State = {
  isAuth: false,
  isLoading: false,
  isError:false,
}


export const registration = createAsyncThunk("auth/registration",
  async (data:SingupDAta) => {
    const res = await fetch(`https://placements-backend-hackathon.herokuapp.com/signup`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
    
    const user = await res.json();
    console.log("authSlice",user)
    if(user)localStorage.setItem("token",user.token)
  }
)

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registration.pending, (state, action) => {
      return {...state,isAuth:false, isLoading:true, isError:false}
    })
    builder.addCase(registration.fulfilled, (state, { payload }) => {
      return {...state,isAuth:true, isLoading:false, isError:false}
    })

    builder.addCase(registration.rejected, (state, action) => {
      return {...state, isAuth:false, isError:true, isLoading:false}
    })
  },
})

export default AuthSlice.reducer;