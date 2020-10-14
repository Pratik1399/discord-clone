import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/firebase";
import { selectUser, login, logout } from "./features/userSlice";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	console.log("user", user);
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("user is", authUser);
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className="app">
			{user ? (
				<Fragment>
					<Sidebar />
					<Chat />
				</Fragment>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
