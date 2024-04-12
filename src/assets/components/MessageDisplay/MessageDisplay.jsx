import React from "react";
import { MessageCloseIcon, MessageCloseIconContainer, MessageModal, MessageModalP } from "./MessageDisplayStyles";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "../../../../public/CloseIcon.png";
import { setMessageModalTrue } from "../../../redux/language/languageSlice";

const MessageDisplay = () => {
	const language = useSelector((state) => state.language.language);
	const isModalHidden = useSelector((state) => state.language.messageModalHidden);
	const dispatch = useDispatch();

	return (
		<MessageModal isHidden={isModalHidden}>
			<MessageModalP>
				{language === "ES"
					? "¡Muchas gracias por su mensaje, lo leeré a la brevedad!"
					: "¡Thanks for the message, I´ll read it as soon as possible!"}
			</MessageModalP>
			<MessageCloseIconContainer>
				<MessageCloseIcon src={CloseIcon} onClick={() => dispatch(setMessageModalTrue())} />
			</MessageCloseIconContainer>
		</MessageModal>
	);
};

export default MessageDisplay;
