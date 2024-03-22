import styled from "styled-components";

export const MessageModal = styled.div`
	width: 100%;
	background-color: green;
	position: fixed;
	bottom: 0;
	display: flex;
	padding: 5px;
	transition: all ease-in-out 0.5s;
	transform: ${({ isHidden }) => (isHidden ? "translateY(300%)" : "translateY(0)")};
`;

export const MessageModalP = styled.p`
	color: white;
	width: 90%;
	margin-left: 10vw;
`;

export const MessageCloseIconContainer = styled.div`
	right: 0px;
	width: 10%;
`;

export const MessageCloseIcon = styled.img`
	cursor: pointer;
	transition: 0.25s;
	&:hover {
		scale: 1.1;
	}
`;
