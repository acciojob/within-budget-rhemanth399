
let Item=({items,cost})=>{

    return(
        <table>
            <thead>
                <tr>
                    <th>Items you can buy are in Green color</th>
                </tr>
                
            </thead>
            <tbody>
                    {
                        items.map((item,index)=>(
                            <tr key={index} style={{color:item.price>parseInt(cost)?'green':'red'}}> 
                            <td>{item.fruitsName}</td>
                            <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>

        </table>
    )

}
export default Item