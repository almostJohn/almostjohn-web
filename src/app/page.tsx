import { Container } from "@/components/Container";
import { Profile } from "@/components/Profile";

export default function HomePage() {
	return (
		<Container className="flex min-h-screen w-full items-center justify-center">
			<div className="mx-auto w-full max-w-5xl px-10 py-8 md:p-0">
				<div className="flex flex-col overflow-hidden rounded-md border border-neutral-700 bg-neutral-800 p-2">
					<div className="flex flex-col gap-2 md:flex-row md:items-start">
						<div className="flex w-full flex-col overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 p-4">
							<div className="flex flex-col gap-6">
								<div className="flex flex-col gap-2">
									<h1 className="text-2xl font-bold">
										Hey, I'm <span className="text-blue-500">John</span>!
									</h1>
									<p className="text-sm leading-relaxed text-pretty">
										I love building things, and solving problems. I enjoy
										language design, programming interfaces, and web
										development.
									</p>
								</div>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
									<div className="flex flex-col gap-2 overflow-hidden rounded-md bg-neutral-800 p-4">
										<span className="text-xs font-medium text-neutral-500">
											Projects
										</span>
										<p className="text-xl font-bold">9</p>
									</div>
									<div className="flex flex-col gap-2 overflow-hidden rounded-md bg-neutral-800 p-4">
										<span className="text-xs font-medium text-neutral-500">
											Coding since
										</span>
										<p className="text-xl font-bold">2020</p>
									</div>
								</div>
							</div>
						</div>
						<Profile
							name="John Gale Garcia"
							avatarUrl="https://github.com/almostJohn.png"
							pronouns="he/him"
							role="Software Engineer"
							birthdate="September 25, 2000"
							livesIn="Lives in Olongapo City"
							hometown="From Malolos, Bulacan"
						/>
					</div>
				</div>
			</div>
		</Container>
	);
}
