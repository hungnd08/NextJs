import { useLayoutEffect, useState } from "react";
import Switcher from "../components/Switcher";
import chatStore from "../store/chat";

const SecondChatter = () => {
	const [chatState, setChatState] = useState(chatStore.initialState);

	useLayoutEffect(() => {
		chatStore.subscribe(setChatState);
		chatStore.init();
	}, []);

	const onFormSubmit = (e) => {
		e.preventDefault();
		const messageObject = {
			person: "second-person",
			text: e.target.elements.messageInput.value.trim(),
		};
		chatStore.sendMessage(messageObject);
		(document.getElementById("messageForm") as HTMLFormElement).reset();
	};

	return (
		<div className="container">
			<Switcher />
			<h2>Mycroft</h2>
			<div className="chat-box">
				{chatState.data.map((message, idx) => (
					<div key={`${message.person}-${idx}`}>
						<p className={message.person}>{message.text}</p>
						<div className="clear"></div>
					</div>
				))}
			</div>
			<form id="messageForm" onSubmit={onFormSubmit}>
				<input
					type="text"
					id="messageInput"
					name="messageInput"
					placeholder="Type here..."
					required
				/>
				<button type="submit">Send</button> <br />
			</form>
			<button className="clear-button" onClick={() => chatStore.clearChat()}>
				Clear Chat
			</button>
			<style jsx>{`
				.chat-box {
					background: #202020;
					margin: auto;
					padding: 2em;
					height: 35em;
					width: 95%;
					border-radius: 20px;
					overflow-y: scroll;
				}

				.first-person,
				.second-person {
					display: inline-block;
					color: #fff;
					height: 25px;
					min-width: 20%;
					max-width: 60%;
					padding: 20px;
					text-align: center;
					vertical-align: middle;
					border-radius: 30px;
				}

				.first-person {
					background: rgb(0, 173, 231);
				}

				.second-person {
					background: #06c406;
					float: right;
				}

				.clear {
					clear: both;
					display: block;
					content: "";
					width: 100%;
				}

				.switcher-div {
					padding-top: 1em;
					text-align: center;
				}

				#messageForm {
					text-align: center;
					margin-top: 1.5em;
				}

				#messageForm input {
					height: 2em;
					width: 23em;
					border-radius: 3em;
					padding: 1em;
				}

				#messageForm button {
					margin-left: 2em;
					height: 2.7em;
					width: 6.2em;
					border-radius: 25px;
					border: none;
					cursor: pointer;
				}

				.clear-button {
					background: #d40000;
					color: #fff;
					float: right;
					margin-right: 3em;
					text-align: center;
					height: 2.5em;
					width: 8em;
					cursor: pointer;
				}

				.switcher {
					background: #cecece;
					color: #141414;
					height: 2.5em;
					width: 6em;
					border-radius: 25px;
					border: 1 px solid black;
					margin-right: 1em;
					cursor: pointer;
				}

				.notify {
					position: absolute;
					background: #db0000;
					color: white;
					height: 1em;
					width: 1em;
					border-radius: 100%;
					padding: 0.15em;
					margin-left: 0.5em;
					margin-top: -0.5em;
				}
			`}</style>
		</div>
	);
};
export default SecondChatter;
