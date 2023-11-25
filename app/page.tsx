'use client'
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { MessageBubble } from "../components/Message";
import supabase from "../services/supabase";
import { TextInput } from "../components/Input";

interface MessageProps {
	message?: string;
	user?: string;
}

const App = () => {
	const searchParams = new URLSearchParams(document.location.search);
	const user = searchParams.get("user");

	const [messages, setMessages] = useState<MessageProps[]>();

	useEffect(() => {
		const fetchInitData = async () => {
			try {
				await getMessages();
			} catch (error) {
				console.error("Error fetching messages:", error);
			}
		};

		fetchInitData();

		const messageListener = supabase
			.channel("custom-all-channel")
			.on(
				"postgres_changes",
				{ event: "*", schema: "public", table: "simple_messages" },
				async (payload) => {
					console.log("Change received!", payload);
					await getMessages();
				}
			)
			.subscribe();

		return () => {
			messageListener.unsubscribe();
		};
	}, []);

	const handleFormSubmit = async (message: string) => {
		const channel = supabase.channel("db-messages");

		channel.subscribe(async (status) => {
			if (status === "SUBSCRIBED") {
				const { error } = await supabase
					.from("simple_messages")
					.insert({
						user,
						message,
					})
					.select();

				if (error) {
					console.error("error:", error);
				}
			}
		});
	};

	const getMessages = async () => {
		const { data, error } = await supabase
			.from("simple_messages")
			.select(`*`);
		if (data) {
			setMessages(data);
		}
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<Paper className="w-full max-w-500px flex flex-col items-center relative h-full">
				<Paper className="w-full overflow-y-scroll h-full">
					{messages &&
						messages.map((message) => (
							// eslint-disable-next-line react/jsx-key
							<MessageBubble
								message={message.message}
								photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
								displayName={message.user}
								user={user}
							/>
						))}
				</Paper>
				<TextInput onSubmit={handleFormSubmit} />
			</Paper>
		</div>
	);
};

export default App;
