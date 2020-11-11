export const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach(element=>{
        data.push({...element.data(),id:element.id,contactNumber: parseInt(element.data().contactNumber)})
    })
    return data;
} 

