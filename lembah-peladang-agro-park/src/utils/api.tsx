export const apiUrl = "http://localhost:3000/";
export function getTimeCurrent() {
	const currentDate = new Date();

	const hours = currentDate.getHours().toString().padStart(2, "0");
	const minutes = currentDate.getMinutes().toString().padStart(2, "0");
	const formattedTime = `${hours}:${minutes}`;

	const day = currentDate.getDate().toString().padStart(2, "0");
	const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
	const year = currentDate.getFullYear();

	const formattedDate = `${day}/${month}/${year},${formattedTime}`;

	return formattedDate;
}
