import React, { useState } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-full top-0 z-10">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2.5">
					<a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
						<img
							src="https://pbs.twimg.com/profile_images/1574229225246457856/iynISJLv_400x400.jpg"
							className="h-10"
							alt="Flowbite Logo"
						/>
						{/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Flowbite
						</span> */}
					</a>
					<Dialog>
						<DialogTrigger className="flex">
							<div className="max-w-2xl border bg-black rounded-full pe-5">
								<button
									type="button"
									className="text-white font-medium rounded-full text-sm px-5 py-2.5"
								>
									Search
								</button>
								<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
									<span className="text-xs">⌘</span>J
								</kbd>
							</div>
						</DialogTrigger>
						<DialogContent className="p-0">
							<Command>
								<CommandInput placeholder="Type a command or search..." />
								<CommandList>
									<CommandEmpty>No results found.</CommandEmpty>
									<CommandGroup heading="Suggestions">
										<CommandItem>
											<Link
												to="tentang-kami"
												smooth={true}
												duration={500}
												onClick={toggleMobileMenu}
											>
												Tentang Kami
											</Link>
										</CommandItem>
										<CommandItem>Objektif</CommandItem>
										<CommandItem>Jenis Tapak</CommandItem>
									</CommandGroup>
									<CommandSeparator />
									<CommandGroup heading="Lain - Lain">
										<CommandItem>Kemudahan</CommandItem>
										<CommandItem>Aktifivit</CommandItem>
										<CommandItem>Hubungi Kami</CommandItem>
									</CommandGroup>
								</CommandList>
							</Command>
						</DialogContent>
					</Dialog>

					<button
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-expanded={isMobileMenuOpen}
						onClick={toggleMobileMenu}
					>
						<span className="sr-only">Toggle main menu</span>
						<HiOutlineMenuAlt3 className="h-6 w-6" />
					</button>
					<div
						className={`${
							isMobileMenuOpen ? "block" : "hidden"
						} w-full md:block md:w-auto`}
					>
						<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:bg-transparent bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li className="hover:text-gray-500 cursor-pointer">
								<NavigationMenu>
									<NavigationMenuList className="py-1 md:py-3 px-2.5">
										<NavigationMenuItem>
											<Link
												to="laman-utama"
												smooth={true}
												duration={500}
												onClick={toggleMobileMenu}
											>
												<NavigationMenuLink>Laman Utama</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
									</NavigationMenuList>
								</NavigationMenu>
							</li>
							<li className="hover:text-gray-500 cursor-pointer">
								<NavigationMenu>
									<NavigationMenuList className="py-1 md:py-3 px-2.5">
										<NavigationMenuItem>
											<Link
												to="tentang-kami"
												smooth={true}
												duration={500}
												onClick={toggleMobileMenu}
											>
												<NavigationMenuLink>Tentang Kami</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
									</NavigationMenuList>
								</NavigationMenu>
							</li>

							<li className="hover:text-gray-500 cursor-pointer">
								<NavigationMenu>
									<NavigationMenuList className="py-1 md:py-3 px-2.5">
										<NavigationMenuItem>
											<Link
												to="objektif"
												smooth={true}
												duration={500}
												onClick={toggleMobileMenu}
											>
												<NavigationMenuLink>Objecktif</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
									</NavigationMenuList>
								</NavigationMenu>
							</li>
							<li className="hover:text-gray-500 cursor-pointer">
								<NavigationMenu>
									<NavigationMenuList className="py-1 md:py-3 px-2.5">
										<NavigationMenuItem>
											<Link
												to="jenis-tapak"
												smooth={true}
												duration={500}
												onClick={toggleMobileMenu}
											>
												<NavigationMenuLink>Jenis Tapak</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
									</NavigationMenuList>
								</NavigationMenu>
							</li>
							<li className="hover:text-gray-500 cursor-pointer">
								<NavigationMenu>
									<NavigationMenuList className="py-1 md:py-3 px-2.5">
										<NavigationMenuItem>
											<NavigationMenuLink>
												<DropdownMenu>
													<DropdownMenuTrigger>Lain - Lain</DropdownMenuTrigger>
													<DropdownMenuContent>
														<DropdownMenuLabel className="hover:text-gray-500 cursor-pointer">
															<Link
																to="pakej"
																smooth={true}
																duration={500}
																onClick={toggleMobileMenu}
															>
																Jenis Pakej
															</Link>
														</DropdownMenuLabel>
														<DropdownMenuLabel className="hover:text-gray-500 cursor-pointer">
															<Link
																to="kemudahan"
																smooth={true}
																duration={500}
																onClick={toggleMobileMenu}
															>
																Kemudahan
															</Link>
														</DropdownMenuLabel>
														<DropdownMenuLabel className="hover:text-gray-500 cursor-pointer">
															<Link
																to="tapakCampsite"
																smooth={true}
																duration={500}
																onClick={toggleMobileMenu}
															>
																Aktiviti
															</Link>
														</DropdownMenuLabel>
														<DropdownMenuLabel className="hover:text-gray-500 cursor-pointer">
															<Link
																to="hubungi-kami"
																smooth={true}
																duration={500}
																onClick={toggleMobileMenu}
															>
																Hubungi Kami
															</Link>
														</DropdownMenuLabel>
													</DropdownMenuContent>
												</DropdownMenu>
											</NavigationMenuLink>
										</NavigationMenuItem>
									</NavigationMenuList>
								</NavigationMenu>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
