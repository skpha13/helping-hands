const UserPage = () => {   
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude, longitude} = position.coords;
            console.log(latitude, longitude);
            
        }, ()=>{
            alert("Nu am putut sa te localizam!")
        })
    } 
    return(
        <div>
            <div id="map"></div>
        </div>
    )
}
export default UserPage;