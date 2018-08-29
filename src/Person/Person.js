import React from "react";

const person=function(props){
	return(
		<div>
			{/*<p>Hi I am a person. I am {Math.floor(10 + (Math.random() * 40))} years old</p>*/}
			<p>Hi I am {props.name}. I am {props.age} years old</p>
			<p>{props.children}</p>
		</div>
	);
}

export default person;
