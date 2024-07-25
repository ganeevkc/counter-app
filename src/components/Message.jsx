import React from "react";

export const Message = (obj) => {
	return (
		<h2 className={obj.color}>
			{obj.msg} {obj.val}
		</h2>
	);
};
export default Message;
