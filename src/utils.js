const checkRegexp = function(input){
    console.log(input);
    const pattern = new RegExp("^([0-9]+)(\.?)([0-9]{0,2})$","gm");
    if(pattern.test(input)){
        return true 
    } else return false;
}

export default checkRegexp;