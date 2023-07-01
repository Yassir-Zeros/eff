import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import '../assets/css/style.css';
import ChatMenu from './chatMenu';

export default function Dashboard() {
	const { http } = AuthUser();
	const [userdetail, setUserdetail] = useState('');

	useEffect(() => {
		fetchUserDetail();
	}, []);

	const fetchUserDetail = () => {
		console.log('test')
		http.post('/me').then((res) => {
			setUserdetail(res.data);
		});
	}
	function renderElement() {
		if (userdetail) {
			return (
				<div>
					<div className="main-container shadow">
						<div className="left-container">
							{/*header */}
							<div className="header position-relative py-2 px-4">
								<div className="user-img">
									<img className="dp" src="https://www.codewithfaraz.com/InstaPic.png" alt="" />
								</div>
								<div className="nav-icons">
									<li><i className="fa-solid fa-users" /></li>
									<li><i className="fa-solid fa-message">
									</i></li>
									<li><i className="fa-solid fa-ellipsis-vertical" /></li>
								</div>
							</div>
							{/*search-container */}
							<div className="search-container pt-3 pb-3">
								<div className="input">
									<i className="fa-solid fa-magnifying-glass" />
									<input type="text" placeholder="Search or start new chat   " /></div>
								<i className="fa-sharp fa-solid fa-bars-filter" />
							</div>
							{/*chats */}
							<div className="chat-list">
								<ChatMenu />
							</div>
							
						</div>
						<div className="right-container">
							{/*header */}
							<div className="header position-relative py-2 px-4">
								<div className="img-text pr-3">
									<div className="user-img">
										<img className="dp" src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
									</div>
									<h6 className='position-relative px-4'>Leo<br/><span style={{"color":"gray"}}>Online</span></h6>
								</div>
								<div className="nav-icons">
									<li><i className="fa-solid fa-magnifying-glass" /></li>
									<li><i className="fa-solid fa-ellipsis-vertical" /></li>
								</div>
							</div>
							{/*chat-container */}
							<div className="chat-container">
								<div className="message-box my-message">
									<p>wash alkhawaaaaa!<br /><span>07:43</span></p>
								</div>
								<div className="message-box friend-message">
									<p>ylh ghyrha<br /><span>07:45</span></p>
								</div>
							
							</div>
							{/*input-bottom */}
							<div className="chatbox-input">
								<i className="fa-regular fa-face-grin" />
								<i className="fa-sharp fa-solid fa-paperclip" />
								<input type="text" placeholder="Type a message" />
								<i className="fa-solid fa-microphone" />
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return <p>Loading.....</p>
		}

	}

	return (
		<div>
			{renderElement()}
		</div>
	)
}