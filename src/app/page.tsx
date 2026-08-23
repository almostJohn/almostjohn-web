import { Container } from "@/components/Container";
import { Intro } from "@/components/Intro";
import { MobileProfile } from "@/components/MobileProfile";
import { Profile } from "@/components/Profile";
import { TabSection } from "@/components/TabSection";

export default function HomePage() {
	return (
		<Container className="relative flex min-h-screen w-full items-center justify-center">
			<div className="mx-auto w-full py-6 md:max-w-5xl md:py-0">
				<div className="flex flex-col overflow-hidden rounded-md border-0 p-0 md:border md:border-neutral-700 md:bg-neutral-800 md:p-2">
					<div className="flex flex-col gap-2 md:flex-row md:items-stretch">
						<div className="flex w-full flex-col overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 p-4">
							<div className="flex flex-col gap-6">
								<Intro />
								<TabSection />
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
				<div className="absolute top-9 right-6 z-50 block md:hidden">
					<MobileProfile
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
		</Container>
	);
}
