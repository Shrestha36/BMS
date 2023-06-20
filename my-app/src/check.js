const check =(str)=>{
    const regex = /^([-+])(\d+)$/;
    return regex.test(str)
}
export default check;