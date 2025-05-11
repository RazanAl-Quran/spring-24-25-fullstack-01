
import PeopleItem from './PeopleItem';

function PeopleList (props) {
    return (
        <div>
             <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
                {props.people.map((person, index) => ( <PeopleItem person={person} key={index}/>
                ))}
            </ul>
        </div>
    );
}

export default PeopleList;
