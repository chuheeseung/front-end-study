import React, { useState } from 'react';

export default function AppMentor() {
	const [person, setPerson] = useState({
		name: '엘리',
		title: '개발자',
		mentors: [
			{
				name: '밥',
				title: '시니어개발자',
			},
			{
				name: '제임스',
				title: '시니어개발자',
			},
		],
	});
	return (
		<div>
			<h1>
				{person.name}는 {person.title}
			</h1>
			<p>{person.name}의 멘토는:</p>
			<ul>
				{person.mentors.map((mentor, index) => (
					<li key={index}>
						{mentor.name} ({mentor.title})
					</li>
				))}
			</ul>
			<button
				onClick={() => {
					const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
					const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
					console.log(prev, current);

					setPerson((prev) => ({
						...prev,
						mentors: prev.mentors.map((mentor) => {
							if (mentor.name === prev) {
								return { ...mentor, name: current };
							}

							return mentor;
						}),
					}));
				}}
			>
				멘토의 이름을 바꾸기
			</button>
			{/* 멘토의 이름과 타이틀 입력 받아서 아래에 새로 추가 */}
			<button
				onClick={() => {
					const newName = prompt(`추가할 멘토의 이름은 무엇인가요?`);
					const newTitle = prompt(`추가할 멘토의 타이틀은 무엇인가요?`);
					console.log(newName, newTitle);

					setPerson((prev) => ({
						...prev,
						mentors: [
							...prev.mentors,
							{
								name: newName,
								title: newTitle,
							},
						],
					}));
				}}
			>
				멘토 추가하기
			</button>
			{/* 멘토 이름 입력해서 그 멘토 삭제 */}
			<button
				onClick={() => {
					const deleteName = prompt(`삭제할 멘토의 이름은 무엇인가요?`);
					console.log(deleteName);
				}}
			>
				멘토 삭제하기
			</button>
		</div>
	);
}
