export const fetchData = async (token, urlDiet) =>{
    try {
        const response = await fetch(urlDiet,{
            headers:{
                authorization: 'Bearer ' + token,                     
            },                              
        });
        console.log(response)
        const resData = await response.json();
        console.log('resdata middle', resData)
        const myData = JSON.parse(resData)
        console.log('mydata midd', myData)
        return myData;      

        
    } catch (error) {
        console.log(error)
    }
}