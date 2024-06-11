const Labels = ({item}) => {
    return ( (<>
        <span key={item.label} className='color-indicator' 
        style={{backgroundColor: `${item.color}`,width:20,height:10}}></span>
        <p>{item.label}</p>
        </>) );
}
 
export default Labels;