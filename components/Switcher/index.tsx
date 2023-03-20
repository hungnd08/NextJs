import Link from "next/link";
import { useState, useEffect } from "react";
import chatStore from "../../store/chat";
import styles from '../../components/Button.module.css';

function Switcher() {
	const [chatState, setChatState] = useState(chatStore.initialState);
	const location = typeof window !== "undefined" && window.location.href.split("/")[3];

	useEffect(() => {
		chatStore.subscribe(setChatState);
		chatStore.init();
	}, []);

	const messageNotification = chatState.newDataCount > 0 && (
		<span className="notify">{`(${chatState.newDataCount})`}</span>
	);

	return (
		<div className="switcher-div">
			<Link href={"/FirstChatter"}>
				<button className={`switcher chat1 ${location !== "FirstChatter" && location.length > 1 ? styles.inactive : styles.active}`}>
					Person 1
					{location !== "FirstChatter" && location.length > 1 && messageNotification}
				</button>
			</Link>
			<Link href={"/SecondChatter"}>
				<button className={`switcher chat2 ${location !== "SecondChatter" && location.length > 1 ? styles.inactive : styles.active}`}>
					Person 2
					{location !== "SecondChatter" && location.length > 1 && messageNotification}
				</button>
			</Link>
		</div>
	);
}
export default Switcher;
