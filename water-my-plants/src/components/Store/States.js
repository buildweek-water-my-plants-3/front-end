import {atom} from 'recoil';

const userState = atom({
    key: "user",
    default: 
        {username:"guest", phoneNumber:"N/A"}
    
});



const usernameState = atom({
    key: "username",
    default:""
})

const passwordState = atom({
    key: "password",
    default: ""
    
});



const loginState = atom({
    key: "loginState",
    default:
        {username:"", password:""}
})


const phoneNumberState = atom({
    key: "phoneNumber",
    default: ""
});

const plantState = atom({
    key: "plants",
    default: [{ id:'',
     nickname: 'str',
      species: 'str',
       h2oFrequency:'',
        image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }],
    
    
});

const plantID = atom({
    key: "platnID",
    default: ""
})

const editPlant = atom({
    key:"editPlant",
    default: {id:"", nickname:"", species:"", h2oFrequency:"", image:""}
})

const idState = atom({
    key: 'id',
    default: ""
})



export { 
    userState
    , passwordState
    , plantState
    , idState
    , loginState
    , phoneNumberState
    , usernameState
    ,editPlant
    ,plantID}

