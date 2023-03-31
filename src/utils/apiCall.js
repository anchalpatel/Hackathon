export const postData = async(url,data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const response = await fetch(url,{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
            const dataResponse = await response.json();
            // console.log(dataResponse)
            return resolve(dataResponse)
                
            
        }
        catch(e){
    
            console.log(e)
            return reject(e)
    
        }
    })
}
export const getData = async(url)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const response = await fetch(url,{
                method:"GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
            const dataResponse = await response.json();
            // console.log(dataResponse)
            return resolve(dataResponse)
                
            
        }
        catch(e){
    
            console.log(e)
            return reject(e)
    
        }
    })
}
export const putData = async(url,data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const response = await fetch(url,{
                method:"PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
            const dataResponse = await response.json();
            // console.log(dataResponse)
            return resolve(dataResponse)
                
            
        }
        catch(e){
    
            console.log(e)
            return reject(e)
    
        }
    }) 
}
export const deleteData = async(url,data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const response = await fetch(url,{
                method:"DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
            const dataResponse = await response.json();
            // console.log(dataResponse)
            return resolve(dataResponse)
                
            
        }
        catch(e){
    
            console.log(e)
            return reject(e)
    
        }
    })
}