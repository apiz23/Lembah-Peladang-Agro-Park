import * as React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiUrl } from "@/utils/api";
import axios, { AxiosResponse } from "axios";
import {
	MdOutlineOpenInFull,
	MdOutlineDelete,
	MdOutlineMail,
} from "react-icons/md";

interface Message {
	_id: string;
	name: string;
	email: string;
	message: string;
	createdDate: string;
}

export const Dashboard: React.FC = () => {
	const [messages, setMessages] = React.useState<Message[]>([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response: AxiosResponse<Message[]> = await axios.get(
					`${apiUrl}messages`
				);
				setMessages(response.data);
			} catch (e) {
				console.log("Error: ", e);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="min-h-screen">
				<div className="p-2.5 md:p-0">
					<Card className="max-w-5xl mx-auto my-10 border-none bg-transparent rounded-none">
						<CardHeader>
							<CardTitle>Messages</CardTitle>
						</CardHeader>
						<CardContent>
							<Table className="border-2 border-slate-400 shadow-xl">
								<TableCaption>Responses</TableCaption>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[80px]"></TableHead>
										<TableHead className="w-[50px]">No</TableHead>
										<TableHead>Nama</TableHead>
										<TableHead>Email</TableHead>
										<TableHead className="text-right">Message</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{messages.map((message, index) => (
										<TableRow key={message._id}>
											<TableCell className="grid md:grid-cols-2 grid-cols-1 gap-4 me-5 md:me-0">
												<Dialog>
													<DialogTrigger>
														<MdOutlineOpenInFull className="w-6 h-6 text-cyan-800" />
													</DialogTrigger>
													<DialogContent className="max-w-xl">
														<DialogHeader>
															<DialogTitle>Message from: {message.name}</DialogTitle>
															<DialogDescription className="pt-5 text-lg">
																<div className="flex">
																	{message.email} <MdOutlineMail className=" mx-5 w-6 h-6" />
																</div>
																<Card className="max-w-5xl border-none bg-transparent rounded-none">
																	Message: {message.message}
																	{message.message}
																	{message.message}
																	{message.message}
																</Card>
															</DialogDescription>
														</DialogHeader>
													</DialogContent>
												</Dialog>
												<AlertDialog>
													<AlertDialogTrigger>
														<MdOutlineDelete className="w-6 h-6 text-red-500" />
													</AlertDialogTrigger>
													<AlertDialogContent>
														<AlertDialogHeader>
															<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
															<AlertDialogDescription>
																This action cannot be undone. This will permanently delete the
																message from the database
															</AlertDialogDescription>
														</AlertDialogHeader>
														<AlertDialogFooter>
															<AlertDialogCancel>Cancel</AlertDialogCancel>
															<AlertDialogAction>Continue</AlertDialogAction>
														</AlertDialogFooter>
													</AlertDialogContent>
												</AlertDialog>
											</TableCell>
											<TableCell className="font-medium">{index + 1}</TableCell>
											<TableCell>{message.name}</TableCell>
											<TableCell>{message.email}</TableCell>
											<TableCell className="text-right">{message.message}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};
