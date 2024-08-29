export default function Friend({ friend }) {
    console.log(friend)
 /* distructuring */

  const {name,email} = friend;


    const boxStyle = {
        border: "2px solid red",
        margin: "15px",
        padding: "15px",
        borderRadius: "15px",
        backgroundColor: "skyblue",
    }
    return (
        <div style={boxStyle}>
            <h4>Name:{name} </h4>
            <p>Email:{email} </p>
        </div>
    )

}