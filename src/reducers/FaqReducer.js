const initialstate=[
        {
                email:"abc123@gmail.com",
                Query:"No queries Clear"
        },
        {
                email:"xyz@gmail.com",
                Query:"No queries Clear"
        }
        ,{
            email:"abc123@gmail.com",
            Query:"No queries Clear"

        },
        {
            email:"xyz@gmail.com",
            Query:"No queries Clear"
    }
    ,{
        email:"abc123@gmail.com",
        Query:"No queries Clear"

    },
    {
        email:"xyz@gmail.com",
        Query:"No queries Clear"
}
,{
    email:"abc123@gmail.com",
    Query:"No queries Clear"

}
]

const FaQ=(state=initialstate,action)=>{
    switch(action.type){
            case "ADD_DATA":
                console.log(action.data);
                return [...state,action.data];
            default:
                return state;

    }
}
export default FaQ;