import React,{useMemo,memo} from "react";

function getTable(number){
    let arr = []
    let now = performance.now()
    while(performance.now() - now < 500){
        //do nothing
    }
    for(let i = 1 ; i<=10 ; i++){
        arr.push(<li>{i * number}</li>)
    }
    return arr
}
// export default (props)=>{
//     const { num } = props;
//     const table = useMemo(()=> getTable(num),[num]);
//     return <>
//     <ul style={{listStyle:'none'}}>
//         {table}
//     </ul>
//     </>
// }
export default memo((props)=>{
    const { num } = props;
    const table = getTable(num);
    return <>
    <ul style={{listStyle:'none'}}>
         {table}
    </ul>
    </>
})