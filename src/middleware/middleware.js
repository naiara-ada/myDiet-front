export const fetchData = async (token, urlDiet) =>{
    try {
        const response = await fetch(urlDiet,{
            headers:{
                authorization: 'Bearer ' + token,                     
            },                              
        });
        console.log(response)
        const resData = await response.json();
        const myData = JSON.parse(resData)
        return myData;      

        
    } catch (error) {
        console.log(error)
    }
}