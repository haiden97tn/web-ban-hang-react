const myName = "Nguyen Hai";
const myAge = 18;
const myStatus = false;
const mySkill = { one: 'React', two: 'HTML'}


function TodoList(props){
    console.log(props);
    return (
        <ul className="list-group" >

            <li className="list-group-item">Children:
              <ul>
                { props.products.map((x, index) => (
                  <div key={index} >{x.name} <button className="btn btn-danger" onClick={() => props.onRemove(x._id)} >Delete</button> </div>
                ))}  
              </ul>
            </li>
          </ul>
    )
}

export default TodoList