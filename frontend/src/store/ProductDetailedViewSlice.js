const {createSlice} = require("@reduxjs/toolkit")
const ProductDetailedViewSlice = createSlice({
    name: 'productDetailedView',
    initialState: {
        id:101,
        name:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        rating:5.0,
        endDate : '2023-11-17T23:59:59Z',
        basePrice: 350,
        currPrice: 400,
        Topbidder : "@tels",
        image:"https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg",
        images: [
            "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70",
            "https://rukminim2.flixcart.com/image/128/128/xif0q/washing-machine-new/p/1/g/-original-imagr5pa4shznqyh.jpeg?q=70",
            "https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg",
            "https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg",
          ],
    },
    reducers:{
        changeDetailedView(state,action){
            console.log(state)
            state.id= action.payload.id
            state.name=action.payload.name
            state.rating =action.payload.rating
            state.endDate =action.payload.endDate
            state.basePrice =action.payload.basePrice
            state.currPrice =action.payload.currPrice
            state.image =action.payload.image
            state.images = [...action.payload.images]
            state.Topbidder = action.payload.Topbidder

        },
    }
})

export const {changeDetailedView} = ProductDetailedViewSlice.actions ;
export default ProductDetailedViewSlice.reducer ;